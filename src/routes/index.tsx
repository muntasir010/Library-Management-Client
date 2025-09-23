import App from "@/App";
import AddBook from "@/pages/AddBook/AddBookForm";
import Books from "@/pages/Books/Books";
import BorrowBookPage from "@/pages/Borrow/BorrowBookPage";
import { BorrowSummary } from "@/pages/Borrow/BorrowSummary";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/books",
          element: <Books/>
        },
        {
          path: "/borrow/:id",
          element: <BorrowBookPage/>
        },
        {
          path: "/borrow-summary",
          element: <BorrowSummary/>
        },
        {
          path: "/create-book",
          element: <AddBook/>
        },
    ]
  },
]);
