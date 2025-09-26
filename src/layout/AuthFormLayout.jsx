import React from "react";

const AuthFormLayout = ({ title, onSubmit, children, subTitle }) => {
  return (
    <div
      className="relative w-full flex flex-col justify-center items-center bg-[#FFFFF0] "
      style={{ height: "100dvh" }}
    >
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mb-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-500 ">{subTitle} </p>
        </div>
        <div className=" w-80 flex flex-col justify-center items-center gap-3">
          {children}
        </div>
      </form>
    </div>
  );
};

export default AuthFormLayout;
