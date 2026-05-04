# Blog Platform - Backend

REST API for the Blog Platform app. Built with Node.js, Express, and MongoDB.

## Features

- JWT-based authentication
- Protected routes via auth middleware
- Full CRUD on posts
- User registration and login

## Tech Stack

Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

## Folder Structure

├── config/         # MongoDB connection
├── controllers/    # postController, userController
├── middleware/     # authMiddleware (protected routes)
├── models/         # Post, User schemas
├── routes/         # API route definitions
├── server.js       # Entry point

## API Routes

### Auth
- POST /api/users/register
- POST /api/users/login

### Posts
- GET /api/posts
- GET /api/posts/:id
- POST /api/posts (protected)
- PUT /api/posts/:id (protected)
- DELETE /api/posts/:id (protected)

## Setup

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file in the root:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
4. Run `node server.js`

## Deployment

Deployed on Vercel using vercel.json config.