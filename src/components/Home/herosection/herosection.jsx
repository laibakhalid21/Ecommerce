import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function HeroSection() {
  const navigate=useNavigate();
  const images = [
    { src: "k11.png" },
    { src: "m22.png" },
    { src: "k2.png" },
    { src: "w5.png" },
    { src: "mc.png" },
    { src: "w4.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const HandleClick=()=>{
    navigate('/products')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full bg-[url('back1.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-[1980px] mx-auto grid grid-cols-1 md:grid-cols-2 px-6 xl:px-16 gap-10">
        <div className="text-center md:text-left 2xl:px-16 md:pb-32 flex flex-col justify-center rounded-lg p-6">
          <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-blue-950 py-8">
            UP TO <span className="text-green-500 text-6xl">70%</span> OFF
          </h1>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-blue-950">
            Your Destination for Stylish Clothing!
          </h1>
          <p className="text-lg md:text-xl py-6 text-gray-700">
            Welcome to <span className="font-semibold">FashionStore</span>, your
            ultimate destination for trendy and stylish apparel! Explore the
            latest in fashion, comfort, and elegance with us. Shop now and
            elevate your wardrobe with endless possibilities!
          </p>
          <button
            className="bg-blue-950 h-14 w-56 rounded-lg font-semibold hover:scale-105 
             transition duration-300 ease-in-out text-white hover:bg-transparent 
             hover:text-black border border-black text-lg place-self-center md:place-self-auto"
             onClick={HandleClick}
          >
            Explore Our Collection
          </button>
        </div>

        <div className="flex justify-center items-end w-full h-full">
          <img
            src={images[currentIndex].src}
            alt="fashion"
            className="w-full object-cover h-[600px] 2xl:h-[800px] transition-all duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
