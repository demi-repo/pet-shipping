"use client";

import React, { useState } from "react";
import Link from "next/link";

const Login = (props: any) => {
  const [select, setSelect] = useState(false);
  const handleClick = () => {
    setSelect(!select);
  };
  return (
    <main className="w-full h-full flex flex-col lg:gap-x-[60px] gap-x-10">
      <div className="pb-[60px] pb- pt-[16px]">
        <div className="px-[24px] py-[24px] w-full">
          <div className="flex-row items-center flex">
            <div className="hidden lg:block grow shrink-0 basis-[1%]">
              <img
                loading="lazy"
                width={803}
                height={607}
                decoding="async"
                src="/pets/cat.jpg"
                className="rounded-2xl w-full hidden lg:block"
              ></img>
            </div>
            <div className="lg:mx-[60px] lg:my-[60px] w-full lg:max-w-[505px]">
              <div className="flex flex-col gap-[32px]">
                <p className="	text-[40px]">Welcome back!</p>
                <form>
                  <div className="flex flex-col gap-y-[24px]">
                    <div className="flex flex-col items-start w-full gap-2">
                      <div className="relative justify-start gap-1 w-full flex">
                        <span className="font-medium text-sm">
                          Email address *
                        </span>
                      </div>
                      <div className=" border-black focus-within:border-custom-blue gap-2 border-2 h-14 itmes-center p-4 rounded-lg w-full flex">
                        <div className="grow">
                          <input
                            type="email"
                            name="email"
                            className="border-0 outline-none bg-transparent w-full text-base font-medium"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <div className="flex flex-col items-start w-full gap-2">
                        <div className="relative justify-start gap-1 w-full flex">
                          <span className="font-medium text-sm">
                            Password *
                          </span>
                        </div>
                        <div className=" border-black focus-within:border-custom-blue gap-2 border-2 h-14 itmes-center p-4 rounded-lg w-full flex">
                          <div className="grow">
                            <input
                              type="password"
                              name="password"
                              className="border-0 outline-none bg-transparent w-full text-base font-medium"
                            ></input>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="cursor-pointer"
                              onClick={handleClick}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                {select ? (
                                  <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z" />
                                ) : (
                                  <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
                                )}
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-end gap-2">
                        <a className="cursor-pointer">
                          <span className="font-medium text-sm hover:border-b hover:border-black">
                            Forgot password?
                          </span>
                        </a>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="flex flex-row pb-4 pt-4 gap-1 justify-center items-center pr-5 pl-5 bg-black hover:opacity-[.8] rounded-[32px] text-center w-full  text-base text-white"
                    >
                      Sign in
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
                    </button>
                  </div>
                </form>
                <Link
                  href="register"
                  className="flex items-center justify-center"
                >
                  <button type="button" className="hover:opacity-80">
                    Create account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
