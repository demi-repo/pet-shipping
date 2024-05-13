"use client";

import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination"
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import background from "../../public/assets/home/background.png"
import { ImagesSlider } from "../components/sldier/images-slider";
import { LayoutGrid } from "../components/gallery/gallery";
import dynamic from "next/dynamic";
import { HoverEffect } from "../components/hoverEffect/hoverEffect";

const World = dynamic(() => import("../components/globe/globe").then((m) => m.World), {
  ssr: false,
});

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export default function Home() {
  const images = [
    "/assets/home/1.jpg",
    "/assets/home/2.jpg",
    "/assets/home/3.jpg",
    "/assets/home/4.jpg",
    "/assets/home/5.jpg",
    "/assets/home/6.jpg",
  ];

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
      <main>
        <div id="home" className=" absolute top-0 w-0" />
        <section className="bg-[#E5E7EB] items-start px-20 text-white min-h-[883px] max-h-[963px] max-md:px-5">
          <Image
            src={background}
            alt="Hero background"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex flex-col items-center left-16 bottom-1/4 absolute">
            <h1 className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-linear relative mt-40 text-8xl text-pretty tracking-wider leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              DIY Pet Shipping Consults
            </h1>
            <p className="animate-fade-up animate-duration-3000 animate-ease-linear animate-normal animate-fill-forwards relative mt-20 text-5xl text-pretty leading-6 max-md:max-w-full">
              Guiding Your Pet’s Journey, Every Step of the Way!
            </p>
          </div>
        </section>
        <section id="aboutus" className="flex justify-center relative bg-[#E5E7EB] h-[632px] rounded-bl-[150px] scroll-mt-24">
          <div className=" max-w-[1600] ml-36 mr-36 pt-9  flex flex-wrap items-center text-center">
            <div className="w-full md:w-2/5 lg:w-3/5 px-4 text-center md:text-left lg:pl-12">
              <div className="box-border">
                <ul className="relative">
                  <li>
                    <div className=" text-5xl px-6">Who <span className="text-[#4878D0]">we are</span>
                    </div>
                    <div>
                      <div className="relative px-6 mt-3 text-lg leading-6 mb-0">
                        <div className="text">We’re a family-owned pet-loving company. We’ve been shipping pets domestically and internationally for over two decades now.</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className=" text-5xl px-6 mt-6">Why<span className="text-[#4878D0]"> this service?</span>
                    </div>
                    <div>
                      <div className="relative px-6 mt-3 text-lg leading-6 mb-0">
                        <div className="text">Our consulting service was born from a desire to provide an alternative to the high-priced costs of hiring a full-service company to ship your pet(s). </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className=" text-5xl px-6 mt-6">What <span className="text-[#4878D0]"> we offer:</span>
                    </div>
                    <div>
                      <div className="relative px-6 mt-3 text-lg leading-6 mb-0">
                        <div className="text">We offer an easy, customizable DIY solution based on your pet(&apos;s) unique move. This solution is designed to provide clear-cut, simple instructions, and options, and advise you of requirements for your pet(&apos;s) transport. </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-2/5 px-4 animate-fade-left animate-duration-[2000ms] animate-ease-linear animate-normal animate-fill-forwards">
              <ImagesSlider className="h-[33rem]" images={images}>
              </ImagesSlider>
            </div>
          </div>
        </section>
        <section id="petTypes" className="px-2 pt-5 w-full h-full scroll-mt-24">
          <div className="w-full"  >
            <div className=" text-center items-center w-full">
              <p className="text-5xl">Pet <span className="text-[#4878D0]"> Types</span></p>
            </div>
          </div>
          <div className="h-screen w-full">
            <LayoutGrid cards={cards} />
          </div>
        </section>
        <section id="destinations" className="w-full scroll-mt-24">
          <GlobeDemo />
        </section>
        <section id="services" className="flex pt-5 justify-center w-full scroll-mt-24">
          <div className=" max-w-[1600] ml-36 mr-36 ">
            <div className=" text-center items-center w-full">
              <p className="text-5xl  text-[#4878D0]">Services</p>
              <br />
              <p className="text-xl">We will consult with you and provide you with customized DIY options and requirements for your pet(s) move. <br />Topics we will cover include the below:</p>
            </div>
            <HoverEffect items={projects} />
          </div>
        </section>
        <section id="considers" className="flex justify-center pt-5 w-full scroll-mt-24 bg-[#E5E7F0] rounded-bl-[150px]">
          <div className=" max-w-[1600] ml-36 mr-36  flex flex-wrap items-center text-center">
            <div className=" text-center items-center w-full">
              <p className="text-5xl  text-[#4878D0]">Things <span className="text-[#4878D0]"> to Consider </span></p>
              <br />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <div className="text-xl">
                <ul>
                  <li>•	Does my pet need vaccinations?
                  </li>
                  <li>•	Does my pet need rabies verification?
                  </li>
                  <li>•	Does my pet need a microchip?
                  </li>
                  <li>•	Is my pet’s breed allowed?
                  </li>
                  <li>•	Do I need a veterinarian?
                  </li>
                  <li>•	Will the veterinarian be familiar with the paperwork and requirements?
                  </li>
                  <li>•	What countries require quarantine?
                  </li>
                  <li>•	How do I quarantine my pet?
                  </li>
                  <li>•	Can I give my pet a sedative?
                  </li>
                </ul>
              </div>
              <div className="box-border">
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img src="./assets/considering/1.jpg" alt="editor" className="rounded-3xl inline-block shadow-lg border border-merino-400" />
            </div>
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img src="./assets/considering/2.jpg" alt="editor" className="rounded-3xl inline-block shadow-lg border border-merino-400" />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <div className="text-xl">
                <ul>
                  <li>•	Is pet travel safe?</li>
                  <li>•	Can my pet fly in-cabin?</li>
                  <li>•	Is my pet too large for the plane?</li>
                  <li>•	Will my existing crate work?</li>
                  <li>•	What is the USDA?</li>
                  <li>•	What are the destination country’s rules & requirements?</li>
                  <li>•	Will my pet be on the same flight as me?</li>
                  <li>•	How do I check my pet in?</li>
                  <li>•	If my pet can’t fly what are alternative transport options?</li>
                </ul>
              </div>
              <div className="box-border">
              </div>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <div className="text-xl">
                <ul>
                  <li>•	How much will I save money by doing it myself?</li>
                  <li>•	Does my pet need to be crate-trained?</li>
                  <li>•	Where does my pet go to the bathroom?</li>
                  <li>•	How do I measure my pet for the crate?</li>
                  <li>•	What can be in the crate with my pet?</li>
                </ul>
              </div>
              <div className="box-border">
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img src="./assets/considering/3.jpg" alt="editor" className="rounded-3xl inline-block shadow-lg border border-merino-400" />
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full scroll-mt-24">
          <div className=" max-w-[1600] ml-36 mr-36 ">
            <img src="./assets/payment.png" />
          </div>
        </section>
        <div className="z-10 relative rounded-tr-none md:rounded-tr-brand rounded-bl-none md:rounded-bl-brand  acf/reviews bg-tertiary">
          <section className="pt-5">
            <div className="container mx-auto text-center">

              <div className="w-full reviews-slider flex justify-center mt-4">
                <div className="w-full md:w-1/3 flex p-2.5">
                  <article className="w-full flex flex-col bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 aspect-square">
                        <img decoding="async" loading="lazy" alt="" src="https://b3388717.smushcdn.com/3388717/wp-content/uploads/2023/10/image-3-2-50x50.png?lossy=0&amp;strip=1&amp;webp=1" className="w-full h-full object-cover object-center" />
                      </div>
                      <div className="w-full justify-start items-start space-y-1 flex flex-col">
                        <div className="text-center">
                          <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
                        <h1 className="text-sm">
                          Daniel Turner                                </h1>
                      </div>
                    </div>
                    <div className="mt-4 aspect-[1.5/1] overflow-hidden">
                      <img decoding="async" loading="lazy" alt="Review image by Daniel Turner" src="https://b3388717.smushcdn.com/3388717/wp-content/uploads/2023/11/Tucker-the-dog-transported-by-Global-Pet-Relocation-500x399.jpg?lossy=0&amp;strip=1&amp;webp=1" className="h-full object-cover object-center w-full" />
                    </div>
                    <div className="text-left mt-4 text-sm">
                      <h1 className="font-semibold">
                        &quot;Wonderful to work with&quot;                            </h1>
                      <div className="mt-2 font-thin">
                        <strong><span style={{ fontWeight: "400" }}>“Moving from the U.S. to Germany with our two Labrador Retrievers seemed daunting, but thanks to DIY, the process was seamless. They handled every detail—from ensuring all vaccinations were up to date, to securing the right crates. They even helped us understand Germany’s pet import regulations. Our dogs arrived safely and were happy right from the moment they landed. We can’t thank the team enough for their patience and expertise.!</span></strong><span style={{ fontWeight: "400" }} >”</span>                            </div>
                    </div>
                  </article>
                </div>
                <div className="w-full md:w-1/3 flex p-2.5">
                  <article className="w-full flex flex-col bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 aspect-square">
                        <img decoding="async" loading="lazy" alt="" src="https://b3388717.smushcdn.com/3388717/wp-content/uploads/2023/10/image-3-50x50.png?lossy=0&amp;strip=1&amp;webp=1" className="w-full h-full object-cover object-center" />
                      </div>
                      <div className="w-full justify-start items-start space-y-1 flex flex-col">
                        <div className="text-center">
                          <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
                        <h1 className="text-sm">
                          Rita Hartley                                </h1>
                      </div>
                    </div>
                    <div className="mt-4 aspect-[1.5/1] overflow-hidden">
                      <img decoding="async" loading="lazy" alt="Review image by Rita Hartley" src="https://b3388717.smushcdn.com/3388717/wp-content/uploads/2023/10/Arlo-Woody-Dogs-Transported-by-Global-Pet-Relocation-1-500x499.jpg?lossy=0&amp;strip=1&amp;webp=1" className="h-full object-cover object-center w-full" />
                    </div>
                    <div className="text-left mt-4 text-sm">
                      <h1 className="font-semibold">
                        “We knew our boys were in excellent hands”                            </h1>
                      <div className="mt-2 font-thin">
                        <p><span style={{ fontWeight: "400" }}>“When our family faced an unexpected relocation, we were most concerned about how our elderly cat would handle the journey. The team at DIY was not only incredibly knowledgeable about the safest travel options but also genuinely caring towards our pet’s needs. They advised us on everything from crate training to the best flight schedules. It was a huge relief to have such expert and compassionate support every step of the way.”</span></p>                 </div>
                    </div>
                  </article>
                </div>
                <div className="w-full md:w-1/3 flex p-2.5">
                  <article className="w-full flex flex-col bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 aspect-square">
                        <img decoding="async" loading="lazy" alt="" src="https://b3388717.smushcdn.com/3388717/wp-content/uploads/2023/10/download.png?lossy=0&amp;strip=1&amp;webp=1" className="w-full h-full object-cover object-center" />
                      </div>
                      <div className="w-full justify-start items-start space-y-1 flex flex-col">
                        <div className="text-center">
                          <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
                        <h1 className="text-sm">
                          Thomas G                                </h1>
                      </div>
                    </div>
                    <div className="mt-4 aspect-[1.5/1] overflow-hidden">
                      <img decoding="async" loading="lazy" alt="Review image by Thomas G" src="https://b3388717.smushcdn.com/3388717/wp-content/uploads/2023/10/Lumi-Vesi-Pet-Cats-Shipped-by-Global-Pet-Relocation.png?lossy=0&amp;strip=1&amp;webp=1" className="h-full object-cover object-center w-full" />
                    </div>
                    <div className="text-left mt-4 text-sm">
                      <h1 className="font-semibold">
                        “The full team was spectacular”                            </h1>
                      <div className="mt-2 font-thin">
                        <strong><span style={{ fontWeight: "400" }}>“I was overwhelmed by the thought of shipping my snake to South America, but DIY went above and beyond to assist us. They were thorough in explaining what kind of crate was needed, how to manage feeding schedules, and even the specifics of temperature control during transit. Their attention to detail and proactive communication made a complicated process much easier. Highly recommend their services for anyone needing to transport exotic pets!</span></strong><span style={{ fontWeight: "400" }}>”</span>                            </div>
                    </div>
                  </article>
                </div>
              </div>

              <div className="container mx-auto px-4 pb-16 md:pb-8 md:hidden mt-4">
                <div className="w-full flex items-center justify-between">
                  <div className="w-full md:w-[calc(100%-120px)] flex items-center">
                    <div className="reviews-slider-progress slider-progress-bar">
                      <div className="reviews-slider-progress-inner slider-progress-inner"></div>
                    </div>
                  </div>
                  <div className="w-[100px] justify-end space-x-4 hidden md:flex">
                    <button id="reviewsPrev" className="bg-primary flex rounded-full items-center justify-center w-10 h-10">
                      <span className="sr-only">Previous slide</span>
                      <i className="fa fa-chevron-left text-white"></i>
                    </button>
                    <button id="reviewsNext" className="bg-primary flex rounded-full items-center justify-center w-10 h-10">
                      <span className="sr-only">Next slide</span>
                      <i className="fa fa-chevron-right text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section >

        </div >
      </main >
    </>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className=" text-4xl text-white">Black Lab</p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className=" text-4xl text-white">Yellow Lab Pup</p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className=" text-4xl text-white">Cat</p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className=" text-4xl text-white">Ferret</p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className=" text-4xl text-white">Bunny</p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className=" text-4xl text-white">Turtle</p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className=" text-4xl text-white">Snake</p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className=" text-4xl text-white">Iguana</p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/assets/pets/dog2.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2",
    thumbnail:
      "/assets/pets/dog1.jpg"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/assets/pets/Cat.jpg"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/assets/pets/Ferret.jpg"
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "/assets/pets/Bunny.jpg"
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "/assets/pets/Turtle.jpg"
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-1",
    thumbnail:
      "/assets/pets/Snake.jpg"
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-2",
    thumbnail:
      "/assets/pets/Iguana.jpg"
  }
];

