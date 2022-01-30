# --- core imports
import json

# --- third-party imports
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Open Targets API"


@app.route("/get_data")
def get_target_disease_associations():
    args = request.args
    disease_id = args.get("disease_id")
    limit = args.get("limit", 10, int)

    with open("data/associations.json") as json_file:
        data = json.load(json_file)["data"]

        data = process_data(data, disease_id, limit)
        return {"data": data}


def process_data(data, disease_id, limit):
    # default sort for data --> desc order by association_score
    data = sorted(data, key=lambda d: d["association_score"]["overall"], reverse=True)

    # filter by disease id
    if disease_id:
        for d in data:
            print(d.get("disease").get("id") == disease_id)
        data = [d for d in data if d.get("disease", {}).get("id", "") == disease_id]

    # limit data
    if limit:
        data = data[:limit]
    return data





