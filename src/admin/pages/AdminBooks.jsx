import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Adminsidebar from "../components/Adminsidebar";
import BookstoreFooter from "../../components/BookstoreFooter";
import { FaBook, FaUsers, FaBars } from "react-icons/fa";

export default function AdminBooks() {
  const [activeTab, setActiveTab] = useState("books");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample book data
  const books = [
    { id: 1, title: "The Alchemist", category: "Fiction", author: "Paulo Coelho", coverImage: "/images/alchemist.jpg" },
    { id: 2, title: "Atomic Habits", category: "Self-Help", author: "James Clear", coverImage: "/images/atomic-habits.jpg" },
    { id: 3, title: "Rich Dad Poor Dad", category: "Finance", author: "Robert Kiyosaki", coverImage: "/images/rich-dad.jpg" },
    { id: 4, title: "Becoming", category: "Autobiography", author: "Michelle Obama", coverImage: "/images/becoming.jpg" },
    { id: 5, title: "It", category: "Horror", author: "Stephen King", coverImage: "/images/it.jpg" },
    { id: 6, title: "Sherlock Holmes", category: "Crime Thriller", author: "Arthur Conan Doyle", coverImage: "/images/sherlock.jpg" },
    { id: 7, title: "Educated", category: "Autobiography", author: "Tara Westover", coverImage: "/images/educated.jpg" },
    { id: 8, title: "The Great Gatsby", category: "Novel", author: "F. Scott Fitzgerald", coverImage: "/images/gatsby.jpg" },
  ];

  // Sample user data
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", avatar: "/images/user1.jpg" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", avatar: "/images/user2.jpg" },
    { id: 3, name: "Robert Wilson", email: "robert.wilson@example.com", avatar: "/images/user3.jpg" },
    { id: 4, name: "Emily Johnson", email: "emily.johnson@example.com", avatar: "/images/user4.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <AdminHeader adminName="Amrita" />

      {/* Mobile Header Bar with Toggle */}
      <div className="lg:hidden flex items-center justify-between bg-[#004d40] text-white px-4 py-3">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          className="text-xl p-1"
        >
          <FaBars />
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar - Always visible on desktop */}
        <div className="w-64 bg-white border-r shadow-md hidden lg:block">
          <Adminsidebar />
        </div>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
                 onClick={() => setSidebarOpen(false)}></div>
            <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r shadow-md lg:hidden">
              <Adminsidebar />
            </div>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#004d40] mb-4 text-center flex items-center justify-center gap-2">
            <FaBook className="text-[#004d40] text-3xl sm:text-4xl" /> All Books
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveTab("books")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition ${
                activeTab === "books"
                  ? "bg-[#004d40] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaBook /> Books
            </button>

            <button
              onClick={() => setActiveTab("users")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition ${
                activeTab === "users"
                  ? "bg-[#004d40] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaUsers /> Users
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            {activeTab === "books" ? (
              // Books Grid
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {books.map((book) => (
                  <div
                    key={book.id}
                    className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition"
                  >
                    <div className="h-48 w-full rounded mb-3 overflow-hidden">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#004d40] mb-1">{book.title}</h3>
                    <p className="text-gray-700 text-sm mb-1">
                      <span className="font-semibold">Author:</span> {book.author}
                    </p>
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Category:</span> {book.category}
                    </p>
                    <div className="flex justify-between mt-3">
                      <button className="text-xs sm:text-sm px-3 py-1 bg-[#004d40] text-white rounded hover:bg-[#00695c]">
                        Edit
                      </button>
                      <button className="text-xs sm:text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Users Grid
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition"
                  >
                    <div className="text-xs text-gray-500 mb-2 self-start">ID: {user.id}</div>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover border-4 border-[#004d40]"
                    />
                    <h3 className="text-base sm:text-lg font-semibold text-[#004d40] text-center">
                      {user.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm text-center">{user.email}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <BookstoreFooter />
      </footer>
    </div>
  );
}