import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import BookstoreFooter from "/src/components/BookstoreFooter";

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  // ✅ BookBase relevant job openings (last 5)
  const jobs = [
    {
      id: 1,
      title: "Digital Marketing Specialist",
      location: "Kochi, India",
      salary: "$1000/month",
      qualification: "MBA / BBA in Marketing",
      experience: "2+ years",
      description:
        "Plan and execute SEO, PPC, and social media marketing campaigns to increase online book sales and website traffic for BookBase.",
    },
    {
      id: 2,
      title: "Content Writer / Book Reviewer",
      location: "Remote",
      salary: "$800/month",
      qualification: "Bachelor’s in English / Journalism",
      experience: "1+ years",
      description:
        "Write engaging book reviews, author interviews, and blog posts. Craft creative descriptions for new book listings and newsletters.",
    },
    {
      id: 3,
      title: "Customer Support Executive",
      location: "Trivandrum, India",
      salary: "$600/month",
      qualification: "Any Graduate",
      experience: "1+ years",
      description:
        "Assist customers with orders, returns, and queries through chat, email, and calls. Maintain a high satisfaction rate for readers and authors.",
    },
    {
      id: 4,
      title: "Inventory Manager",
      location: "Kochi, India",
      salary: "$1000/month",
      qualification: "BBA / Logistics or related field",
      experience: "3+ years",
      description:
        "Oversee inventory, manage supplier relations, and track stock levels of best-selling and newly added books on BookBase.",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      location: "Remote",
      salary: "$1200/month",
      qualification: "Bachelor’s in Design or related field",
      experience: "2+ years",
      description:
        "Design attractive, user-friendly interfaces for the BookBase website and app. Collaborate with developers to improve the user journey.",
    },
  ];

  // Filter search
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Modal handlers ---
  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
    setFormData({
      name: "",
      qualification: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob.title}`);
    handleCloseModal();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="text-center py-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-[#004d40]">Careers at BookBase</h1>
      </div>

      {/* --- Search Bar --- */}
      <div className="flex justify-center py-4 bg-gray-100">
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>

      {/* --- Job Cards --- */}
      <div className="px-4 py-8">
        <h2 className="text-3xl font-bold text-[#004d40] mb-6">Current Openings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="relative bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <button
                onClick={() => handleApplyClick(job)}
                className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
              >
                Apply
              </button>

              <h3 className="text-xl font-bold text-[#004d40] mb-2">{job.title}</h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Salary:</span> {job.salary}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Qualification:</span> {job.qualification}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Experience:</span> {job.experience}
              </p>
              <p className="text-gray-700 mt-2">{job.description}</p>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No opportunities found.
            </p>
          )}
        </div>
      </div>

      {/* --- Apply Modal --- */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-[#004d40] mb-4">
              Application Form
            </h2>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Applying for: {selectedJob.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
              />
              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
              />
              <textarea
                name="coverLetter"
                placeholder="Cover Letter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="4"
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
              />
             <input
  type="file"
  name="resume"
  accept=".pdf,.doc,.docx"
  onChange={handleChange}
  required
  className="w-full border p-2 rounded bg-white 
             file:bg-gray-200 file:text-[#004d40] file:border-none 
             file:px-4 file:py-2 file:rounded-md 
             file:font-semibold file:hover:bg-gray-300 
             file:cursor-pointer"
/>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      name: "",
                      qualification: "",
                      email: "",
                      phone: "",
                      coverLetter: "",
                      resume: null,
                    })
                  }
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <BookstoreFooter />
    </div>
  );
}
