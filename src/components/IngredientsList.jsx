import React from "react";

const IngredientsList = ({ ingredients, generate, loader }) => {
  return (
    <section>
      <h2>Ingredients on hand: </h2>
      <ul>
        {ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      {ingredients.length > 3 && (
        <div>
          <div>
            <h3>ready for a recipe?</h3>
            <p>Generate a recipe from your ingredients.</p>
          </div>
          <button className="btn bg-blue-700" type={generate} disabled={loader}>
            {loader ? "Getting..." : "Get recipe"}
          </button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
