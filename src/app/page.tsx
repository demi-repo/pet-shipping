"use client";

import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FavCard from "@/components/cards/favCard";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import background from "../../public/assets/home/background.png"


export default function Home() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
      <section className="flex overflow-hidden flex-col items-start p-20 font-semibold text-white min-h-[883px] max-md:px-5">
        <Image
          src={background}
          alt="Hero background"
          className="object-cover absolute inset-0 size-full"
        />
        <h1 className="relative mt-40 text-6xl text-pretty tracking-wider leading-[60px] w-[630px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Welcome to our family-owned, pet-loving platform!
        </h1>
        <p className="relative mt-5 text-1xl text-pretty leading-6 w-[630px] max-md:max-w-full">
          Our mission is to make pet transport as smooth as possible. We provide a DIY solution that’s tailored to your pet’s unique requirements. This service offers easy-to-follow instructions, various options, and advice to ensure a seamless pet transport process.
        </p>
      </section>
      <main className="flex flex-col">
        {/* <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          rewindWithAnimation={true}
        >
          <div><img src="./pets/BlackLab.jpg" /></div>
          <div><img src="./pets/Bunny.jpg" /></div>
          <div><img src="./pets/cat.jpg" /></div>
          <div><img src="./pets/Yellow Lab Pup.jpg" /></div>
          <div><img src="./pets/Iguana.jpg" /></div>
          <div><img src="./pets/Snake.jpg" /></div>
          <div><img src="./pets/Turtle.jpg" /></div>
        </Carousel> */}
        <div className="text-center p-8">
          <div className="flex flex-col justify-center items-center md:gap-4 gap-0">
            <p className="md:text-5xl text-3xl font-bold">About I</p>
            <br />
          </div>

          <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img src="./assets/home/1.jpg" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Who Are We?
              </h3>
              <p className="sm:text-3xl mt-6">
                We’re a family-owned pet-loving company. We’ve been shipping pets domestically and internationally for over two decades now.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img src="./assets/home/2.jpg" alt="project members" className="inline-block rounded shadow-lg border border-merino-400" />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Why This Service?
              </h3>
              <p className="sm:text-3xl  mt-6">
                Our consulting service was born from a desire to provide an alternative to the high-priced costs of hiring a full-service company to ship your pet(s).
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-20 text-left  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img src="./assets/home/3.jpg" alt="editor" className="inline-block rounded shadow-lg border border-merino-400" />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                What We Offer:
              </h3>
              <p className="sm:text-3xl  mt-6">
                We offer an easy, customizable DIY solution based on your pet(&apos;s) unique move. This solution is designed to provide clear-cut, simple instructions, and options, and advise you of requirements for your pet(&apos;s) transport.
              </p>
            </div>
          </div>
        </div>
      </main>
      <main className="w-full h-full">
        <section className="page-section lg:px-6 md:px-4 px-2 flex flex-col gap-9 justify-center items-center">
          <div className="flex flex-col justify-center items-center md:gap-4 gap-0">
            <p className="md:text-5xl text-3xl font-bold">Pet Types</p>
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
                  src="./pets/cat.jpg"
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
                  src="./pets/Iguana.jpg"
                  title="Iguana"
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
                  title="BlackLab"
                  startCost="17.00"
                  value="4.6 (2k)"
                  level="Space Bound"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="./pets/Bunny.jpg"
                  title="Bunny"
                  startCost="35.00"
                  value="4.7 (3.4k)"
                  level="Baked"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="./pets/cat.jpg"
                  title="Cat"
                  startCost="15.00"
                  value="4.5 (1k)"
                  level="Space Bound"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="./pets/Snake.jpg"
                  title="Snake"
                  startCost="20.00"
                  value="4.7 (7.2k)"
                  level="Baked"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="./pets/Turtle.jpg"
                  title="Turtle"
                  startCost="17.00"
                  value="4.6 (2k)"
                  level="Space Bound"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="./pets/Iguana.jpg"
                  title="Iguana"
                  startCost="35.00"
                  value="4.7 (3.4k)"
                  level="Baked"
                />
              </SwiperSlide>
              <SwiperSlide className="h-full max-w-max">
                <FavCard
                  src="./pets/Yellow Lab Pup.jpg"
                  title="Yellow Lab Pup"
                  startCost="15.00"
                  value="4.5 (1k)"
                  level="Space Bound"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className="flex flex-col justify-center items-center md:gap-4 gap-0">
            <p className="md:text-5xl text-3xl font-bold">Destinations</p>
            <br />
          </div>
          <div className="flex flex-col justify-center items-center md:gap-4 gap-0">
            <p className="md:text-5xl text-3xl font-bold">Services</p>
            <br />
          </div> */}

        </section>
      </main>

    </>
  );
}
