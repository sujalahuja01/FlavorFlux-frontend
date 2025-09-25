import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full flex flex-col justify-end items-center text-white"
      style={{ height: "100dvh" }}
    >
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/bg-1.png')]"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      <div className="absolute z-10 text-white top-16  flex justify-center">
        <span>
          <i class="fa-solid fa-star mt-1.5"></i>
        </span>
        <h1 className="text-xl font-semibold ml-2">
          Your hunger, our algorithm
        </h1>
      </div>
      <div className="mb-20 z-10 text-center h-69 ">
        <div className="w-62  mb-10 flex flex-col justify-between">
          <h1 className=" text-6xl mb-6 ">Let's Cook</h1>
          <p>Recipes that slap, no cap 🔥</p>
        </div>
        <button
          className="bg-[#E23E3E] w-52 h-14 rounded-xl"
          onClick={() => navigate("/signup")}
        >
          <div className="flex justify-center">
            <span className="flex items-center gap-4">
              <span className="font-bold text-lg">Start cooking</span>
              <i class="fa-solid fa-arrow-right mt-0.5  "></i>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
export default Home;
