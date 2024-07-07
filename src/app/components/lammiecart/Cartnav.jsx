import React from "react";

const Cartnav = () => {
  return (
    <>
       <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h4 className="text-xl font-bold">Lammie Amaris</h4>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Details</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Clearance Sales</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Outlets</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Giftcards</a>
                    </div>
                </div>
            </div>
            <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900">Details</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900">Clearance Sales</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900">Giftcards</a>
            </div>
        </nav>
    </>
  );
};

export default Cartnav;
