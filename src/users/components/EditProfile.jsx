import React, { useState, useEffect } from "react";

const EditProfile = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    profilePic: "",
    username: "",
    bookstoreUser: "",
   
  });

  // Initialize form data when drawer opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        profilePic: user.profilePic,
        username: user.username,
        bookstoreUser: user.bookstoreUser,
        
      });
    }
  }, [isOpen, user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-10"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative bg-white w-96 h-full shadow-xl p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-[#004d40]">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Picture
            </label>
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
            {formData.profilePic && (
              <img
                src={formData.profilePic}
                alt="Preview"
                className="w-24 h-24 rounded-full mt-2 object-cover border"
              />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bookstore User
            </label>
            <input
              type="text"
              name="bookstoreUser"
              value={formData.bookstoreUser}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

         

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#004d40] text-white rounded hover:bg-[#00695c]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
