"use client";

import React, { useState, useEffect } from "react";

export default function Header() {

  const [value, setValue] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setValue(true)
      } else {
        setValue(false)
      }
    }

    if (window.window.scrollY > 100)
      setValue(true)

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <div id="mainHeader" className={`sticky ${value ? "bg-[#fff] text-black shadow-[0_10px_30px_0_rgba(124,88,211,.15)]" : "bg-none text-white "} transition-colors duration-100	 z-50 top-0 left-0 box-border z-999 flex gap-5 w-full place-content-left`}>
        <div className="flex flex-col justify-center" >
          <div className="flex flex-row text-lg gap-3 place-content-left w-full">
            {/* <div className="h-full flex flex-row items-center"> */}
            <a className=" cursor-pointer" href="#home"><img src="./assets/logo.svg" className="ml-10 w-32 h-32" /></a>
            {/* </div> */}
            {/* <div className={`${value ? "bg-[#fff] text-[#4878D0] duration-1000" : "bg-none text-white "} cursor-pointer ml-10 py-9 hover:text-[#667085] `}><a href="#home">DIY Pet Shipping Consultants</a></div> */}
            <div className="flex flex-row items-center gap-3">
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`}><a href="#aboutus">About Us</a></div>
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`} ><a href="#petTypes">Pet Types </a></div>
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`} ><a href="#destinations ">Destinations  </a></div>
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`}><a href="#services">Services</a></div>
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`}><a href="#considers">Things to Consider </a></div>
            </div>
            {/* <div className="cursor-pointer hover:text-[#667085] py-9 "><a href="#faq">Testimonials & FAQ</a></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
