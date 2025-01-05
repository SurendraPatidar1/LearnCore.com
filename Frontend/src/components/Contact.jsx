import React from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_uanu8rk", // Replace with your EmailJS Service ID
        "template_mr4wiqo", // Replace with your EmailJS Template ID
        event.target, // Pass the form element
        "yt0S2hhVYIAM1wpTw" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("An error occurred. Please try again.");
          console.log(error.text);
        }
      );

    // Clear form fields after submission
    event.target.reset();
  };

  return (
    <>
    <Navbar />
    <section className="my-24">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="flex justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-8 w-full max-w-lg bg-gray-900 p-6 rounded-md shadow-md"
        >
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
            className="bg-black text-white text-base border border-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
            className="bg-black text-white text-base border border-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            rows={10}
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
            className="bg-black text-white text-base border border-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-white hover:bg-pink-500 text-black font-bold rounded-lg shadow-lg hover:text-white transition duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 transform scale-x-0 transition-transform duration-300 origin-left"></span>
            <span className="relative z-10 hover:bg-pink-500">Submit</span>
          </button>
        </form>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Contact;
