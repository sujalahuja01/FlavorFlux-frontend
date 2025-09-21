import React from "react";

const IngredientsCount = ({ ingredients }) => {
  const remaining = 4 - ingredients.length;

  if (remaining <= 0) return null;

  return (
    <div>
      <h3>
        Add at least {remaining} more {remaining < 2 ? "item" : "items"} to cook
        up a recipe!
      </h3>
    </div>
  );
};

export default IngredientsCount;
