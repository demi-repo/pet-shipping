"use client";

import React, { useEffect } from "react";

export default function Header() {

  useEffect(() => {
  }, []);

  return (
    <>
      <div className="sticky bg-white z-50 top-0 left-0 box-border z-999 flex gap-5 px-30 py-8 w-full place-content-center border-b-2 border-solid border-[#ebe5f7]">
        <div className="flex text-lg font-bold font-serif gap-20 place-content-center w-full" style={{ fontFamily: "Nunito, sans-serif" }} >
          <div className="cursor-pointer hover:text-[#7C58D3]"><a href="#home">Home</a></div>
          <div className="cursor-pointer hover:text-[#7C58D3]" ><a href="#aboutus">About Us</a></div>
          <div className="cursor-pointer hover:text-[#7C58D3]"><a href="#services">Services</a></div>
          <div className="cursor-pointer hover:text-[#7C58D3]"><a href="#faq">FAQ</a></div>
          <div className="cursor-pointer hover:text-[#7C58D3]"><a href="#contact">Contact</a></div>
        </div>
      </div>
    </>
  );
}
