# Event Management Simplified

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Project](#running-the-project)

## Overview
This project is divided into two main parts: the frontend and the backend. The frontend is built using React and the backend is powered by Node.js and Express.

## Installation

### Backend Setup
1. Navigate to the `backend` folder:
  ```bash
  cd backend
  ```
2. Install Dependencies:
  ```bash
  npm install
  ```
3. Start backend server:
  ```bash
  nodemon server
  ```

### Frontend Setup
1. Navigate to the `frontend` folder:
  ```bash
  cd frontend
  ```
2. Install Dependencies:
  ```bash
  npm install
  ```
3. Start frontend server:
  ```bash
  npm start
  ```

## Project Structure
#### Backend
```
backend/
│
├── config/
│   └── database.js             # MongoDB connection setup
│
├── controllers/
│   ├── eventController.js       # Handles event-related logic
│   └── userController.js        # Handles user-related logic
│
├── models/
│   ├── events.js                # Event model schema
│   └── users.js                 # User model schema
│
├── routes/
│   ├── eventRoutes.js           # Event routes
│   └── userRoutes.js            # User routes
│
├── .env                         # Environment variables
└── server.js                    # Entry point for the backend
```

#### Frontend
```
frontend/
│
├── public/                      # Public assets (favicon, HTML file, etc.)
│   └── index.html
│
├── src/
│   ├── api/                     # API calls (userApi.js, eventApi.js)
│   ├── assets/                  # Static assets like images
│   ├── components/              # Reusable components (Navbar, Sidebar, etc.)
│   ├── layouts/                 # Layouts (Admin, Auth)
│   ├── views/                   # Main views (FindEvents, ManageRSVP, etc.)
│   └── index.js                 # Entry point for the React app
│
└── package.json                 # Frontend dependencies and scripts
```

## Running the Project

### Running the Backend
To run the backend server, navigate to the `backend` directory and start the server:
```bash
cd backend
nodemon server
```

### Running the Frontend
To run the frontend server, navigate to the `frontend` directory and start the server:
```bash
cd frontend
npm start
```
