import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

function AdminHeader({ adminName = "Amrita" }) {
  return (
    <div className="shadow-md">
      {/* Header Section */}
      <header className="bg-white text-gray-800 flex justify-between items-center px-6 py-4 border-b">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <FaBookOpen className="text-3xl" style={{ color: "#004d40" }} />
          <h1 className="text-2xl font-bold tracking-wide" style={{ color: "#004d40" }}>
            BookBase 
          </h1>
        </div>

        {/* Right: Logout Button */}
        <button
          className="flex items-center gap-2 text-white px-4 py-2 rounded-md text-sm font-medium transition"
          style={{ backgroundColor: "#004d40" }}
        >
          <IoLogOut className="text-lg" />
          Logout
        </button>
      </header>

      {/* Scrolling Welcome Note */}
      <div
        className="text-white py-2 overflow-hidden"
        style={{ backgroundColor: "#004d40" }}
      >
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="text-sm font-medium"
        >
           Welcome back, <span className="font-semibold">{adminName}</span>! You are logged in
          to the BookBase Admin Dashboard — manage users, books, and settings efficiently.
        </marquee>
      </div>
    </div>
  );
}

export default AdminHeader;
