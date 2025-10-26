from flask import Flask, request, jsonify, render_template, send_from_directory
import pandas as pd
import numpy as np
import joblib
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='frontend/dist', static_url_path='')
CORS(app)

# Load the dataset to get unique values for dropdowns
df = pd.read_csv('Cardetails.csv')

import sys
import sklearn.compose._column_transformer

class _RemainderColsList:
    def __init__(self, *args, **kwargs):
        pass

sys.modules['sklearn.compose._column_transformer']._RemainderColsList = _RemainderColsList

# Load the trained model (same as app1.py)
model = joblib.load('rf_car.pkl')

# Get unique values for each categorical column
def get_unique_values():
    def safe_sort(series):
        """Safely sort a pandas series that may contain mixed types"""
        unique_vals = series.dropna().unique()
        # Convert all to string for consistent sorting
        str_vals = [str(val) for val in unique_vals]
        return sorted(str_vals)
    
    return {
        'car_names': safe_sort(df['name']),
        'fuel_options': safe_sort(df['fuel']),
        'seller_type_options': safe_sort(df['seller_type']),
        'transmission_options': safe_sort(df['transmission']),
        'owner_options': safe_sort(df['owner']),
        'mileage_options': safe_sort(df['mileage']),
        'engine_options': safe_sort(df['engine']),
        'max_power_options': safe_sort(df['max_power']),
        'torque_options': safe_sort(df['torque'])
    }

@app.route('/')
def index():
    # Serve React app in production, Flask template in development
    if os.path.exists('frontend/dist/index.html'):
        return send_from_directory('frontend/dist', 'index.html')
    return render_template('index.html')

@app.route('/<path:path>')
def serve_react(path):
    # Serve React app static files
    if os.path.exists(f'frontend/dist/{path}'):
        return send_from_directory('frontend/dist', path)
    # Fallback to index.html for client-side routing
    if os.path.exists('frontend/dist/index.html'):
        return send_from_directory('frontend/dist', 'index.html')
    return render_template('index.html')

@app.route('/api/options')
def get_options():
    """API endpoint to get all dropdown options"""
    return jsonify(get_unique_values())

@app.route('/api/predict', methods=['POST'])
def predict():
    """API endpoint for car price prediction - matches app1.py sequence exactly"""
    try:
        # Get input data from request
        data = request.get_json()
        
        # Create DataFrame with input data in the EXACT sequence from app1.py
        input_data = pd.DataFrame([{
            'name': data['name'],
            'year': int(data['year']),
            'km_driven': int(data['km_driven']),
            'fuel': data['fuel'],
            'seller_type': data['seller_type'],
            'transmission': data['transmission'],
            'owner': data['owner'],
            'mileage': data['mileage'],
            'engine': data['engine'],
            'max_power': data['max_power'],
            'torque': data['torque'],
            'seats': int(data['seats'])
        }])
        
        # Make prediction using the same model as app1.py
        prediction = model.predict(input_data)
        
        # Return prediction in same format as app1.py
        return jsonify({
            'success': True,
            'predicted_price': float(prediction[0]),
            'formatted_price': f"₹{prediction[0]:,.2f}"
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
