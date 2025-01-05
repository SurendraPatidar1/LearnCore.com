import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-5 p-2 my-3">
      <div className="card bg-white w-full max-w-sm shadow-lg rounded-lg transform transition-transform hover:scale-105 duration-200">
      <figure className="overflow-hidden">
          <img
            src={item.image} // Use the dynamic image URL from the item object
            alt={item.name} // Use the item name as alt text
            className="w-full h-48 object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-5">
          {/* Title */}
          <h2 className="card-title text-lg font-semibold text-gray-800">
            {item.name}
            <span className="badge bg-secondary text-white ml-2 px-2 py-1 rounded-lg">
              {item.category}
            </span>
          </h2>
          {/* Description */}
          <p className="text-gray-600 mt-2">{item.title}</p>
          
          {/* Card Actions */}
          <div className="card-actions flex justify-between items-center mt-4">
            <div className="text-lg font-bold text-pink-500 badge badge-outline">{item.price}</div>
            <button className="px-4 py-2 bg-blue-400 text-white text-sm font-medium rounded-sm hover:bg-pink-500 transition-colors duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
