import Image from "next/image";
import React from "react";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded overflow-hidden shadow-lg p-4 border flex flex-col">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={300}
        className="w-full h-auto object-cover mx-auto"
      />
      <div className="px-4 py-2 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-md mb-2">{product.name}</h3>
          <p className="text-gray-700 text-sm">Price</p>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-800 text-white p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 6.75h13.5M9.75 6.75v12m4.5-12v12M7.5 9.75h9m-9 4.5h9m-6 4.5h3m-8.25 0a3 3 0 003-3h-1.5a1.5 1.5 0 11-3 0h1.5zm12 0a3 3 0 01-3 3h-1.5a1.5 1.5 0 113 0h1.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
