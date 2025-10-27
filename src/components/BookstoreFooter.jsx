import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function BookstoreFooter() {
  return (
    <footer className="bg-[#004d40] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">

        <div>
          <h3 className="text-2xl font-bold mb-3">About BookBase</h3>
          <p className="text-gray-200 leading-relaxed">
            BookBase Store is your digital bookstore in the cloud — discover, read, 
            publish, or sell your books online with ease. Our platform connects 
            readers and authors globally, making book discovery smarter and simpler.
          </p>
        </div>

   
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">Subscribe to Newsletter</h3>
          <p className="text-gray-200 mb-4">
            Stay updated with new releases, offers, and author highlights.
          </p>
          <div className="flex justify-center items-center">
  <input
    type="email"
    placeholder="Enter your email"
    className="p-2 w-60 rounded-l-lg border border-gray-300 text-grey-300 focus:outline-none"
  />
  <button className="bg-yellow-400 text-[#004d40] px-4 py-2 rounded-r-lg hover:bg-yellow-300 font-semibold transition duration-300">
    Subscribe
  </button>
</div>

        </div>

        
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-2xl font-bold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-3">
            <a href="#" className="hover:text-yellow-400 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 text-xl">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-gray-300 text-sm">
            Let’s connect and share your reading journey with us!
          </p>
        </div>
      </div>

      
      <div className="mt-10 border-t border-gray-400 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">BookBase Store</span>. All rights reserved.
      </div>
    </footer>
  );
}
