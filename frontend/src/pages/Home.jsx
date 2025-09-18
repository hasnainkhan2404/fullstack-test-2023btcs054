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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
              We Love To Help You Achieve Your Fitness Goals.
            </h2> 
            <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
              Using technology to make HealthCare simpler, smarter and more rewarding.
            </p>

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
                    <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-xs">★</div>
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
                    <span>→</span>
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

            <div className="relative w-full h-auto">
              <div className="bg-indigo-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">
                  <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-xs">◆</div>
                </div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                  Improved technology yields greater value
                </h3>
                <p className="text-xs font-normal text-white mb-8">
                  We’ve eliminated old analogue process with state-of-the-art tech
                </p>
                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <span>→</span>
                </button>
              </div>
            </div>

            <div className="relative w-full h-auto">
              <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">
                  <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-xs">◉</div>
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
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2
                      className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      The Tale of Our Achievement Story</h2>
                    <p
                      className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our achievement story is a testament to teamwork and perseverance. Together, we've
                      overcome challenges, celebrated victories, and created a narrative of progress and
                      success.</p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Influencing Digital
                        Landscapes Together</p>
                    </div>
                    <div
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                        Through Success</p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                        Innovation Wins Understanding</p>
                    </div>
                    <div
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                        Clients</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                        Client Satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                <span
                  className="px-1.5 text-black text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                  More</span>
                  <FaLongArrowAltRight className='group-hover:translate-x-0.5 transition-all duration-700 ease-in-out' />
              </button>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div
                className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
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
