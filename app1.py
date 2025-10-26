import streamlit as st 
import pandas as pd 
import numpy as np
import joblib

# Car names
name_list = pd.read_csv('carr_names.csv')
car_names = name_list['name'].unique().tolist()

# Dataset for categorical options
df = pd.read_csv('Cardetails.csv')

st.title("Car Dataset Inputs")

# ---------------- Numeric Columns ----------------
st.subheader("Numeric Columns")
year_input = st.number_input("Enter Year", value=2020, step=1)
km_driven_input = st.number_input("Enter KM Driven", value=100000, step=100)
seats_input = st.number_input("Enter no. of seats", value=4, step=1)

# ---------------- Categorical Columns ----------------
st.subheader("Categorical Columns")
fuel_options = df['fuel'].unique().tolist()
seller_type_options = df['seller_type'].unique().tolist()
transmission_options = df['transmission'].unique().tolist()
owner_options = df['owner'].unique().tolist()
mileage_options = df['mileage'].unique().tolist()
engine_options = df['engine'].unique().tolist()
max_power_options = df['max_power'].unique().tolist()
torque_options = df['torque'].unique().tolist()

# Dropdown inputs
name_input = st.selectbox("Select Car Name", options=car_names)
fuel_input = st.selectbox("Select Fuel Type", options=fuel_options)
seller_type_input = st.selectbox("Select Seller Type", options=seller_type_options)
transmission_input = st.selectbox("Select Transmission", options=transmission_options)
owner_input = st.selectbox("Select Owner Type", options=owner_options)
mileage_input = st.selectbox("Select Mileage", options=mileage_options)
engine_input = st.selectbox("Select Engine", options=engine_options)
max_power_input = st.selectbox("Select Max Power", options=max_power_options)
torque_input = st.selectbox("Select Torque", options=torque_options)

# Combine inputs into DataFrame
# Combine inputs into DataFrame in the correct sequence
input_data = pd.DataFrame([{
    'name': name_input,
    'year': year_input,
    'km_driven': km_driven_input,
    'fuel': fuel_input,
    'seller_type': seller_type_input,
    'transmission': transmission_input,
    'owner': owner_input,
    'mileage': mileage_input,
    'engine': engine_input,
    'max_power': max_power_input,
    'torque': torque_input,
    'seats': seats_input
}])

# Load model
model_lr = joblib.load(r'rf_car.pkl')

# Centered button
l, m, r = st.columns([1,6,1])
with m:
    submit = st.button("Predict Selling Price",use_container_width=True)
    if submit:
        pred = model_lr.predict(input_data)
        st.success(f"Selling Price: ₹{pred[0]}")
