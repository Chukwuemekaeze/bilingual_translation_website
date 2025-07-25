# 🌍 Bilingual Translation Website

A full-stack bilingual translation web app that uses the Microsoft Translator API to convert text between two languages in real time.

## 🔗 Live Demo

Frontend: [https://bilingual-translation-website.vercel.app](https://bilingual-translation-website.vercel.app)  
Backend API: [https://bilingual-backend-eca.onrender.com](https://bilingual-backend-eca.onrender.com)



---

## 🧠 Project Overview

This project was developed as part of an academic assignment to explore multilingual communication and real-world API integration. The app allows users to:

- Select a source and target language
- Enter text
- Instantly receive translated output using Microsoft’s neural machine translation

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Fetch API
- **Backend**: Flask, Python, Flask-CORS
- **Translation**: Microsoft Azure Translator Text API

---

## 🚀 Features

- Real-time translation between a source and target language
- Responsive UI with Tailwind
- Error handling and loading state
- Hosted on Vercel and Render
- Clean project architecture for easy extension

---

## ⚙️ Installation & Running Locally

### 🔧 Frontend

```bash
cd frontend
npm install
npm run dev
```

### 🐍 Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Create a `.env` file inside the `backend/` folder:

```env
MICROSOFT_TRANSLATE_API_KEY=your_key_here
MICROSOFT_TRANSLATE_REGION=your_region_here
```

---

## 🌐 API Reference

**POST** `/translate`  
Request Body:

```json
{
  "source_lang": "en",
  "target_lang": "fr",
  "text": "Hello, world!"
}
```

Response:

```json
{
  "translated_text": "Bonjour le monde!"
}
```

---

## 👥 Stakeholders

- **Developer(Me)**: Project builder, maintainer
- **Lecturer**: Academic client and evaluator
- **Microsoft Azure**: Translation infrastructure provider
- **End Users**: Anyone needing real-time translation
- **Collaborators**: Future devs extending the app

---

## 📟 License

MIT License. Free to reuse and remix with attribution.

---

## 📝 Assignment Notes

This project reflects the **importance of comprehensive documentation**, covering:
- Enhanced team communication
- Easier knowledge transfer
- Future reference
- Higher development efficiency

