import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="modal-box h-96 w-96 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-out"
        >
          <h3 className="font-bold text-2xl text-white text-center mb-4">Login</h3>
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm text-white font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-white focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-shadow duration-300"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/, message: "Enter a valid email" },
                })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-shadow duration-300"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
          </div>
          {/* Login Button */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-md px-5 py-2 text-sm font-semibold shadow-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
            >
              Login
            </button>
            <p className="text-sm text-gray-600">
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer hover:text-pink-500 transition-colors duration-200"
              >
                Signup
              </Link>{" "}
            </p>
          </div>
          {/* Close Button */}
          <div className="modal-action mt-6 text-center">
            <button
              type="button"
              className="btn bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-pink-500 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              onClick={() => document.getElementById("my_modal_1").close()}
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Login;
