import React from "react";

const Cartnav = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center h-16">
          <div className="col-span-1 flex items-center">
            <h4 className="text-xl font-bold">Lammie Amaris</h4>
          </div>
          <div className="col-span-1 hidden md:flex space-x-4 md:col-span-2 lg:col-span-3 justify-end">
            <a href="#" className="text-gray-700 hover:text-gray-900">Details</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Clearance Sales</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Outlets</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Giftcards</a>
          </div>
          <div className="col-span-1 flex md:hidden justify-end">
            {/* Optional: Add icons or buttons for small screens if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Cartnav;
