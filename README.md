# Car Price Prediction Web Application

A modern, full-stack web application for predicting car resale prices using machine learning. Built with Flask backend and React frontend.

## Features

- 🚗 **Modern React UI**: Beautiful, responsive design with glassmorphism and smooth animations
- 🤖 **ML-Powered**: Uses Random Forest model trained on real car dataset
- 📊 **Real-time Prediction**: Instant price predictions with formatted output
- 📱 **Mobile Friendly**: Fully responsive design that works on all devices
- 🎯 **User-Friendly**: Intuitive form with searchable dropdown selections
- ✨ **Smooth Animations**: Built with Framer Motion for delightful interactions
- 🎨 **Modern Design**: Tailwind CSS with custom gradients and effects

## Tech Stack

### Backend
- Flask (Python web framework)
- Scikit-learn (Machine Learning)
- Pandas & NumPy (Data processing)
- Random Forest Model

### Frontend
- React 18
- Vite (Build tool)
- Tailwind CSS
- Framer Motion (Animations)
- Axios (API calls)
- Lucide React (Icons)

## Installation

### Backend Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Make sure you have the required files:
   - `app.py` - Flask backend application
   - `rf_car.pkl` - Trained Random Forest model
   - `Cardetails.csv` - Car dataset for dropdown options

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

## Running the Application

### Option 1: Development Mode (Recommended for development)

1. **Start the Flask backend** (in terminal 1):
```bash
python app.py
```
Backend will run on `http://localhost:5000`

2. **Start the React frontend** (in terminal 2):
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:3000`

3. Open your browser and navigate to:
```
http://localhost:3000
```

### Option 2: Using Original HTML Template

1. Start the Flask server:
```bash
python app.py
```

2. Open your browser and navigate to:
```
http://localhost:5000
```

## Usage

1. **Fill in the form**: Enter car details including:
   - Numeric fields: Year, Kilometers Driven, Number of Seats
   - Categorical fields: Car Name, Fuel Type, Seller Type, Transmission, Owner Type, Mileage, Engine, Max Power, Torque

2. **Get prediction**: Click the "Predict Car Price" button to get an instant price prediction

3. **View results**: The predicted price will be displayed in a formatted, easy-to-read format

## API Endpoints

- `GET /` - Main application page
- `GET /api/options` - Get all dropdown options for the form
- `POST /api/predict` - Predict car price based on input data

## Technical Details

- **Backend**: Flask with CORS support
- **ML Model**: Random Forest (scikit-learn 1.6.1)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Dependencies**: pandas, numpy, scikit-learn, joblib, category-encoders

## Model Information

The application uses a Random Forest model (`rf_car.pkl`) trained on car data. The model takes the following features:
- Car name, year, kilometers driven
- Fuel type, seller type, transmission
- Owner type, mileage, engine specifications
- Max power, torque, number of seats

The model excludes the `selling_price` column as it's the target variable for prediction.
