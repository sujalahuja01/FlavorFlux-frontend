import React from "react";
import RecipeRenderer from "@/components/RecipeRenderer";

const RecipeInputlayout = ({ title, onSubmit, children, message }) => {
  return (
    <>
      <div
        className="relative w-full flex flex-col justify-center items-center bg-[#FFFFF0] "
        style={{ minHeight: "100dvh" }}
      >
        {message && <div className="pt-16"></div>}
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center text-center z-10"
          style={{
            marginTop: message ? "0" : "auto",
            marginBottom: message ? "4rem" : "auto",
          }}
        >
          <h2 className="text-2xl font-bold mb-2">{title}</h2>

          <div className=" w-80 max-w-full flex flex-col justify-center items-center gap-3">
            {children}
          </div>
        </form>
        {message && (
          <div className=" w-full max-w-3xl animate-fade-in pb-20">
            {typeof message === "object" ? (
              <RecipeRenderer recipe={message} showImage={false} />
            ) : (
              <div className="rounded-xl bg-white p-6 text-center shadow-md">
                <p className="test-gray-700">{message}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default RecipeInputlayout;
