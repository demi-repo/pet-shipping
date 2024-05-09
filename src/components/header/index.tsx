"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CartIcon from "@/components/icons/cartIcon";
import DownArrowIcon from "@/components/icons/downArrowIcon";
import UserIcon from "@/components/icons/userIcon";
import MenuIcon from "@/components/icons/menuIcon";
import CloseIcon from "@/components/icons/closeIcon";
import StarIcon from "../icons/starIcon";
import PenIcon from "../icons/penIcon";
import CouponIcon from "../icons/couponIcon";
import ShippingIcon from "../icons/shippingIcon";

const images = [
  "https://images.ctfassets.net/9k15kskmpr22/2U7QnU7unuahbjvkUyHiL8/63bad51cf5568f624219925d6963cd04/Flower.png",
  "https://images.ctfassets.net/9k15kskmpr22/6oxrbMtzdej4DTuDiPtPY9/40dff29327f63591ea447c9863458878/Gummies.png",
  "https://images.ctfassets.net/9k15kskmpr22/5Ja1CVWsXXd8ITyLvtj17M/6e2e0a33f7877d2327b58b0e4b358ab1/Edibles.jpg",
  "https://images.ctfassets.net/9k15kskmpr22/2P9W2d3lI2yXx6CimCK8Wh/15e90c843963389dfa01197588e2a4b8/Vapes.png",
  "https://images.ctfassets.net/9k15kskmpr22/6iYXgJtcWOpx0Tmf3HXh3x/3c81379e5ee42baca70b32187c025979/Prerolls.png",
  "https://images.ctfassets.net/9k15kskmpr22/2986lZzzgraikK61C5zxC1/d379226a5ec411177eeae00d4d6b7bf0/Concentrates.png",
  "https://images.ctfassets.net/9k15kskmpr22/2dNBkBco7AhxTiUm9doOAE/90368c93df3c8064b136ad5bf42df07f/PDP_-_Product_details.png",
];

