import React from "react";

const IngredientsCount = ({ ingredients }) => {
  const remaining = 4 - ingredients.length;

  if (remaining <= 0) return null;

  return (
    <div className="mt-6 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-800 px-5 py-4 text-center shadow-sm">
      <h3 className="text-lg font-semibold">
        Add at least
        <span className="font-bold text-indigo-700">
          {" "}
          {remaining}
        </span> more {remaining < 2 ? "item" : "items"} to cook up a recipe! 🍳
      </h3>
    </div>
  );
};

export default IngredientsCount;
