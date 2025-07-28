@echo off
echo Starting Book Collection API...
echo.

REM Check if virtual environment exists
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
call venv\Scripts\activate

REM Install dependencies
echo Installing Python dependencies...
pip install -r requirements.txt

REM Start Flask API
echo.
echo Starting Flask API on http://localhost:5000
echo Press Ctrl+C to stop
python run.py