export default function Header() {
  const aClassName =
    "transition-all border-b-2 border-transparent hover:border-black w-max cursor-pointer";
  const [bgImage, setBgImage] = useState(images[6]);
  const [isOpen, setIsOpen] = useState(false);
  const [shopVisible, setShopVisible] = useState(true);
  const [learnVisible, setLearnVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [property, setProperty] = useState("");

  useEffect(() => {
    if (isOpen || isCartOpen) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen, isCartOpen]);

  return (
    <div className="relative h-[60px] w-full bg-transparent flex justify-between items-center md:py-4 lg:px-6 md:px-4 p-2">
      <div
        className={`absolute overflow-y-scroll flex flex-col p-4 gap-7 top-0 left-0 w-full h-screen bg-zinc-900 z-30 ${isOpen ? "visible" : "hidden"
          }`}
      >
        <div className="w-max cursor-pointer" onClick={() => setIsOpen(false)}>
          <CloseIcon fill="white" />
        </div>
        <div className="w-full flex flex-col gap-[3.75rem] text-white font-bold">
          <div className="flex flex-col w-full">
            <div
              className="flex cursor-pointer justify-between w-full items-center"
              onClick={() => setShopVisible(!shopVisible)}
            >
              <span className="uppercase text-sm">Shop</span>
              <DownArrowIcon
                className={`transition-all cursor-pointer scale-150 ${shopVisible ? "rotate-180" : "rotate-0"
                  }`}
              />
            </div>
            <div
              className={`flex flex-col gap-6 overflow-hidden ${shopVisible ? "mt-7 h-max" : "mt-0 h-0"
                }`}
            >
              <span className="font-bold text-sm uppercase">
                shop by category
              </span>
              <div className="grid grid-cols-4 gap-4">
                <a className="w-full cursor-pointer flex flex-col gap-1 justify-center items-center">
                  <img
                    className="object-cover aspect-square rounded-lg"
                    src="https://images.ctfassets.net/9k15kskmpr22/2U7QnU7unuahbjvkUyHiL8/63bad51cf5568f624219925d6963cd04/Flower.png"
                  />
                  <span className="text-[.75rem] font-bold">Flower</span>
                </a>
                <a className="w-full cursor-pointer flex flex-col gap-1 justify-center items-center">
                  <img
                    className="object-cover aspect-square rounded-lg"
                    src="https://images.ctfassets.net/9k15kskmpr22/6oxrbMtzdej4DTuDiPtPY9/40dff29327f63591ea447c9863458878/Gummies.png"
                  />
                  <span className="text-[.75rem] font-bold">Gummies</span>
                </a>
                <a className="w-full cursor-pointer flex flex-col gap-1 justify-center items-center">
                  <img
                    className="object-cover aspect-square rounded-lg"
                    src="https://images.ctfassets.net/9k15kskmpr22/5Ja1CVWsXXd8ITyLvtj17M/6e2e0a33f7877d2327b58b0e4b358ab1/Edibles.jpg"
                  />
                  <span className="text-[.75rem] font-bold">Edibles</span>
                </a>
                <a className="w-full cursor-pointer flex flex-col gap-1 justify-center items-center">
                  <img
                    className="object-cover aspect-square rounded-lg"
                    src="https://images.ctfassets.net/9k15kskmpr22/2P9W2d3lI2yXx6CimCK8Wh/15e90c843963389dfa01197588e2a4b8/Vapes.png"
                  />
                  <span className="text-[.75rem] font-bold">Vapes</span>
                </a>
                <a className="w-full cursor-pointer flex flex-col gap-1 justify-center items-center">
                  <img
                    className="object-cover aspect-square rounded-lg"
                    src="https://images.ctfassets.net/9k15kskmpr22/6iYXgJtcWOpx0Tmf3HXh3x/3c81379e5ee42baca70b32187c025979/Prerolls.png"
                  />
                  <span className="text-[.75rem] font-bold">Pre-Rolls</span>
                </a>
                <a className="w-full cursor-pointer flex flex-col gap-1 justify-center items-center">
                  <img
                    className="object-cover aspect-square rounded-lg"
                    src="https://images.ctfassets.net/9k15kskmpr22/2986lZzzgraikK61C5zxC1/d379226a5ec411177eeae00d4d6b7bf0/Concentrates.png"
                  />
                  <span className="text-[.75rem] font-bold">Concentrate</span>
                </a>
                <a className="w-full cursor-pointer flex flex-col gap-1 justify-center items-center">
                  <img
                    className="object-cover aspect-square rounded-lg"
                    src="https://images.ctfassets.net/9k15kskmpr22/2dNBkBco7AhxTiUm9doOAE/90368c93df3c8064b136ad5bf42df07f/PDP_-_Product_details.png"
                  />
                  <span className="text-[.75rem] font-bold">All</span>
                </a>
              </div>
              <span className="font-bold text-sm uppercase">shop by mood</span>
              <div className="flex gap-4 flex-wrap">
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Euphoric
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Creative
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Focused
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Social
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Chill
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Sleepy
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Energized
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Relieved
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Aroused
                </span>
              </div>
              <span className="font-bold text-sm uppercase">
                shop by potency
              </span>
              <div className="flex gap-4">
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Mild
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Medium
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  High
                </span>
              </div>
              <span className="font-bold text-sm uppercase">more</span>
              <div className="flex gap-4">
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Best Sellers
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Starter Kits
                </span>
                <span className="rounded-lg cursor-pointer bg-zinc-800 p-3 font-medium whitespace-nowrap opacity-1 hover:opacity-[.8]">
                  Merch
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div
              className="flex cursor-pointer justify-between w-full items-center"
              onClick={() => setLearnVisible(!learnVisible)}
            >
              <span className="uppercase text-sm">Learn</span>
              <DownArrowIcon
                className={`transition-all cursor-pointer scale-150 ${learnVisible ? "rotate-180" : "rotate-0"
                  }`}
              />
            </div>
            <div
              className={`flex flex-col gap-12 overflow-hidden ${learnVisible ? "mt-7 h-max" : "mt-0 h-0"
                }`}
            >
              <div className="flex flex-col gap-7">
                <span className="w-max border-b-[2px] border-transparent hover:border-white cursor-pointer font-medium text-sm mt-6">
                  How is this legal?
                </span>
                <span className="w-max border-b-[2px] border-transparent hover:border-white cursor-pointer font-medium text-sm">
                  What is THCa?
                </span>
                <span className="w-max border-b-[2px] border-transparent hover:border-white cursor-pointer font-medium text-sm">
                  Our Cannabinoids
                </span>
                <span className="w-max border-b-[2px] border-transparent hover:border-white cursor-pointer font-medium text-sm">
                  Quality
                </span>
                <span className="w-max border-b-[2px] border-transparent hover:border-white cursor-pointer font-medium text-sm">
                  All Articles
                </span>
              </div>
              <div className="flex flex-col gap-5 ">
                <span className="font-bold text-sm uppercase">
                  have questions?
                </span>
                <span className="font-medium text-sm uppercase">
                  We can help! Contact us or check out our articles for more
                  info.
                </span>
                <a className="flex transition-all h-[50px] md:px-5 md:py-3 px-4 py-2 bg-[#fffcf8] text-[#163317] items-center justify-center md:gap-1 gap-[1px] rounded-[2rem] cursor-pointer hover:text-[#fffcf8] hover:bg-[#244d39] font-bold">
                  View Our Help Desk
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    fontSize="16"
                  >
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <Link
            href="about"
            className="flex border-b-[2px] w-max border-transparent hover:border-white cursor-pointer text-sm"
          >
            About us
          </Link>
          <Link
            href="reviews"
            className="flex border-b-[2px] w-max border-transparent hover:border-white cursor-pointer text-sm"
          >
            Reviews
          </Link>
          <Link
            href="contact"
            className="flex border-b-[2px] w-max border-transparent hover:border-white cursor-pointer text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
      <div>
        <MenuIcon
          className="md:hidden block cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <nav className="md:flex hidden justify-between gap-10">
        <Link
          href="/about"
          className="font-medium text-sm cursor-pointer border-b-2 border-transparent hover:border-black"
        >
          About Us
        </Link>
        <Link
          href="/reviews"
          className="font-medium text-sm cursor-pointer border-b-2 border-transparent hover:border-black"
        >
          Pet Types & Destinations
        </Link>
        <Link
          href="/contact"
          className="font-medium text-sm cursor-pointer border-b-2 border-transparent hover:border-black"
        >
          Consulting Services & Things to Consider
        </Link>
        <Link
          href="/shop"
          className="font-medium text-sm cursor-pointer border-b-2 border-transparent hover:border-black"
        >
          Payments 
        </Link>
        <Link
          href="/product"
          className="font-medium text-sm cursor-pointer border-b-2 border-transparent hover:border-black"
        >
          Testimonials / FAQ   
        </Link>

      </nav>
      <div className="flex flex-row gap-5">
        <Link href="/login">
          <UserIcon className="cursor-pointer" />
        </Link>
      </div>
      <div
        className={`absolute top-0 left-0 w-screen h-screen transition-all bg-black cursor-close-cart ${isCartOpen ? "opacity-30 z-40" : "opacity-0 -z-10"
          }`}
        onClick={() => {
          setProperty("");
          setIsCartOpen(false);
        }}
      />
    </div >
  );
}
