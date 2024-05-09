import EarPieceIcon from "@/components/icons/earpieceIcon";
import MailIcon from "@/components/icons/mailIcon";
import ChatIcon from "@/components/icons/chatIcon";

const Contact = (props: any) => {
  return (
    <main className="w-full h-full">

      <section className="page-section flex justify-center items-center p-5">
        <div className="max-w-6xl w-full flex flex-col gap-14">
          <div className="flex md:flex-row flex-col md:gap-10 gap-4 w-full md:p-0 px-2">
            <div className="flex-1 flex md:flex-row flex-row-reverse md:gap-4 gap-2 justify-start items-center">
              <div className="w-12 h-12 rounded-full border-2 border-black p-[10px]">
                <EarPieceIcon className="text-black" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-sm text-black uppercase">
                  Call Me
                </span>
                <span className="font-medium text-black">
                  8am to 8pm CST, 7 days a week
                </span>
                <span className="font-medium text-black">+1 405-594-7026</span>
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
                  breiter71@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section lg:px-10 px-5 flex items-center justify-center w-full">
        <div className="grid grid-cols-5 w-full lg:justify-between justify-center gap-6 max-w-screen-2xl">
          <div className="flex flex-col lg:col-span-3 col-span-5 gap-10 w-full max-w-screen-2xl text-black">
            <div className="flex flex-col w-full rounded-2xl h-max gap-5">
              <div className="flex justify-between">
                <span className="font-bold md:text-5xl text-3xl max-w-4xl">
                  Consulting Services
                </span>
              </div>
              <div>
                <ul className="divide-y">
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Destination Paperwork & Requirements</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Veterinarian Paperwork & Documents Required</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Airline Paperwork & Check-In Requirements</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Pet-Friendly Commercial or Private Charter Flights </span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	In-cabin Flights (when applicable)</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Ground Transport Options </span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Airline Accepted Crates & Where to Get Them </span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Residential Pick-up/Delivery Options</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Quarantine</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-full rounded-2xl h-max gap-5">
              <div className="flex justify-between">
                <span className="font-bold md:text-5xl text-3xl max-w-4xl">
                  Things to Consider
                </span>
              </div>
              <div>
                <ul className="divide-y">
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Is pet travel safe? </span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	How much will I save money by doing it myself?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Does my pet need vaccinations?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Does my pet need rabies verification? </span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Does my pet need a microchip?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Is my pet’s breed allowed?  </span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Can my pet fly in-cabin?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Is my pet too large for the plane?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Does my pet need to be crate-trained?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Where does my pet go to the bathroom?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Do I need a veterinarian?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Will the veterinarian be familiar with the paperwork and requirements?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	What is the USDA?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	What are the destination country&apos;s rules & requirements?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Will my pet be on the same flight as me?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	How do I check my pet in?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	If my pet can’t fly what are alternative transport options?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	How do I measure my pet for the crate?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	How do I quarantine my pet?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	What can be in the crate with my pet?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	Can I give my pet a sedative?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <span>•	What countries require quarantine?</span>
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
                          no content
                        </p>
                      </article>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden lg:block col-span-2 bg-cover bg-center bg-[url(/images/grassImage.png)] w-full h-[500px] rounded-3xl"></div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
