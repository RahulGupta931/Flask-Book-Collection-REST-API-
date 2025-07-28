@echo off
echo Starting Book Collection Frontend...
echo.

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing Node.js dependencies...
    npm install
)

REM Start React development server
echo.
echo Starting React frontend on http://localhost:3000
echo Press Ctrl+C to stop
npm start