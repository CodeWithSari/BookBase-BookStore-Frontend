import React from "react";
import { Tabs } from "flowbite-react";
import AdminHeader from "../components/AdminHeader";
import Adminsidebar from "../components/Adminsidebar";
import BookstoreFooter from "/src/components/BookstoreFooter";

export default function AdminBooks() {
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

      {/* Main Layout */}
      <div className="flex flex-1 min-h-[80vh]">
        {/* Sidebar */}
        <div className="w-64 bg-[#e0f2f1] flex-shrink-0 min-h-full border-r shadow-md">
          <Adminsidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto bg-gray-100">
          {/* Page Heading */}
          <h2 className="text-3xl font-bold text-[#004d40] mb-6 text-center">
            📚 All Books
          </h2>

          {/* Flowbite Tabs */}
          <div className="w-full">
            <Tabs aria-label="Book Management Tabs" style="underline">
              {/* Tab 1: Book List */}
              <Tabs.Item active title="Book List">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                  {books.map((book) => (
                    <div
                      key={book.id}
                      className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition cursor-pointer"
                    >
                      <div className="h-40 w-full rounded mb-4 overflow-hidden">
                        <img
                          src={book.coverImage}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-[#004d40] mb-1">
                        {book.title}
                      </h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Author:</span> {book.author}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Category:</span> {book.category}
                      </p>

                      {/* Admin controls */}
                      <div className="flex justify-between mt-4">
                        <button className="text-sm px-3 py-1 bg-[#004d40] text-white rounded hover:bg-[#00695c] transition">
                          Edit
                        </button>
                        <button className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                  {books.length === 0 && (
                    <p className="text-center text-gray-500 col-span-full">
                      No books found.
                    </p>
                  )}
                </div>
              </Tabs.Item>

              {/* Tab 2: Users */}
              <Tabs.Item title="Users">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-[#004d40]"
                      />
                      <h3 className="text-lg font-semibold text-[#004d40]">
                        {user.name}
                      </h3>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  ))}

                  {users.length === 0 && (
                    <p className="text-center text-gray-500 col-span-full">
                      No users found.
                    </p>
                  )}
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <BookstoreFooter />
      </footer>
    </div>
  );
}
