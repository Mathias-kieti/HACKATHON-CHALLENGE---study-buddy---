# HACKATHON-CHALLENGE---study-buddy---
A simple study buddy challenge 

AI Study Buddy - Flashcard Generator
📌 Overview

AI Study Buddy is a web application that helps students generate flashcards from their study notes using AI. Simply paste your notes, click Generate Flashcards, and start studying effectively with interactive flip cards.

## Gamma presentation 
Check ou the full presentation here:

https://gamma.app/docs/b8z4emfdzhur704


✨ Features

✔ Paste your notes and generate flashcards automatically
✔ Interactive flip cards for easy studying
✔ Simple and responsive UI
✔ AI-powered question-answer generation

🛠 Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Python (Flask)

AI Model: Hugging Face API

Environment Variables: .env file using python-dotenv

📂 Project Structure
📦 study-buddy
├── app.py              # Flask backend
├── script.js           # Frontend logic
├── style.css           # Styling
├── index.html          # Main UI
├── .env                # API keys (not shared in GitHub)
└── README.md           # Project documentation

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone <your-repo-url>
cd study-buddy

2️⃣ Create Virtual Environment (Optional but Recommended)
python -m venv venv
source venv/bin/activate   # For Mac/Linux
venv\Scripts\activate      # For Windows

3️⃣ Install Dependencies
pip install flask python-dotenv requests

4️⃣ Create .env File

Add your Hugging Face API key in the .env file:

HF_API_KEY=your_huggingface_api_key_here

5️⃣ Run the Application
python app.py


Then open:

http://127.0.0.1:5000/

✅ How It Works

User enters notes in the text area.

Clicks Generate Flashcards button.

Frontend sends notes to the Flask backend.

Backend calls Hugging Face API to generate Q&A.

Flashcards are displayed on the page.

🚀 Deployment

You can deploy on:

Render (Free hosting for Flask apps)

Vercel (For frontend)

Heroku
