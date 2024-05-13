export default function Footer() {
  return (
    <>
      <div className="bg-tertiary bg-[#E5E7F0]">
        <div className="container px-4 mx-auto py-16">
          <div className="flex mb-8">
          </div>
          <div className="flex text-base flex-col md:flex-row text-left w-full text-black">

            <div className="w-full md:w-2/3">
              <div className="flex flex-col md:flex-row items-end">
                <div className="w-full md:w-1/2">
                  <ul className="space-y-2 md:space-y-4">
                    <li className=" flex relative">
                      <a href="#aboutus" className="items-center font-light text-lg flex relative group">
                        <div>
                          About us                                            </div>
                        <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                        <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                      </a>
                    </li>
                    <li className=" flex relative">
                      <a href="#petTypes" className="items-center font-light text-lg flex relative group">
                        <div>
                          Pet types                                            </div>
                        <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                        <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                      </a>
                    </li>
                    <li className=" flex relative">
                      <a href="#destinations" className="items-center font-light text-lg flex relative group">
                        <div>
                          Destinations                                          </div>
                        <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                        <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                      </a>
                    </li>
                    <li className=" flex relative">
                      <a href="#services" className="items-center font-light text-lg flex relative group">
                        <div>
                          Services                                           </div>
                        <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                        <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                      </a>
                    </li>
                    <li className=" flex relative">
                      <a href="#considering" className="items-center font-light text-lg flex relative group">
                        <div>
                          Things to consider                                           </div>
                        <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                        <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                  <h3 className="mt-6 font-light text-lg">
                    <a href="#contactus">
                      Contact us
                    </a>
                  </h3>
                  <div className="mt-1">
                    <a href="mailto:--><!--" className="font-light hover:underline">
                      •	DIY@gamil.com
                    </a>
                  </div>
                  <div className="mt-1">
                    <a href="tel:--><!--" className="font-light hover:underline">
                      •	phone number: 36746792
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
