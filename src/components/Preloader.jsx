import React from "react";

export default function Preloader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMThrcmJkZWl2c3ZkeXhzb2pzdzBzMHgzZ2ZtNnoxdHVidmwxZ3YyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q6yXcrZVem5cQZQiAD/giphy.gif" 
        alt="Loading BookBase Store"
        className="w-40 h-40 mb-6"
      />
      <h1 className="text-2xl font-bold">Loading BookBase Store...</h1>
    </div>
  );
}
