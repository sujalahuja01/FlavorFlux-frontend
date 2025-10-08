import React, { useState } from "react";

const AuthInputLayout = ({
  type,
  onChange,
  value,
  placeholder,
  error,
  name,
  icon,
}) => {
  const errorMessage = Array.isArray(error) ? error.join(" ") : error;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
            <i className={`fa-solid ${icon}`}></i>
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full h-11 border-2 border-gray-800 rounded-md bg-white shadow-[4px_4px_0_0_#323232] px-10 text-gray-800 font-medium focus:outline-none focus:border-blue-500 transition-all"
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{errorMessage}</p>
      )}
    </div>
  );
};

export const AuthPasswordInputLayout = ({
  type,
  onChange,
  value,
  placeholder,
  error,
  name,
  autoComplete = "new-password",
}) => {
  const [show, setShow] = useState(false);
  const inputType = type === "password" && show ? "text" : type;
  const errorMessage = Array.isArray(error) ? error.join(" ") : error;

  return (
    <div className="w-full flex flex-col item-center">
      <div className="relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
          <i class="fa-solid fa-key"></i>
        </span>
        <input
          type={inputType}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          error={error}
          autoComplete={autoComplete}
          className="w-full h-11 border-2 border-gray-800 rounded-md bg-white shadow-[4px_4px_0_0_#323232] px-10 text-gray-800 font-medium focus:outline-none focus:border-blue-500 transition-all"
        />

        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2  text-gray-700"
        >
          <i className={`fa-solid ${show ? "fa-eye-slash" : "fa-eye"}`}></i>
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{errorMessage}</p>
      )}
    </div>
  );
};

export default AuthInputLayout;
