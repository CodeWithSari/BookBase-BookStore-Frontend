import React, { useState } from "react";
import Header from "../components/Header";
import BookstoreFooter from "/src/components/BookstoreFooter";
import { Link } from "react-router-dom"; 

export default function AllBooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Sample book data with coverImage
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

  const categories = [
    "Novel",
    "Fiction",
    "Non-Fiction",
    "Finance",
    "Self-Help",
    "Horror",
    "Crime Thriller",
    "Autobiography",
  ];

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(book.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Title */}
      <div className="text-center py-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-[#004d40]">Book Collections</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center py-4 bg-gray-100">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-80 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 py-4 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategories.includes(category)
                ? "bg-[#004d40] text-white"
                : "bg-white text-gray-800"
            } hover:bg-[#004d40] hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Book Cards */}
      <div className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <Link
            to={`/viewBook/${book.id}`}
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
            <h3 className="text-lg font-bold text-[#004d40] mb-1">{book.title}</h3>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Author:</span> {book.author}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Category:</span> {book.category}
            </p>
          </Link>
        ))}

        {filteredBooks.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">No books found.</p>
        )}
      </div>

      <BookstoreFooter />
    </div>
  );
}
