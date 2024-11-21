from flask import Flask, render_template_string
import mysql.connector
from mysql.connector import Error

app = Flask(__name__, static_url_path='/pages/rds/static')

# Database connection details
db_config = {
    'host': 'is3600-mysql-rds.c1yeo0wsg4l0.us-east-2.rds.amazonaws.com',
    'user': 'nayru',
    'password': 'hell0There4mazonRDS',
    'database': 'is3600'
}

table_name = 'common_passwords'



@app.route('/')
def index():
    Connection = None # Avoid Unbound Error
    try:

        connection = None  # Initialize to avoid UnboundLocalError


        # Database connection details
        db_config = {
            'host': 'is3600-mysql-rds.c1yeo0wsg4l0.us-east-2.rds.amazonaws.com',
            'user': 'nayru',
            'password': 'hell0There4mazonRDS',
            'database': 'is3600'
        }

        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        # Sample SQL query
        query = f"SELECT * FROM {table_name} LIMIT 10"
        cursor.execute(query)

        # Fetch query results
        rows = cursor.fetchall()
        columns = [i[0] for i in cursor.description]  # Get column names

        # Simple HTML template using Jinja2
        template = """
        <html>
        <head><title>MySQL Query Results</title></head>
        <body>
            <h1>Query Results</h1>
            <table border="1">
                <tr>{% for col in columns %}<th>{{ col }}</th>{% endfor %}</tr>
                {% for row in rows %}
                <tr>{% for cell in row %}<td>{{ cell }}</td>{% endfor %}</tr>
                {% endfor %}
            </table>
        </body>
        </html>
        """
        
        return render_template_string(template, rows=rows, columns=columns)

    except Error as e:
        return f"Error connecting to MySQL: {e}"
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

if __name__ == '__main__':
    app.run()

