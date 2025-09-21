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

  const handleSelect = (rid) => {
    setSelectedIds((prev) =>
      prev.includes(rid) ? prev.filter((id) => id !== rid) : [...prev, rid]
    );
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return;

    const res = await authRequest(`${baseURL}/recipes/delete`, "POST", {
      ids: selectedIds,
    });

    if (res.success) {
      setFavourites(favourites.filter((r) => !selectedIds.includes(r.rid)));
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
          key={favRecipe.rid}
          recipe={favRecipe}
          selectionMode={selectionMode}
          selected={selectedIds.includes(favRecipe.rid)}
          onSelect={() => handleSelect(favRecipe.rid)}
          onLongPress={() => setSelectionMode(true)}
        />
      ))}
    </div>
  );
};

export default Favourites;
