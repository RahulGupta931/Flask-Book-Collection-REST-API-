import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key'
    
    # Ensure instance directory exists
    basedir = os.path.abspath(os.path.dirname(__file__))
    instance_dir = os.path.join(os.path.dirname(basedir), 'instance')
    os.makedirs(instance_dir, exist_ok=True)
    
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or f'sqlite:///{os.path.join(instance_dir, "app.db")}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False