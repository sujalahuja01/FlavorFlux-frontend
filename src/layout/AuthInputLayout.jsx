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
    <div className="mb-2 w-80">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
        className="border py-4.5 px-4.5 w-full rounded-4xl"
      />
      {error && <p>{errorMessage}</p>}
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
    <div className="mb-2 w-80 relative">
      <input
        type={inputType}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
        className="border py-4.5 px-4.5 w-full rounded-4xl pr-10"
      />

      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-lg"
      >
        {show ? "🙈" : "👁️"}
      </button>

      {error && <p>{errorMessage}</p>}
    </div>
  );
};

export default AuthInputLayout;
