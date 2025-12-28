# MERN Project

A full-stack MERN (MongoDB, Express, React, Node.js) application with JWT authentication.

## Author

Kamran Ahmad Khan

## Features

- JWT Authentication with bcrypt
- Protected API routes
- MongoDB database
- Express backend
- React frontend

## Tech Stack

**Backend:**

- Node.js & Express
- MongoDB & Mongoose
- JWT for authentication
- Bcrypt for password hashing
- CORS enabled

**Frontend:**

- React
- Tailwind CSS

## Installation

1. Clone the repository

```bash
git clone https://github.com/Kamran-Khan1/GoalSetter.git
cd project-mern
```

2. Install dependencies

```bash
npm install
```

3. Create `.env` file in root directory

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. Install frontend dependencies

```bash
cd frontend
npm install
```

## Usage

### Run backend server

```bash
npm run server
```

### Run frontend

```bash
npm run client
```

### Build for production

```bash
npm run build
```

## API Routes

### Authentication

- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user

### Goals (Protected)

- `GET /api/goals` - Get all goals
- `POST /api/goals` - Create new goal
- `PUT /api/goals/:id` - Update goal
- `DELETE /api/goals/:id` - Delete goal

## License

ISC
