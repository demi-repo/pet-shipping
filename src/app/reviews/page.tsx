"use client";

import React from "react";
import FavCard from "@/components/cards/favCard";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import ReactStars from "react-stars";
import EarPieceIcon from "@/components/icons/earpieceIcon";
import MailIcon from "@/components/icons/mailIcon";
import ChatIcon from "@/components/icons/chatIcon";
// import Dropdown from "@/components/dropdown";
import "swiper/css";
import "swiper/css/pagination";
// import FeedbackCard from "@/components/cards/feedbackCard";

const Reviews = (props: any) => {
  return (
    <main className="w-full h-full">
      <section className="page-section lg:px-6 md:px-4 px-2 flex flex-col gap-9 justify-center items-center">
        <div className="flex flex-col justify-center items-center md:gap-4 gap-0">
          <p className="md:text-6xl text-3xl font-bold">Pet Types</p>
          <br />
        </div>

        <div className="w-full max-w-[1200px] max-h-[400px] md:block hidden">
          <Swiper
            className="w-full h-full"
            slidesPerView={4}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            spaceBetween={24}
          >
            {/* <SwiperSlide className="w-full h-full">
              <div className="w-full h-full grid grid-cols-4 gap-6">
                <FavCard
                  src="./pets/BlackLab.jpg"
                  title="BlackLab"
                />
                <FavCard
                  src="./pets/Bunny.jpg"
                  title="Bunny"
                />
                <FavCard
                  src="./pets/cat.jpg"
                  title="Cat"
                />
                <FavCard
                  src="./pets/Snake.jpg"
                  title="Snake"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <div className="w-full h-full grid grid-cols-4 gap-6">
                <FavCard
                  src="./pets/Turtle.jpg"
                  title="Turtle"
                />
                <FavCard
                  src="./pets/Yellow Lab Pup.jpg"
                  title="Yellow Lab Pup"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <FavCard
                src="./pets/BlackLab.jpg"
                title="BlackLab"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FavCard
                src="./pets/Bunny.jpg"
                title="Bunny"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FavCard
                src="./pets/Cat.jpg"
                title="Cat"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FavCard
                src="./pets/Snake.jpg"
                title="Snake"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FavCard
                src="./pets/Turtle.jpg"
                title="Turtle"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FavCard
                src="./pets/Yellow Lab Pup.jpg"
                title="Yellow Lab Pup"
              />
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
                src="./pets/BlackLab.jpg"
                title="Pluto"
                startCost="17.00"
                value="4.6 (2k)"
                level="Space Bound"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full max-w-max">
              <FavCard
                src="./pets/BlackLab.jpg"
                title="Sleepytime Delta-9 THC Gummies"
                startCost="35.00"
                value="4.7 (3.4k)"
                level="Baked"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full max-w-max">
              <FavCard
                src="./pets/BlackLab.jpg"
                title="Purple Punch"
                startCost="15.00"
                value="4.5 (1k)"
                level="Space Bound"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full max-w-max">
              <FavCard
                src="./pets/BlackLab.jpg"
                title="15mg Delta 9 THC Gummies"
                startCost="20.00"
                value="4.7 (7.2k)"
                level="Baked"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full max-w-max">
              <FavCard
                src="./pets/BlackLab.jpg"
                title="Pluto"
                startCost="17.00"
                value="4.6 (2k)"
                level="Space Bound"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full max-w-max">
              <FavCard
                src="./pets/BlackLab.jpg"
                title="Sleepytime Delta-9 THC Gummies"
                startCost="35.00"
                value="4.7 (3.4k)"
                level="Baked"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full max-w-max">
              <FavCard
                src="./pets/BlackLab.jpg"
                title="Purple Punch"
                startCost="15.00"
                value="4.5 (1k)"
                level="Space Bound"
              />
            </SwiperSlide>
            <SwiperSlide className="h-full max-w-max">
              <FavCard
                src="./pets/BlackLab.jpg"
                title="15mg Delta 9 THC Gummies"
                startCost="20.00"
                value="4.7 (7.2k)"
                level="Baked"
              />
            </SwiperSlide>
          </Swiper>
        </div>

      </section>
      <section className="page-section lg:px-10 px-5 flex items-center justify-center w-full">
        <div className="flex w-full lg:justify-between justify-center gap-5 max-w-screen-2xl">
          <div className="flex flex-col gap-10 lg:w-3/5 w-full max-w-screen-2xl text-black">
            <div className="flex flex-col w-full rounded-2xl h-max gap-5">
              <div className="flex justify-between">
                <span className="font-bold md:text-5xl text-3xl max-w-4xl">
                  Destinations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
