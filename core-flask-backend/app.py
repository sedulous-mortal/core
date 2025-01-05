from flask import Flask, send_from_directory
import datetime

x = datetime.datetime.now()

# app = Flask(__name__, static_folder='my-react-app/build', static_url_path='/')
app = Flask(__name__)

#Route for homepage
# @app.route('/')
# def index():
#     return send_from_directory(app.static_folder, 'index.html')

# Route for seeing a data
@app.route('/data')
def get_time():

    # Returning an api for showing in  reactjs
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }

if __name__ == '__main__':
    app.run(debug=True, port=5000)