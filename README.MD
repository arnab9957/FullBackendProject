# Full Backend Project

A comprehensive backend application built with Node.js, Express.js, and MongoDB, featuring user authentication, video management, and modern backend architecture patterns.

## 🚀 Features

- **User Authentication & Authorization**
  - User registration and login
  - JWT-based authentication
  - Password hashing with bcrypt
  - Cookie-based session management

- **Video Management System**
  - Video upload and storage
  - Video metadata management
  - File handling with Multer

- **Modern Backend Architecture**
  - Clean code structure with separation of concerns
  - Custom error handling
  - Async/await error handling
  - API response standardization
  - CORS configuration
  - Environment-based configuration

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Multer
- **Environment Management:** dotenv
- **Development:** Nodemon
- **Code Formatting:** Prettier

## 📁 Project Structure

```
FullBackendProject/
├── src/
│   ├── controllers/          # Route controllers
│   ├── db/
│   │   └── index.js         # Database connection
│   ├── middlewares/         # Custom middleware functions
│   ├── models/              # Mongoose models
│   │   ├── user.model.js    # User schema and model
│   │   └── video.model.js   # Video schema and model
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   │   ├── apiError.js      # Custom error handling
│   │   ├── apiResponse.js   # Standardized API responses
│   │   └── asyncHandler.js  # Async error wrapper
│   ├── app.js              # Express app configuration
│   ├── constants.js        # Application constants
│   └── index.js            # Application entry point
├── public/
│   └── temp/               # Temporary file storage
├── .env                    # Environment variables
├── .gitignore             # Git ignore rules
├── .prettierrc            # Prettier configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arnab9957/FullBackendProject.git
   cd FullBackendProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017
   CORS_ORIGIN=http://localhost:3000
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRY=7d
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000` (or your specified PORT).

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword",
  "fullName": "John Doe"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}
```

### Video Endpoints

#### Upload Video
```http
POST /videos/upload
Content-Type: multipart/form-data
Authorization: Bearer <jwt_token>

{
  "title": "Video Title",
  "description": "Video Description",
  "videoFile": <file>,
  "thumbnail": <file>
}
```

## 🗄️ Database Models

### User Model
- `username` (String, unique, required)
- `email` (String, unique, required)
- `fullName` (String, required)
- `avatar` (String)
- `coverImage` (String)
- `watchHistory` (Array of Video references)
- `password` (String, hashed)
- `refreshToken` (String)

### Video Model
- `videoFile` (String, required)
- `thumbnail` (String, required)
- `title` (String, required)
- `description` (String, required)
- `duration` (Number)
- `views` (Number, default: 0)
- `isPublished` (Boolean, default: true)
- `owner` (User reference)

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGO_URI` | MongoDB connection string | mongodb://localhost:27017 |
| `CORS_ORIGIN` | Allowed CORS origin | http://localhost:3000 |
| `JWT_SECRET` | JWT signing secret | - |
| `JWT_EXPIRY` | JWT token expiry | 7d |

### Prettier Configuration
The project uses Prettier for code formatting with the following configuration:
```json
{
  "singleQuote": false,
  "bracketSpacing": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "semi": true
}
```

## 🛡️ Security Features

- **Password Hashing:** Bcrypt for secure password storage
- **JWT Authentication:** Stateless authentication mechanism
- **CORS Protection:** Configurable cross-origin resource sharing
- **Input Validation:** Mongoose schema validation
- **Error Handling:** Custom error classes and middleware

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm run format` - Format code with Prettier

### Code Structure Guidelines

1. **Controllers:** Handle HTTP requests and responses
2. **Models:** Define database schemas and business logic
3. **Middlewares:** Implement cross-cutting concerns (auth, validation, etc.)
4. **Utils:** Reusable utility functions
5. **Routes:** Define API endpoints and route handlers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Arnab Kumar Dey**
- GitHub: [@arnab9957](https://github.com/arnab9957)
- Project Link: [https://github.com/arnab9957/FullBackendProject](https://github.com/arnab9957/FullBackendProject)

## 🙏 Acknowledgments

- Express.js team for the excellent web framework
- MongoDB team for the robust database solution
- All contributors who help improve this project

---

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub or contact the maintainer.

**Happy Coding! 🚀**
