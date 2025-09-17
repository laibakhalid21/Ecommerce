import React from "react";

function Edition() {
  return (
    <div className="w-full max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-14 my-10">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src="bgi.jpg"
          alt="Mega Sale Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative grid md:grid-cols-2 items-center gap-10 pt-10  px-6 md:px-12 lg:pl-20">
          <div className="text-white space-y-6 ">
            <p className="text-3xl font-extrabold tracking-wide">
              Limited Time Only
            </p>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-lg">
              Mega Sale 
            </h1>
            <p className="text-lg sm:text-xl max-w-lg text-gray-200">
              Don’t miss out! Exclusive collection now available with exciting
              offers.
            </p>
            <h2 className="text-xl font-medium">
              Grab It At <span className="font-bold text-yellow-400">40% OFF</span>
              <br />
              Use Code <span className="font-bold text-yellow-300">MEGA40</span>
            </h2>
            <button
              className="bg-green-400 text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg 
              hover:bg-green-300 hover:scale-110 hover:shadow-2xl transition duration-300"
            >
              SHOP NOW
            </button>
          </div>

         <div className="flex justify-center md:justify-end lg:pr-10 xl:pr-40 items-end"> 
          <img src="sh5.png" alt="Special Edition" className="w-full h-[400px] lg:h-[450px] object-cover drop-shadow-lg" />
           </div>
        </div>
      </div>
    </div>
  );
}

export default Edition;
