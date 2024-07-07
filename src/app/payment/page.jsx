import React from "react";
import Image from "next/image";
import Cartnav from "../components/lammiecart/Cartnav";

const page = () => {
  return (
    <>
      <Cartnav />

      <section className="min-h-screen py-10" style={{backgroundColor:'#d9d9d9'}}>
        <div className="container p-3 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shopping Cart Section */}
          <div className="lg:col-span-2 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="p-2 text-left">Product</th>
                    <th className="p-2 text-left">Size</th>
                    <th className="p-2 text-left">Quantity</th>
                    <th className="p-2 text-left">Total Price</th>
                    <th className="p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Cart Item 1 */}
                  <tr className="border-b">
                    <td className="p-2">
                      <Image
                        src="/lammieblue.png"
                        width={50}
                        height={50}
                        alt="product"
                      />
                    </td>
                    <td className="p-2">
                      <select className="border rounded">
                        <option>2</option>
                      </select>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center">
                        <button className="h-6 w-6 bg-white border rounded-l">
                          -
                        </button>
                        <span className="h-6 w-6 flex items-center justify-center border-t border-b">
                          2
                        </span>
                        <button className="h-6 w-6 bg-white border rounded-r">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2">$150</td>
                    <td className="p-2 text-right">
                      <button className="">X</button>
                    </td>
                  </tr>
                  {/* Cart Item 2 */}
                  <tr className="border-b">
                    <td className="p-2">
                      <Image
                        src="/lammieblue.png"
                        width={50}
                        height={50}
                        alt="product"
                      />
                    </td>
                    <td className="p-2">
                      <select className="border rounded">
                        <option>2</option>
                      </select>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center">
                        <button className="h-6 w-6 bg-white border rounded-l">
                          -
                        </button>
                        <span className="h-6 w-6 flex items-center justify-center border-t border-b">
                          2
                        </span>
                        <button className="h-6 w-6 bg-white border rounded-r">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2">$100</td>
                    <td className="p-2 text-right">
                      <button className="">X</button>
                    </td>
                  </tr>
                  {/* Cart Item 3 */}
                  <tr className="border-b">
                    <td className="p-2">
                      <Image
                        src="/lammieblue.png"
                        width={50}
                        height={50}
                        alt="product"
                      />
                    </td>
                    <td className="p-2">
                      <select className="border rounded">
                        <option>2</option>
                      </select>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center">
                        <button className="h-6 w-6 bg-white border rounded-l">
                          -
                        </button>
                        <span className="h-6 w-6 flex items-center justify-center border-t border-b">
                          2
                        </span>
                        <button className="h-6 w-6 bg-white border rounded-r">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2">$150</td>
                    <td className="p-2 text-right">
                      <button className="">X</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="text-blue-500">&lt; Continue Shopping</button>
              <div className="text-right">
                <p>Sub Total: $400</p>
                <p>Shipping Fee: Free</p>
                <p className="font-bold">Total: $400.00</p>
              </div>
            </div>
          </div>

          {/* Payment Info Section */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Payment Info</h2>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Payment Method</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" /> Credit
                  Card
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" /> Paypal
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Name on Card</label>
              <input
                type="text"
                className="border rounded w-full p-2"
                defaultValue="John Carter"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Card Number</label>
              <input
                type="text"
                className="border rounded w-full p-2"
                defaultValue="**** **** **** 8136"
              />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <label className="block mb-2 font-bold">Expiration Date</label>
                <div className="flex space-x-2">
                  <select className="border rounded p-2">
                    <option>05</option>
                  </select>
                  <select className="border rounded p-2">
                    <option>2024</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-bold">CVV</label>
                <input
                  type="text"
                  className="border rounded w-full p-2"
                  defaultValue="356"
                />
              </div>
            </div>
            <button
              style={{ backgroundColor: "#2d16bb" }}
              className="w-full py-3 text-white rounded-lg font-bold"
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
