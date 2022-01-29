# --- core imports
import json

# --- third-party imports
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# todo: remove this?
@app.route("/")
def home():
    return "<p>Open Target API</p>"


@app.route("/get_all_data")
def target_disease_associations():
    with open("data/associations.json") as json_file:
        data = json.load(json_file)
        return data

# todo: do we need a config file??
# todo: creat readme
# todo: idk why this isnt working with postman, it works fine in the browser
