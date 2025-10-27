import React, { useState } from "react";
import Header from "../components/Header";
import BookstoreFooter from "/src/components/BookstoreFooter";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  // ---- UI State ----
  const [showForm, setShowForm] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  // ---- User Profile State ----
  const [user, setUser] = useState({
    username: "Saritha",
    bookstoreUser: "saritha_books",
    profilePic:
      "https://t3.ftcdn.net/jpg/15/34/03/58/360_F_1534035806_6gn57ou4V0dVZY6l30h6nEB5gWQRAP6v.jpg",
  });

  // Handle updates from EditProfile Drawer
  const handleUpdate = (updatedData) => {
    setUser((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  // ---- Sell Book Form ----
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    pages: "",
    imgUrl: "",
    price: "",
    discountPrice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBookData({
      ...bookData,
      [name]: files ? files[0] : value,
    });
  };

  const handleReset = () => {
    setBookData({
      title: "",
      author: "",
      pages: "",
      imgUrl: "",
      price: "",
      discountPrice: "",
      abstract: "",
      publisher: "",
      language: "",
      isbn: "",
      category: "",
      image: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book submitted successfully!");
    console.log(bookData);
  };

  // ---- Mock Books ----
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "350",
      description: "A journey of self-discovery and dreams.",
      cover: "/images/alchemist.jpg",
      status: "Approved",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: "420",
      description:
        "An insightful book on building good habits and breaking bad ones.",
      cover: "/images/atomic-habits.jpg",
      status: "Pending",
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "299",
      description:
        "A personal finance classic that changes your mindset about money.",
      cover: "/images/rich-dad.jpg",
      status: "Sold",
    },
  ]);

  const [purchasedBooks] = useState([
    {
      id: 1,
      title: "Becoming",
      author: "Michelle Obama",
      price: "480",
      description:
        "A powerful, inspiring memoir of former First Lady Michelle Obama.",
      cover: "/images/becoming.jpg",
      status: "Delivered",
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "399",
      description: "A timeless classic of love, ambition, and the American Dream.",
      cover: "/images/gatsby.jpg",
      status: "Shipped",
    },
  ]);

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
      case "Delivered":
        return "bg-green-100 text-green-700 border-green-400";
      case "Pending":
      case "Shipped":
        return "bg-yellow-100 text-yellow-700 border-yellow-400";
      case "Sold":
        return "bg-red-100 text-red-700 border-red-400";
      default:
        return "bg-gray-100 text-gray-700 border-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* ---- HEADER ---- */}
       <div className="w-full mt-4"><Header /></div>

      {/* ---- PROFILE HEADER ---- */}
      <div className="w-full relative bg-[#004d40] h-48 flex items-center justify-between px-8">
        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-8">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Edit Button */}
        <button
          className="bg-white text-[#004d40] px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition absolute right-8 top-30"
          onClick={() => setOpenDrawer(true)}
        >
          Edit Profile
        </button>
      </div>

      {/* ---- USER INFO ---- */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8 mt-20 flex flex-col items-start">
        <h1 className="text-2xl font-bold text-gray-800 mt-4">{user.username}</h1>
        <p className="text-gray-600">@{user.bookstoreUser}</p>

        <p className="text-gray-600 text-justify text-sm mt-2 mb-4 max-w-md">
          Passionate reader and seller of inspiring books. I find joy in sharing
          knowledge, stories, and ideas that transform lives. Every book I sell
          is handpicked with care and purpose. My mission is to inspire others
          to read more and dream bigger.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center w-full mt-4 gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => {
              setShowForm(!showForm);
              setShowStatus(false);
              setShowHistory(false);
            }}
          >
            Sell Book
          </button>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            onClick={() => {
              setShowStatus(!showStatus);
              setShowForm(false);
              setShowHistory(false);
            }}
          >
            Book Status
          </button>

          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            onClick={() => {
              setShowHistory(!showHistory);
              setShowForm(false);
              setShowStatus(false);
            }}
          >
            Purchase History
          </button>
        </div>
      </div>

      {/* ---- SELL BOOK FORM ---- */}
      {showForm && (
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 mt-10 mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Book Details</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { name: "title", placeholder: "Book Title", required: true },
              { name: "author", placeholder: "Author Name", required: true },
              { name: "pages", placeholder: "No. of Pages" },
              { name: "imgUrl", placeholder: "Image URL" },
              { name: "price", placeholder: "Price" },
              { name: "discountPrice", placeholder: "Discount Price" },
              { name: "publisher", placeholder: "Publisher" },
              { name: "language", placeholder: "Language" },
              { name: "isbn", placeholder: "ISBN" },
              { name: "category", placeholder: "Category (e.g., Fiction, Finance)" },
            ].map((input) => (
              <input
                key={input.name}
                type="text"
                name={input.name}
                value={bookData[input.name]}
                onChange={handleChange}
                placeholder={input.placeholder}
                className="border p-2 rounded w-full"
                required={input.required || false}
              />
            ))}

            <textarea
              name="abstract"
              value={bookData.abstract}
              onChange={handleChange}
              placeholder="Abstract / Short Description"
              rows="3"
              className="border p-2 rounded w-full md:col-span-2"
            ></textarea>

            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-4 bg-gray-50 md:col-span-2">
              <label className="font-medium mb-2">Upload Book Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="cursor-pointer"
              />
            </div>

            <div className="md:col-span-2 flex justify-center gap-4 mt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ---- BOOK STATUS ---- */}
      {showStatus && (
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8 mt-10 mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Book Status</h2>

          <div className="flex flex-col gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col md:flex-row justify-between items-center border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#004d40]">{book.title}</h3>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Author:</span> {book.author}
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Price:</span> ₹{book.price}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{book.description}</p>
                  <span
                    className={`inline-block mt-3 px-3 py-1 text-sm font-semibold border rounded-full ${getStatusColor(
                      book.status
                    )}`}
                  >
                    {book.status}
                  </span>
                </div>

                <div className="flex flex-col items-center mt-4 md:mt-0">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-24 h-32 object-cover rounded shadow"
                  />
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="mt-3 text-red-600 text-sm font-semibold hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---- PURCHASE HISTORY ---- */}
      {showHistory && (
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8 mt-10 mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Purchase History</h2>

          <div className="flex flex-col gap-6">
            {purchasedBooks.map((book) => (
              <div
                key={book.id}
                className="grid grid-cols-1 md:grid-cols-2 items-center border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#004d40]">{book.title}</h3>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Author:</span> {book.author}
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Price:</span> ₹{book.price}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{book.description}</p>
                  <span
                    className={`inline-block mt-3 px-3 py-1 text-sm font-semibold border rounded-full ${getStatusColor(
                      book.status
                    )}`}
                  >
                    {book.status}
                  </span>
                </div>

                <div className="flex justify-center mt-4 md:mt-0">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-28 h-36 object-cover rounded shadow"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Drawer for Edit Profile */}
      <EditProfile
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
        user={user}
        onSave={handleUpdate}
      />

     <div className="w-full mt-4"> <BookstoreFooter /> </div>
    </div>
  );
};

export default Profile;
