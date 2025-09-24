# 📚 Library Management System (Client)

A minimal and responsive Library Management System built with React, TypeScript, Redux Toolkit Query (RTK Query), and Tailwind CSS.
This client-side application allows users to manage books, borrow books, and view borrow summaries — all through a clean UI and seamless API integration.

## 🚀 Features

### Book Management
View all books in a table.
Add new books with proper validation.
Edit existing book details.
Delete books with confirmation.
Book availability updates automatically when copies reach 0.

### Borrow System
Borrow books with quantity and due date.
Quantity cannot exceed available copies.
Updates availability automatically.

### Borrow Summary
Displays all borrowed books with aggregated data.
Columns: Book Title, ISBN, Total Quantity Borrowed.

### UI/UX
Responsive and minimalist design.
Toast notifications for success/error.
Fixed Navbar & Footer.
Optimistic UI updates with RTK Query.

### 🛠️ Tech Stack
Frontend
⚛️ React (with Vite / CRA)
📘 TypeScript
🎯 Redux Toolkit + RTK Query
🎨 Tailwind CSS + ShadCN UI
🔔 React Hot Toast


## 📂 Project Structure
src/
│── components/     # Reusable UI components
│── pages/          # Page-level components
│── redux/          # RTK Query APIs and slices
│── types/          # TypeScript interfaces & types
│── App.tsx         # App entry point
│── main.tsx        # React root

## ⚡ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/library-management-client.git
cd library-management-client
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables
Create a .env file in the root and add:
VITE_API_URL=http://localhost:5000/api
4️⃣ Run the Development Server
npm run dev
5️⃣ Build for Production
npm run build

## 🔗 API Endpoints Used

### Books
GET /books → Get all books
POST /create-book → Add a book
PATCH /books/:id → Update a book
DELETE /books/:id → Delete a book

### Borrows
POST /borrow → Borrow a book
GET /borrow-summary → Borrow summary

✨ Developed by Naeem.