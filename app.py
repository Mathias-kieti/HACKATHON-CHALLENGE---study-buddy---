from flask import Flask, render_template, request, jsonify
import os
import requests
from  dotenv import load_dotenv

# Load .env file
load_dotenv()

app = Flask(__name__)

# Get Hugging Face API key
HF_API_KEY = os.getenv("HF_API_KEY")
if not HF_API_KEY:
    raise ValueError("Error: Hugging Face API key is missing. Please set it in .env file.")

API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
HEADERS = {"Authorization": f"Bearer {HF_API_KEY}"}

# Route for homepage
@app.route("/")
def home():
    return render_template("index.html")

# Route to generate flashcards
@app.route("/generate", methods=["POST"])
def generate_flashcards():
    try:
        data = request.json
        notes = data.get("notes", "").strip()

        if not notes:
            return jsonify({"error": "Notes cannot be empty"}), 400

        # Call Hugging Face API
        response = requests.post(API_URL, headers=HEADERS, json={"inputs": notes})

        if response.status_code != 200:
            return jsonify({"error": f"Hugging Face API error: {response.text}"}), response.status_code

        summary = response.json()
        
        # Extract summary text
        if isinstance(summary, list) and len(summary) > 0 and "summary_text" in summary[0]:
            summary_text = summary[0]["summary_text"]
        else:
            return jsonify({"error": "Invalid response from Hugging Face API"}), 500

        # Generate simple flashcards 
        sentences = summary_text.split(". ")
        flashcards = []
        for sentence in sentences:
            if sentence.strip():
                flashcards.append({
                    "question": f"What is this about?",
                    "answer": sentence.strip()
                })

        return jsonify(flashcards)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    import os 
    port = int(os.environ.get("PORT",5000))
    app.run(host="0.0.0.0",port=port)
