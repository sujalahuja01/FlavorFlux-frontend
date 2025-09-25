import React from "react";

const AuthFormLayout = ({ title, onSubmit, children, message }) => {
  return (
    <div
      className="relative w-full flex flex-col justify-center items-center "
      style={{ height: "100dvh" }}
    >
      <div className="">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center h-16.5 w-60 mb-8">
            <h2 className="h-8 text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-400 ">Please enter your account here </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
          <div>{message && <div className="mt-2 text-sm">{message}</div>}</div>
        </form>
      </div>
    </div>
  );
};

export default AuthFormLayout;
