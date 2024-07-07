import Image from "next/image";
import React from "react";
import Card from "../lammiehome/Card";
import { useState } from "react";
import Link from "next/link";

const Main = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
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
          <button 
            className="block sm:hidden text-blue-800" 
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            ☰
          </button>
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
            <button className="bg-blue-800 p-1 rounded text-white">
              Wishlist
            </button>
            <button className="bg-blue-800 p-1 rounded text-white">
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
            <div className="flex justify-center w-full">
              <h1 className="text-xl font-bold">Lammie</h1>
            </div>
            <div className="flex gap-3">
              <button className="text-blue-800">🔍</button>
              <button className="text-blue-800">❤️</button>
              <button className="text-blue-800">🛒</button>
            </div>
          </div>
          {toggleMenu && (
            <div className="sm:hidden flex flex-col items-center mt-4">
              <input
                type="search"
                id="default-search"
                className="block w-full sm:w-80 p-2 text-sm border rounded-lg bg-gray-50"
                placeholder="Search Mockups, Logos..."
                required
              />
              <div className="mt-4">
                <button className="bg-blue-800 p-1 rounded text-white w-full mb-2">
                  Wishlist
                </button>
                <button className="bg-blue-800 p-1 rounded text-white w-full">
                  Your Cart
                </button>
              </div>
            </div>
          )}

          <p>
            <span>Mainpage</span> <span>Category</span> <span>Dress</span>
          </p>
          <div>
            <h2 className="font-bold">Dress</h2>
            <div className="flex gap-4">
              <button className="bg-gray-300 p-2 rounded-xl">Midi ✖️</button>
              <button className="bg-gray-300 p-2 rounded-xl">Black ✖️</button>
              <button className="bg-gray-300 p-2 rounded-xl">XXL ✖️</button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 sm:ml-5">
            {products.map((product) => (
              <>
              <Link href={'/cartpage'}>
              <Card key={product.id} product={product} />
              </Link>
              
              </>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
