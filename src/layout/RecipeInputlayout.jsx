import React from "react";
import AuthFormLayout from "./AuthFormLayout";
import RecipeRenderer from "@/components/RecipeRenderer";

const RecipeInputlayout = ({ title, handler, children, message }) => {
  return (
    <>
      <AuthFormLayout title={title} onSubmit={handler}>
        {children}
      </AuthFormLayout>
      {message && (
        <div>
          {typeof message === "object" ? (
            <RecipeRenderer recipe={message} />
          ) : (
            <p>{message}</p>
          )}
        </div>
      )}
    </>
  );
};
export default RecipeInputlayout;
