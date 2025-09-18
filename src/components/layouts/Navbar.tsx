import { NavLink } from "react-router";
// import { ModeToggle } from "../ui/mode-toggler";

export default function Navbar() {
  return (
    <nav className="h-16 flex justify-between items-center gap-3 px-6">
      <div>
        <NavLink to={"/"}>
          <div className="flex items-center">
            <div className="max-w-16">
              <img
                src="https://i.ibb.co.com/m59zqjth/freepik-colorful-gradient-king-of-books-logo-20250918090647-FUta.png"
                alt=""
              />
            </div>
            <div className="text-2xl font-bold text-white">
              <span className="text-orange-400">All-in-One </span>Library
            </div>
          </div>
        </NavLink>
      </div>
      <div className="flex gap-4">
        <NavLink className="text-md text-white" to={"/all-books"}>
          All Books
        </NavLink>
        <NavLink className="text-md text-white" to={"/book-summary"}>
          Book Summary
        </NavLink>
        <NavLink className="text-md text-white" to={"/add-book"}>
          Add Book
        </NavLink>
         <div className="ml-8 text-white">
        <p>Toggler</p>
      </div>
      </div>
     
    </nav>
  );
}



