import Image from "next/image";
import React from "react";
import Card from "../lammiehome/Card";

const Main = () => {
  const products = [
    {
      id: 1,
      name: "Maxi Adoline dress",
      price: 300,
      image: "/bluegown.png",
    },
    {
      id: 2,
      name: "Ruched midi dress",
      price: 320,
      image: "/bluegown.png",
    },
    {
      id: 3,
      name: "Long zipper adolf midi dress",
      price: 200,
      image: "/bluegown.png",
    },
    {
      id: 4,
      name: "Long zipper adolf midi dress",
      price: 200,
      image: "/bluegown.png",
    },
    {
      id: 5,
      name: "Long zipper adolf midi dress",
      price: 200,
      image: "/bluegown.png",
    },
    {
      id: 6,
      name: "Long zipper adolf midi dress",
      price: 200,
      image: "/bluegown.png",
    },
    {
      id: 7,
      name: "Long zipper adolf midi dress",
      price: 200,
      image: "/bluegown.png",
    },
    {
      id: 8,
      name: "Long zipper adolf midi dress",
      price: 200,
      image: "/bluegown.png",
    },
    {
      id: 9,
      name: "Long zipper adolf midi dress",
      price: 200,
      image: "/bluegown.png",
    },
    {
      id: 10,
      name: "Long zipper adolf midi dress",
      price: 200,
      image: "/bluegown.png",
    },
    // Add more products as needed
  ];

  return (
    <>
      <main>
        <div className="flex flex-wrap justify-between items-center p-3 sm:ml-64">
         
          <input
            type="search"
            id="default-search"
            className="hidden sm:block w-full sm:w-80 p-2 text-sm border rounded-lg bg-gray-50 mt-8"
            placeholder="Search Mockups, Logos..."
            required
          />
          <div className="hidden sm:block mt-10">
            <h1>ENG 🌐</h1>
          </div>

          <div className="hidden sm:flex mt-10 gap-3">
            <button className="bg-blue-800 p-2 rounded-xl text-white">
              Wishlist
            </button>
            <button className="bg-blue-800 p-2  rounded-xl text-white">
              Your Cart
            </button>
          </div>

          <Image
            className="hidden sm:block"
            src="/lammieProfile.png"
            width={50}
            height={50}
            alt="Profile"
          />
        </div>

        <section className="p-3 sm:ml-72">
          <div className="flex justify-between items-center sm:hidden">
            <button className="block sm:hidden">
              ☰
            </button>
            <div className="flex-1 flex justify-center">
              <h1 className="text-xl font-bold">Lammie</h1>
            </div>
            <div className="flex gap-3">
              <button className="text-blue-800">🔍</button>
              <button className="text-blue-800">❤️</button>
              <button className="text-blue-800">🛒</button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 sm:ml-5">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
