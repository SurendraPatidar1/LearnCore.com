import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal visibility
  const navigate = useNavigate(); // Hook to navigate to other routes

  const handleClose = () => {
    setIsModalOpen(false); // Close the modal
    navigate("/"); // Redirect to the home page
  };

  return (
    <>
      {isModalOpen && (
        <div className="flex min-h-screen items-center justify-center border-[10px] shadow-md">
          <div className="border rounded-md shadow-md shadow-white">
            <form
              onSubmit={handleSubmit(onSubmit)} // Bind the form submission handler
              className="modal-box w-96 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-out"
            >
              <h3 className="font-bold text-2xl text-center mb-4">Signup</h3>
              <div className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-shadow duration-300"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-shadow duration-300"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/, message: "Enter a valid email" },
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="w-full px-4 py-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-shadow duration-300"
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>
              </div>
              {/* Signup Button */}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="submit" // Ensure this is a submit button
                  className="bg-blue-600 text-white rounded-md px-5 py-2 text-sm font-semibold shadow-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
                >
                  Signup
                </button>
                <p className="text-sm text-gray-600">
                  Have an account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer hover:text-pink-500 transition-colors duration-200"
                    onClick={() => {
                      document.getElementById("my_modal_1").showModal();
                    }}
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
              {/* Close Button */}
              <div className="modal-action mt-6 text-center">
                <button
                  type="button" // Prevent this from submitting the form
                  onClick={handleClose} // Close modal and redirect
                  className="btn bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-pink-500 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
