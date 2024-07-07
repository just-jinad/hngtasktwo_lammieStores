import Image from "next/image";
import React from "react";
import Card from "../lammiehome/Card"

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
          id: 3,
          name: "Long zipper adolf midi dress",
          price: 200,
          image: "/bluegown.png",
        },
  
        {
          id: 3,
          name: "Long zipper adolf midi dress",
          price: 200,
          image: "/bluegown.png",
        },

     
        {
          id: 3,
          name: "Long zipper adolf midi dress",
          price: 200,
          image: "/bluegown.png",
        },

        {
            id: 3,
            name: "Long zipper adolf midi dress",
            price: 200,
            image: "/bluegown.png",
          },
          {
            id: 3,
            name: "Long zipper adolf midi dress",
            price: 200,
            image: "/bluegown.png",
          },
          {
            id: 3,
            name: "Long zipper adolf midi dress",
            price: 200,
            image: "/bluegown.png",
          },
          {
            id: 3,
            name: "Long zipper adolf midi dress",
            price: 200,
            image: "/bluegown.png",
          },
        // Add more products as needed
      ];
  return (
    <>
      <main>
        <div className="flex p-3 sm:ml-64 justify-between">
          <input
            type="search"
            id="default-search"
            className="block w-80 p-2 ps-10 text-sm  border rounded-lg bg-gray-50 mt-8 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <div className="mt-10">
            <h1>ENG 🌐</h1>
          </div>

          <div className="mt-10 gap-3">
            <button className="bg-blue-800 p-1 rounded text-white">
              Wishlist
            </button>
            <button className="bg-blue-800 p-1 rounded text-white">
              Your Cart
            </button>
          </div>

            <img src="/" alt="" />
    <Image
      src="/lammieProfile.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />
        </div>

        <section className="p-3 sm:ml-72">
          <p>
            <span>Mainpage</span> <span>Category</span> <span>Dress</span>
          </p>
          <div>
            <h2 className="font-bold">Dress</h2>
            <div className="flex gap-4">
              <button className="bg-gray-300 p-2 rounded-xl ">Midi ✖️</button>
              <button className="bg-gray-300 p-2 rounded-xl ">Black ✖️</button>
              <button className="bg-gray-300 p-2 rounded-xl ">XXL ✖️</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 p-3 sm:ml-5">
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
