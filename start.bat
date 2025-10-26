@echo off
echo ========================================
echo   Car Price Predictor - Startup Script
echo ========================================
echo.

echo Starting Flask Backend...
start "Flask Backend" cmd /k "python app.py"
timeout /t 3 /nobreak >nul

echo Starting React Frontend...
start "React Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo   Both servers are starting!
echo ========================================
echo   Backend:  http://localhost:5000
echo   Frontend: http://localhost:3000
echo ========================================
echo.
echo Wait a few seconds for servers to start,
echo then open http://localhost:3000 in your browser.
echo.
pause
