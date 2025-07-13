from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("MICROSOFT_TRANSLATE_API_KEY")
REGION = os.getenv("MICROSOFT_TRANSLATE_REGION", "ukwest")




@app.route("/translate", methods=["POST"])
def translate_text():
    data = request.get_json()
    source_lang = data.get("source_lang")
    target_lang = data.get("target_lang")
    text = data.get("text")

    if not all([source_lang, target_lang, text]):
        return jsonify({"error": "Missing required fields"}), 400
    
    endpoint = "https://api.cognitive.microsofttranslator.com/translate"
    params = {
        "api-version": "3.0",
        "from": source_lang,
        "to": target_lang,
    }
    headers = {
        "Ocp-Apim-Subscription-Key": API_KEY,
        "Ocp-Apim-Subscription-Region": REGION,
        "Content-type": "application/json",
    }
    body = [{"text": text}]

    try:
        response = requests.post(endpoint, params=params, headers=headers, json=body)
        response.raise_for_status()
        translation = response.json()[0]["translations"][0]["text"]
        return jsonify({"translated_text": translation})
    except requests.exceptions.RequestException as e:
        print(e)
        return jsonify({"error": "Translation failed"}), 500

@app.route("/ping")
def ping():
    return jsonify({"message": "Flask backend is working!"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host="0.0.0.0", port=port)