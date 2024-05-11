"use client";

import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination"
import "react-multi-carousel/lib/styles.css";
import FavCard from "@/components/cards/favCard";
import MapCard from "@/components/cards/mapCard";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


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
      <main className="flex flex-col">
        <section id="home" className="page-section flex justify-center lg:px-6 py-72" style={{ backgroundImage: "url(./assets/home/background.png)" }}>
          <div className="bg-no-repeat bg-center bg-auto top-0 right-0 bottom-0 left-0 absolute" style={{ backgroundImage: "url(./assets/svg/shapes_overlay_1.svg)", zIndex: -1 }}></div>
          <div className="text-center max-w-screen-xl content-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-extrabold" style={{ fontFamily: "Nunito, sans-serif" }}>The World&apos;s Best Consulting Serivce for Pet Shipping</h1>
              <p className="text-lg py-12">Our mission is to make pet transport as smooth as possible. Our service offers easy-to-follow instructions, various options, and advice to ensure a seamless pet transport process.</p>
              <a href="/#services" className="w-52 h-20 focus:outline-none text-2xl text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Our Service</a>
            </div>
            <div className="absolute top-80 right-24">
              <img src="./assets/home/3.png" />
            </div>
            <div className="absolute bottom-20 left-14">
              <img src="./assets/home/4.png" />
            </div>
          </div>
        </section>
        <div id="aboutus" className=" h-36 w-0" />
        <section className="page-section flex justify-center relative px-36">
          <div className=" max-w-7xl flex flex-wrap items-center text-center">
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className=" font-extrabold text-5xl">
                Welcome To Our Family
              </h3>
              <div className="box-border">
                <ul className="relative">
                  <li>
                    <div className=" text-[#7c58d3] text-xl font-bold px-6 py-6">Who Are We?
                    </div>
                    <div>
                      <div className="relative px-6 text-lg leading-6 mb-0">
                        <div className="text">We’re a family-owned pet-loving company. We’ve been shipping pets domestically and internationally for over two decades now.</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className=" text-[#7c58d3] text-xl font-bold px-6 py-6">Why This Service?
                    </div>
                    <div>
                      <div className="relative px-6 text-lg leading-6 mb-0">
                        <div className="text">Our consulting service was born from a desire to provide an alternative to the high-priced costs of hiring a full-service company to ship your pet(s). </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className=" text-[#7c58d3] text-xl font-bold px-6 py-6">What We Offer:
                    </div>
                    <div>
                      <div className="relative px-6 text-lg leading-6 mb-0">
                        <div className="text">We offer an easy, customizable DIY solution based on your pet(&apos;s) unique move. This solution is designed to provide clear-cut, simple instructions, and options, and advise you of requirements for your pet(&apos;s) transport. </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img src="./assets/home/3.jpg" alt="editor" className="inline-block rounded shadow-lg border border-merino-400" />
            </div>
          </div>
        </section>
        <div id="services" className=" h-36 w-0" />
        {/* <section className="page-section flex justify-center px-2 w-full h-full">
          <div className="max-w-7xl">
            <div className=" text-center items-center w-full">
              <p className="text-3xl font-bold text-[#7c58d3]">SERVICES</p>
              <br />
            </div>
            <div>
              <div className=" flex flex-row justify-center">
                <div className="flex flex-shrink-0 flex-grow-0">
                  <div className=" relative pl-10 pr-11 border-r-8 border-2 border-solid border-[#ebe5f7]">
                    <div className="title_wrap">
                      <div className="item_icon"><img src="/images/icon/icon_pet_walking.svg" alt="Pet Walking" /></div>
                      <h3 className="item_title mb-0">Walking &amp; Sitting</h3>
                    </div>
                    <p>Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi </p>
                    <div className="item_price"><span>From $15 / hour</span></div><a className="btn_unfill"
                      href="/page-service-details"><span>Get Service</span><i className="far fa-long-arrow-right"></i></a>
                    <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws" /></div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-grow-0">
                  <div className=" relative pl-10 pr-11 border-r-8 border-2 border-solid border-[#ebe5f7]">
                    <div className="title_wrap">
                      <div className="item_icon"><img src="/images/icon/icon_pet_grooming.svg" alt="Pet Grooming" /></div>
                      <h3 className="item_title mb-0">Pet Grooming</h3>
                    </div>
                    <p>Et odio pellentesque diam volutpat commodo sed egestas egestas pellentesque nec nam </p>
                    <div className="item_price"><span>From $39 / complex</span></div><a className="btn_unfill"
                      href="/page-service-details"><span>Get Service</span><i className="far fa-long-arrow-right"></i></a>
                    <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws" /></div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-grow-0">
                  <div className=" relative pl-10 pr-11 border-r-8 border-2 border-solid border-[#ebe5f7]">
                    <div className="title_wrap">
                      <div className="item_icon"><img src="/images/icon/icon_pet_training.svg" alt="Pet Training" /></div>
                      <h3 className="item_title mb-0">Pet Training</h3>
                    </div>
                    <p>Aliquam ut porttitor leo a diam sollicitudin tempor sit amet est placerat </p>
                    <div className="item_price"><span>From $27 / hour</span></div><a className="btn_unfill"
                      href="/page-service-details"><span>Get Service</span><i className="far fa-long-arrow-right"></i></a>
                    <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws" /></div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-grow-0">
                  <div className=" relative pl-10 pr-11 border-r-8 border-2 border-solid border-[#ebe5f7]">
                    <div className="title_wrap">
                      <div className="item_icon"><img src="/images/icon/icon_pet_taxi.svg" alt="Pet Taxi" /></div>
                      <h3 className="item_title mb-0">Pet Taxi</h3>
                    </div>
                    <p>Maecenas ultricies mi eget mauris pharetra et ultrices consectetur adipiscing elit</p>
                    <div className="item_price"><span>From $22 / trip</span></div><a className="btn_unfill"
                      href="/page-service-details"><span>Get Service</span><i className="far fa-long-arrow-right"></i></a>
                    <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws" /></div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-grow-0">
                  <div className=" relative pl-10 pr-11 border-r-8 border-2 border-solid border-[#ebe5f7]">
                    <div className="title_wrap">
                      <div className="item_icon"><img src="/images/icon/icon_pet_health.svg" alt="Pet Health &amp; Wellness" />
                      </div>
                      <h3 className="item_title mb-0">Health &amp; Wellness</h3>
                    </div>
                    <p>Amet porttitor eget dolor morbi non arcu risus quis varius blandit aliquam etiam</p>
                    <div className="item_price"><span>From $39/ visit</span></div><a className="btn_unfill"
                      href="/page-service-details"><span>Get Service</span><i className="far fa-long-arrow-right"></i></a>
                    <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws" /></div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-grow-0">
                  <div className=" relative pl-10 pr-11 border-r-8 border-2 border-solid border-[#ebe5f7]">
                    <div className="title_wrap">
                      <div className="item_icon"><img src="/images/icon/icon_pet_hotel.svg" alt="Pet Hotel" /></div>
                      <h3 className="item_title mb-0">Pet Hotel</h3>
                    </div>
                    <p>Turpis massa sed elementum tempus egestas sed sed risus aliquam urna cursus eget n</p>
                    <div className="item_price"><span>From $15 / night</span></div><a className="btn_unfill"
                      href="/page-service-details"><span>Get Service</span><i className="far fa-long-arrow-right"></i></a>
                    <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="page-section flex justify-center px-2 w-full h-full">
          <div className="max-w-7xl">
            <div className=" text-center items-center w-full">
              <p className="text-3xl font-bold text-[#7c58d3]">FAVORITE PETS</p>
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
          </div>

        </section>
        <section className="page-section flex justify-center w-full">
          <div className="max-w-7xl">
            <div className=" text-center items-center w-full">
              <p className="text-3xl font-bold text-[#7c58d3]">DESTINATINOS</p>
              <br />
            </div>
            <div className="flex flex-wrap items-center text-center">
              <div className="w-full md:w-2/5 lg:w-1/3 px-4 hover:scale-110 transition-all">
                <img src="./assets/map/north-america.jpg" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                <h2 className="text-2xl py-2 font-bold">North American</h2>
              </div>
              <div className="w-full md:w-2/5 lg:w-1/3 px-4 hover:scale-110 transition-all">
                <img src="./assets/map/Asia.jpg" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                <h2 className="text-2xl py-2 font-bold">Asia</h2>
              </div>
              <div className="w-full md:w-2/5 lg:w-1/3 px-4 hover:scale-110 transition-all">
                <img src="./assets/map/south-america.png" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                <h2 className="text-2xl py-2 font-bold">South American</h2>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-20 text-center">
              <div className="w-full md:w-2/5 lg:w-1/3 px-4 hover:scale-110 transition-all">
                <img src="./assets/map/Africa.png" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                <h2 className="text-2xl py-2 font-bold">Africa</h2>
              </div>
              <div className="w-full md:w-2/5 lg:w-1/3 px-4 hover:scale-110 transition-all">
                <img src="./assets/map/europe.png" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                <h2 className="text-2xl py-2 font-bold">Europe</h2>
              </div>
              <div className="w-full md:w-2/5 lg:w-1/3 px-4 hover:scale-110 transition-all">
                <img src="./assets/map/united kingdom.png" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                <h2 className="text-2xl py-2 font-bold">United Kingdom</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
