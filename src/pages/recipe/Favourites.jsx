import RecipeCard from "@/components/RecipeCard";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import React, { useEffect, useState } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    authRequest(`${baseURL}/recipes/favourite`, "GET").then((res) => {
      if (res.success) setFavourites(res.data.message);
    });
  }, []);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((rid) => rid !== id) : [...prev, id]
    );
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return;

    const res = await authRequest(`${baseURL}/recipes/delete`, "POST", {
      ids: selectedIds,
    });

    if (res.success) {
      setFavourites(favourites.filter((r) => !selectedIds.includes(r.id)));
      setSelectedIds([]);
      setSelectionMode(false);
    }
  };

  if (favourites.length === 0) {
    return <p>No favourites yet.</p>;
  }

  return (
    <div>
      {selectionMode && (
        <button onClick={handleDelete}> Delete selected</button>
      )}
      {favourites.map((favRecipe) => (
        <RecipeCard
          key={favRecipe.id}
          recipe={favRecipe}
          selectionMode={selectionMode}
          selected={selectedIds.includes(favRecipe.id)}
          onSelect={() => handleSelect(favRecipe.id)}
          onLongPress={() => setSelectionMode(true)}
        />
      ))}
    </div>
  );
};

export default Favourites;
