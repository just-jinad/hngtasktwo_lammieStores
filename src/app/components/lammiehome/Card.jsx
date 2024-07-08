import Image from "next/image";
import React from "react";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-2 sm:p-4 border flex flex-col h-full">
      <div className="w-full h-40 sm:h-48 relative">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-between mt-5 sm:mt-4 flex-grow">
        <div className="text-center sm:text-left">
          <h3 className="text-md sm:text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm">Price</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-800 font-bold text-md mt-4">${product.price}</p>

        <div className="mt-2 sm:mt-4 flex justify-end">
          <button className="bg-blue-800 text-white text-sm p-2 rounded">
            🛒
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
