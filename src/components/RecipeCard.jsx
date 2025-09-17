import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${recipe.rid}`, { state: { recipe } });
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {recipe.title && <h2>{recipe.title}</h2>}
      {recipe.ingredients && (
        <div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients
              .split(",")
              .map((ing) => ing.trim())
              .filter(Boolean)
              .slice(0, 3)
              .map((ing, idx) => (
                <li key={idx}>{ing.trim()}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
