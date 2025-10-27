import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; 
import "./Auth.css"; 

function Auth({ mode }) {
  const isLogin = mode === "login";

  return (
    <div className={`auth-container ${isLogin ? "login-bg" : "register-bg"}`}>
      <div className="flex flex-col items-center justify-center h-full backdrop-blur-sm text-center px-4">
        
        <h1 className="text-4xl font-bold mb-8 text-white drop-shadow-lg">
          BookBase Store
        </h1>

       
        <div className="p-8 bg-white bg-opacity-90 shadow-lg rounded-md w-80">
          <div className="flex justify-center mb-4 text-4xl text-blue-600">
            <FaUser />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            {isLogin ? "Login" : "Register"}
          </h2>

          <form className="flex flex-col gap-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="User Name"
                className="w-full p-2 border rounded"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className={`w-full py-2 rounded text-white ${
                isLogin ? "bg-blue-600" : "bg-green-600"
              }`}
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

       
          <p className="text-sm text-center mt-4 text-gray-600">
            {isLogin ? (
              <>
                New user?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register here
                </Link>
              </>
            ) : (
              <>
                Already a user?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login here
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
