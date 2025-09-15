import React, { useState } from "react";

const AuthInputLayout = ({
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
    <div>
      <input
        type={inputType}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
      {type === "password" && (
        <button type="button" onClick={() => setShow((prev) => !prev)}>
          {show ? "🙈" : "👁️"}
        </button>
      )}
      {error && <p>{errorMessage}</p>}
    </div>
  );
};

export default AuthInputLayout;
