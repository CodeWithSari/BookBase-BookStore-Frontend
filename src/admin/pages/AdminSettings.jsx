import React, { useState } from "react";
import { FaUserEdit, FaUndo, FaSave } from "react-icons/fa";
import AdminHeader from "../components/AdminHeader";
import Adminsidebar from "../components/Adminsidebar";
import BookstoreFooter from "../../components/BookstoreFooter";

const AdminSettings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profilePic, setProfilePic] = useState("/admin-avatar.png");

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const handleReset = () => {
    alert("Form has been reset!");
  };

  const handleUpdate = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <AdminHeader setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed lg:static top-0 left-0 h-full w-64 bg-white z-50 border-r shadow-md transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
          <Adminsidebar />
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-3xl font-bold text-[#004d40] mb-6 text-center">
            ⚙️ Admin Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Privileges */}
            <div className="bg-white shadow-md p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                🧩 Admin Privileges
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Manage all books and users in the store</li>
                <li>Post and edit job vacancies</li>
                <li>View applicants and approve new admins</li>
                <li>Access user activity reports and logs</li>
                <li>Maintain and update store content</li>
                <li>Change password and profile settings</li>
              </ul>
            </div>

            {/* Right Column - Profile Form */}
            <div className="bg-white shadow-md p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                👤 Edit Profile
              </h3>

              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <img
                    src={profilePic}
                    alt="Admin Avatar"
                    className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover"
                  />
                  <label
                    htmlFor="profilePic"
                    className="absolute bottom-0 right-0 bg-[#004d40] text-white p-2 rounded-full cursor-pointer shadow-md hover:bg-[#00695c]"
                  >
                    <FaUserEdit />
                    <input
                      id="profilePic"
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Admin Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Admin Name"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter New Password"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md"
                  >
                    <FaUndo /> Reset
                  </button>

                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="flex items-center gap-2 px-4 py-2 bg-[#004d40] hover:bg-[#00695c] text-white rounded-md"
                  >
                    <FaSave /> Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <BookstoreFooter />
    </div>
  );
};

export default AdminSettings;
