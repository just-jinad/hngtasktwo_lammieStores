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
           🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
