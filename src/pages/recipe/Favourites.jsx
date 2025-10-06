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
    return (
      <div className="min-h-dvh flex flex-col item-center justify-center bg-gray-50 text-gray-600">
        <p className="text-lg font-medium">No favourites yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-gray-50 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            💖 Your Favourite Recipes
          </h1>
          {selectionMode && (
            <button
              onClick={handleDelete}
              className="roounded-xl bg-red-600 ox-5 py-2 text-white font-semibold hover:bg-red-700 transition shadow-md "
            >
              {" "}
              🗑️ Delete Selected
            </button>
          )}
        </div>
        <div className="flex flex-col gap-6">
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
      </div>
    </div>
  );
};

export default Favourites;
