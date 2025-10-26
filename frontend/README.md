# Car Price Predictor - React Frontend

A modern, responsive React frontend for the Car Price Prediction ML application.

## Features

- ✨ Modern UI with Tailwind CSS
- 🎨 Smooth animations with Framer Motion
- 🔍 Searchable dropdown selects
- 📱 Fully responsive design
- 🎯 Real-time price predictions
- 🌈 Beautiful gradients and glassmorphism effects

## Tech Stack

- React 18
- Vite (Fast build tool)
- Tailwind CSS
- Framer Motion (Animations)
- Axios (API calls)
- Lucide React (Icons)

## Setup Instructions

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will run on `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Animated header
│   │   ├── FormSection.jsx     # Main form with inputs
│   │   ├── SearchableSelect.jsx # Custom dropdown component
│   │   ├── ResultCard.jsx      # Prediction result display
│   │   └── ErrorAlert.jsx      # Error message component
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Backend Connection

The frontend connects to the Flask backend running on `http://localhost:5000`. Make sure the backend is running before starting the frontend.

API Endpoints used:
- `GET /api/options` - Get dropdown options
- `POST /api/predict` - Submit prediction request

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Animations

Animations are configured in `src/index.css` and individual components using Framer Motion.
