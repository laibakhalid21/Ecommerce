import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen relative">
      <img
        src="bg.jpg"
        alt="Landing background"
        className="w-full h-full object-cover brightness-95"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white">
        
        <img src="logos.png" className="h-96 "/>
        <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">
          Welcome to Our Store
        </h1>
        <button
          onClick={() => navigate("/Home")}
          className="bg-green-500 text-black
          w-96 hover:bg-blue-400 hover:text-white border hover:border-blue-400
          font-bold px-6 py-3 rounded-lg transition duration-300 ease-in-out 
          text-xl hover:scale-110
          "
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default Landing;
