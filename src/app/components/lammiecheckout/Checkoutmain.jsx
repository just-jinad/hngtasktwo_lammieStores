"use client";
import React from "react";
import Image from "next/image";
import Footer from "../lammiehome/Footer";

const Checkoutmain = () => {
  return (
    <>
      <main className="min-h-screen py-10">
        <h1 className="font-bold ml-4">Home Add to cart</h1>
        <div className="container mx-auto p-4">
          {/* Grid container for large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
            {/* SECTION ONE */}
            <section
              className="lg:col-span-2 bg-white p-6 shadow-md mb-8"
              style={{ backgroundColor: "#d9d9d9" }}
            >
              <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    {/* Cart Item 1 */}
                    <tr className="border-b">
                      <td className="p-2">
                        <Image
                          src="/lammieblue.png"
                          width={200}
                          height={200}
                          alt="product"
                        />
                      </td>
                      <td className="p-2">
                        <div className="flex justify-between">
                          <p>Corporate Midi Dress</p>
                          <p className="p-2">$525</p>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-sm font-bold">Color: Blue</span>
                          <span className="text-sm font-bold">Size: XL</span>
                          <div>
                            <span className="text-sm font-bold">Quantity</span>
                            <select name="quantity" id="quantity">
                              <option value="1">1</option>
                            </select>
                          </div>
                        </div>
                        <p className="mt-2">Delivered within 3-5 working days</p>
                        <p className="underline w-full border-t border-black mt-3"></p>

                        <div className="flex justify-between mt-3">
                          <p className="text-blue-800 font-bold">
                            Move to Wishlist
                          </p>
                          <p>X Remove</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>


      {/* ORDER SUMMARY - Visible on large screens */}
      <aside className="hidden lg:block lg:col-span-1 max-h-80 bg-white p-6 shadow-md rounded-lg lg:row-span-2">
              <h2 className="font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between">
                <p>Item subtotal</p>
                <p>$100</p>
              </div>
              <p className="underline w-full border-t border-black mt-3"></p>
              <div className="flex justify-between mt-3">
                <p>Tax</p>
                <p>$50</p>
              </div>
              <p className="underline w-full border-t border-black mt-3"></p>
              <div className="flex justify-between mt-3 mb-3">
                <p>Total</p>
                <p>$150</p>
              </div>
              <p className="underline w-full border-t border-black mt-3"></p>
              <div className="text-center mt-4 bg-blue-800 text-white font-bold p-4">
                Continue
              </div>
            </aside>


            {/* SECTION TWO */}
            <section
              className="lg:col-span-2 bg-white p-6 shadow-md mb-8"
              style={{ backgroundColor: "#d9d9d9" }}
            >
              <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    {/* Cart Item 2 */}
                    <tr className="border-b">
                      <td className="p-2">
                        <Image
                          src="/lammieblue.png"
                          width={200}
                          height={200}
                          alt="product"
                        />
                      </td>
                      <td className="p-2">
                        <div className="flex justify-between">
                          <p>Corporate Midi Dress</p>
                          <p className="p-2">$525</p>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-sm font-bold">Color: Blue</span>
                          <span className="text-sm font-bold">Size: XL</span>
                          <div>
                            <span className="text-sm font-bold">Quantity</span>
                            <select name="quantity" id="quantity">
                              <option value="2">2</option>
                            </select>
                          </div>
                        </div>
                        <p className="mt-2">Delivered within 3-5 working days</p>
                        <p className="underline w-full border-t border-black mt-3"></p>
                        <div className="flex justify-between mt-3">
                          <p className="text-blue-800 font-bold">
                            Move to Wishlist
                          </p>
                          <p>X Remove</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ORDER SUMMARY - Hidden on large screens */}
            <aside className="lg:hidden bg-white p-6 shadow-md rounded-lg mb-8">
              <h2 className="font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between">
                <p>Item subtotal</p>
                <p>$100</p>
              </div>
              <p className="underline w-full border-t border-black mt-3"></p>
              <div className="flex justify-between mt-3">
                <p>Tax</p>
                <p>$50</p>
              </div>
              <p className="underline w-full border-t border-black mt-3"></p>
              <div className="flex justify-between mt-3 mb-3">
                <p>Total</p>
                <p>$150</p>
              </div>
              <p className="underline w-full border-t border-black mt-3"></p>
              <div className="text-center mt-4 bg-blue-800 text-white font-bold p-4">
                Continue
              </div>
            </aside>
            
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Checkoutmain;
