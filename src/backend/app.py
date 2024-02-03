from flask import Flask, request, jsonify, render_template
from jinja2 import Environment, FileSystemLoader
from flask_cors import CORS 
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Define a route for the root URL
@app.route('/')
def index():
    return 'Welcome to the Flask backend!'

# Define the route for generating a resume
@app.route('/generate-resume', methods=['POST'])
def generate_resume():
    data = request.json  # Assume data is sent as JSON

    template_loader = FileSystemLoader(searchpath="templates")
    template_env = Environment(loader=template_loader)
    template = template_env.get_template("template1.html")

    rendered_resume = template.render(data=data)

    return jsonify({"success": True, "rendered_resume": rendered_resume})

if __name__ == '__main__':
    app.run(debug=True)

