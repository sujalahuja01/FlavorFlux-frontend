import React from "react";

const AuthSwitch = ({ checked, setChecked }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <label className="relative flex items-center justify-center w-12 h-5">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="absolute opacity-0 w-0 h-0"
        />

        {/* Slider background */}
        <span
          className={`absolute inset-0 rounded-md border-2 border-gray-800 shadow-[4px_4px_0_rgba(50,50,50,1)] transition-colors duration-300 ${
            checked ? "bg-blue-600" : "bg-white"
          }`}
        ></span>

        {/* Slider thumb */}
        <span
          className={`absolute w-5 h-6 border-2 border-gray-800 rounded-md bg-white shadow-[0_3px_0_rgba(50,50,50,1)] transition-transform duration-300 transform ${
            checked ? "translate-x-5" : "-translate-x-3"
          }`}
        ></span>

        {/* Labels */}
        <span
          className={`absolute -left-20 top-0 w-20 font-semibold text-gray-800 transition-all duration-500 ${
            checked ? "no-underline" : "underline"
          }`}
        >
          Log in
        </span>
        <span
          className={`absolute -right-30 top-0 w-20 font-semibold text-gray-800 transition-all duration-500 ${
            checked ? "underline" : "no-underline"
          }`}
        >
          Sign up
        </span>
      </label>
    </div>
  );
};

export default AuthSwitch;
