from flask import Flask, request, jsonify, render_template
from jinja2 import Environment, FileSystemLoader
import os

app = Flask(__name__)

# Define a route for the root URL
@app.route('/')
def index():
    return 'Welcome to the Flask backend!'

# Define the route for generating a resume
@app.route('/generate-resume', methods=['POST'])
def generate_resume():
    data = request.json  # Assume data is sent as JSON

    # Process data and render the selected template
    template_loader = FileSystemLoader(searchpath="templates")
    template_env = Environment(loader=template_loader)
    template = template_env.get_template(f"{data['selectedTemplate']}.html")

    rendered_resume = template.render(data=data)

    # Save the rendered resume to a file (optional)
    with open("output/resume.html", "w") as file:
        file.write(rendered_resume)

    return jsonify({"success": True})

if __name__ == '__main__':
    app.run(debug=True)
