# Music Sharing App

A full-stack music sharing platform built with Next.js, Express.js, MongoDB, and Cloudinary.

## Features

* Upload MP3/audio files
* Cloudinary file storage
* MongoDB database integration
* AI chatbot integration
* File metadata storage
* Responsive frontend UI
* Express backend API

---

# Tech Stack

## Frontend

* Next.js
* React
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* Cloudinary

---

# Project Structure

```bash
music-sharing-app/
│
├── client/
│   ├── app/
│   ├── components/
│   ├── services/
│   └── utils/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── uploads/
```

---

# Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
```

## Install Frontend Dependencies

```bash
cd client
npm install
```

## Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# Run Application

## Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

## Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# API Routes

## Upload Music File

```http
POST /api/files/upload
```

## Chatbot API

```http
POST /api/chat/chat
```

---

# Cloudinary Setup

1. Create account on Cloudinary
2. Copy API credentials
3. Add them to `.env`

Cloudinary Dashboard:

[https://console.cloudinary.com/](https://console.cloudinary.com/)

---

# Git Commands

```bash
git init
git add .
git commit -m "Initial
```
