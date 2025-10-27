import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "../components/Header";
import BookstoreFooter from "/src/components/BookstoreFooter"

export default function Contact() {
  return (
    <>
      <Header />
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Heading */}
          <h2 className="text-4xl font-bold text-center text-[#004d40] mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Have questions or feedback? We’d love to hear from you!  
            Reach out using the form below or connect with us directly.
          </p>

          {/* Contact Form + Info */}
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Contact Form */}
            <form className="bg-white p-8 shadow-lg rounded-lg space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#004d40] text-white py-3 rounded-md font-semibold hover:bg-[#00695c] transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="bg-[#004d40] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <FaMapMarkerAlt /> BookBase HQ, Kochi, Kerala, India
                  </p>
                  <p className="flex items-center gap-3">
                    <FaPhoneAlt /> +91 98765 43210
                  </p>
                  <p className="flex items-center gap-3">
                    <FaEnvelope /> support@bookbase.com
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <iframe
                  title="BookBase Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.074857899476!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d02e4b0a9d1%3A0x7cf0b91f37b12b5b!2sKochi!5e0!3m2!1sen!2sin!4v1698942356789!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookstoreFooter />
    </>
  );
}
