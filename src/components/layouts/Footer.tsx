import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="bottom-0">
      <footer className="bg-[#081839] text-gray-300 py-10 mt-10 ">
        <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left side - site info */}
          <p className="text-sm">
            © {new Date().getFullYear()} My Bookstore. All rights reserved.
          </p>

          {/* Right side - links */}
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
