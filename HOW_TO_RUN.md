# How to Run the Car Price Predictor

## 🚀 Quick Start (Easiest Method)

### Windows Users

Simply double-click `start.bat` in the project folder!

This will:
- ✅ Start the Flask backend on port 5000
- ✅ Start the React frontend on port 3000
- ✅ Open two terminal windows (one for each server)

Wait 10-15 seconds, then open your browser to: **http://localhost:3000**

---

## 📋 Manual Start (Step by Step)

### Prerequisites Check

1. **Python**: 
   ```powershell
   python --version
   ```
   Should show Python 3.8 or higher

2. **Node.js**:
   ```powershell
   node --version
   ```
   Should show Node 16 or higher

3. **npm**:
   ```powershell
   npm --version
   ```
   Should show npm version

### First Time Setup

#### Step 1: Install Python Dependencies
```powershell
pip install -r requirements.txt
```

#### Step 2: Install Frontend Dependencies
```powershell
cd frontend
npm install
cd ..
```

### Running the Application

#### Terminal 1 - Backend Server

```powershell
python app.py
```

You should see:
```
 * Running on http://0.0.0.0:5000
 * Running on http://127.0.0.1:5000
```

**Keep this terminal open!**

#### Terminal 2 - Frontend Server

Open a NEW terminal window and run:

```powershell
cd frontend
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

**Keep this terminal open too!**

#### Open Your Browser

Navigate to: **http://localhost:3000**

---

## 🎯 Using the Application

### 1. Fill Basic Information
- **Year**: Enter car manufacturing year (e.g., 2020)
- **KM Driven**: Total kilometers driven (e.g., 50000)
- **Seats**: Number of seats (e.g., 5)

### 2. Select Car Specifications

Click on each dropdown and type to search:

- **Car Name**: Search for your car model
- **Fuel Type**: Petrol, Diesel, CNG, etc.
- **Seller Type**: Individual, Dealer, Trustmark Dealer
- **Transmission**: Manual or Automatic
- **Owner Type**: First, Second, Third, etc.
- **Mileage**: Select from available options
- **Engine**: Engine capacity in CC
- **Max Power**: Maximum power in bhp
- **Torque**: Torque specifications

### 3. Get Prediction

Click the **"Predict Car Price"** button and wait 2-3 seconds for the AI to analyze!

---

## 🔧 Troubleshooting

### Backend Issues

**Problem**: "Module not found" error
```powershell
pip install -r requirements.txt
```

**Problem**: "Address already in use" (Port 5000)
- Close other programs using port 5000
- Or change port in `app.py` (line 87)

**Problem**: "rf_car.pkl not found"
- Make sure the model file is in the project root
- Check file name matches exactly

### Frontend Issues

**Problem**: "npm not recognized"
- Install Node.js from https://nodejs.org/
- Restart your terminal

**Problem**: Dependencies not installing
```powershell
cd frontend
npm cache clean --force
npm install
```

**Problem**: "Port 3000 already in use"
- Vite will automatically try port 3001
- Or close the other application using port 3000

**Problem**: "Cannot connect to backend"
- Make sure backend is running on port 5000
- Check Terminal 1 for errors
- Verify CORS is enabled in `app.py`

### Browser Issues

**Problem**: Blank screen
- Open browser console (F12)
- Check for JavaScript errors
- Clear browser cache and reload

**Problem**: API errors
- Verify backend is running
- Check Network tab in browser DevTools (F12)
- Look for 404 or 500 errors

---

## 🌐 Alternative: HTML Version

If React setup is too complex, use the simple HTML version:

1. Start only the backend:
   ```powershell
   python app.py
   ```

2. Open browser to:
   ```
   http://localhost:5000
   ```

This uses the original `templates/index.html` file.

---

## 📊 Checking If Everything Works

### Backend Health Check

Open: http://localhost:5000/api/options

You should see JSON data with car options.

### Frontend Health Check

If React app loads, you should see:
- ✨ Gradient header with car icon
- 📝 Form with all input fields
- 🎨 Beautiful blue/purple/pink gradient background

---

## 💡 Pro Tips

1. **Development Mode**
   - Frontend auto-reloads when you edit code
   - Backend needs manual restart for changes

2. **Performance**
   - Close other applications to free up resources
   - Use Chrome or Firefox for best experience

3. **Debugging**
   - Backend logs appear in Terminal 1
   - Frontend errors appear in Browser Console (F12)

4. **Stopping the Servers**
   - Press `Ctrl+C` in each terminal
   - Or close the terminal windows

---

## 📝 What Files Are Important?

### Backend
- `app.py` - Main Flask server
- `rf_car.pkl` - ML model (44MB)
- `Cardetails.csv` - Car data for dropdowns

### Frontend
- `frontend/src/App.jsx` - Main React app
- `frontend/src/components/` - All UI components
- `frontend/vite.config.js` - Build configuration

### Configuration
- `requirements.txt` - Python packages
- `frontend/package.json` - Node packages

---

## 🎓 Learning Resources

Want to understand or modify the code?

- **React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **Flask**: https://flask.palletsprojects.com/

---

## 🎉 Success!

If you see the beautiful gradient UI and can make predictions, congratulations! 🎊

Your Car Price Predictor is now running successfully!

---

## ❓ Still Having Issues?

1. Check that both terminals are running
2. Verify no error messages in terminals
3. Try restarting both servers
4. Clear browser cache and reload
5. Check `QUICKSTART.md` for more details

Happy Predicting! 🚗💨
