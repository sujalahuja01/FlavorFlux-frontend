import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 px-4">
      <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 mb-3">
        Simple ingredients, endless possibilities.
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        From everyday ingredients to extraordinary meals.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="mt-2 px-3 h-11 border-2 border-gray-800 rounded-md bg-[#FFE083] hover:bg-[#ffd24d] shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 duration-200"
      >
        <div className="flex justify-center">
          <span className="flex items-center gap-4">
            <span className="font-bold text-lg">Let’s cook</span>
            <i className="fa-solid fa-arrow-right mt-0.5  "></i>
          </span>
        </div>
      </button>

      <div className="mt-10">
        <img
          src="/images/image-removebg-preview.png"
          alt="Chef Illustration"
          className="w-72 sm:w-96 mx-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