export const GlobeDemo = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="py-20 h-screen md:h-auto dark:bg-black bg-[#E5E7F0] rounded-br-[150px] relative w-full">
      <div className="max-w-[1600] w-full flex flex-row relative overflow-hidden h-full md:h-[40rem] px-40">
        <div className="absolute h-full flex flex-row items-center">
          <div className="text-2xl">
            <h2 className="text-center dark:text-white text-5xl ">
              Destinations
            </h2>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from Asia</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from Africa</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from Europe</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from South America</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from the United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black z-40" />
        <div className="relative w-full h-full md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Destination Paperwork & Requirements ",
    description:
      "A technology company that builds economic infrastructure for the internet."
  },
  {
    title: "Veterinarian Paperwork & Documents Required ",
    description:
      "This includes all veterinarian paperwork and documents your pet(s) will need for your destination."
  },
  {
    title: "Quarantine, Import Permits, Export Permits, Tapeworm Treatment, Parasite Treatment & Bloodwork",
    description:
      "Does your pet need any of these things to get to their destination?"
  },
  {
    title: "Airline Paperwork & Check-In Requirements ",
    description:
      "This is based on the airline and the routing utilized."
  },
  {
    title: "Pet-Friendly Commercial or Private Charter Flights ",
    description:
      "Commercial and Private Charter options."
  },
  {
    title: "In-cabin Flights ",
    description:
      "This is dependent on airline, pet type and pet size."
  },
  {
    title: "Ground Transport Options ",
    description:
      "An alternative option for you & your pet(s)."
  },
  {
    title: "Residential Pick-up / Airport Delivery ",
    description:
      "Need assistance with pick-up and airport check-in?"
  },
  {
    title: "Airport Pick-Up / Residential Delivery",
    description:
      "Need assistance with airport pick-up, customs, or residential delivery? "
  },
  {
    title: "Airline Accepted Crates & Where to Get Them",
    description:
      "Which crates will the airline accept for both in-cabin and cargo and where to get them. "
  }
];