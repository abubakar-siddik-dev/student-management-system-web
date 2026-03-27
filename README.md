# 🎓 Student Management System (Full Stack)

![GitHub repo size](https://img.shields.io/github/repo-size/abubakar-siddik-dev/student-management-system-web)
![GitHub stars](https://img.shields.io/github/stars/abubakar-siddik-dev/student-management-system-web?style=social)
![GitHub forks](https://img.shields.io/github/forks/abubakar-siddik-dev/student-management-system-web?style=social)

---

## 🚀 Live Demo

🌐 Frontend: https://your-frontend.vercel.app  
🔗 Backend API: https://your-backend.onrender.com  

> ⚠️ Replace these links after deployment

---

## 🚀 Features

- ➕ Add new students  
- 📋 View student list  
- ✏️ Update student  
- ❌ Delete student  
- ⚡ Fast API backend  

---

## 🛠 Tech Stack

Frontend: React  
Backend: FastAPI  
Database: SQLite  

---

## 📁 Project Structure

student-management-system-web/

├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── schemas.py
│   └── requirements.txt

├── frontend/
│   ├── App.js
│   ├── api.js
│   ├── AddStudent.js
│   └── StudentList.js---

## ⚙️ Run Locally

### Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload### Frontend
cd frontend
npm install
npm start---

# ☁️ Deployment Guide

## 🔹 Backend Deploy (Render)

1. Go to 👉 https://render.com  
2. Click New Web Service  
3. Connect your GitHub repo  
4. Fill settings:

- Build Command:
pip install -r requirements.txt- Start Command:
uvicorn main:app --host 0.0.0.0 --port 100005. Click Deploy ✅  

👉 After deploy, you will get:
https://your-app-name.onrender.com---

## 🔹 Frontend Deploy (Vercel)

1. Go to 👉 https://vercel.com  
2. Import your GitHub repo  
3. Select frontend folder  
4. Deploy

👉 You will get:
https://your-app.vercel.app---

## ⚠️ Important (Connect Frontend + Backend)

In api.js, change:

const API = "https://your-backend.onrender.com";---

## 📊 GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=abubakar-siddik-dev&show_icons=true&theme=tokyonight)

---

## 🌟 Future Improvements

- 🔐 Authentication (JWT)
- 🔍 Search system
- 🎨 Dashboard UI
- 📱 Mobile responsive

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Abubakar Siddik  
GitHub: https://github.com/abubakar-siddik-dev
