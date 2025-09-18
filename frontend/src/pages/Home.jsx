import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661574913674-74e268d7dbb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen text-white px-4">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-wide">
            OUR FOCUS - Your Health
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl">
            Discover Your Health Benefits With Us.
          </p>


          <div className="mt-10 w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex-1 text-left">
              <p className="text-sm text-gray-200">Step In</p>
              <p className="text-white font-medium">Sun, 20 March 2022</p>
            </div>

            <div className="hidden sm:block border-l border-gray-300/40 h-10"></div>

            <div className="flex-1 text-left">
              <p className="text-sm text-gray-200">Step out</p>
              <p className="text-white font-medium">Mon, 21 March 2022</p>
            </div>

            <div className="hidden sm:block border-l border-gray-300/40 h-10"></div>

            <div className="flex-1 text-left">
              <p className="text-sm text-gray-200">Time</p>
              <p className="text-white font-medium">2 P.M.</p>
            </div>

            <button className="w-full sm:w-auto bg-white text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition">
              Book Now
            </button>
          </div>

          {/* Stats */}
          <div className="absolute bottom-8 w-full px-4">
            <div className="flex flex-row  justify-center items-center sm:space-x-16 space-y-6 sm:space-y-0 text-white text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold">121+</p>
                <p className="text-sm">Capital Raised</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">90+</p>
                <p className="text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">1.5K+</p>
                <p className="text-sm">Property Options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-14 text-center">
            <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
              We Love To Help You Achieve Your Fitness Goals.
            </h2> 
            <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
              Using technology to make HealthCare simpler, smarter and more rewarding.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
              <a
                href="#"
                className="cursor-pointer bg-black py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-white transition-all duration-500 focus:outline-none hover:bg-gray-700"
              >
                Get started
              </a>
              <a
                href="#"
                className="cursor-pointer bg-white py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-black transition-all duration-500 focus:outline-none hover:bg-gray-700"
              >
                Learn more
              </a>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">

            <div className="relative w-full h-auto md:col-span-2">
              <div className="bg-gray-800 rounded-2xl flex justify-between flex-row flex-wrap">
                <div className="p-5 xl:p-8 w-full md:w-1/2">
                  <div className="block">

                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                    Accomplish tasks swiftly with online tools.
                  </h3>
                  <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                    Get quoted and covered in under 10 minutes online. No paperwork
                    or waiting anymore.
                  </p>
                  <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                    View More
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative hidden h-auto md:w-1/2 md:block">
                  <img
                    src="https://pagedone.io/asset/uploads/1695028873.png"
                    alt="Header Tailwind Section"
                    className="h-full ml-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative w-full h-auto">
              <div className="bg-indigo-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                  Improved technology yields greater value
                </h3>
                <p className="text-xs font-normal text-white mb-8">
                  We’ve eliminated old analogue process with state-of-the-art tech
                </p>
                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Third Card */}
            <div className="relative w-full h-auto">
              <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                  Build wealth with insurance planning
                </h3>
                <p className="text-xs font-normal text-white mb-8">
                  Every life plan policy has a built-in wealth bonus, and we
                  contribute too
                </p>
                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* third section */}

      <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-center items-start gap-8 flex">
                <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 class="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                  <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2
                      class="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      The Tale of Our Achievement Story</h2>
                    <p
                      class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our achievement story is a testament to teamwork and perseverance. Together, we've
                      overcome challenges, celebrated victories, and created a narrative of progress and
                      success.</p>
                  </div>
                </div>
                <div class="w-full flex-col justify-center items-start gap-6 flex">
                  <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">Influencing Digital
                        Landscapes Together</p>
                    </div>
                    <div
                      class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                      </h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                        Through Success</p>
                    </div>
                  </div>
                  <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                        Innovation Wins Understanding</p>
                    </div>
                    <div
                      class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                        Clients</h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                        Client Satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                <span
                  class="px-1.5 text-black text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                  More</span>
                  <FaLongArrowAltRight className='group-hover:translate-x-0.5 transition-all duration-700 ease-in-out' />
              </button>
            </div>
            <div class="w-full lg:justify-start justify-center items-start flex">
              <div
                class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about Us image" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
