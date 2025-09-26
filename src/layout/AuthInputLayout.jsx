import React, { useState } from "react";

const AuthInputLayout = ({
  type,
  onChange,
  value,
  placeholder,
  error,
  name,
}) => {
  const errorMessage = Array.isArray(error) ? error.join(" ") : error;

  return (
    <div className="w-80 ">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <i class="fa-solid fa-envelope "></i>
        </span>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          error={error}
          className="border py-4.5 px-10 w-full rounded-4xl border-gray-400 focus:border-2 focus:border-[#1FCC79] focus:outline-none "
        />
      </div>
      {error && (
        <p className="flex justify-center mt-2 mb-4 text-red-600">
          {errorMessage}
        </p>
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
}) => {
  const [show, setShow] = useState(false);
  const inputType = type === "password" && show ? "text" : type;
  const errorMessage = Array.isArray(error) ? error.join(" ") : error;

  return (
    <div className="mb-2 w-80 ">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray">
          <i class="fa-solid fa-key"></i>
        </span>
        <input
          type={inputType}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          error={error}
          className="border py-4.5 px-10 w-full rounded-4xl border-gray-400 focus:border-2 focus:border-[#1FCC79] focus:outline-none "
        />

        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-lg mr-1"
        >
          {show ? (
            <i class="fa-solid fa-eye-slash"></i>
          ) : (
            <i class="fa-solid fa-eye"></i>
          )}
        </button>
      </div>
      {error && (
        <p className="flex justify-center mt-2 mb-4 text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default AuthInputLayout;
