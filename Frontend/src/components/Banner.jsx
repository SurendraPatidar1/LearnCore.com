import React from "react";
import banner from "../assets/banner.jpg"
// import banner2 from "../../public/banner2.jpg"
// import p1 from "../../public/p1.jpg"

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-3xl font-bold">
              Hello, Welcome to
              <span className="text-pink-500"> LearnCore</span>, Courses That
              Shape Your
              <span className="text-pink-500"> Future</span>"
            </h1>

            <p className="text-lg">
              "LearnCore is a dynamic platform designed to simplify the way
              students and professionals share and access notes. Whether you're
              collaborating with classmates, revising for exams, or exploring
              new subjects, LearnCore empowers you to connect, share knowledge,
              and stay ahead in your learning journey.
            </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center">
           <img 
            src={banner} alt=""  
            className="w-full max-w-72 h-auto rounded-2xl mt-12 md:mt-32 md:w-64 md:h-80 lg:w-72 lg:h-96 object-cover"/>
        </div>
      </div>
    </>
  );
}

export default Banner;