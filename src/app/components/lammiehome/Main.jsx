import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../lammiehome/Card';

const Main = () => {
  const products = [
    {
      id: 1,
      name: 'Long Zipper Adolf Midi Dress',
      price: 300,
      image: '/Frameone.png',
    },
    {
      id: 2,
      name: 'Maxi Adeline Dress',
      price: 320,
      image: '/Frametwo.png',
    },
    {
      id: 3,
      name: 'Ruched Midi Dress',
      price: 200,
      image: '/Framethree.png',
    },
    {
      id: 4,
      name: 'Crystal Midi Dress',
      price: 200,
      image: '/Framefour.png',
    },
    {
      id: 5,
      name: 'High Slit Dinner Gown',
      price: 200,
      image: '/Framefive.png',
    },
    {
      id: 6,
      name: 'Maxi Bodycon Dress',
      price: 200,
      image: '/Framesix.png',
    },
    {
      id: 7,
      name: 'Silver A-shape Dress',
      price: 200,
      image: '/Frameseven.png',
    },
    {
      id: 8,
      name: 'Waist cut Maxi Dress',
      price: 200,
      image: '/Frameeight.png',
    },
    {
      id: 9,
      name: 'Corporate Midi Dress',
      price: 200,
      image: '/Framenine.png',
    },
   
  ];

  return (
    <>
      <main>
        <div className="flex flex-wrap justify-between items-center p-3 sm:ml-64">
          <button className="block sm:hidden"></button>
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
            <button className="bg-blue-800 p-1 rounded text-white">Wishlist 💗</button>
            <button className="bg-blue-800 p-1 rounded text-white">Your Cart 🛒</button>
          </div>
          <Image className="hidden sm:block" src="/lammieProfile.png" width={50} height={50} alt="Profile" />
        </div>

        <section className="p-3 sm:ml-72">
          <div className="flex justify-between items-center sm:hidden">
            <button className="block sm:hidden">☰</button>
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
              <Link key={product.id} href="/cartpage" passHref>
                <span className="block">
                  <Card product={product} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
