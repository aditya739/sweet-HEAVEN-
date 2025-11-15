# 🍰 Sweet Shop Management System

A full-stack JavaScript e-commerce application for managing a sweet shop with user authentication, shopping cart, order management, and admin controls. Built with **TDD (Red → Green → Refactor)** methodology and MongoDB.

## Project Overview

This project demonstrates best practices in full-stack development:

- **Backend**: Node.js + Express + Mongoose + MongoDB
- **Frontend**: React + Vite + React Router
- **Testing**: Jest + Supertest (backend), Vitest + React Testing Library (frontend)
- **Authentication**: JWT + bcrypt
- **Database**: MongoDB (local or MongoDB Atlas cloud)
- **Design**: Pastel color palette with responsive UI

## Features

### Backend Features
✅ User registration and authentication with JWT tokens  
✅ Role-based access control (User/Admin)  
✅ Sweet product CRUD operations  
✅ Shopping cart management with stock reservation  
✅ Order management with cancellation and stock restoration  
✅ Product search and filtering (by name, category, price)  
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

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT + bcrypt
- **Testing**: Jest + Supertest

### Frontend
- **Framework**: React 19
- **Bundler**: Vite
- **Routing**: React Router v7
- **HTTP Client**: axios
- **Testing**: Vitest + React Testing Library
- **Styling**: Custom CSS (pastel design system)

## Project Structure

```
tdd/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── index.js
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Sweet.js
│   │   │   ├── Cart.js
│   │   │   ├── Order.js
│   │   │   └── PurchaseLog.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── sweets.js
│   │   │   ├── cart.js
│   │   │   └── orders.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── sweetsController.js
│   │   │   ├── cartController.js
│   │   │   └── orderController.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── sweetsService.js
│   │   │   ├── cartService.js
│   │   │   └── orderService.js
│   │   └── middleware/
│   │       └── auth.js
│   ├── tests/
│   │   ├── auth.test.js
│   │   ├── sweets.test.js
│   │   ├── cart.test.js
│   │   └── orders.test.js
│   ├── jest.config.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Orders.jsx
│   │   │   └── AdminPanel.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── SweetCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── BillGenerator.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useCart.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── tests/
│   │   │   ├── Login.test.jsx
│   │   │   └── SweetCard.test.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── vite.config.js
│   ├── vitest.config.js
│   └── package.json
│
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas account)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the `backend` directory:
   ```
   MONGODB_URI="mongodb://localhost:27017/sweet_shop"
   JWT_SECRET="your-super-secret-jwt-key-change-in-production"
   NODE_ENV="development"
   PORT=3000
   ```

   For MongoDB Atlas (cloud):
   ```
   MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/sweet_shop"
   JWT_SECRET="your-super-secret-jwt-key-change-in-production"
   NODE_ENV="development"
   PORT=3000
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```
   
   The server will run on `http://localhost:3000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The frontend will run on `http://localhost:5173`

## Running Tests

### Backend Tests (Jest + Supertest)

**Run all backend tests:**
```bash
cd backend
npm test
```

**Run specific test file:**
```bash
npm test -- tests/auth.test.js
npm test -- tests/sweets.test.js
npm test -- tests/cart.test.js
npm test -- tests/orders.test.js
```

**Run tests in watch mode:**
```bash
npm run test:watch
```

### Frontend Tests (Vitest + React Testing Library)

**Run all frontend tests:**
```bash
cd frontend
npm test
```

**Run tests in watch mode:**
```bash
npm test -- --watch
```

## API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Login User
```http
POST /auth/login/user
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Admin Login
```http
POST /auth/login/admin
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "adminPassword123"
}
```

### Sweet Management Endpoints

#### Get All Sweets
```http
GET /sweets
```

#### Search Sweets
```http
GET /sweets/search?name=Gulab&category=Fried&minPrice=100&maxPrice=200
```

#### Create Sweet (Admin Only)
```http
POST /sweets
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Rasgulla",
  "category": "Milk",
  "price": 120.00,
  "quantity": 20,
  "image": "https://example.com/image.jpg"
}
```

#### Update Sweet (Admin Only)
```http
PUT /sweets/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Rasgulla Premium",
  "category": "Milk",
  "price": 150.00,
  "quantity": 25,
  "image": "https://example.com/image.jpg"
}
```

#### Delete Sweet (Admin Only)
```http
DELETE /sweets/:id
Authorization: Bearer <token>
```

### Cart Endpoints

#### Get Cart
```http
GET /cart
Authorization: Bearer <token>
```

#### Add to Cart
```http
POST /cart/add
Authorization: Bearer <token>
Content-Type: application/json

