"use client";

import React, { useEffect } from "react";
import Link from "next/link";


export default function Header() {

  useEffect(() => {
  }, []);

  return (
    // <div className="relative h-[100px] w-full bg-transparent flex justify-between items-center md:py-4 lg:px-6 md:px-4 p-2">
    //   <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //       <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //         <span className="self-center text-2xl font-semibold whitespace-nowrap font-mono ">Pet Shipping Consultants</span>
    //       </a>
    //       <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    //         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800">
    //           <li>
    //             <Link
    //               href="/"
    //               className="block py-2 px-3 text-xl font-serif hover:text-[#7c58d3] bg-black rounded md:bg-transparent md:text-black md:p-0 "
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/about"
    //               className="block py-2 px-3 text-xl font-serif bg-black hover:text-[#7c58d3] rounded md:bg-transparent md:text-black md:p-0"
    //             >
    //               About Us
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/pettype"
    //               className="block py-2 px-3 text-xl font-serif bg-black hover:text-[#7c58d3] rounded md:bg-transparent md:text-black md:p-0"
    //             >
    //               Pet Types & Destinations
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/payments"
    //               className="block py-2 px-3 text-xl font-serif bg-black hover:text-[#7c58d3] rounded md:bg-transparent md:text-black md:p-0"
    //             >
    //               Payments
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/fap"
    //               className="block py-2 px-3 text-xl font-serif bg-black hover:text-[#7c58d3] rounded md:bg-transparent md:text-black md:p-0"
    //             >
    //               Testimonials / FAQ
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>


    //     </div>
    //   </nav>
    // </div >
    <div className="flex gap-5 justify-between px-16 absolute top-[20px] z-10 w-full">
      <div className="flex gap-5 justify-between py-1 text-2xl font-semibold leading-6 font-sans text-white text-opacity-80 max-md:flex-wrap">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">About Us</div>
        <div className="cursor-pointer">Services</div>
        <div className="cursor-pointer">FAQ</div>
        <div className="cursor-pointer">Contact</div>
      </div>
    </div>
  );
}
