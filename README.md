# 🚀 Full-Stack Next.js 14 Project

## 🌟 Overview
This is a full-stack web application built with **Next.js 14**, **TypeScript**, **Mongoose**, **NextAuth**, and **Tailwind CSS**. It includes **user authentication (signup & login), protected routes, and CRUD operations** using API routes.

## 📌 Features
- ✅ User authentication with **NextAuth.js** (JWT-based)
- ✅ Protected client-side and server-side routes
- ✅ Full CRUD operations using Next.js API routes
- ✅ MongoDB database integration with **Mongoose**
- ✅ **Tailwind CSS** for styling
- ✅ Optimized for **SEO and performance**

## 🛠️ Tech Stack
- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, MongoDB, Mongoose
- **Authentication:** NextAuth.js

---

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/MPrakash98/NextJs-WebApp.git
cd NextJs-WebApp
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a **.env.local** file in the root of your project and add the following:

```ini
# MongoDB Connection String
NEXT_PUBLIC_MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/database-name

# NextAuth Configuration
NEXT_PUBLIC_NEXTAUTH_SECRET=your_random_secret
NEXT_PUBLIC_NEXTAUTH_URL=http://localhost:3000

```

### 4️⃣ Run the Development Server
```bash
npm run dev
```
Now, open **http://localhost:3000** in your browser. 🎉


---

## ⚡ API Endpoints
| Method | Endpoint          | Description        |
|--------|------------------|--------------------|
| GET    | `/api/tasks`     | Get all tasks     |
| GET    | `/api/tasks/:id` | Get task by ID    |
| POST   | `/api/tasks`     | Create new task   |
| PATCH  | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

---


## 🙌 Acknowledgments
Thanks to **Next.js**, **MongoDB**, and **Tailwind CSS** for making web development amazing!

---

### 💙 Made with love by Mrityunjay 🚀

