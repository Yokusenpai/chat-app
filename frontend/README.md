# Chat App

A polished full-stack chat application built with React, Vite, Zustand, Express, MongoDB, and Socket.io.

This project demonstrates user authentication, real-time messaging, profile photo uploads, and secure backend APIs for a modern chat experience.

## Key Features

- Real-time 1:1 messaging with `socket.io`
- Email/password authentication with JWT cookies
- User profile management and profile photo upload
- Persistent message history stored in MongoDB
- Image attachments in chat messages
- Responsive UI built with React, Tailwind CSS, and DaisyUI

## Tech Stack

- Frontend: React 19, Vite, Tailwind CSS, Zustand, React Router DOM, React Hot Toast, Axios, Socket.io client
- Backend: Node.js, Express 5, MongoDB, Mongoose, Socket.io, bcryptjs, jsonwebtoken, Cloudinary

## Project Structure

- `frontend/`
  - `src/` — React app source code
  - `src/components/` — UI and chat components
  - `src/pages/` — Page views for login, signup, home, profile, and settings
  - `src/store/` — Zustand state stores for auth, chat, and theme
  - `src/libs/` — Axios client and utility helpers

- `backend/`
  - `src/index.js` — Express server entry point and Socket.io setup
  - `src/controllers/` — Auth and message controllers
  - `src/routes/` — API routes for auth and messages
  - `src/models/` — Mongoose schemas for users and messages
  - `src/middlewares/` — Authentication middleware
  - `src/libs/` — Database connection, Cloudinary config, Socket.io helpers

## Environment Variables

Create a `.env` file inside `backend/` with the following values:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

## Setup and Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Yokusenpai/chat-app.git
   ```
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
4. Configure the backend `.env` file as described above.
5. Start the backend server:
   ```bash
   cd ../backend
   npm run dev
   ```
6. Start the frontend server:
   ```bash
   cd ../frontend
   npm run dev
   ```
7. Open the app in your browser:
   ```
   http://localhost:5173
   ```

## Seed Credentials

Use these credentials to log in during development or testing:

- `JohnDoe@gmail.com` / `JohnDoe123456`
- `JaneDoe@gmail.com` / `JaneDoe123456`

## Build and Preview

To build the frontend for production:

```bash
cd frontend
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Notes

- The backend accepts requests from `http://localhost:5173` and uses cookie-based authentication.
- Cloudinary is used for profile image uploads and in-chat image attachments.
- The app can be deployed as a single service in production by serving the built frontend from the backend.

## Contributing

Feedback and improvements are welcome. Open an issue or submit a pull request if you want to help enhance the project.

## Contact

If you have questions, you can reach me at `rahzorlaw@gmail.com`.
