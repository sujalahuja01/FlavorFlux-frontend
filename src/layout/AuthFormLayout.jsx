import React from "react";

const AuthFormLayout = ({ title, onSubmit, children, message }) => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2 border border-gray-400 p-5 rounded-2xl"
      >
        <h2 className="text-xl font-bold">{title}</h2>

        {children}

        {message && <div className="mt-2 text-sm">{message}</div>}
      </form>
    </div>
  );
};

export default AuthFormLayout;
