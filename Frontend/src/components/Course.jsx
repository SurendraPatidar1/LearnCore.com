import React, { useEffect, useState } from "react";
// import list from "../list.json" 
import Cards from "./Cards"
import {Link} from "react-router-dom"
import axios from "axios"

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async() => {
      try{
         const res = await axios.get("http://localhost:3000/book");
         console.log(res.data); 
         setBook(res.data);
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We're <span className="text-pink-500">delighted</span> to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>

          <p className="mt-12">
            But that’s just the beginning. Want to unlock exclusive content,
            advanced techniques, and personalized guidance to accelerate your
            growth? <br /> <br /> Check out our Premium Courses for: <br /><br /> 
            <div className="text-center">
            ✨ In-depth, step-by-step
            guidance. <br /> ✨ Exclusive access to live Q&A sessions with experts <br /> ✨
            Comprehensive learning materials and resources <br /> ✨👉
            Explore Free Courses and Notes Now</div>
          </p>
        <Link to="/">
           <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-pink-500 duration-200">
            Home
          </button>
        </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {book.map((item) => {
                return <Cards key={item.id} item={item} />
            })}
        </div>
      </div>
    </>
  );
}

export default Course;
