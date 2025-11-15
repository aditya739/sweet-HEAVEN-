
# 🍰 Sweet Shop Management System

## 🚀 Live Demo  
👉 **https://sweet-heaven.vercel.app**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Now-green?style=for-the-badge)](https://sweet-heaven.vercel.app)

A full-stack JavaScript e-commerce application for managing a sweet shop with user authentication, shopping cart, order management, and admin controls. Built with **TDD (Red → Green → Refactor)** methodology and MongoDB.

---

## Project Overview

This project demonstrates best practices in full-stack development:

- **Backend**: Node.js + Express + Mongoose + MongoDB  
- **Frontend**: React + Vite + React Router  
- **Testing**: Jest + Supertest (backend), Vitest + React Testing Library (frontend)  
- **Authentication**: JWT + bcrypt  
- **Database**: MongoDB (local or MongoDB Atlas cloud)  
- **Design**: Pastel color palette with responsive UI  

---

## Features

### Backend Features  
✅ User registration and authentication with JWT tokens  
✅ Role-based access control (User/Admin)  
✅ Sweet product CRUD operations  
✅ Shopping cart management with stock reservation  
✅ Order management with cancellation and stock restoration  
✅ Product search and filtering  
✅ Admin inventory management  
✅ Purchase history logging  
✅ MongoDB support (local + cloud)

### Frontend Features  
✅ User authentication (Login/Register)  
✅ Dashboard with sweet product listings  
✅ Advanced search and filtering  
✅ Shopping cart with quantity management  
✅ Product detail pages  
✅ Order management and history  
✅ Bill generation (print & PDF download)  
✅ Admin panel for inventory management  
✅ Pastel color design system  
✅ Responsive grid layout  
✅ Real-time alerts and notifications  

---

## Technology Stack

### Backend  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT + bcrypt  
- Jest + Supertest  

### Frontend  
- React 19  
- Vite  
- React Router v7  
- axios  
- Vitest + React Testing Library  
- Custom CSS  

---

## Project Structure

```

tdd/
├── backend/
│   ├── src/
│   ├── tests/
│   ├── jest.config.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── vite.config.js
│   ├── vitest.config.js
│   └── package.json
│
└── README.md

````

---

## Setup Instructions

### Backend
```bash
cd backend
npm install
````

Create `.env`:

```
MONGODB_URI=your_mongo_url
JWT_SECRET=your_secret
PORT=3000
```

Start server:

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at:
➡️ **[http://localhost:5173](http://localhost:5173)**

---

## Running Tests

### Backend Tests

```bash
cd backend
npm test
```

### Frontend Tests

```bash
cd frontend
npm test
```

---

## API Endpoints

### Base URL

```
http://localhost:3000/api
```

Includes:

* Auth (register/login)
* Product CRUD
* Cart
* Orders
* Search/filter

---

## TDD Methodology (Red → Green → Refactor)

### RED

Failing tests first

### GREEN

Write minimum code to pass tests

### REFACTOR

Clean, optimize, improve structure

---

## Database Models

Includes:

* User
* Sweet
* Cart
* Order

---

## Common Commands

### Backend

```bash
npm run dev
npm test
```

### Frontend

```bash
npm run dev
npm test
npm run build
```

---

## Design System

### Colors (Pastel Theme)

* #A8E6CF
* #FFE5F0
* #E5F5F0
* #FFF9E5
* #2c2c2c

### Typography

* Segoe UI
* Rounded UI elements
* Soft gradient background

---

## Security Features

* Password hashing
* JWT authentication
* XSS protection
* Role-based access control
* Stock reservation to prevent overselling

---

## Screenshots

(Add your screenshots here)

---

## AI Usage Breakdown

### AI Helped With:

* Boilerplate code
* Test case generation
* Component scaffolding
* CSS and layout structure
* CRUD services and controllers
* Problem debugging suggestions

### Manual Work:

* Database schema planning
* Business logic
* TDD workflow
* UX decisions
* Security improvements
* Integration and debugging

---

## Troubleshooting

### MongoDB Error

Check `.env` and ensure MongoDB is running.

### Frontend cannot connect

Check API base URL in `src/utils/api.js`.

### Port already in use

Change port in `vite.config.js` or kill process.

---

## Future Enhancements

* Payment gateway
* Product reviews
* Wishlist system
* Email notifications
* Analytics dashboard
* Mobile app (React Native)

---

## License

MIT

---

## Support

Create an issue in this repository.

---

**Built with ❤️ using Test-Driven Development**
✔️ 28+ Tests Passing
✔️ Production Ready
✔️ Fully Documented
✔️ AI-Assisted Development

```

