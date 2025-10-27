import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Add logout logic here
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/bookstorelogo.jpg"
            alt="BookBase Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800">BookBase</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium text-gray-800">
            <li>
              <Link to="/" className="hover:text-[#004d40] transition">Home</Link>
            </li>
            <li>
              <Link to="/allBooks" className="hover:text-[#004d40] transition">Books</Link>
            </li>
            <li>
              <Link to="/Careers" className="hover:text-[#004d40] transition">Careers</Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-[#004d40] transition">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Social Icons + Login/Profile */}
        <div className="flex items-center space-x-4 text-gray-600 relative">
          {/* Social Icons */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-blue-600 transition text-xl" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FaXTwitter className="hover:text-black transition text-xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500 transition text-xl" />
          </a>

          {/* Login / Profile */}
          <Link
            to="/login"
            className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
          >
            <FaUser className="text-sm" />
            <span>Login</span>
          </Link>

          {/* Profile Avatar */}
          <div className="relative ml-2">
            <img
              src="https://t3.ftcdn.net/jpg/15/34/03/58/360_F_1534035806_6gn57ou4V0dVZY6l30h6nEB5gWQRAP6v.jpg"
              alt="Profile"
              className="w-15 h-15 rounded-full cursor-pointer border-2 border-gray-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-60  bg-white border rounded-lg shadow-lg z-50">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