{
  "sweetId": "sweet-id",
  "quantity": 2
}
```

#### Remove from Cart
```http
POST /cart/remove
Authorization: Bearer <token>
Content-Type: application/json

{
  "sweetId": "sweet-id"
}
```

#### Clear Cart
```http
POST /cart/clear
Authorization: Bearer <token>
```

### Order Endpoints

#### Create Order
```http
POST /orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    { "sweetId": "id1", "quantity": 2 },
    { "sweetId": "id2", "quantity": 1 }
  ]
}
```

#### Get User Orders
```http
GET /orders
Authorization: Bearer <token>
```

#### Cancel Order
```http
POST /orders/:id/cancel
Authorization: Bearer <token>
```

## TDD Methodology

This project follows the **Red → Green → Refactor** cycle:

### RED Phase
Write failing tests first that define expected behavior:
```javascript
it('should register a new user and return status 201', async () => {
  const response = await request(app)
    .post('/api/auth/register')
    .send({
      email: 'user@test.com',
      password: 'securepassword123',
    });
  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty('user');
});
```

### GREEN Phase
Implement minimal code to pass tests:
```javascript
async register(email, password) {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');
  
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash, role: 'user' });
  return user;
}
```

### REFACTOR Phase
Improve code quality while keeping tests passing.

## Database Models

### User Model
```javascript
{
  _id: ObjectId,
  email: String (unique),
  passwordHash: String,
  role: String (default: "user"),
  createdAt: Date,
  updatedAt: Date
}
```

### Sweet Model
```javascript
{
  _id: ObjectId,
  name: String (unique),
  category: String,
  price: Number,
  quantity: Number,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Cart Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [
    {
      sweetId: ObjectId,
      quantity: Number,
      reservedQuantity: Number
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

### Order Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [
    {
      sweetId: ObjectId,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: String (pending/completed/cancelled),
  createdAt: Date,
  updatedAt: Date
}
```

## Common Commands

### Backend
```bash
npm run dev          # Start development server
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
```

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm test             # Run all tests
npm test -- --watch  # Run tests in watch mode
```

## Application Workflow

### User Registration & Login
1. Navigate to http://localhost:5173
2. Click "Register" and create account
3. Automatically logged in and redirected to dashboard

### Shopping
1. Browse sweets on dashboard
2. Use search/filter to find products
3. Click product to view details
4. Add to cart with desired quantity
5. View cart and proceed to checkout

### Checkout & Orders
1. Review cart items
2. Click "Place Order"
3. Order created and stock reserved
4. View order history in "Orders" page
5. Cancel order if needed (stock restored)

### Admin Operations
1. Login with admin account
2. Click "Admin Panel"
3. **Add Product**: Fill form and submit
4. **Edit Product**: Click edit, modify, save
5. **Delete Product**: Click delete, confirm
6. **View Inventory**: See all products and stock levels

## Design System

### Color Palette (Pastel Theme)
- **Primary Mint**: #A8E6CF
- **Baby Pink**: #FFE5F0
- **Pastel Blue**: #E5F5F0
- **Pastel Lemon**: #FFF9E5
- **Dark Text**: #2c2c2c
- **Background**: Linear gradient (#FFF9F5 to #F5FFFE)

### Typography
- Font Family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
- Headings: 700 weight
- Body: 400 weight
- Borders: 2px solid

## Error Handling

### HTTP Status Codes
- **200**: OK - Successful request
- **201**: Created - Resource created successfully
- **400**: Bad Request - Invalid input or business logic violation
- **401**: Unauthorized - Missing or invalid JWT token
- **403**: Forbidden - Insufficient permissions
- **404**: Not Found - Resource doesn't exist
- **500**: Server Error - Database or server error

### Frontend Error Display
- Error messages shown in red alert boxes
- Success messages shown in green boxes (auto-dismiss after 3s)
- Form validation with real-time feedback
- Loading states during API calls

## Security Features

✅ Password hashing with bcrypt (10 salt rounds)  
✅ JWT authentication with token expiration  
✅ MongoDB injection prevention via Mongoose  
✅ XSS protection via React auto-escaping  
✅ Role-based access control (User/Admin)  
✅ Protected API endpoints with auth middleware  
✅ Stock reservation to prevent overselling  

## Screenshots

### Home Page
- Hero section with "Shop Now" button
- Featured sweets grid
- Pastel gradient background

### Dashboard
- Product grid with search/filter
- Real-time product listings
- Add to cart functionality
- Product detail pages

### Shopping Cart
- Cart items with quantity adjustment
- Stock availability check
- Total price calculation
- Checkout button

### Orders Page
- Order history with status
- Order details and items
- Cancel order option
- Bill generation

### Admin Panel
- Inventory management table
- Add/Edit/Delete products
- Modal-based forms
- Image URL preview
- Category and price filters

## My AI Usage

### AI Tools Used
This project was developed with assistance from **GitHub Copilot** and **Claude AI**.

### How AI Was Used

#### 1. Project Setup & Configuration (15%)
- Generated Express + MongoDB project structure
- Created Mongoose schema models
- Set up Jest and Vitest configurations
- Configured authentication middleware patterns
- Set up Vite + React project scaffolding

#### 2. TDD Test Writing (25%)
- Structured Jest test cases for all endpoints
- Generated Supertest request patterns
- Created React Testing Library test templates
- Provided edge case testing scenarios
- Generated test assertions with proper status codes

**Example**: AI generated test for cart functionality:
```javascript
it('should add item to cart and reserve stock', async () => {
  const response = await request(app)
    .post('/api/cart/add')
    .set('Authorization', `Bearer ${userToken}`)
    .send({ sweetId: sweetId, quantity: 2 });
  expect(response.status).toBe(200);
  expect(response.body.cart.items).toHaveLength(1);
});
```

#### 3. Backend Implementation (20%)
- Generated service layer methods for CRUD operations
- Created controller error handling with proper HTTP status codes
- Implemented validation logic for all endpoints
- Generated JWT token generation and bcrypt password hashing
- Created stock reservation and restoration logic

**Example**: AI generated cart service:
```javascript
async addToCart(userId, sweetId, quantity) {
  const sweet = await Sweet.findById(sweetId);
  if (!sweet) throw new Error('Sweet not found');
  if (sweet.quantity < quantity) throw new Error('Insufficient stock');
  
  let cart = await Cart.findOne({ userId });
  if (!cart) cart = await Cart.create({ userId, items: [] });
  
  const existingItem = cart.items.find(item => item.sweetId.toString() === sweetId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ sweetId, quantity, reservedQuantity: quantity });
  }
  
  return await cart.save();
}
```

#### 4. Frontend Components (20%)
- Generated React component boilerplate with hooks
- Created form handling with validation
- Implemented search/filter logic with state management
- Provided custom hooks (useAuth, useCart)
- Generated responsive component layouts

**Components created with AI**:
- Login.jsx - Form validation and error handling
- Register.jsx - Password confirmation and auto-login
- Dashboard.jsx - Product grid with search integration
- Cart.jsx - Cart management with quantity adjustment
- Orders.jsx - Order history and cancellation
- AdminPanel.jsx - Inventory management with modal forms
- BillGenerator.jsx - Print and PDF download functionality

#### 5. UI/UX Design & Styling (10%)
- Generated comprehensive CSS framework (500+ lines)
- Created pastel color design system
- Implemented responsive grid layouts
- Designed modal forms and alerts
- Created loading spinners and animations

**Key CSS features by AI**:
- Pastel gradient backgrounds
- Responsive grid system (grid-2, grid-3, grid-4)
- Modal overlay and form styling
- Alert animations and transitions
- Hover effects and button states

#### 6. Debugging & Problem Resolution (10%)
- Fixed MongoDB ObjectId comparison issues
- Resolved Express route ordering problems
- Fixed React effect dependency warnings
- Debugged JWT token interceptor issues
- Identified and fixed stock reservation edge cases

**Major fix example**: Route ordering for cart endpoints
```javascript
// BEFORE (❌ Broken)
router.post('/:id/add', ...);      // Matches /clear too!
router.post('/clear', ...);

// AFTER (✅ Works)
router.post('/clear', ...);         // More specific routes first
router.post('/:id/add', ...);
```

### AI Involvement by Feature

| Feature | AI % | Manual % | Notes |
|---------|------|----------|-------|
| Authentication | 90% | 10% | Edge cases and security |
| CRUD Operations | 85% | 15% | Business logic refinement |
| Shopping Cart | 80% | 20% | Stock reservation logic |
| Order Management | 85% | 15% | Cancellation and restoration |
| Search & Filter | 75% | 25% | Query optimization |
| Admin Panel | 70% | 30% | UX refinement |
| UI Design | 60% | 40% | Color selection and tweaks |
| Tests | 80% | 20% | Test case ideation |
| Documentation | 50% | 50% | Technical details |

### Manual Development Work

✅ Project initialization and folder structure  
✅ Database schema design decisions  
✅ API endpoint planning and URL structure  
✅ Test case ideation and coverage planning  
✅ Component integration and routing setup  
✅ Environment variable configuration  
✅ Design decisions (color scheme, layout)  
✅ Error handling strategy  
✅ Security considerations  
✅ Git version control and commits  

### What AI Could NOT Do

❌ Decide on business logic rules (stock reservation, order cancellation)  
❌ Choose color scheme or visual branding  
❌ Plan database relationships and schema design  
❌ Make architectural decisions  
❌ Debug environment-specific issues  
❌ Test actual running application  
❌ Make git commits or version control decisions  
❌ Write comprehensive technical documentation  
❌ Review and validate test coverage  
❌ Make security decisions beyond standard practices  

### Reflection on AI Impact

**Positive Impacts:**
- Significantly accelerated development speed (estimated 40% faster)
- Reduced boilerplate code writing time
- Provided consistent code patterns and best practices
- Generated comprehensive test cases quickly
- Helped with CSS styling and responsive design

**Challenges:**
- Required careful review for security and edge cases
- Sometimes generated overly complex solutions
- Needed manual refinement for business logic
- Required understanding of generated code to debug issues

**Best Practices Learned:**
1. Always review AI-generated code for security
2. Use TDD to validate AI implementations
3. Provide clear specifications for better results
4. Combine AI with manual testing and debugging
5. Use AI for boilerplate, not critical business logic

## Test Report

See [TEST_REPORT.md](./TEST_REPORT.md) for detailed test results.

**Summary**: 28+ tests passing with comprehensive coverage of:
- User authentication (registration, login, admin login)
- Sweet CRUD operations
- Shopping cart management
- Order creation and cancellation
- Stock reservation and restoration
- Search and filtering
- Error handling and edge cases

## Troubleshooting

### Backend Issues

**"Cannot connect to MongoDB"**
- Ensure MongoDB is running locally or MongoDB Atlas connection string is correct
- Check MONGODB_URI in `.env`
- Verify network access if using MongoDB Atlas

**"Port 3000 already in use"**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Frontend Issues

**"Cannot connect to localhost:3000"**
- Ensure backend `npm run dev` is running
- Check API base URL in `src/utils/api.js`

**"Port 5173 already in use"**
```bash
# Update vite.config.js to use different port
export default {
  server: { port: 5174 }
}
```

## Future Enhancements

- [ ] Payment integration (Stripe/Razorpay)
- [ ] Email notifications
- [ ] User wishlist functionality
- [ ] Product reviews and ratings
- [ ] Inventory analytics dashboard
- [ ] Real-time notifications (WebSockets)
- [ ] Mobile app (React Native)
- [ ] Advanced caching strategies
- [ ] Comprehensive logging system

## License

MIT

## Support

For issues or questions, please create an issue in the repository or refer to the troubleshooting section above.

---

**Built with ❤️ using Test-Driven Development**

✅ **28+ Tests Passing**  
✅ **Production Ready**  
✅ **Fully Documented**  
✅ **AI-Assisted Development**
