
# 🍰 Sweet Shop Management System

## 🚀 Live Demo  
👉 **https://sweet-heaven.vercel.app**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Now-green?style=for-the-badge)](https://sweet-heaven.vercel.app/)

A full-stack JavaScript e-commerce application for managing a sweet shop with user authentication, shopping cart, order management, coupon discounts, and admin controls. Built with **TDD (Red → Green → Refactor)** methodology and MongoDB.

---

## Project Overview

This project demonstrates best practices in full-stack development:

- **Backend**: Node.js + Express + Mongoose + MongoDB  
- **Frontend**: React + Vite + React Router  
- **Testing**: Jest + Supertest (backend), Vitest + React Testing Library (frontend)  
- **Authentication**: JWT + bcrypt  
- **Database**: MongoDB (local or MongoDB Atlas cloud)  
- **Design**: Minimalist white, black, and rose (#FF6B9D) color scheme with responsive UI  

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
✅ Coupon/discount code validation and application  
✅ Purchase history logging  
✅ MongoDB support (local + cloud)

### Frontend Features  
✅ User authentication (Login/Register)  
✅ Dashboard with sweet product listings  
✅ Collapsible search and filter panel  
✅ Shopping cart with quantity management  
✅ Product detail pages with Buy Now button  
✅ Coupon code input and discount application  
✅ Order management and history  
✅ Bill generation (print & PDF download)  
✅ Admin panel for inventory management  
✅ Admin edit/delete from dashboard  
✅ Minimalist white, black, and rose design  
✅ Responsive mobile-friendly layout  
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

### Colors (Minimalist Theme)

* **Primary**: #FF6B9D (Rose)
* **Background**: #ffffff (White)
* **Text**: #000000 (Black)
* **Borders**: #f5f5f5 (Light Gray)

### Typography

* Poppins font family
* Clean, minimal UI elements
* No shadows or gradients
* Consistent spacing and alignment

---

## Security Features

* Password hashing with bcrypt
* JWT authentication with secure tokens
* XSS protection via CSP headers
* Role-based access control (User/Admin)
* Stock reservation to prevent overselling
* CORS configuration for production
* Coupon validation and expiry checks

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

Check `.env` and ensure MongoDB is running or accessible via MongoDB Atlas.

### Frontend cannot connect to backend

Update `VITE_API_URL` in `.env` files to match your backend URL (local or Render).

### Port already in use

Change port in backend `.env` or kill the process using the port.

### Navbar not responsive on mobile

Navbar items wrap automatically on screens < 768px. Filter panel is collapsible.

### Coupon not applying

Ensure coupon is created in admin panel and is active/not expired.

---

## Recent Updates

✨ **v2.0 Features Added:**
- Buy Now button for direct checkout
- Coupon/discount code system
- Admin edit/delete from dashboard
- Collapsible filter panel
- Responsive mobile navbar
- Minimalist design overhaul
- Improved alignment and symmetry
- Vercel deployment configuration

## Future Enhancements

* Payment gateway integration
* Product reviews and ratings
* Wishlist system
* Email notifications
* Analytics dashboard
* Mobile app (React Native)
* SMS notifications

---

## License

MIT

---

## Support

Create an issue in this repository.

---

**Built with ❤️ using Test-Driven Development**
✔️ 30+ Tests Passing
✔️ Production Ready (Vercel + Render)
✔️ Fully Documented
✔️ AI-Assisted Development
✔️ Responsive Mobile Design
✔️ Coupon System Integrated

```

