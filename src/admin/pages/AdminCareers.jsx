import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Adminsidebar from "../components/Adminsidebar";
import BookstoreFooter from "../../components/BookstoreFooter";
import { FaBriefcase, FaUsers, FaSearch, FaBars, FaPlus } from "react-icons/fa";

export default function AdminCareers() {
  const [activeTab, setActiveTab] = useState("jobpost");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Sample job data
   const jobs = [ { id: 1, title: "Digital Marketing Specialist", location: "Kochi, India", salary: "$1000/month", qualification: "MBA / BBA in Marketing", experience: "2+ years", description: "Plan and execute SEO, PPC, and social media marketing campaigns to increase online book sales and website traffic for BookBase.", }, 
    { id: 2, title: "Content Writer / Book Reviewer", location: "Remote", salary: "$800/month", qualification: "Bachelor’s in English / Journalism", experience: "1+ years", description: "Write engaging book reviews, author interviews, and blog posts. Craft creative descriptions for new book listings and newsletters.", }, 
    { id: 3, title: "Customer Support Executive", location: "Trivandrum, India", salary: "$600/month", qualification: "Any Graduate", experience: "1+ years", description: "Assist customers with orders, returns, and queries through chat, email, and calls. Maintain a high satisfaction rate for readers and authors.", }, 
    { id: 4, title: "Inventory Manager", location: "Kochi, India", salary: "$1000/month", qualification: "BBA / Logistics or related field", experience: "3+ years", description: "Oversee inventory, manage supplier relations, and track stock levels of best-selling and newly added books on BookBase.", }, 
    { id: 5, title: "UI/UX Designer", location: "Remote", salary: "$1200/month", qualification: "Bachelor’s in Design or related field", experience: "2+ years", description: "Design attractive, user-friendly interfaces for the BookBase website and app. Collaborate with developers to improve the user journey.", }, ];

  // Sample applicants data
  const applicants = [
    {
      id: 1,
      jobTitle: "Digital Marketing Specialist",
      name: "Anjali Nair",
      qualification: "MBA Marketing",
      email: "anjali.nair@example.com",
      phone: "+91 9876543210",
      coverLetter: "Passionate marketer with 3 years of digital campaign experience.",
      resume: "https://example.com/resume/anjali.pdf",
    },
    {
      id: 2,
      jobTitle: "Content Writer / Book Reviewer",
      name: "Rahul Menon",
      qualification: "BA English Literature",
      email: "rahul.menon@example.com",
      phone: "+91 9123456789",
      coverLetter:
        "Creative writer with a deep love for books and storytelling. Experienced in SEO-based writing.",
      resume: "https://example.com/resume/rahul.pdf",
    },
  ];

  // Filter jobs by title
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <AdminHeader adminName="Amrita" />

      {/* Mobile Header Bar */}
      <div className="lg:hidden flex items-center justify-between bg-[#004d40] text-white px-4 py-3">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-xl p-1">
          <FaBars />
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r shadow-md hidden lg:block">
          <Adminsidebar />
        </div>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r shadow-md lg:hidden">
              <Adminsidebar />
            </div>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Page Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#004d40] mb-4 text-center flex items-center justify-center gap-2">
            <FaBriefcase className="text-[#004d40] text-3xl sm:text-4xl" /> Careers
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveTab("jobpost")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition ${
                activeTab === "jobpost"
                  ? "bg-[#004d40] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaBriefcase /> Job Posts
            </button>

            <button
              onClick={() => setActiveTab("applicants")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition ${
                activeTab === "applicants"
                  ? "bg-[#004d40] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FaUsers /> View Applicants
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            {activeTab === "jobpost" ? (
              <>
                {/* Search Bar and Add Job */}
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 gap-3">
                  <div className="relative w-full sm:max-w-md">
                    <input
                      type="text"
                      placeholder="Search jobs by title..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg py-2 px-10 focus:outline-none focus:ring-2 focus:ring-[#004d40]"
                    />
                    <FaSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
                  </div>

                  <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#00695c] transition"
                  >
                    <FaPlus /> Add Job
                  </button>
                </div>

                {/* Job Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      <div
                        key={job.id}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition flex flex-col justify-between"
                      >
                        <div>
                          <h3 className="text-lg font-bold text-[#004d40] mb-2">
                            {job.title}
                          </h3>
                          <p className="text-gray-700 text-sm mb-1">
                            <span className="font-semibold">Location:</span>{" "}
                            {job.location}
                          </p>
                          <p className="text-gray-700 text-sm mb-1">
                            <span className="font-semibold">Qualification:</span>{" "}
                            {job.qualification}
                          </p>
                        </div>
                        <div className="flex justify-between mt-4">
                          <button className="text-xs sm:text-sm px-3 py-1 bg-[#004d40] text-white rounded hover:bg-[#00695c]">
                            Edit
                          </button>
                          <button className="text-xs sm:text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-600 col-span-full">
                      No jobs found.
                    </p>
                  )}
                </div>
              </>
            ) : (
              // Applicants Table
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm sm:text-base">
                  <thead className="bg-[#004d40] text-white">
                    <tr>
                      <th className="border px-3 py-2">Sl No</th>
                      <th className="border px-3 py-2">Job Title</th>
                      <th className="border px-3 py-2">Name</th>
                      <th className="border px-3 py-2">Qualification</th>
                      <th className="border px-3 py-2">Email</th>
                      <th className="border px-3 py-2">Phone</th>
                      <th className="border px-3 py-2">Cover Letter</th>
                      <th className="border px-3 py-2">Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicants.map((applicant, index) => (
                      <tr key={applicant.id} className="hover:bg-gray-100">
                        <td className="border px-3 py-2 text-center">{index + 1}</td>
                        <td className="border px-3 py-2">{applicant.jobTitle}</td>
                        <td className="border px-3 py-2">{applicant.name}</td>
                        <td className="border px-3 py-2">{applicant.qualification}</td>
                        <td className="border px-3 py-2">{applicant.email}</td>
                        <td className="border px-3 py-2">{applicant.phone}</td>
                        <td className="border px-3 py-2">{applicant.coverLetter}</td>
                        <td className="border px-3 py-2 text-center">
                          <a
                            href={applicant.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#004d40] font-semibold hover:underline"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <BookstoreFooter />
      </footer>

      {/* Add Job Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold text-[#004d40] mb-4 text-center">
              📝 Add Job Post
            </h3>

            <form className="space-y-3">
              <input type="text" placeholder="Job Title" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Location" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Job Type" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Salary" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Qualification" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Experience" className="w-full border p-2 rounded" />
              <textarea placeholder="Job Description" className="w-full border p-2 rounded h-24 resize-none"></textarea>

              <div className="flex justify-between mt-4">
                <button
                  type="reset"
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-[#004d40] text-white rounded hover:bg-[#00695c]"
                >
                  Add Job Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
