"use client";

import React, { useRef, useState } from "react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NeedCard from "@/components/cards/needCard";
import FavCard from "@/components/cards/favCard";
import ReviewCard from "@/components/cards/reviewCard";
import ArticleCard from "@/components/cards/articleCard";
import "swiper/css";
import "swiper/css/pagination";
import EarPieceIcon from "@/components/icons/earpieceIcon";
import MailIcon from "@/components/icons/mailIcon";
import ChatIcon from "@/components/icons/chatIcon";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <section className="page-section flex justify-center lg:px-6 md:px-4 px-2">
          <div className="md:min-h-[calc(100vh-100px)] min-h-[400px] max-w-screen-3xl w-full rounded-[1.25rem] bg-cover bg-center bg-home-hero lg:p-10 md:p-4 p-2">
            <div className="flex flex-col h-full self-center justify-center text-[#fffcf8] md:gap-6 sm:gap-4 gap-2 md:items-start items-center">
              <h1 className="lg:text-6xl text-4xl font-bold">
                100% LEGAL CANNABIS
                <br />
                FOR THE HIGHMIND
              </h1>
              <p className="text-sm	font-medium">
                Fast next day shipping, no ID or medical card? We have you
                covered.
              </p>
              <a className="lg:w-[342px] w-full max-w-[450px]">
                <div className="flex transition-all h-[50px] md:px-5 md:py-3 px-4 py-2 bg-[#fffcf8] text-black items-center justify-center md:gap-1 gap-[1px] rounded-[2rem] cursor-pointer hover:text-[#fffcf8] hover:bg-black font-bold">
                  Shop now
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
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="page-section lg:px-6 md:px-4 px-2 flex flex-col gap-9 justify-center items-center">
          <div className="flex flex-col justify-center items-center md:gap-4 gap-0">
            <p className="md:text-6xl text-3xl font-bold">
              we hit different ‍😮‍💨
            </p>
            <br />
            <p className="md:text-lg text-base font-medium text-center">
              Federally legal in all 50 states, all natural cannabis shipped to
              your door in 2-3 days.
              <br />
              It&apos;s time to ditch the plug and get baked.
            </p>
          </div>

          <div className="w-full max-w-[1200px] max-h-[400px] md:block hidden">
            <Swiper
              className="w-full h-full"
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              spaceBetween={24}
            >
              <SwiperSlide className="w-full h-full">
                <div className="w-full h-full grid grid-cols-4 gap-6">
                  <FavCard
                    src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                    title="Pluto"
                    startCost="17.00"
                    value="4.6 (2k)"
                    level="Space Bound"
                  />
                  <FavCard
                    src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                    title="Sleepytime Delta-9 THC Gummies"
                    startCost="35.00"
                    value="4.7 (3.4k)"
                    level="Baked"
                  />
                  <FavCard
                    src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                    title="Purple Punch"
                    startCost="15.00"
                    value="4.5 (1k)"
                    level="Space Bound"
                  />
                  <FavCard
                    src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                    title="15mg Delta 9 THC Gummies"
                    startCost="20.00"
                    value="4.7 (7.2k)"
                    level="Baked"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <div className="w-full h-full grid grid-cols-4 gap-6">
                  <FavCard
                    src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                    title="Pluto"
                    startCost="17.00"
                    value="4.6 (2k)"
                    level="Space Bound"
                  />
                  <FavCard
                    src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                    title="Sleepytime Delta-9 THC Gummies"
                    startCost="35.00"
                    value="4.7 (3.4k)"
                    level="Baked"
                  />
                  <FavCard
                    src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                    title="Purple Punch"
                    startCost="15.00"
                    value="4.5 (1k)"
                    level="Space Bound"
                  />
                  <FavCard
                    src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                    title="15mg Delta 9 THC Gummies"
                    startCost="20.00"
                    value="4.7 (7.2k)"
                    level="Baked"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="w-full max-w-[1200px] max-h-[400px] md:hidden block">
            <Swiper
              className="w-full h-full"
              slidesPerView={"auto"}
              spaceBetween={24}
            >
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                  title="Pluto"
                  startCost="17.00"
                  value="4.6 (2k)"
                  level="Space Bound"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                  title="Sleepytime Delta-9 THC Gummies"
                  startCost="35.00"
                  value="4.7 (3.4k)"
                  level="Baked"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                  title="Purple Punch"
                  startCost="15.00"
                  value="4.5 (1k)"
                  level="Space Bound"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                  title="15mg Delta 9 THC Gummies"
                  startCost="20.00"
                  value="4.7 (7.2k)"
                  level="Baked"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                  title="Pluto"
                  startCost="17.00"
                  value="4.6 (2k)"
                  level="Space Bound"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                  title="Sleepytime Delta-9 THC Gummies"
                  startCost="35.00"
                  value="4.7 (3.4k)"
                  level="Baked"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                  title="Purple Punch"
                  startCost="15.00"
                  value="4.5 (1k)"
                  level="Space Bound"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg"
                  title="15mg Delta 9 THC Gummies"
                  startCost="20.00"
                  value="4.7 (7.2k)"
                  level="Baked"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-center w-full">
            <a className="md:max-w-[342px] max-w-full w-full flex transition-all h-[44px] px-5 py-3 items-center justify-center gap-1 rounded-[2rem] cursor-pointer text-white bg-black font-bold hover:bg-[#FFFFFF1F] hover:border-[2px] hover:border-black hover:text-black">
              Shop All Favourite
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
        </section>

        <section className="bg-pink-300 h-[100px] flex items-center justify-center py-6 text-[#fffcf8] overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-scroll text-2xl">
            Cannabis Edibles 🌾 for sleep 🌙 happy hour 🍷 chillin ☁ energy ⚡
            and you 😊
          </div>
        </section>

        <section className="flex justify-center items-center py-[3.75rem]">
          <div className="max-w-screen-2xl w-full px-5 flex flex-col gap-y-10">
            <div className="flex flex-col">
              <p className="md:text-3xl text-xl uppercase text-slate-200">
                Take a look
              </p>
              <div className="flex justify-between">
                <h2 className="font-bold md:text-6xl text-3xl">
                  puff puff pass ‍💨
                </h2>
                <a className="md:flex hidden max-w-[220px] w-full transition-all h-[44px] px-5 py-3 items-center justify-center gap-1 rounded-[2rem] cursor-pointer text-[#fffcf8] bg-black font-bold hover:bg-[#FFFFFF1F] hover:border-[2px] hover:border-black hover:text-black">
                  Shop All
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
              <p className="mt-4 md:text-lg text-sm">
                take a look at our most recent drop, remember the cardinal
                rule...
              </p>
              <p className="md:text-lg text-sm">
                pass the dutchie to the left hand side 👈
              </p>
            </div>
            <div className="w-full h-[258px]">
              <Swiper
                className="w-full h-full"
                spaceBetween={24}
                slidesPerView={"auto"}
              >
                <SwiperSlide className="max-w-[230px] h-full">
                  <NeedCard
                    src="https://images.ctfassets.net/9k15kskmpr22/3cYzQgjBpXffdvRh10pu80/58cffe9584289179d554b240edd10bcc/Bestsellers.png"
                    content="Bestsellers"
                  />
                </SwiperSlide>
                <SwiperSlide className="max-w-[230px] h-full">
                  <NeedCard
                    src="https://images.ctfassets.net/9k15kskmpr22/2U7QnU7unuahbjvkUyHiL8/63bad51cf5568f624219925d6963cd04/Flower.png"
                    content="Flower"
                  />
                </SwiperSlide>
                <SwiperSlide className="max-w-[230px] h-full">
                  <NeedCard
                    src="https://images.ctfassets.net/9k15kskmpr22/6oxrbMtzdej4DTuDiPtPY9/40dff29327f63591ea447c9863458878/Gummies.png"
                    content="Gummies"
                  />
                </SwiperSlide>
                <SwiperSlide className="max-w-[230px] h-full">
                  <NeedCard
                    src="https://images.ctfassets.net/9k15kskmpr22/5Ja1CVWsXXd8ITyLvtj17M/6e2e0a33f7877d2327b58b0e4b358ab1/Edibles.jpg"
                    content="Edibles"
                  />
                </SwiperSlide>
                <SwiperSlide className="max-w-[230px] h-full">
                  <NeedCard
                    src="https://images.ctfassets.net/9k15kskmpr22/2P9W2d3lI2yXx6CimCK8Wh/15e90c843963389dfa01197588e2a4b8/Vapes.png"
                    content="Vapes"
                  />
                </SwiperSlide>
                <SwiperSlide className="max-w-[230px] h-full">
                  <NeedCard
                    src="https://images.ctfassets.net/9k15kskmpr22/6iYXgJtcWOpx0Tmf3HXh3x/3c81379e5ee42baca70b32187c025979/Prerolls.png"
                    content="Pre-Rolls"
                  />
                </SwiperSlide>
                <SwiperSlide className="max-w-[230px] h-full">
                  <NeedCard
                    src="https://images.ctfassets.net/9k15kskmpr22/2986lZzzgraikK61C5zxC1/d379226a5ec411177eeae00d4d6b7bf0/Concentrates.png"
                    content="Concentrates"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="my-[3.5rem] w-full flex justify-center items-center">
          <Swiper
            className="w-full"
            spaceBetween={400}
            loop
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 150,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
          >
            <SwiperSlide className="md:max-w-[72%] max-w-[90%] max-h-max">
              <ReviewCard
                src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg?w=52&h=52"
                title="Pluto"
                star={5}
                content="I've tried several different products, I must say, this has been the best!"
                name="tomas s."
              />
            </SwiperSlide>
            <SwiperSlide className="md:max-w-[72%] max-w-[90%] max-h-max">
              <ReviewCard
                src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg?w=52&h=52"
                title="Pluto"
                star={5}
                content="I've tried several different products, I must say, this has been the best!"
                name="tomas s."
              />
            </SwiperSlide>
            <SwiperSlide className="md:max-w-[72%] max-w-[90%] max-h-max">
              <ReviewCard
                src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg?w=52&h=52"
                title="Pluto"
                star={5}
                content="I've tried several different products, I must say, this has been the best!"
                name="tomas s."
              />
            </SwiperSlide>
            <SwiperSlide className="md:max-w-[72%] max-w-[90%] max-h-max">
              <ReviewCard
                src="https://images.ctfassets.net/9k15kskmpr22/3PRUNygwzE3hyq8kdLR30h/a2ef516679e58e5c900d58ff3221ddfc/Pluto.jpg?w=52&h=52"
                title="Pluto"
                star={5}
                content="I've tried several different products, I must say, this has been the best!"
                name="tomas s."
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="page-section bg-gray-300 h-[100px] flex items-center justify-center py-6 text-[#fffcf8] overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-scroll text-2xl">
            Cannabis Edibles 🌾 for sleep 🌙 happy hour 🍷 chillin ☁ energy ⚡
            and you 😊
          </div>
        </section>

        <section className="page-section flex justify-center items-center px-5">
          <div className="max-w-screen-2xl w-full grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-4">
            <div className="w-full h-[300px] border-2 border-black rounded-md"></div>
            <div className="w-full h-[300px] border-2 border-black rounded-md"></div>
            <div className="w-full h-[300px] border-2 border-black rounded-md"></div>
            <div className="w-full h-[300px] border-2 border-black rounded-md"></div>
          </div>
        </section>

        <section className="page-section flex justify-center md:pb-20 pb-4 px-5">
          <div className="max-w-screen-2xl w-full flex flex-col items-start md:gap-20 gap-4">
            <span className="font-bold md:text-5xl text-3xl max-w-5xl md:leading-normal leading-none">
              Aw jeez, why don&apos;t you sign up for a nice 20% off your first
              order? 🔥
            </span>
            <div className="flex flex-nowrap gap-4 w-full">
              <form className="w-full max-w-5xl">
                <div className="flex items-center border-2 rounded-lg border-black py-2 gap-2 h-[56px] p-4 text-black">
                  <div className="w-[24px] h-[24px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                    </svg>
                  </div>
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Enter Email"
                    aria-label="Full name"
                  />
                  <button className="flex-shrink-0" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <a className="">
                <div className="flex transition-all h-full p-3 whitespace-nowrap bg-black text-white items-center justify-center md:gap-1 gap-[1px] rounded-lg cursor-pointer hover:opacity-[.8] font-bold">
                  Get 20%
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="page-section flex justify-center items-center px-5">
          <div className="max-w-screen-2xl w-full aspect-auto p-6 rounded-[1.25rem] md:h-[629px] h-[488px] bg-cover bg-center bg-video-image-first flex flex-col justify-between">
            <div className="text-[#fef7ee] text-sm font-bold uppercase">
              meet our family farmers
            </div>
            <div className="text-[#fffcf8] flex flex-col gap-4">
              <div className="text-4xl font-bold">
                On the farm with Stoney Branch
              </div>
              <a className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1.23682"
                    width="24.7632"
                    height="24.7632"
                    rx="12.3816"
                    stroke="#FFFCF8"
                    strokeWidth="2"
                  ></rect>
                  <path
                    d="M19.5 13.7368L9 18.5L9 8.97368L19.5 13.7368Z"
                    fill="#FFFCF8"
                  ></path>
                </svg>
                Watch the video
              </a>
            </div>
          </div>
        </section>

        <section className="md:flex hidden page-section justify-center items-center px-5">
          <div className="max-w-screen-2xl w-full aspect-auto rounded-[1.25rem] h-[629px] grid grid-cols-4 gap-6">
            <div className="col-span-2 flex flex-col gap-6">
              <div className="overflow-hidden relative w-full rounded-[1.5rem]">
                <img
                  src={
                    "https://images.ctfassets.net/9k15kskmpr22/5cX5g2JRfp1JwJto5dePSY/b2f971e00e997509954eed1e7901bd25/Desktop_Home_Article_Legal.png"
                  }
                  className="h-[442px] object-cover	w-full"
                />
                <div className="absolute w-[300px] pl-[40px] top-[30px]">
                  <svg
                    width="164"
                    height="58"
                    viewBox="0 0 164 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.46501"
                      y="1.46501"
                      width="161.07"
                      height="55.07"
                      stroke="#FFFCF8"
                      strokeWidth="2.93003"
                    ></rect>
                    <path
                      d="M65.3534 27H62.925V17.9755H60.9724V15.7276H65.3534V27ZM66.6497 21.372C66.6497 18.3037 68.2905 15.5307 71.4737 15.5307C74.6568 15.5307 76.2977 18.3037 76.2977 21.372C76.2977 24.4403 74.6568 27.2133 71.4737 27.2133C68.2905 27.2133 66.6497 24.4403 66.6497 21.372ZM73.8528 21.372C73.8528 19.5671 73.1309 17.8114 71.4737 17.8114C69.8164 17.8114 69.0945 19.5671 69.0945 21.372C69.0945 23.1769 69.8164 24.9326 71.4737 24.9326C73.1309 24.9326 73.8528 23.1769 73.8528 21.372ZM77.0817 21.372C77.0817 18.3037 78.7225 15.5307 81.9057 15.5307C85.0888 15.5307 86.7297 18.3037 86.7297 21.372C86.7297 24.4403 85.0888 27.2133 81.9057 27.2133C78.7225 27.2133 77.0817 24.4403 77.0817 21.372ZM84.2848 21.372C84.2848 19.5671 83.5629 17.8114 81.9057 17.8114C80.2484 17.8114 79.5265 19.5671 79.5265 21.372C79.5265 23.1769 80.2484 24.9326 81.9057 24.9326C83.5629 24.9326 84.2848 23.1769 84.2848 21.372ZM92.9284 18.3037C92.9284 19.8296 91.6649 21.011 90.1062 21.011C88.5474 21.011 87.3004 19.8296 87.3004 18.3037C87.3004 16.7777 88.5474 15.5963 90.1062 15.5963C91.6649 15.5963 92.9284 16.7777 92.9284 18.3037ZM90.1062 19.4358C90.7297 19.4358 91.2055 18.9436 91.2055 18.3037C91.2055 17.6638 90.7297 17.1715 90.1062 17.1715C89.4826 17.1715 89.0068 17.6638 89.0068 18.3037C89.0068 18.9436 89.4826 19.4358 90.1062 19.4358ZM90.5164 27H88.3341L96.6858 15.7276H98.8681L90.5164 27ZM97.0796 27.1313C95.5208 27.1313 94.2738 25.9499 94.2738 24.4239C94.2738 22.898 95.5208 21.7166 97.0796 21.7166C98.6548 21.7166 99.9018 22.898 99.9018 24.4239C99.9018 25.9499 98.6548 27.1313 97.0796 27.1313ZM97.0796 25.5561C97.7031 25.5561 98.1954 25.0638 98.1954 24.4239C98.1954 23.784 97.7031 23.2918 97.0796 23.2918C96.4561 23.2918 95.9803 23.784 95.9803 24.4239C95.9803 25.0638 96.4561 25.5561 97.0796 25.5561ZM30.686 38.3237V43H28.2248V31.5143H34.8044V33.7458H30.686V36.0758H34.4763V38.3237H30.686ZM41.1227 40.2598L43.1409 41.0638C42.4682 42.3929 41.1555 43.2133 39.3835 43.2133C36.8566 43.2133 35.0845 41.4576 35.0845 38.9472C35.0845 36.5024 36.8894 34.6811 39.285 34.6811C41.7298 34.6811 43.4199 36.4696 43.4199 39.0128C43.4199 39.2918 43.4035 39.5051 43.387 39.6035H37.4309C37.5129 40.5552 38.3826 41.2443 39.3835 41.2443C40.2695 41.2443 40.7453 40.8669 41.1227 40.2598ZM37.4473 38.0447H41.0735C40.975 37.1751 40.2367 36.5516 39.2686 36.5516C38.3169 36.5516 37.5457 37.2736 37.4473 38.0447ZM50.363 31.5143H52.7421V43H50.363V41.9171C49.8051 42.7375 48.8042 43.1969 47.7376 43.1969C45.5554 43.1969 43.8981 41.3592 43.8981 38.9472C43.8981 36.5516 45.5554 34.6975 47.7376 34.6975C48.8042 34.6975 49.8051 35.1077 50.363 35.9445V31.5143ZM46.2773 38.9472C46.2773 40.1122 47.1962 41.0474 48.3612 41.0474C49.5261 41.0474 50.445 40.1122 50.445 38.9472C50.445 37.7822 49.5261 36.8469 48.3612 36.8469C47.1962 36.8469 46.2773 37.7822 46.2773 38.9472ZM59.7434 40.2598L61.7616 41.0638C61.0889 42.3929 59.7762 43.2133 58.0042 43.2133C55.4773 43.2133 53.7052 41.4576 53.7052 38.9472C53.7052 36.5024 55.5101 34.6811 57.9057 34.6811C60.3505 34.6811 62.0406 36.4696 62.0406 39.0128C62.0406 39.2918 62.0242 39.5051 62.0078 39.6035H56.0516C56.1336 40.5552 57.0033 41.2443 58.0042 41.2443C58.8902 41.2443 59.366 40.8669 59.7434 40.2598ZM56.068 38.0447H59.6942C59.5958 37.1751 58.8574 36.5516 57.8893 36.5516C56.9376 36.5516 56.1664 37.2736 56.068 38.0447ZM68.0175 34.7631V37.2243C67.8862 37.1587 67.6565 37.1259 67.4104 37.1259C66.0813 37.1259 65.2937 38.1104 65.2937 39.702V43H62.9146V34.8944H65.2773V36.2234C65.7039 35.2882 66.5572 34.7139 67.6073 34.7139C67.7878 34.7139 67.9683 34.7467 68.0175 34.7631ZM74.5765 34.8944H76.9229V43H74.5765V41.9171C74.0187 42.7375 73.0178 43.1969 71.9512 43.1969C69.7689 43.1969 68.1117 41.3592 68.1117 38.9472C68.1117 36.5516 69.7689 34.6975 71.9512 34.6975C73.0178 34.6975 74.0187 35.1077 74.5765 35.9445V34.8944ZM70.4909 38.9472C70.4909 40.1122 71.4098 41.0474 72.5747 41.0474C73.7397 41.0474 74.6586 40.1122 74.6586 38.9472C74.6586 37.7822 73.7397 36.8469 72.5747 36.8469C71.4098 36.8469 70.4909 37.7822 70.4909 38.9472ZM78.3786 31.5143H80.7742V43H78.3786V31.5143ZM82.2249 31.5143H84.6205V43H82.2249V31.5143ZM87.1706 46.6754C86.5306 46.6754 86.0876 46.5278 85.8087 46.3801V44.3783C86.0876 44.5096 86.3994 44.5752 86.7275 44.5752C87.4331 44.5752 87.9089 44.2962 88.2371 43.5087L88.4668 42.9836L85.1852 34.8944H87.712L89.7302 40.3255L91.7813 34.8944H94.2425L90.6163 43.7056C89.7631 45.8058 88.6965 46.6754 87.1706 46.6754ZM98.1261 31.5143H100.587V40.6864H104.591V43H98.1261V31.5143ZM110.816 40.2598L112.834 41.0638C112.161 42.3929 110.849 43.2133 109.076 43.2133C106.55 43.2133 104.778 41.4576 104.778 38.9472C104.778 36.5024 106.582 34.6811 108.978 34.6811C111.423 34.6811 113.113 36.4696 113.113 39.0128C113.113 39.2918 113.096 39.5051 113.08 39.6035H107.124C107.206 40.5552 108.076 41.2443 109.076 41.2443C109.963 41.2443 110.438 40.8669 110.816 40.2598ZM107.14 38.0447H110.767C110.668 37.1751 109.93 36.5516 108.962 36.5516C108.01 36.5516 107.239 37.2736 107.14 38.0447ZM119.941 41.7202C119.449 42.4585 118.481 42.918 117.414 42.918C115.216 42.918 113.591 41.1787 113.591 38.8487C113.591 36.486 115.232 34.6811 117.414 34.6811C118.497 34.6811 119.482 35.1569 119.941 35.9445V34.8944H122.304V42.4749C122.304 45.0018 120.679 46.7575 117.841 46.7575C115.921 46.7575 114.444 45.9371 113.804 44.608L115.708 43.4758C116.134 44.2798 116.922 44.7393 117.841 44.7393C119.154 44.7393 119.941 43.9024 119.941 42.4749V41.7202ZM120.023 38.8487C120.023 37.7002 119.121 36.7977 118.005 36.7977C116.906 36.7977 116.003 37.7002 116.003 38.8487C116.003 39.9973 116.906 40.8998 118.005 40.8998C119.121 40.8998 120.023 39.9973 120.023 38.8487ZM129.735 34.8944H132.081V43H129.735V41.9171C129.177 42.7375 128.176 43.1969 127.11 43.1969C124.927 43.1969 123.27 41.3592 123.27 38.9472C123.27 36.5516 124.927 34.6975 127.11 34.6975C128.176 34.6975 129.177 35.1077 129.735 35.9445V34.8944ZM125.649 38.9472C125.649 40.1122 126.568 41.0474 127.733 41.0474C128.898 41.0474 129.817 40.1122 129.817 38.9472C129.817 37.7822 128.898 36.8469 127.733 36.8469C126.568 36.8469 125.649 37.7822 125.649 38.9472ZM133.537 31.5143H135.933V43H133.537V31.5143Z"
                      fill="#FFFCF8"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start text-black">
                <h3 className="font-bold text-2xl">Wait…legal THC?</h3>
                <p>
                  Everything you need to know about our federally legal cannabis
                </p>
                <a className="text-lg	font-medium flex gap-1 items-center">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    fontSize="16"
                  >
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden relative w-full rounded-[1.5rem]">
                <img
                  src={
                    "https://images.ctfassets.net/9k15kskmpr22/5cp90skJxZu79Dky0g55MS/92580afad8b09d7cace95e0ad75c2614/Desktop_Home_Article_Lab_tested.png"
                  }
                  className="h-[442px] object-cover	w-full"
                />
                <div className="absolute w-full px-[20%] top-[30px]">
                  <svg
                    width="164"
                    height="58"
                    viewBox="0 0 164 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.46501"
                      y="1.46501"
                      width="161.07"
                      height="55.07"
                      stroke="#FFFCF8"
                      strokeWidth="2.93003"
                    ></rect>
                    <path
                      d="M44.4102 23.5143H46.8714V32.6864H50.875V35H44.4102V23.5143ZM57.5265 26.8944H59.8728V35H57.5265V33.9171C56.9686 34.7375 55.9677 35.1969 54.9012 35.1969C52.7189 35.1969 51.0616 33.3592 51.0616 30.9472C51.0616 28.5516 52.7189 26.6975 54.9012 26.6975C55.9677 26.6975 56.9686 27.1077 57.5265 27.9445V26.8944ZM53.4408 30.9472C53.4408 32.1122 54.3597 33.0474 55.5247 33.0474C56.6896 33.0474 57.6085 32.1122 57.6085 30.9472C57.6085 29.7822 56.6896 28.8469 55.5247 28.8469C54.3597 28.8469 53.4408 29.7822 53.4408 30.9472ZM63.7077 35H61.3285V23.5143H63.7077V27.9773C64.282 27.1405 65.2665 26.6975 66.333 26.6975C68.5153 26.6975 70.1725 28.5352 70.1725 30.9472C70.1725 33.3428 68.5153 35.1969 66.333 35.1969C65.2665 35.1969 64.282 34.8031 63.7077 33.9499V35ZM67.7934 30.9472C67.7934 29.7822 66.8745 28.8469 65.7095 28.8469C64.5445 28.8469 63.6257 29.7822 63.6257 30.9472C63.6257 32.1122 64.5445 33.0474 65.7095 33.0474C66.8745 33.0474 67.7934 32.1122 67.7934 30.9472ZM73.5542 25.8114V23.5143H82.0864V25.8114H79.0673V35H76.5897V25.8114H73.5542ZM87.0665 32.2598L89.0847 33.0638C88.412 34.3929 87.0994 35.2133 85.3273 35.2133C82.8004 35.2133 81.0283 33.4576 81.0283 30.9472C81.0283 28.5024 82.8332 26.6811 85.2288 26.6811C87.6736 26.6811 89.3637 28.4696 89.3637 31.0128C89.3637 31.2918 89.3473 31.5051 89.3309 31.6035H83.3747C83.4567 32.5552 84.3264 33.2443 85.3273 33.2443C86.2133 33.2443 86.6892 32.8669 87.0665 32.2598ZM83.3911 30.0447H87.0173C86.9189 29.1751 86.1805 28.5516 85.2124 28.5516C84.2607 28.5516 83.4896 29.2736 83.3911 30.0447ZM92.9759 28.6008C92.5329 28.6008 92.2211 28.8305 92.2211 29.1587C92.2211 29.454 92.4509 29.6673 92.8939 29.7822L93.9112 30.0447C95.4371 30.4385 96.2575 31.2918 96.2575 32.4403C96.2575 34.0647 94.8793 35.2133 92.9923 35.2133C91.3843 35.2133 90.1045 34.4749 89.563 33.2279L91.4992 32.1614C91.7945 32.8341 92.4016 33.2607 93.0087 33.2607C93.5174 33.2607 93.862 33.031 93.862 32.6372C93.862 32.3583 93.6158 32.145 93.1236 32.0301L92.1719 31.8004C90.646 31.4394 89.8584 30.5862 89.8584 29.3064C89.8584 27.764 91.1382 26.6811 92.9923 26.6811C94.387 26.6811 95.6997 27.4358 96.2083 28.568L94.2558 29.6017C94.0096 28.9946 93.4682 28.6008 92.9759 28.6008ZM97.4253 24.5152H99.8045V26.8944H101.856V28.8633H99.8045V31.8332C99.8045 32.7029 100.182 33.0474 100.97 33.0474C101.265 33.0474 101.593 32.9654 101.856 32.8013V34.8687C101.495 35.0492 100.953 35.1969 100.182 35.1969C98.4755 35.1969 97.4253 34.1468 97.4253 32.3419V28.8633H96.2768V26.8944H97.4253V24.5152ZM108.139 32.2598L110.158 33.0638C109.485 34.3929 108.172 35.2133 106.4 35.2133C103.873 35.2133 102.101 33.4576 102.101 30.9472C102.101 28.5024 103.906 26.6811 106.302 26.6811C108.747 26.6811 110.437 28.4696 110.437 31.0128C110.437 31.2918 110.42 31.5051 110.404 31.6035H104.448C104.53 32.5552 105.399 33.2443 106.4 33.2443C107.286 33.2443 107.762 32.8669 108.139 32.2598ZM104.464 30.0447H108.09C107.992 29.1751 107.253 28.5516 106.285 28.5516C105.334 28.5516 104.563 29.2736 104.464 30.0447ZM117.38 23.5143H119.759V35H117.38V33.9171C116.822 34.7375 115.821 35.1969 114.754 35.1969C112.572 35.1969 110.915 33.3592 110.915 30.9472C110.915 28.5516 112.572 26.6975 114.754 26.6975C115.821 26.6975 116.822 27.1077 117.38 27.9445V23.5143ZM113.294 30.9472C113.294 32.1122 114.213 33.0474 115.378 33.0474C116.543 33.0474 117.462 32.1122 117.462 30.9472C117.462 29.7822 116.543 28.8469 115.378 28.8469C114.213 28.8469 113.294 29.7822 113.294 30.9472Z"
                      fill="#FFFCF8"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start text-black">
                <h3 className="font-bold text-2xl">
                  DEA-Certified 3rd Party Tested
                </h3>
                <p>Learn about our transparent testing</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden relative w-full rounded-[1.5rem]">
                <img
                  src={
                    "https://images.ctfassets.net/9k15kskmpr22/07Z0snO20DoQd8ZFEcQHO/13b1b0ffd18fb7b817e39f5ea2e3d182/Desktop_Home_Article_Discreet_Packeging.png"
                  }
                  className="h-[442px] object-cover	w-full"
                />
                <div className="absolute w-full px-[20%] top-[30px]">
                  <svg
                    width="164"
                    height="58"
                    viewBox="0 0 164 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.46501"
                      y="1.46501"
                      width="161.07"
                      height="55.07"
                      stroke="#FFFCF8"
                      strokeWidth="2.93003"
                    ></rect>
                    <path
                      d="M64.3395 29.2571C64.3395 32.4896 61.7142 35 58.4982 35H54.6095V23.5143H58.4982C61.7142 23.5143 64.3395 26.0247 64.3395 29.2571ZM61.8127 29.2571C61.8127 27.3538 60.3359 25.8278 58.4326 25.8278H57.0707V32.6864H58.4326C60.3359 32.6864 61.8127 31.1605 61.8127 29.2571ZM67.8018 35H65.4062V26.8944H67.8018V35ZM67.9987 24.548C67.9987 25.3028 67.3752 25.9427 66.604 25.9427C65.8328 25.9427 65.2093 25.3028 65.2093 24.548C65.2093 23.7932 65.8328 23.1533 66.604 23.1533C67.3752 23.1533 67.9987 23.7932 67.9987 24.548ZM71.9106 28.6008C71.4676 28.6008 71.1558 28.8305 71.1558 29.1587C71.1558 29.454 71.3856 29.6673 71.8286 29.7822L72.8459 30.0447C74.3718 30.4385 75.1923 31.2918 75.1923 32.4403C75.1923 34.0647 73.814 35.2133 71.927 35.2133C70.319 35.2133 69.0392 34.4749 68.4977 33.2279L70.4339 32.1614C70.7292 32.8341 71.3363 33.2607 71.9434 33.2607C72.4521 33.2607 72.7967 33.031 72.7967 32.6372C72.7967 32.3583 72.5505 32.145 72.0583 32.0301L71.1066 31.8004C69.5807 31.4394 68.7931 30.5862 68.7931 29.3064C68.7931 27.764 70.0729 26.6811 71.927 26.6811C73.3217 26.6811 74.6344 27.4358 75.143 28.568L73.1905 29.6017C72.9443 28.9946 72.4029 28.6008 71.9106 28.6008ZM75.6034 30.9472C75.6034 28.5024 77.3918 26.6811 79.9351 26.6811C80.6407 26.6811 81.379 26.8451 81.9697 27.1897V29.4376C81.4118 29.0438 80.8376 28.8469 80.2141 28.8469C78.967 28.8469 78.0154 29.7166 78.0154 30.9472C78.0154 32.1614 78.9506 33.0474 80.2141 33.0474C80.854 33.0474 81.4775 32.7849 81.9861 32.4239V34.6882C81.3298 35.0492 80.6078 35.2133 79.9023 35.2133C77.4083 35.2133 75.6034 33.4904 75.6034 30.9472ZM88.105 26.7631V29.2243C87.9737 29.1587 87.744 29.1259 87.4979 29.1259C86.1688 29.1259 85.3812 30.1104 85.3812 31.702V35H83.002V26.8944H85.3648V28.2234C85.7914 27.2882 86.6446 26.7139 87.6948 26.7139C87.8753 26.7139 88.0557 26.7467 88.105 26.7631ZM94.2374 32.2598L96.2556 33.0638C95.5829 34.3929 94.2702 35.2133 92.4981 35.2133C89.9713 35.2133 88.1992 33.4576 88.1992 30.9472C88.1992 28.5024 90.0041 26.6811 92.3997 26.6811C94.8445 26.6811 96.5345 28.4696 96.5345 31.0128C96.5345 31.2918 96.5181 31.5051 96.5017 31.6035H90.5456C90.6276 32.5552 91.4972 33.2443 92.4981 33.2443C93.3842 33.2443 93.86 32.8669 94.2374 32.2598ZM90.562 30.0447H94.1882C94.0897 29.1751 93.3513 28.5516 92.3833 28.5516C91.4316 28.5516 90.6604 29.2736 90.562 30.0447ZM103.051 32.2598L105.069 33.0638C104.396 34.3929 103.084 35.2133 101.312 35.2133C98.7849 35.2133 97.0128 33.4576 97.0128 30.9472C97.0128 28.5024 98.8177 26.6811 101.213 26.6811C103.658 26.6811 105.348 28.4696 105.348 31.0128C105.348 31.2918 105.332 31.5051 105.315 31.6035H99.3592C99.4412 32.5552 100.311 33.2443 101.312 33.2443C102.198 33.2443 102.674 32.8669 103.051 32.2598ZM99.3756 30.0447H103.002C102.903 29.1751 102.165 28.5516 101.197 28.5516C100.245 28.5516 99.474 29.2736 99.3756 30.0447ZM106.423 24.5152H108.802V26.8944H110.853V28.8633H108.802V31.8332C108.802 32.7029 109.179 33.0474 109.967 33.0474C110.262 33.0474 110.591 32.9654 110.853 32.8013V34.8687C110.492 35.0492 109.951 35.1969 109.179 35.1969C107.473 35.1969 106.423 34.1468 106.423 32.3419V28.8633H105.274V26.8944H106.423V24.5152Z"
                      fill="#FFFCF8"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start text-black">
                <h3 className="font-bold text-2xl">Discreet Delivery</h3>
                <p>Keep your THC to yourself</p>
              </div>
            </div>
          </div>
        </section>

        <section className="md:hidden flex page-section justify-center items-center px-5">
          <div className="max-w-screen-2xl w-full">
            <Swiper
              className="w-full h-full"
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              spaceBetween={24}
            >
              <SwiperSlide className="w-full h-full pb-7">
                <div className="col-span-2 flex flex-col gap-6">
                  <div className="overflow-hidden relative w-full rounded-[1.5rem]">
                    <img
                      src={
                        "https://images.ctfassets.net/9k15kskmpr22/5cX5g2JRfp1JwJto5dePSY/b2f971e00e997509954eed1e7901bd25/Desktop_Home_Article_Legal.png"
                      }
                      className="aspect-[311/240] object-cover w-full"
                    />
                    <div className="absolute w-[300px] pl-[40px] top-[30px]">
                      <svg
                        width="164"
                        height="58"
                        viewBox="0 0 164 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.46501"
                          y="1.46501"
                          width="161.07"
                          height="55.07"
                          stroke="#FFFCF8"
                          strokeWidth="2.93003"
                        ></rect>
                        <path
                          d="M65.3534 27H62.925V17.9755H60.9724V15.7276H65.3534V27ZM66.6497 21.372C66.6497 18.3037 68.2905 15.5307 71.4737 15.5307C74.6568 15.5307 76.2977 18.3037 76.2977 21.372C76.2977 24.4403 74.6568 27.2133 71.4737 27.2133C68.2905 27.2133 66.6497 24.4403 66.6497 21.372ZM73.8528 21.372C73.8528 19.5671 73.1309 17.8114 71.4737 17.8114C69.8164 17.8114 69.0945 19.5671 69.0945 21.372C69.0945 23.1769 69.8164 24.9326 71.4737 24.9326C73.1309 24.9326 73.8528 23.1769 73.8528 21.372ZM77.0817 21.372C77.0817 18.3037 78.7225 15.5307 81.9057 15.5307C85.0888 15.5307 86.7297 18.3037 86.7297 21.372C86.7297 24.4403 85.0888 27.2133 81.9057 27.2133C78.7225 27.2133 77.0817 24.4403 77.0817 21.372ZM84.2848 21.372C84.2848 19.5671 83.5629 17.8114 81.9057 17.8114C80.2484 17.8114 79.5265 19.5671 79.5265 21.372C79.5265 23.1769 80.2484 24.9326 81.9057 24.9326C83.5629 24.9326 84.2848 23.1769 84.2848 21.372ZM92.9284 18.3037C92.9284 19.8296 91.6649 21.011 90.1062 21.011C88.5474 21.011 87.3004 19.8296 87.3004 18.3037C87.3004 16.7777 88.5474 15.5963 90.1062 15.5963C91.6649 15.5963 92.9284 16.7777 92.9284 18.3037ZM90.1062 19.4358C90.7297 19.4358 91.2055 18.9436 91.2055 18.3037C91.2055 17.6638 90.7297 17.1715 90.1062 17.1715C89.4826 17.1715 89.0068 17.6638 89.0068 18.3037C89.0068 18.9436 89.4826 19.4358 90.1062 19.4358ZM90.5164 27H88.3341L96.6858 15.7276H98.8681L90.5164 27ZM97.0796 27.1313C95.5208 27.1313 94.2738 25.9499 94.2738 24.4239C94.2738 22.898 95.5208 21.7166 97.0796 21.7166C98.6548 21.7166 99.9018 22.898 99.9018 24.4239C99.9018 25.9499 98.6548 27.1313 97.0796 27.1313ZM97.0796 25.5561C97.7031 25.5561 98.1954 25.0638 98.1954 24.4239C98.1954 23.784 97.7031 23.2918 97.0796 23.2918C96.4561 23.2918 95.9803 23.784 95.9803 24.4239C95.9803 25.0638 96.4561 25.5561 97.0796 25.5561ZM30.686 38.3237V43H28.2248V31.5143H34.8044V33.7458H30.686V36.0758H34.4763V38.3237H30.686ZM41.1227 40.2598L43.1409 41.0638C42.4682 42.3929 41.1555 43.2133 39.3835 43.2133C36.8566 43.2133 35.0845 41.4576 35.0845 38.9472C35.0845 36.5024 36.8894 34.6811 39.285 34.6811C41.7298 34.6811 43.4199 36.4696 43.4199 39.0128C43.4199 39.2918 43.4035 39.5051 43.387 39.6035H37.4309C37.5129 40.5552 38.3826 41.2443 39.3835 41.2443C40.2695 41.2443 40.7453 40.8669 41.1227 40.2598ZM37.4473 38.0447H41.0735C40.975 37.1751 40.2367 36.5516 39.2686 36.5516C38.3169 36.5516 37.5457 37.2736 37.4473 38.0447ZM50.363 31.5143H52.7421V43H50.363V41.9171C49.8051 42.7375 48.8042 43.1969 47.7376 43.1969C45.5554 43.1969 43.8981 41.3592 43.8981 38.9472C43.8981 36.5516 45.5554 34.6975 47.7376 34.6975C48.8042 34.6975 49.8051 35.1077 50.363 35.9445V31.5143ZM46.2773 38.9472C46.2773 40.1122 47.1962 41.0474 48.3612 41.0474C49.5261 41.0474 50.445 40.1122 50.445 38.9472C50.445 37.7822 49.5261 36.8469 48.3612 36.8469C47.1962 36.8469 46.2773 37.7822 46.2773 38.9472ZM59.7434 40.2598L61.7616 41.0638C61.0889 42.3929 59.7762 43.2133 58.0042 43.2133C55.4773 43.2133 53.7052 41.4576 53.7052 38.9472C53.7052 36.5024 55.5101 34.6811 57.9057 34.6811C60.3505 34.6811 62.0406 36.4696 62.0406 39.0128C62.0406 39.2918 62.0242 39.5051 62.0078 39.6035H56.0516C56.1336 40.5552 57.0033 41.2443 58.0042 41.2443C58.8902 41.2443 59.366 40.8669 59.7434 40.2598ZM56.068 38.0447H59.6942C59.5958 37.1751 58.8574 36.5516 57.8893 36.5516C56.9376 36.5516 56.1664 37.2736 56.068 38.0447ZM68.0175 34.7631V37.2243C67.8862 37.1587 67.6565 37.1259 67.4104 37.1259C66.0813 37.1259 65.2937 38.1104 65.2937 39.702V43H62.9146V34.8944H65.2773V36.2234C65.7039 35.2882 66.5572 34.7139 67.6073 34.7139C67.7878 34.7139 67.9683 34.7467 68.0175 34.7631ZM74.5765 34.8944H76.9229V43H74.5765V41.9171C74.0187 42.7375 73.0178 43.1969 71.9512 43.1969C69.7689 43.1969 68.1117 41.3592 68.1117 38.9472C68.1117 36.5516 69.7689 34.6975 71.9512 34.6975C73.0178 34.6975 74.0187 35.1077 74.5765 35.9445V34.8944ZM70.4909 38.9472C70.4909 40.1122 71.4098 41.0474 72.5747 41.0474C73.7397 41.0474 74.6586 40.1122 74.6586 38.9472C74.6586 37.7822 73.7397 36.8469 72.5747 36.8469C71.4098 36.8469 70.4909 37.7822 70.4909 38.9472ZM78.3786 31.5143H80.7742V43H78.3786V31.5143ZM82.2249 31.5143H84.6205V43H82.2249V31.5143ZM87.1706 46.6754C86.5306 46.6754 86.0876 46.5278 85.8087 46.3801V44.3783C86.0876 44.5096 86.3994 44.5752 86.7275 44.5752C87.4331 44.5752 87.9089 44.2962 88.2371 43.5087L88.4668 42.9836L85.1852 34.8944H87.712L89.7302 40.3255L91.7813 34.8944H94.2425L90.6163 43.7056C89.7631 45.8058 88.6965 46.6754 87.1706 46.6754ZM98.1261 31.5143H100.587V40.6864H104.591V43H98.1261V31.5143ZM110.816 40.2598L112.834 41.0638C112.161 42.3929 110.849 43.2133 109.076 43.2133C106.55 43.2133 104.778 41.4576 104.778 38.9472C104.778 36.5024 106.582 34.6811 108.978 34.6811C111.423 34.6811 113.113 36.4696 113.113 39.0128C113.113 39.2918 113.096 39.5051 113.08 39.6035H107.124C107.206 40.5552 108.076 41.2443 109.076 41.2443C109.963 41.2443 110.438 40.8669 110.816 40.2598ZM107.14 38.0447H110.767C110.668 37.1751 109.93 36.5516 108.962 36.5516C108.01 36.5516 107.239 37.2736 107.14 38.0447ZM119.941 41.7202C119.449 42.4585 118.481 42.918 117.414 42.918C115.216 42.918 113.591 41.1787 113.591 38.8487C113.591 36.486 115.232 34.6811 117.414 34.6811C118.497 34.6811 119.482 35.1569 119.941 35.9445V34.8944H122.304V42.4749C122.304 45.0018 120.679 46.7575 117.841 46.7575C115.921 46.7575 114.444 45.9371 113.804 44.608L115.708 43.4758C116.134 44.2798 116.922 44.7393 117.841 44.7393C119.154 44.7393 119.941 43.9024 119.941 42.4749V41.7202ZM120.023 38.8487C120.023 37.7002 119.121 36.7977 118.005 36.7977C116.906 36.7977 116.003 37.7002 116.003 38.8487C116.003 39.9973 116.906 40.8998 118.005 40.8998C119.121 40.8998 120.023 39.9973 120.023 38.8487ZM129.735 34.8944H132.081V43H129.735V41.9171C129.177 42.7375 128.176 43.1969 127.11 43.1969C124.927 43.1969 123.27 41.3592 123.27 38.9472C123.27 36.5516 124.927 34.6975 127.11 34.6975C128.176 34.6975 129.177 35.1077 129.735 35.9445V34.8944ZM125.649 38.9472C125.649 40.1122 126.568 41.0474 127.733 41.0474C128.898 41.0474 129.817 40.1122 129.817 38.9472C129.817 37.7822 128.898 36.8469 127.733 36.8469C126.568 36.8469 125.649 37.7822 125.649 38.9472ZM133.537 31.5143H135.933V43H133.537V31.5143Z"
                          fill="#FFFCF8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start text-black">
                    <h3 className="font-bold text-2xl">Wait…legal THC?</h3>
                    <p>
                      Everything you need to know about our federally legal
                      cannabis
                    </p>
                    <a className="text-lg	font-medium flex gap-1 items-center">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        fontSize="16"
                      >
                        <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full h-full pb-7">
                <div className="flex flex-col gap-6">
                  <div className="overflow-hidden relative w-full rounded-[1.5rem]">
                    <img
                      src={
                        "https://images.ctfassets.net/9k15kskmpr22/5cp90skJxZu79Dky0g55MS/92580afad8b09d7cace95e0ad75c2614/Desktop_Home_Article_Lab_tested.png"
                      }
                      className="aspect-[311/240] object-cover w-full"
                    />
                    <div className="absolute w-full px-[20%] top-[30px]">
                      <svg
                        width="164"
                        height="58"
                        viewBox="0 0 164 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.46501"
                          y="1.46501"
                          width="161.07"
                          height="55.07"
                          stroke="#FFFCF8"
                          strokeWidth="2.93003"
                        ></rect>
                        <path
                          d="M44.4102 23.5143H46.8714V32.6864H50.875V35H44.4102V23.5143ZM57.5265 26.8944H59.8728V35H57.5265V33.9171C56.9686 34.7375 55.9677 35.1969 54.9012 35.1969C52.7189 35.1969 51.0616 33.3592 51.0616 30.9472C51.0616 28.5516 52.7189 26.6975 54.9012 26.6975C55.9677 26.6975 56.9686 27.1077 57.5265 27.9445V26.8944ZM53.4408 30.9472C53.4408 32.1122 54.3597 33.0474 55.5247 33.0474C56.6896 33.0474 57.6085 32.1122 57.6085 30.9472C57.6085 29.7822 56.6896 28.8469 55.5247 28.8469C54.3597 28.8469 53.4408 29.7822 53.4408 30.9472ZM63.7077 35H61.3285V23.5143H63.7077V27.9773C64.282 27.1405 65.2665 26.6975 66.333 26.6975C68.5153 26.6975 70.1725 28.5352 70.1725 30.9472C70.1725 33.3428 68.5153 35.1969 66.333 35.1969C65.2665 35.1969 64.282 34.8031 63.7077 33.9499V35ZM67.7934 30.9472C67.7934 29.7822 66.8745 28.8469 65.7095 28.8469C64.5445 28.8469 63.6257 29.7822 63.6257 30.9472C63.6257 32.1122 64.5445 33.0474 65.7095 33.0474C66.8745 33.0474 67.7934 32.1122 67.7934 30.9472ZM73.5542 25.8114V23.5143H82.0864V25.8114H79.0673V35H76.5897V25.8114H73.5542ZM87.0665 32.2598L89.0847 33.0638C88.412 34.3929 87.0994 35.2133 85.3273 35.2133C82.8004 35.2133 81.0283 33.4576 81.0283 30.9472C81.0283 28.5024 82.8332 26.6811 85.2288 26.6811C87.6736 26.6811 89.3637 28.4696 89.3637 31.0128C89.3637 31.2918 89.3473 31.5051 89.3309 31.6035H83.3747C83.4567 32.5552 84.3264 33.2443 85.3273 33.2443C86.2133 33.2443 86.6892 32.8669 87.0665 32.2598ZM83.3911 30.0447H87.0173C86.9189 29.1751 86.1805 28.5516 85.2124 28.5516C84.2607 28.5516 83.4896 29.2736 83.3911 30.0447ZM92.9759 28.6008C92.5329 28.6008 92.2211 28.8305 92.2211 29.1587C92.2211 29.454 92.4509 29.6673 92.8939 29.7822L93.9112 30.0447C95.4371 30.4385 96.2575 31.2918 96.2575 32.4403C96.2575 34.0647 94.8793 35.2133 92.9923 35.2133C91.3843 35.2133 90.1045 34.4749 89.563 33.2279L91.4992 32.1614C91.7945 32.8341 92.4016 33.2607 93.0087 33.2607C93.5174 33.2607 93.862 33.031 93.862 32.6372C93.862 32.3583 93.6158 32.145 93.1236 32.0301L92.1719 31.8004C90.646 31.4394 89.8584 30.5862 89.8584 29.3064C89.8584 27.764 91.1382 26.6811 92.9923 26.6811C94.387 26.6811 95.6997 27.4358 96.2083 28.568L94.2558 29.6017C94.0096 28.9946 93.4682 28.6008 92.9759 28.6008ZM97.4253 24.5152H99.8045V26.8944H101.856V28.8633H99.8045V31.8332C99.8045 32.7029 100.182 33.0474 100.97 33.0474C101.265 33.0474 101.593 32.9654 101.856 32.8013V34.8687C101.495 35.0492 100.953 35.1969 100.182 35.1969C98.4755 35.1969 97.4253 34.1468 97.4253 32.3419V28.8633H96.2768V26.8944H97.4253V24.5152ZM108.139 32.2598L110.158 33.0638C109.485 34.3929 108.172 35.2133 106.4 35.2133C103.873 35.2133 102.101 33.4576 102.101 30.9472C102.101 28.5024 103.906 26.6811 106.302 26.6811C108.747 26.6811 110.437 28.4696 110.437 31.0128C110.437 31.2918 110.42 31.5051 110.404 31.6035H104.448C104.53 32.5552 105.399 33.2443 106.4 33.2443C107.286 33.2443 107.762 32.8669 108.139 32.2598ZM104.464 30.0447H108.09C107.992 29.1751 107.253 28.5516 106.285 28.5516C105.334 28.5516 104.563 29.2736 104.464 30.0447ZM117.38 23.5143H119.759V35H117.38V33.9171C116.822 34.7375 115.821 35.1969 114.754 35.1969C112.572 35.1969 110.915 33.3592 110.915 30.9472C110.915 28.5516 112.572 26.6975 114.754 26.6975C115.821 26.6975 116.822 27.1077 117.38 27.9445V23.5143ZM113.294 30.9472C113.294 32.1122 114.213 33.0474 115.378 33.0474C116.543 33.0474 117.462 32.1122 117.462 30.9472C117.462 29.7822 116.543 28.8469 115.378 28.8469C114.213 28.8469 113.294 29.7822 113.294 30.9472Z"
                          fill="#FFFCF8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start text-black">
                    <h3 className="font-bold text-2xl">
                      DEA-Certified 3rd Party Tested
                    </h3>
                    <p>Learn about our transparent testing</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full h-full pb-7">
                <div className="flex flex-col gap-6">
                  <div className="overflow-hidden relative w-full rounded-[1.5rem]">
                    <img
                      src={
                        "https://images.ctfassets.net/9k15kskmpr22/07Z0snO20DoQd8ZFEcQHO/13b1b0ffd18fb7b817e39f5ea2e3d182/Desktop_Home_Article_Discreet_Packeging.png"
                      }
                      className="aspect-[311/240] object-cover w-full"
                    />
                    <div className="absolute w-full px-[20%] top-[30px]">
                      <svg
                        width="164"
                        height="58"
                        viewBox="0 0 164 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.46501"
                          y="1.46501"
                          width="161.07"
                          height="55.07"
                          stroke="#FFFCF8"
                          strokeWidth="2.93003"
                        ></rect>
                        <path
                          d="M64.3395 29.2571C64.3395 32.4896 61.7142 35 58.4982 35H54.6095V23.5143H58.4982C61.7142 23.5143 64.3395 26.0247 64.3395 29.2571ZM61.8127 29.2571C61.8127 27.3538 60.3359 25.8278 58.4326 25.8278H57.0707V32.6864H58.4326C60.3359 32.6864 61.8127 31.1605 61.8127 29.2571ZM67.8018 35H65.4062V26.8944H67.8018V35ZM67.9987 24.548C67.9987 25.3028 67.3752 25.9427 66.604 25.9427C65.8328 25.9427 65.2093 25.3028 65.2093 24.548C65.2093 23.7932 65.8328 23.1533 66.604 23.1533C67.3752 23.1533 67.9987 23.7932 67.9987 24.548ZM71.9106 28.6008C71.4676 28.6008 71.1558 28.8305 71.1558 29.1587C71.1558 29.454 71.3856 29.6673 71.8286 29.7822L72.8459 30.0447C74.3718 30.4385 75.1923 31.2918 75.1923 32.4403C75.1923 34.0647 73.814 35.2133 71.927 35.2133C70.319 35.2133 69.0392 34.4749 68.4977 33.2279L70.4339 32.1614C70.7292 32.8341 71.3363 33.2607 71.9434 33.2607C72.4521 33.2607 72.7967 33.031 72.7967 32.6372C72.7967 32.3583 72.5505 32.145 72.0583 32.0301L71.1066 31.8004C69.5807 31.4394 68.7931 30.5862 68.7931 29.3064C68.7931 27.764 70.0729 26.6811 71.927 26.6811C73.3217 26.6811 74.6344 27.4358 75.143 28.568L73.1905 29.6017C72.9443 28.9946 72.4029 28.6008 71.9106 28.6008ZM75.6034 30.9472C75.6034 28.5024 77.3918 26.6811 79.9351 26.6811C80.6407 26.6811 81.379 26.8451 81.9697 27.1897V29.4376C81.4118 29.0438 80.8376 28.8469 80.2141 28.8469C78.967 28.8469 78.0154 29.7166 78.0154 30.9472C78.0154 32.1614 78.9506 33.0474 80.2141 33.0474C80.854 33.0474 81.4775 32.7849 81.9861 32.4239V34.6882C81.3298 35.0492 80.6078 35.2133 79.9023 35.2133C77.4083 35.2133 75.6034 33.4904 75.6034 30.9472ZM88.105 26.7631V29.2243C87.9737 29.1587 87.744 29.1259 87.4979 29.1259C86.1688 29.1259 85.3812 30.1104 85.3812 31.702V35H83.002V26.8944H85.3648V28.2234C85.7914 27.2882 86.6446 26.7139 87.6948 26.7139C87.8753 26.7139 88.0557 26.7467 88.105 26.7631ZM94.2374 32.2598L96.2556 33.0638C95.5829 34.3929 94.2702 35.2133 92.4981 35.2133C89.9713 35.2133 88.1992 33.4576 88.1992 30.9472C88.1992 28.5024 90.0041 26.6811 92.3997 26.6811C94.8445 26.6811 96.5345 28.4696 96.5345 31.0128C96.5345 31.2918 96.5181 31.5051 96.5017 31.6035H90.5456C90.6276 32.5552 91.4972 33.2443 92.4981 33.2443C93.3842 33.2443 93.86 32.8669 94.2374 32.2598ZM90.562 30.0447H94.1882C94.0897 29.1751 93.3513 28.5516 92.3833 28.5516C91.4316 28.5516 90.6604 29.2736 90.562 30.0447ZM103.051 32.2598L105.069 33.0638C104.396 34.3929 103.084 35.2133 101.312 35.2133C98.7849 35.2133 97.0128 33.4576 97.0128 30.9472C97.0128 28.5024 98.8177 26.6811 101.213 26.6811C103.658 26.6811 105.348 28.4696 105.348 31.0128C105.348 31.2918 105.332 31.5051 105.315 31.6035H99.3592C99.4412 32.5552 100.311 33.2443 101.312 33.2443C102.198 33.2443 102.674 32.8669 103.051 32.2598ZM99.3756 30.0447H103.002C102.903 29.1751 102.165 28.5516 101.197 28.5516C100.245 28.5516 99.474 29.2736 99.3756 30.0447ZM106.423 24.5152H108.802V26.8944H110.853V28.8633H108.802V31.8332C108.802 32.7029 109.179 33.0474 109.967 33.0474C110.262 33.0474 110.591 32.9654 110.853 32.8013V34.8687C110.492 35.0492 109.951 35.1969 109.179 35.1969C107.473 35.1969 106.423 34.1468 106.423 32.3419V28.8633H105.274V26.8944H106.423V24.5152Z"
                          fill="#FFFCF8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start text-black">
                    <h3 className="font-bold text-2xl">Discreet Delivery</h3>
                    <p>Keep your THC to yourself</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="page-section flex justify-center items-center px-5">
          <div className="max-w-6xl w-full flex flex-col gap-14">
            <h3 className="text-black md:text-6xl text-3xl font-bold max-w-4xl">
              Let our THC Wizards help you answer any questions 🧙‍♂️
            </h3>
            <div className="flex md:flex-row flex-col md:gap-10 gap-4 w-full md:p-0 px-2">
              <div className="flex-1 flex md:flex-row flex-row-reverse md:gap-4 gap-2 justify-start items-center">
                <div className="w-12 h-12 rounded-full border-2 border-black p-[10px]">
                  <EarPieceIcon className="text-black" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-sm text-black uppercase">
                    Call Us Toll Free, M-F
                  </span>
                  <span className="font-medium text-black">
                    8am to 8pm CST, 7 days a week
                  </span>
                  <span className="font-medium text-black">
                    +1 405-594-7026
                  </span>
                </div>
              </div>
              <div className="flex-1 flex md:flex-row flex-row-reverse md:gap-4 gap-2 justify-start items-center">
                <div className="w-12 h-12 rounded-full border-2 border-black p-[10px]">
                  <MailIcon className="text-black" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-sm text-black uppercase">
                    Email
                  </span>
                  <span className="font-medium text-black">
                    team@hellomood.co
                  </span>
                </div>
              </div>
              <div className="flex-1 flex md:flex-row flex-row-reverse md:gap-4 gap-2 justify-start items-center">
                <div className="w-12 h-12 rounded-full border-2 border-black p-[10px]">
                  <ChatIcon className="text-black" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-sm text-black uppercase">
                    Chat with us 24/7
                  </span>
                  <span className="font-medium text-black">Chat now</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section flex justify-center items-center px-5">
          <div className="max-w-screen-2xl w-full aspect-auto p-6 rounded-[1.25rem] md:h-[629px] h-[488px] bg-cover bg-center bg-video-image-second flex flex-col justify-between">
            <div className="text-[#fef7ee] text-sm font-bold uppercase">
              social good
            </div>
            <div className="text-[#fffcf8] flex flex-col gap-4">
              <div className="text-4xl font-bold">
                $25k donated to OKC Humane Society
              </div>
              <a className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1.23682"
                    width="24.7632"
                    height="24.7632"
                    rx="12.3816"
                    stroke="#FFFCF8"
                    strokeWidth="2"
                  ></rect>
                  <path
                    d="M19.5 13.7368L9 18.5L9 8.97368L19.5 13.7368Z"
                    fill="#FFFCF8"
                  ></path>
                </svg>
                Watch the video
              </a>
            </div>
          </div>
        </section>

        <section className="page-section flex justify-center items-center px-5">
          <div className="flex md:flex-row flex-col md:gap-8 gap-4 h-[536px] w-full max-w-screen-2xl">
            <div className="md:w-[63.75%] w-full aspect-auto p-6 rounded-[1.25rem] h-full bg-cover bg-center bg-mood-section flex flex-row justify-between">
              <div className="text-[#fef7ee] md:text-4xl text-2xl font-bold">
                Learn about Mood
              </div>
              <div className="md:block hidden">
                <a>
                  <div className="flex rounded-[2rem] border-2 transition-all h-[50px] px-10 py-3 bg-transparent text-[#fffcf8] items-center justify-center gap-1 cursor-pointer hover:text-black hover:bg-[#fffcf8] font-bold">
                    Read all articles
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
                  </div>
                </a>
              </div>
            </div>
            <div className="md:block hidden w-[36.25%] h-full max-w-80">
              <div className="flex flex-col gap-4">
                <ArticleCard
                  title="What is THCa?"
                  content="All about this essential compound and how it can benefit you."
                />
                <ArticleCard
                  title="Is Mood high-quality?"
                  content="Find out how Mood's federally legal THC is superior to the rest."
                />
                <ArticleCard
                  title="What are cannabinoids?"
                  content="Inside the fascinating universe of cannabis compounds."
                />
              </div>
            </div>
            <div className="md:hidden block w-full">
              <Swiper
                className="w-full h-full"
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                }}
                spaceBetween={24}
              >
                <SwiperSlide className="w-full h-full pb-4">
                  <ArticleCard
                    title="What is THCa?"
                    content="All about this essential compound and how it can benefit you."
                  />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full pb-4">
                  <ArticleCard
                    title="Is Mood high-quality?"
                    content="Find out how Mood's federally legal THC is superior to the rest."
                  />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full pb-4">
                  <ArticleCard
                    title="What are cannabinoids?"
                    content="Inside the fascinating universe of cannabis compounds."
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="page-section flex justify-center items-center px-5">
          <div className="flex flex-col gap-10 min-h-[536px] w-full max-w-screen-2xl text-black">
            <div className="flex flex-col w-full rounded-2xl h-max gap-5">
              <div className="flex justify-between">
                <span className="font-bold md:text-5xl text-3xl max-w-4xl">
                  You got questions, we have answers. Gaze into the crystall
                  ball 🔮
                </span>
                <a className="md:block hidden">
                  <div className="flex transition-all h-fit w-full px-5 py-3 border-2 border-black bg-transparent text-black items-center justify-center md:gap-1 gap-[1px] rounded-[2rem] cursor-pointer hover:text-[#fffcf8] hover:bg-black font-bold whitespace-nowrap">
                    Go to Help Center
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
                  </div>
                </a>
              </div>
              <div>
                <ul className="divide-y">
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>What am I getting as a Premium Member?</span>
                        <svg
                          className="w-5 h-5 text-gray-500 transition-all rotate-90 group-open:-rotate-90"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </summary>
                      <article className="pb-4">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed et ipsum sapien. Vestibulum molestie
                          porttitor augue vitae vulputate. Aliquam nec ex
                          maximus, suscipit diam vel, tristique tellus.
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>What am I getting as a Premium Member?</span>
                        <svg
                          className="w-5 h-5 text-gray-500 transition-all rotate-90 group-open:-rotate-90"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </summary>
                      <article className="pb-4">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed et ipsum sapien. Vestibulum molestie
                          porttitor augue vitae vulputate. Aliquam nec ex
                          maximus, suscipit diam vel, tristique tellus.
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>What am I getting as a Premium Member?</span>
                        <svg
                          className="w-5 h-5 text-gray-500 transition-all rotate-90 group-open:-rotate-90"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </summary>
                      <article className="pb-4">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed et ipsum sapien. Vestibulum molestie
                          porttitor augue vitae vulputate. Aliquam nec ex
                          maximus, suscipit diam vel, tristique tellus.
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>What am I getting as a Premium Member?</span>
                        <svg
                          className="w-5 h-5 text-gray-500 transition-all rotate-90 group-open:-rotate-90"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </summary>
                      <article className="pb-4">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed et ipsum sapien. Vestibulum molestie
                          porttitor augue vitae vulputate. Aliquam nec ex
                          maximus, suscipit diam vel, tristique tellus.
                        </p>
                      </article>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
