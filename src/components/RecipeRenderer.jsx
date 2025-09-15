import React from "react";

const RecipeRenderer = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div>
      {recipe.title && <h2>{recipe.title}</h2>}
      {recipe.cuisine && <p>Cuisine: {recipe.cuisine}</p>}
      {recipe.ingredients && (
        <div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients
              .split(",")
              .map((ing) => ing.trim())
              .filter(Boolean)
              .map((ing, idx) => (
                <li key={idx}>{ing.trim()}</li>
              ))}
          </ul>
        </div>
      )}
      {recipe.steps && (
        <div>
          <h3>Steps</h3>

          {recipe.steps
            .split("\n")
            .map((step) => step.trim())
            .filter(Boolean)
            .map((step, idx) => (
              <p key={idx}> {step}</p>
            ))}
        </div>
      )}
      {recipe.time && <p>Time: {recipe.time}</p>}

      {recipe.yt_link && (
        <p>
          <a href={recipe.yt_link} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </p>
      )}
    </div>
  );
};

export default RecipeRenderer;
