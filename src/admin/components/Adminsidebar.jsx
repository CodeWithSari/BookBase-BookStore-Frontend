import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBookOpen, FaBriefcase, FaCog } from "react-icons/fa";

const menuItems = [
  { id: "home", to: "/admin-home", label: "Admin Home", icon: <FaHome /> },
  { id: "allBooks", to: "/admin-books", label: "All Books", icon: <FaBookOpen /> },
  { id: "careers", to: "/admin-career", label: "Careers", icon: <FaBriefcase /> },
  { id: "settings", to: "/admin-settings", label: "Settings", icon: <FaCog /> },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-md flex flex-col">
      {/* Profile Section */}
      <div className="flex flex-col items-center py-6 bg-[#e0f2f1]">
        <img
          src="https://static2.typecast.ai/ta_preset/images/female_training.jpg"
          alt="Admin"
          className="w-20 h-20 rounded-full object-cover border-4"
          style={{ borderColor: "#004d40" }}
        />
        <h3 className="mt-3 text-lg font-semibold text-gray-800">Amrita</h3>
        <p className="text-sm text-gray-500">Administrator</p>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 p-4 bg-[#e0f2f1]">
        
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition text-left ${
                  isActive
                    ? "bg-[#004d40] text-white"
                    : "text-gray-700 hover:bg-[#b2dfdb]"
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
