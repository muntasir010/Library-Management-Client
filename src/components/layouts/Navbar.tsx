import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#081839] shadow-xl z-50">
      {/* Left Side Logo */}
      <div className="max-w-7xl mx-auto h-16 flex justify-between items-center px-4 md:px-6">
        <div>
          <NavLink to={"/"}>
            <div className="flex items-center gap-2">
              <div className="w-12 md:w-16">
                <img
                  src="https://i.ibb.co.com/m59zqjth/freepik-colorful-gradient-king-of-books-logo-20250918090647-FUta.png"
                  alt="logo"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                <span className="text-orange-400">All-in-One </span>Library
              </div>
            </div>
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-4 items-center">
          <NavLink
            // className="text-sm md:text-md text-white hover:text-orange-400"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors text-orange-500 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            to={"/books"}
          >
            All Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors text-orange-500 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            to={"/borrow-summary"}
          >
            Book Summary
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors text-orange-500 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            to={"/create-book"}
          >
            Add Book
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* hamburger icon */}
            {isOpen ? (
              // X icon when open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#0f264a] flex flex-col items-center gap-4 py-4 sm:hidden z-50 shadow-lg">
            <NavLink
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors text-orange-500 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
              to={"/books"}
              onClick={() => setIsOpen(false)}
            >
              All Books
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors text-orange-500 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : " hover:bg-gray-100"
                }`
              }
              to={"/borrow-summary"}
              onClick={() => setIsOpen(false)}
            >
              Book Summary
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors text-orange-500 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
              to={"/create-book"}
              onClick={() => setIsOpen(false)}
            >
              Add Book
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
