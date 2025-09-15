import React from "react";

const AuthFormLayout = ({ title, onSubmit, children, message }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">{title}</h2>

      {children}

      {message && <div className="mt-2 text-sm">{message}</div>}
    </form>
  );
};

export default AuthFormLayout;
