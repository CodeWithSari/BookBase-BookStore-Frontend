import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BookstoreFooter from "/src/components/BookstoreFooter";
import { FaEye } from "react-icons/fa";

// Books data
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

export default function ViewBooks() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  if (!book) return <p className="text-center py-20">Book not found</p>;

  // For demonstration, using coverImage as multiple images
  const bookImages = [book.coverImage, "/images/placeholder1.jpg", "/images/placeholder2.jpg"];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded mt-6 shadow">
        {/* Eye button for modal */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
          >
            <FaEye className="text-xl" />
          </button>
        </div>

        <h1 className="text-3xl font-bold text-[#004d40]">{book.title}</h1>
        <h2 className="text-xl text-gray-700 mb-4">{book.author}</h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-auto object-cover rounded"
            />
          </div>

          <div className="md:w-2/3 space-y-2">
            <p>
              <span className="font-semibold">Category:</span> {book.category}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> Unknown
            </p>
            <p>
              <span className="font-semibold">Language:</span> English
            </p>
            <p>
              <span className="font-semibold">Seller Email:</span> seller@bookbase.com
            </p>
            <p>
              <span className="font-semibold">Price:</span> $12
            </p>
            <p>
              <span className="font-semibold">Pages:</span> 200
            </p>
            <p>
              <span className="font-semibold">ISBN:</span> 123-4567890123
            </p>
            <p className="mt-2">Description about the book goes here.</p>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => navigate("/allBooks")}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
              >
                Back to All Books
              </button>
              <button className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for book images */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg relative max-w-lg w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-black"
            >
              ×
            </button>
            <img
              src={bookImages[modalImageIndex]}
              alt={`Book ${modalImageIndex + 1}`}
              className="w-full h-64 object-cover rounded"
            />
            <div className="flex justify-between mt-2">
              <button
                onClick={() =>
                  setModalImageIndex((prev) =>
                    prev === 0 ? bookImages.length - 1 : prev - 1
                  )
                }
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  setModalImageIndex((prev) =>
                    prev === bookImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      <BookstoreFooter />
    </div>
  );
}
