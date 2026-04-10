# 🚀 Task Manager (Full Stack MERN Application)

A modern and responsive **Task Manager Application** built using the **MERN stack (MongoDB, Express, React, Node.js)**.
This project demonstrates full-stack development with clean architecture, RESTful APIs, and a user-friendly interface.

---

## 📌 Features

* ➕ Create new tasks
* 📋 View all tasks
* ✅ Mark tasks as completed
* ✏️ Edit task titles
* ❌ Delete tasks
* 🔍 Filter tasks (All / Completed / Pending)
* ⏳ Loading states and smooth user experience
* 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* CSS (Custom styling)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📁 Project Structure

```bash id="xwq0iy"
Task_Manager/
 ├── backend/
 │    ├── models/
 │    ├── routes/
 │    ├── middleware/
 │    └── server.js
 │
 ├── frontend/
 │    ├── src/
 │    │    ├── components/
 │    │    ├── App.jsx
 │    │    └── App.css
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the Repository

```bash id="7sl8o6"
git clone https://github.com/Manjukarwasraa/Task_Manager.git
cd Task_Manager
```

---

### 🔹 2. Backend Setup

```bash id="1qsbmc"
cd backend
npm install
node server.js
```

---

### 🔹 3. Frontend Setup

```bash id="kr56o9"
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint   | Description               |
| ------ | ---------- | ------------------------- |
| GET    | /tasks     | Fetch all tasks           |
| POST   | /tasks     | Create a new task         |
| PATCH  | /tasks/:id | Update task (toggle/edit) |
| DELETE | /tasks/:id | Delete a task             |

---

## 💡 Key Highlights

* Clean and modular backend structure
* RESTful API design with proper error handling
* Component-based frontend architecture
* Real-time UI updates with API integration
* Beginner-friendly yet scalable codebase

---

## 📈 Future Enhancements

* 🔐 Authentication & Authorization
* 🌍 Deployment with live demo
* 🎨 Advanced UI improvements
* 🧪 Testing

---

## 👨‍💻 Author

**Manju Karwasra**

* GitHub: https://github.com/Manjukarwasraa

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
