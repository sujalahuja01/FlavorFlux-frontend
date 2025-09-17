import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const separator = (items, splitter, Element) => {
  return items
    .split(splitter)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item, idx) => React.createElement(Element, { key: idx }, item));
};

const RecipeRenderer = () => {
  const location = useLocation();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(location.state?.recipe || null);

  // useEffect(() => {
  //   if (!recipe){
  //     authRequest(`${baseURL}/recipes/${id}`, "GET").then((res) => {
  //       if(res.success) setRecipe(res.data.message)
  //     })
  //   }
  // }, [id])

  if (!recipe) return <p>Loading recipe...</p>;

  return (
    <div>
      {recipe.title && <h2>{recipe.title}</h2>}
      {recipe.cuisine && <p>Cuisine: {recipe.cuisine}</p>}
      {recipe.ingredients && (
        <div>
          <h3>Ingredients</h3>
          <ul>{separator(recipe.ingredients, ",", "li")}</ul>
        </div>
      )}
      {recipe.steps && (
        <div>
          <h3>Steps</h3>

          {separator(recipe.steps, "\n", "p")}
        </div>
      )}
      {recipe.time && <p>Time: {recipe.time}</p>}

      {recipe.youtube_link && (
        <p>
          <a
            href={recipe.youtube_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>
        </p>
      )}
    </div>
  );
};

export default RecipeRenderer;
