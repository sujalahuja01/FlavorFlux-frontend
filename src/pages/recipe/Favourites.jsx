import RecipeCard from "@/components/RecipeCard";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import React, { useEffect, useState } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    authRequest(`${baseURL}/recipes/favourite`, "GET").then((res) => {
      if (res.success) setFavourites(res.data.message);
    });
  }, []);
  if (favourites.length === 0) {
    return <p>No favourites yet.</p>;
  }

  return (
    <div>
      {favourites.map((favRecipe) => (
        <RecipeCard key={favRecipe.rid} recipe={favRecipe} />
      ))}
    </div>
  );
};

export default Favourites;
