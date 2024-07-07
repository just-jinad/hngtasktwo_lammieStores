import React, { useState } from 'react';
import Link from 'next/link';

// import Footer from './Footer';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <button
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none"
                onClick={toggleSidebar}
            >
                <span className="sr-only hidden">Open sidebar</span>
                <svg
                    className="w-6 h-6 hidden"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <div
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? "" : "-translate-x-full"} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full p-10 overflow-y-auto bg-gray-50">
                    <div className="flex items-center mb-5">
                        <span className="text-xl font-bold ">Lammie</span>
                    </div>
                    <div className="space-y-4 font-medium">
                        <div>
                            <h3 className="mb-2  font-bold">Category</h3>
                            <ul className="space-y-1">
                                <li><Link href="#"><span className="hover:underline">T-shirt</span></Link></li>
                                <li><Link href="#"><span className="hover:underline text-blue-900">Dress</span></Link></li>
                                <li><Link href="#"><span className="hover:underline">Sweatshirt</span></Link></li>
                                <li><Link href="#"><span className="hover:underline">Swimsuit</span></Link></li>
                                <li><Link href="#"><span className="hover:underline">Pants and Skirts</span></Link></li>
                                <li><Link href="#"><span className="hover:underline">Blouses</span></Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-2 text-lg font-semibold">Filter by:</h3>
                            <div>
                                <h4 className="mb-1 font-semibold">Type</h4>
                                <ul className="space-y-1">
                                    <li><input type="checkbox" id="bodycon" name="type" /><label htmlFor="bodycon" className="ms-2">Bodycon</label></li>
                                    <li><input type="checkbox" id="shirt" name="type" /><label htmlFor="shirt" className="ms-2">Shirt</label></li>
                                    <li><input type="checkbox" id="mini" name="type" /><label htmlFor="mini" className="ms-2  ">Mini</label></li>
                                    <li><input type="checkbox" id="midi" name="type" defaultChecked /><label htmlFor="midi" className="ms-2 text-blue-900">Midi</label></li>
                                    <li><input type="checkbox" id="long" name="type" /><label htmlFor="long" className="ms-2">Long</label></li>
                                    <li><input type="checkbox" id="a-shape" name="type" /><label htmlFor="a-shape" className="ms-2">A-shape</label></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mt-4 mb-1 font-semibold">Color</h4>
                                <ul className="space-y-1">
                                    <li><input type="checkbox" id="white" name="color" /><label htmlFor="white" className="ms-2">White</label></li>
                                    <li><input type="checkbox" id="pink" name="color" /><label htmlFor="pink" className="ms-2">Pink</label></li>
                                    <li><input type="checkbox" id="blue" name="color" /><label htmlFor="blue" className="ms-2">Blue</label></li>
                                    <li><input className='bg-blue-800' type="checkbox" id="black" name="color" defaultChecked /><label htmlFor="black" className="ms-2  text-blue-900">Black</label></li>
                                    <li><input type="checkbox" id="multicolor" name="color" /><label htmlFor="multicolor" className="ms-2">Multicolor</label></li>
                                    <li><input type="checkbox" id="purple" name="color" /><label htmlFor="purple" className="ms-2">Purple</label></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mt-4 mb-1 font-semibold">Size</h4>
                               
                            </div>
                            <div>
                            <h4 className="mt-4 mb-1 font-semibold">Price</h4>
                               
                            </div>
                        </div>
                        <button style={{backgroundColor:'#2d16bb'}} className="mt-4 w-full p-2 text-white rounded-lg">Apply</button>
                    </div>
                </div>
            </div>

   
        </>
    );
};

export default Sidebar;
