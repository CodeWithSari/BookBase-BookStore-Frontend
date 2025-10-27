import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Adminsidebar from "../components/Adminsidebar";
import AdminBooks from "./AdminBooks";
import AdminCareers from "./AdminCareers";
import AdminSettings from "./AdminSettings";
import BookstoreFooter from "../../components/BookstoreFooter";

function AdminHome() {
  const [activePage, setActivePage] = useState("home");

  // Render corresponding content based on activePage
  const renderPage = () => {
    switch (activePage) {
      case "allBooks":
        return <AdminBooks />;
      case "careers":
        return <AdminCareers />;
      case "settings":
        return <AdminSettings />;
      default:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              📊 Dashboard Overview
            </h2>
            <p className="text-gray-700">
              Welcome to your admin dashboard! Manage books, users, and settings
              efficiently.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <AdminHeader />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Adminsidebar activePage={activePage} setActivePage={setActivePage} />
        </div>

        {/* Right Content Area */}
        <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
          {renderPage()}
        </main>
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-auto">
        <BookstoreFooter />
      </div>
    </div>
  );
}

export default AdminHome;
