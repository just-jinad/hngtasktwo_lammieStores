import Image from "next/image";
import React from "react";
import Footer from "../lammiehome/Footer";
import Card from "../lammiehome/Card";
import Link from "next/link";

const Cartmain = () => {
  const products = [
    {
      id: 1,
      name: "Silver A-shape Dress",
      price: 400,
      image: "/Frameeleven.png",
    },
    {
      id: 2,
      name: "Ruched Midi Dress",
      price: 320,
      image: "/Frame12.png",
    },
    {
      id: 3,
      name: "Maxi Bodycon Dress",
      price: 250,
      image: "/Frame13.png",
    },
    {
      id: 4,
      name: "Feranda Strapless Dress",
      price: 150,
      image: "/Frame14.png",
    },
   
  ];

  const sizes = [
    {
      id:1,
      image:'/xtras.png'
    },
    {
      id:2,
      image:'/small.png'
    },
    {
      id:3,
      image:'/med.png'
    },
    {
      id:4,
      image:'/large.png'
    },
    {
      id:5,
      image:'/xtralarge.png'
    },
  ]

  return (
    <>
      <section className="min-h-screen" style={{ backgroundColor: "#cccccc" }}>
        <div className="flex flex-col md:flex-row p-4 md:p-8 lg:px-24 mx-auto max-w-7xl">
          <div className="md:w-1/2 lg:w-1/3">
            <h2 className="font-bold text-xl text-center mt-6 md:mt-10">
              Corporate Midi Dress
            </h2>
            <div className="flex justify-center mt-4">
              <Image
                src="/Framenine.png"
                width={300}
                height={300}
                alt="cart select"
              />
            </div>
            <div className="flex mt-1 items-center justify-center gap-3">
              <Image
                src={"/Framenine.png"}
                width={40}
                height={40}
                alt="white ball"
              />
              <Image
                src={"/Framenine.png"}
                width={40}
                height={40}
                alt="white ball"
              />
              <Image
                src={"/Framenine.png"}
                width={40}
                height={40}
                alt="white ball"
              />
            </div>
          </div>

          <div className="mt-32 flex flex-col items-center">
      <p className="font-bold text-xl">$100.00</p>
      <span>🔴 🔵 ⚫</span>
      <span className="text-sm">red blue black</span>
      <Link href={'checkout'} className="flex items-center">
        <button
          style={{ backgroundColor: "#2d16bb" }}
          className="p-4 w-80 sm:w-80 rounded-xl mt-6 text-white font-bold"
        >
          Add to cart
        </button>
        <Image
          src={"/whiteball.png"}
          width={20}
          height={20}
          alt="white ball"
          className="ml-2"
        />
      </Link>

      <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 mt-14 gap-4">
    {
      sizes.map((data)=>(
        <div className="flex items-center justify-center" key={data.id}>
          <Image 
          src={data.image}
          height={30}
          width={30}
          alt="sizes"
          />
        </div>
      ))
    }
    </div>


    </div>
        </div>
        <div className="px-4">
          <div className="border rounded border-black mt-10 px-4 md:px-8 lg:px-24 mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="w-full sm:w-1/3 p-4">
                <h4 className="font-bold">PRODUCT DETAIL</h4>
                <ul>
                  <li>Back drawstrings</li>
                  <li>Midi Turtle neck</li>
                  <li>Body fitted</li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <h4 className="font-bold">BRAND</h4>
                <p>
                  Lammie Amaris produces quality made outfits inspired by
                  vintage.
                </p>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <h4 className="font-bold">MATERIAL</h4>
                <p>Cotton 100% Polythene 20%</p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <p className="font-bold">⬅️back to catalog</p>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-center font-bold">You Might Also Like</h4>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cartmain;
