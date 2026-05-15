<div align="center">

# 🚀 TaskForge: Team Task Manager 🎯

[![Live Demo](https://img.shields.io/badge/Live_Demo-Click_Here-2172f0?style=for-the-badge&logo=vercel)](#) <!-- Add your live link here -->

*A visually stunning, full-stack project management application built with the MERN stack, featuring a premium beige & orange UI aesthetic! ✨*

</div>

---

## 🌟 Overview

**TaskForge** is a dynamic, fully responsive web application designed to help teams collaborate effectively. It allows administrators to create tasks, assign them to users, and track overall progress through rich, interactive dashboards. The interface is meticulously crafted with a stunning **beige and vibrant orange** aesthetic, focusing on premium user experience and micro-animations. 🎨🔥

## 🌐 Live Demo
👉 **[Insert Live Link Here](https://your-live-link.com)** 👈

---

## ✨ Features

- **🔐 Role-Based Authentication:** Secure login and sign-up with strict Admin vs. User routing logic.
- **📊 Interactive Dashboards:** Beautiful, real-time Recharts visualizations for task distribution (Pie Charts) and priority levels (Bar Charts).
- **📝 Advanced Task Management:** Admins can create, edit, assign, and delete tasks with due dates, priority levels, and file attachments.
- **✅ Todo Checklists:** Granular sub-tasks inside main tasks for detailed progress tracking.
- **👥 User Profiles & Avatars:** Custom profile pictures and avatar clusters to see who is assigned to what!
- **📱 Fully Responsive Design:** Flawless layout on desktop, tablet, and mobile devices.
- **🎨 Premium Aesthetic:** Carefully curated font pairings (Poppins & Inter), glassmorphism UI cards, and smooth scrollable flexbox layouts.

---

## 🛠️ Tech Stack

**Frontend 💻:**
- React (Vite ⚡)
- Tailwind CSS v4 🖌️
- Redux Toolkit & Redux Persist 🧠
- React Router DOM 🛣️
- Recharts (for data visualization 📈)
- Axios (for API requests 📡)

**Backend ⚙️:**
- Node.js & Express.js 🚂
- MongoDB & Mongoose 🍃
- JSON Web Tokens (JWT) & bcryptjs 🔑
- Multer (for image uploads 📂)

---

## 📁 Folder Structure

Here is a high-level overview of the project structure to help you navigate! 🗺️

```text
Team-Task-Manager/
├── 📂 backend/                  # Server-side code
│   ├── 📂 config/               # Database configurations
│   ├── 📂 controller/           # Business logic & API handlers (auth, tasks, users)
│   ├── 📂 models/               # MongoDB schema models (User, Task, Project)
│   ├── 📂 routes/               # Express API route definitions
│   ├── 📂 utils/                # Helper functions (JWT verification, error handling)
│   ├── 📂 uploads/              # Local storage for user-uploaded images/attachments
│   ├── index.js                 # Entry point for the Express server
│   └── .env                     # Backend environment variables
│
├── 📂 frontend/                 # Client-side React app
│   ├── 📂 src/
│   │   ├── 📂 assets/           # Static assets, images, icons
│   │   ├── 📂 components/       # Reusable UI components (Navbar, SideMenu, Charts, Cards)
│   │   ├── 📂 pages/
│   │   │   ├── 📂 admin/        # Admin-only views (Dashboard, CreateTask, ManageTasks)
│   │   │   ├── 📂 auth/         # Login & Sign Up pages
│   │   │   └── 📂 user/         # Regular user views (UserDashboard, MyTasks, TaskDetails)
│   │   ├── 📂 redux/            # Global state management (userSlice, store)
│   │   ├── 📂 routes/           # Protected routing logic (PrivateRoute.jsx)
│   │   ├── 📂 utils/            # Axios instance and helper methods
│   │   ├── App.jsx              # Main React Router configuration
│   │   ├── main.jsx             # React DOM entry point
│   │   └── index.css            # Global Tailwind theme configurations
│   ├── index.html               # Main HTML template
│   ├── vite.config.js           # Vite bundler configuration
│   └── package.json             # Frontend dependencies
│
├── .gitignore                   # Ignored files for Git
└── README.md                    # You are here! 📍
```

---

## 🚀 Running the Project Locally

Follow these steps to get a local copy up and running on your machine! 🛠️

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/Team-Task-Manager.git
cd Team-Task-Manager
```

### 2. Backend Setup ⚙️
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file and add your MongoDB URI, JWT Secret, and an Admin Join Code
# PORT=3000
# MONGO_URI=your_mongo_connection_string
# JWT_SECRET=your_jwt_secret
# ADMIN_JOIN_CODE=12345
# FRONT_END_URL=http://localhost:5173

# Start the backend server
npm run dev
```

### 3. Frontend Setup 💻
Open a **new terminal tab** and run:
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

### 4. Open in Browser 🌍
Visit `http://localhost:5173` in your browser. 
- Sign up with the **Admin Invite Token** (e.g., `12345`) to become an Admin.
- Leave the token empty to sign up as a regular User.

---

## ☁️ Deployment Guide

Ready to take your project live? Follow these detailed steps to deploy your backend and frontend to the cloud!

### 🚂 Deploying the Backend (Railway/Render)

We recommend deploying the Node.js backend using **Railway**, as it offers seamless GitHub integration and environment variable management.

1. **Push your code to GitHub:**
   Ensure your entire `Team-Task-Manager` repository is pushed to a GitHub repository.
2. **Create a Railway Account & New Project:**
   Go to [Railway.app](https://railway.app/), sign in with GitHub, and click **New Project** -> **Deploy from GitHub repo**. Select your repository.
3. **Configure the Root Directory:**
   In the Railway settings for your service, set the **Root Directory** to `/backend`. This tells Railway where your `package.json` lives!
4. **Set Environment Variables:**
   Go to the **Variables** tab in Railway and add the following:
   - `PORT` = `3000` (or leave default, Railway assigns one)
   - `MONGO_URI` = `Your MongoDB Atlas Connection String`
   - `JWT_SECRET` = `A highly secure random string`
   - `ADMIN_JOIN_CODE` = `12345` (or any secure code)
   - `FRONT_END_URL` = `https://your-future-frontend-url.vercel.app` *(update this after deploying the frontend!)*
5. **Deploy:**
   Click **Deploy**. Railway will automatically run `npm install` and `npm start` based on your backend `package.json`. Once deployed, copy your generated **Public Domain URL**!

### 🚀 Deploying the Frontend (Vercel)

We recommend deploying the Vite React frontend using **Vercel** for blazing fast hosting.

1. **Update API Base URL:**
   Before deploying, go to `frontend/src/utils/axioInstance.js` and update `const BASE_URL` to point to your new Railway backend URL (e.g., `https://your-backend-app.up.railway.app/api`). Push this change to GitHub.
2. **Create a Vercel Project:**
   Log in to [Vercel.com](https://vercel.com/), click **Add New** -> **Project**, and import your GitHub repository.
3. **Configure Build Settings:**
   - **Framework Preset:** Vercel should automatically detect `Vite`.
   - **Root Directory:** Edit this and set it to `frontend`.
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **Deploy:**
   Click **Deploy**. Vercel will build and host your frontend application. Once finished, grab your live Vercel URL!
5. **Final Linkage:**
   Don't forget to go back to your **Backend Railway Variables** and ensure `FRONT_END_URL` matches your new Vercel URL to prevent CORS errors!

---

<div align="center">
<i>Built with ❤️ by Ravi Prakash</i>
</div>
