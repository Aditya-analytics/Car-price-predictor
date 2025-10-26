# Quick Start Guide 🚀

This guide will help you get the Car Price Predictor up and running quickly.

## Prerequisites

- Python 3.8+ installed
- Node.js 16+ and npm installed
- All project files in place

## Setup (First Time Only)

### 1. Backend Setup

Open a terminal/PowerShell in the project directory:

```powershell
# Install Python dependencies
pip install -r requirements.txt
```

### 2. Frontend Setup

```powershell
# Navigate to frontend directory
cd frontend

# Install Node.js dependencies
npm install

# Go back to root directory
cd ..
```

## Running the Application

### Method 1: Modern React UI (Recommended)

**Terminal 1 - Start Backend:**
```powershell
python app.py
```
Wait for: `Running on http://0.0.0.0:5000`

**Terminal 2 - Start Frontend:**
```powershell
cd frontend
npm run dev
```
Wait for: `Local: http://localhost:3000`

**Open Browser:**
Navigate to: http://localhost:3000

### Method 2: Simple HTML UI

**Terminal:**
```powershell
python app.py
```

**Open Browser:**
Navigate to: http://localhost:5000

## Testing the Application

1. **Select Car Details:**
   - Fill in Year, KM Driven, Seats
   - Choose Car Name from dropdown (searchable)
   - Select Fuel Type, Seller Type, Transmission, etc.

2. **Get Prediction:**
   - Click "Predict Car Price"
   - Wait for the AI to analyze
   - View your predicted price!

## Troubleshooting

### Backend Issues

**Error: Module not found**
```powershell
pip install -r requirements.txt
```

**Error: Port 5000 in use**
```powershell
# Change port in app.py line 87:
app.run(debug=True, host='0.0.0.0', port=5001)
```

### Frontend Issues

**Error: npm not found**
- Install Node.js from https://nodejs.org/

**Error: Port 3000 in use**
- The dev server will automatically try port 3001

**API Connection Error**
- Make sure backend is running on port 5000
- Check if CORS is enabled in app.py

## Features to Try

✨ **Modern UI Features:**
- Smooth animations on page load
- Searchable dropdowns (type to filter)
- Real-time form validation
- Beautiful gradient effects
- Mobile responsive design

🎯 **ML Features:**
- Instant predictions
- Accurate pricing based on market data
- Support for various car models and specifications

## Project Structure

```
gemini_car/
├── app.py                 # Flask backend
├── rf_car.pkl            # ML model
├── Cardetails.csv        # Training data
├── requirements.txt      # Python dependencies
├── templates/
│   └── index.html       # Original HTML UI
└── frontend/            # React UI
    ├── src/
    │   ├── components/  # React components
    │   ├── App.jsx     # Main app
    │   └── index.css   # Styles
    └── package.json    # Node dependencies
```

## Tips

💡 **For Development:**
- Use React UI (http://localhost:3000) for best experience
- Backend logs show in Terminal 1
- Frontend hot-reloads on code changes

💡 **For Quick Demo:**
- Use HTML UI (http://localhost:5000)
- Single terminal needed
- Faster to start

## Next Steps

- Customize colors in `frontend/tailwind.config.js`
- Add more features to components
- Train model with more data
- Deploy to production

## Support

For issues or questions:
1. Check if both backend and frontend are running
2. Verify all dependencies are installed
3. Check browser console for errors (F12)
4. Review terminal logs for backend errors

Happy Predicting! 🚗💨
