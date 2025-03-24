# QuickTalk
## Real-Time Chat Application

A full-stack MERN application featuring real-time messaging capabilities with Socket.io, user authentication, and responsive design.

![Chat Application](https://realtime-chat-application-1-ipjp.onrender.com/)

## ✨ Features

* 🌟 **Modern Tech Stack**: Built with MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + Daisy UI
* 🎃 **Secure Authentication**: JWT-based authentication and authorization system
* 👾 **Real-time Messaging**: Instant message delivery using Socket.io
* 🚀 **Online Status Tracking**: See which users are currently online
* 👌 **State Management**: Global state management with Zustand
* 🌐 **Image Upload**: Cloudinary integration for avatar and image uploads
* 🐞 **Robust Error Handling**: Comprehensive error handling on both client and server
* 🔄 **Responsive Design**: Works flawlessly across desktop and mobile devices

## 🏗️ Project Structure

### Backend

```
backend/
├── node_modules/
├── src/
│   ├── controllers/       # Route controllers
│   │   ├── auth.controller.js
│   │   └── message.controller.js
│   ├── lib/               # Utility libraries
│   │   ├── cloudinary.js  # Cloudinary configuration
│   │   ├── db.js          # Database connection
│   │   ├── socket.js      # Socket.io setup
│   │   └── utils.js       # Helper functions
│   ├── middlewares/       # Express middlewares
│   │   └── auth.middleware.js
│   ├── models/            # Mongoose models
│   │   ├── message.model.js
│   │   └── user.model.js
│   ├── routes/            # API routes
│   │   ├── auth.route.js
│   │   └── message.route.js
│   └── seeds/             # Database seed data
│       ├── user.seed.js
│       └── index.js
│   ├── .env               # Environment variables
│   ├── package-lock.json
│   └── package.json
```

### Frontend

```
frontend/
├── dist/                  # Built application
│   ├── assets/            # Static assets
│   │   ├── avatar.png
│   │   └── vite.svg
│   └── index.html
├── node_modules/
├── public/                # Public assets
│   ├── avatar.png
│   └── chat.svg
├── src/
│   ├── assets/            # Component assets
│   ├── components/        # React components
│   ├── constants/         # Application constants
│   ├── lib/               # Utility libraries
│   ├── pages/             # Application pages
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── SettingPage.jsx
│   │   └── SignUpPage.jsx
│   ├── store/             # Zustand stores
│   │   ├── useAuthStore.js
│   │   ├── useChatStore.js
│   │   └── useThemeStore.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.json
├── package-lock.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/chat-application.git
cd chat-application
```

2. **Set up environment variables**

Create a `.env` file in the backend directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

3. **Install backend dependencies**

```bash
cd backend
npm install
```

4. **Install frontend dependencies**

```bash
cd ../frontend
npm install
```

### Development

1. **Start the backend server**

```bash
cd backend
npm run dev
```

2. **Start the frontend development server**

```bash
cd frontend
npm run dev
```

### Production Build

1. **Build the frontend**

```bash
cd frontend
npm run build
```

2. **Start the production server**

```bash
cd backend
npm start
```

## 📚 Tech Stack

### Backend
- **Node.js** & **Express.js**: Server framework
- **MongoDB** & **Mongoose**: Database and ODM
- **Socket.io**: Real-time communication
- **JWT**: Authentication
- **Bcrypt.js**: Password hashing
- **Cloudinary**: Image storage and processing

### Frontend
- **React 19**: UI library
- **Vite 6**: Build tool
- **React Router v7**: Routing
- **Zustand**: State management
- **Socket.io-client**: Real-time communication
- **Tailwind CSS**: Utility-first CSS framework
- **Daisy UI**: Component library
- **Axios**: HTTP client
- **React Hot Toast**: Notifications

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

Your Name - [srinandan2003@gmail.com](mailto:srinandan2003@gmail.com)

Project Link: [https://github.com/Srinandan2003/Realtime_Chat_Application/tree/master](https://github.com/Srinandan2003/Realtime_Chat_Application/tree/master)
