import sys
import site
import os

# Path to the virtual environment site-packages
site.addsitedir('/var/www/dinjou.com/pages/rds/.venv/lib/python3.10/site-packages')

# Add the Flask app directory to the system path
sys.path.insert(0, '/var/www/dinjou.com/pages/rds')

# Activate the virtual environment
sys.prefix = '/var/www/dinjou.com/pages/rds/.venv'

# Import the Flask app
from app import app as application

