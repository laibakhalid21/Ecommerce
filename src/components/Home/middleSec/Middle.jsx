import React from "react";

function MiddleSec() {
  return (
    <div className="w-full max-w-[1980px] mx-auto grid xl:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-14 py-10">
      
      <div className="bg-orange-100 grid sm:grid-cols-2 rounded-3xl overflow-hidden shadow-md">
        <div className="px-6 sm:px-10 py-8 sm:py-10 flex flex-col justify-center">
          <p className="font-semibold text-sm sm:text-base">NEW STYLE</p>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mt-4 sm:mt-6">
            Get 60% Offer & Make New Fusion.
          </h1>
          <button
            className="bg-orange-400 text-black font-semibold text-lg sm:text-xl 
            h-11 sm:h-12 w-40 sm:w-48 rounded-full mt-10 sm:mt-16
            hover:scale-105 transition duration-200 ease-in-out"
          >
            Shop Now &gt;
          </button>
        </div>
        <div className="flex justify-center items-end">
          <img
            src="mc1.png"
            alt="Offer"
            className="w-full lg:h-[450px]  object-cover"
          />
        </div>
      </div>

      <div className="bg-pink-200 grid sm:grid-cols-2 rounded-3xl overflow-hidden shadow-md">
        <div className="px-6 sm:px-10 py-8 sm:py-10 flex flex-col justify-center">
          <p className="font-semibold text-sm sm:text-base">NEW OFFER</p>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mt-4 sm:mt-6">
            Make your New Styles with Our Products.
          </h1>
          <button
            className="bg-pink-400 text-black font-semibold text-lg sm:text-xl 
            h-11 sm:h-12 w-40 sm:w-48 rounded-full mt-10 sm:mt-16
            hover:scale-105 transition duration-200 ease-in-out"
          >
            Shop Now &gt;
          </button>
        </div>

        <div className="flex justify-center items-end">
          <img
            src="shp2.png"
            alt="Offer"
            className="w-full lg:h-[450px]  object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default MiddleSec;
