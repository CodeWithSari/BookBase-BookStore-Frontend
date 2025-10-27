import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Header from "../components/Header";
import BookstoreFooter from "/src/components/BookstoreFooter"

export default function Home() {
  const books = [
    { id: 1, title: "Think & Grow Rich", price: "300 RS : 15% Off", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRI378rJHwOHnefj92NKoMI3Rr4sGxF83PUYgTb8byzYO9EwbX87xZq5ZTLV5526157ijkPoTcjGHJD7qj6BExA9e8hVX9iEbdVjhXnghAT" },
    { id: 2, title: "Atomic Habits", price: "400 RS : 15% Off", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPcyn0xq83Urroj5Ok60I0cprVt6MJPPZh0Q-FflWp-KZ0aBWJ4COTVtmXagqjfg8tEbF7PRxVVoXHm5bikmn2raf3Rn0MLBy9K_Zb7uSOL48BOcEKqtQa" },
    { id: 3, title: "Wings Of Fire", price: "300 RS : 15% Off", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-r9Gxce73V4g-a5pf0_Ee3K93ia4XN2IbdrXm_fB1qbfjb0YmMawp4nixqgf5OxzZrWW8Qq0OAnwfKd6zEfbbO7U3FPfY_JXHoW5Y17c" },
    { id: 4, title: "Ikigai", price: "200 RS : 5% Off", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT8QaepzmE-htaoSH1gc_BvyaR5dIWdCxi-iIptJOKv0O5WdYARCyCBYKdG9e4C2412uFWAKP_N5G0yDCfZWR55ClHQhFVCzKayqtkAgTToyxFRTXhBtmls" },
    { id: 5, title: "Rich Dad Poor Dad", price: "500 RS : 20 Off", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQHrajbTwIT7uXkBCfuSi-1Zmt--I71Jkx7TwOoEls9ayyTxEgr3bva06Kjp2zgZcryQGA7ErHGNn286MIhvwv-FFg1MNcXjkLc0GVAFI6UmfzKTnTHPlMhOQ" },
  ];

  return (
    <>
      <Header />

      <div
  className="h-[calc(100vh-140px)] flex flex-col items-center justify-center text-center space-y-4 px-4 bg-cover bg-center"
  style={{
    backgroundImage: `url('https://media.istockphoto.com/id/1217806850/photo/school-a-lot-of-different-educational-books-on-a-green-background.jpg?s=612x612&w=0&k=20&c=QfWaPQc_cvgTxrL1dUr0E7zyk9Xjtaj1n1IBGkrT-PY=')`,
  }}
>
  <h1 className="text-4xl font-bold text-yellow-300">
    Welcome to <span className="text-white">BookBase Store</span>
  </h1>
  <h2 className="text-2xl font-semibold text-green-300">
    Your Smart Bookstore in the Cloud
  </h2>

  <div className="relative w-80 mt-4">
    <input
      type="text"
      placeholder="Search books..."
      className=" text-white w-full p-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-[#004d40] p-2 rounded-full hover:bg-[#00695c] transition duration-300">
      <FaSearch />
    </button>
  </div>
</div>


  
      <div className="py-12 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#004d40] mb-6 text-center">New Arrivals</h2>
        <h2 className="text-2xl  text-[#004d40] mb-6 text-center">Explore Our New Editions</h2>

       
        <div className="flex items-center justify-center gap-4">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition">
            <FaArrowLeft />
          </button>

          {books.map((book) => (
            <div key={book.id} className="w-50  h-90 bg-white rounded-lg shadow-md p-2 flex flex-col items-center">
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-60 object-cover rounded-md mb-2"
              />
              <h3 className="text-center font-semibold mt-3" >{book.title}</h3>
              <p className="text-green-600 font-bold mt-1">{book.price}</p>
            </div>
          ))}

          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition">
            <FaArrowRight />
          </button>
        </div>

        <div className="text-center mt-6">
          <button className="bg-[#004d40] text-white px-6 py-2 mb-5 rounded-lg shadow-md hover:bg-[#00695c] transition duration-300">
            Explore More
          </button>
        </div>

{/* Featured section */}
        <div className="py-12 px-4 bg-white">
  <h2 className="text-3xl font-bold text-[#004d40] mb-8 text-center">Featured Authors</h2>

  
  <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
    <div className="md:w-1/2 flex justify-center">
      <img
        src="https://www.babelio.com/users/AVT_John-Grisham_3905.jpg"
        alt="John Grisham"
        className="w-64 h-64 object-cover rounded-full shadow-lg"
      />
    </div>
    <div className="md:w-1/2">
      <h3 className="text-2xl font-bold text-[#004d40] mb-4">John Grisham</h3>
      <p className="text-gray-700 text-lg">
        John Grisham is an American author and former lawyer, known for his legal thrillers. His debut novel, "A Time to Kill," was published in 1989. Grisham's books have sold over 300 million copies worldwide, with several adapted into films. He served in the Mississippi House of Representatives from 1983 to 1990.
      </p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
    <div className="md:w-1/2 flex justify-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiW9wNKQPmx8ufqxuKQ4CKg0Rrw8KC4D8Qog&s"
        alt="J.K. Rowling"
        className="w-64 h-64 object-cover rounded-full shadow-lg"
      />
    </div>
    <div className="md:w-1/2">
      <h3 className="text-2xl font-bold text-[#004d40] mb-4">J.K. Rowling</h3>
      <p className="text-gray-700 text-lg">
        Joanne Rowling, known by her pen name J.K. Rowling, is a British author best known for the Harry Potter series. The books have sold over 600 million copies worldwide and have been adapted into films. Rowling has also written novels for adults under the pseudonym Robert Galbraith.
      </p>
    </div>
  </div>
</div>

{/* testimonial section */}
<div className="py-12 px-4 bg-gray-50">
  <h2 className="text-3xl font-bold text-[#004d40] mb-8 text-center">What Our Readers Say</h2>

  <div className="grid md:grid-cols-3 gap-8">
   
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <img
        src="https://mockmind-api.uifaces.co/content/human/125.jpg"
        alt="Reader 1"
        className="w-20 h-20 rounded-full mb-4"
      />
      <h3 className="font-bold text-lg text-[#004d40] mb-2">Avantika</h3>
      <p className="text-gray-700">
        "BookBase Store has transformed the way I read! The collection is amazing and the platform is so user-friendly."
      </p>
    </div>


    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <img
        src="https://mockmind-api.uifaces.co/content/human/92.jpg"
        alt="Reader 2"
        className="w-20 h-20 rounded-full mb-4"
      />
      <h3 className="font-bold text-lg text-[#004d40] mb-2">Mohit</h3>
      <p className="text-gray-700">
        "I love the new arrivals section! I always find something new and exciting to read. Highly recommend!"
      </p>
    </div>

   
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <img
        src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/08/Magic-AI-Avatars.webp"
        alt="Reader 3"
        className="w-20 h-20 rounded-full mb-4"
      />
      <h3 className="font-bold text-lg text-[#004d40] mb-2">Sophia</h3>
      <p className="text-gray-700">
        "The search and filter features make it so easy to find exactly what I want. Fantastic bookstore experience!"
      </p>
    </div>
  </div>
</div>



      </div>
      <BookstoreFooter/>
    </>
  );
}
