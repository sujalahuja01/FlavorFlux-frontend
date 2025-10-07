// // // import RecipeCard from "@/components/RecipeCard";
// // // import { baseURL } from "@/utils/api";
// // // import { authRequest } from "@/utils/authRequest";
// // // import React, { useEffect, useState } from "react";

// // // const Favourites = () => {
// // //   const [favourites, setFavourites] = useState([]);
// // //   const [selectionMode, setSelectionMode] = useState(false);
// // //   const [selectedIds, setSelectedIds] = useState([]);

// // //   useEffect(() => {
// // //     authRequest(`${baseURL}/recipes/favourite`, "GET").then((res) => {
// // //       if (res.success) setFavourites(res.data.message);
// // //     });
// // //   }, []);

// // //   const handleSelect = (id) => {
// // //     setSelectedIds((prev) =>
// // //       prev.includes(id) ? prev.filter((rid) => rid !== id) : [...prev, id]
// // //     );
// // //   };

// // //   const handleDelete = async () => {
// // //     if (selectedIds.length === 0) return;

// // //     const res = await authRequest(`${baseURL}/recipes/delete`, "POST", {
// // //       ids: selectedIds,
// // //     });

// // //     if (res.success) {
// // //       setFavourites(favourites.filter((r) => !selectedIds.includes(r.id)));
// // //       setSelectedIds([]);
// // //       setSelectionMode(false);
// // //     }
// // //   };

// // //   if (favourites.length === 0) {
// // //     return (
// // //       <div className="min-h-dvh flex flex-col item-center justify-center bg-gray-50 text-gray-600">
// // //         <p className="text-lg font-medium">No favourites yet.</p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-dvh bg-gray-50 py-10 px-4 sm:px-6">
// // //       <div className="mx-auto max-w-3xl">
// // //         <div className="mb-8 flex justify-between items-center">
// // //           <h1 className="text-3xl font-bold text-gray-900">
// // //             💖 Your Favourite Recipes
// // //           </h1>
// // //           {selectionMode && (
// // //             <button
// // //               onClick={handleDelete}
// // //               className="roounded-xl bg-red-600 ox-5 py-2 text-white font-semibold hover:bg-red-700 transition shadow-md "
// // //             >
// // //               {" "}
// // //               🗑️ Delete Selected
// // //             </button>
// // //           )}
// // //         </div>
// // //         <div className="flex flex-col gap-6">
// // //           {favourites.map((favRecipe) => (
// // //             <RecipeCard
// // //               key={favRecipe.id}
// // //               recipe={favRecipe}
// // //               selectionMode={selectionMode}
// // //               selected={selectedIds.includes(favRecipe.id)}
// // //               onSelect={() => handleSelect(favRecipe.id)}
// // //               onLongPress={() => setSelectionMode(true)}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Favourites;

// // import RecipeCard from "@/components/RecipeCard";
// // import { baseURL } from "@/utils/api";
// // import { authRequest } from "@/utils/authRequest";
// // import React, { useEffect, useState } from "react";

// // const Favourites = () => {
// //   const [favourites, setFavourites] = useState([]);
// //   const [selectionMode, setSelectionMode] = useState(false);
// //   const [selectedIds, setSelectedIds] = useState([]);
// //   const [deleting, setDeleting] = useState(false);

// //   useEffect(() => {
// //     const fetchFavourites = async () => {
// //       const res = await authRequest(`${baseURL}/recipes/favourite`, "GET");
// //       if (res.success) setFavourites(res.data.message || []);
// //     };
// //     fetchFavourites();
// //   }, []);

// //   const handleSelect = (id) => {
// //     setSelectedIds((prev) =>
// //       prev.includes(id) ? prev.filter((rid) => rid !== id) : [...prev, id]
// //     );
// //   };

// //   const handleDelete = async () => {
// //     if (selectedIds.length === 0) return;

// //     setDeleting(true);
// //     try {
// //       const res = await authRequest(`${baseURL}/recipes/delete`, "POST", {
// //         ids: selectedIds,
// //       });

// //       if (res.success) {
// //         setFavourites(favourites.filter((r) => !selectedIds.includes(r.id)));
// //         setSelectedIds([]);
// //         setSelectionMode(false);
// //       }
// //     } catch (err) {
// //       console.error("Failed to delete recipes:", err);
// //     } finally {
// //       setDeleting(false);
// //     }
// //   };

// //   if (favourites.length === 0) {
// //     return (
// //       <div className="min-h-dvh flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 py-16">
// //         <div className="text-center">
// //           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
// //             No favourites yet.
// //           </h2>
// //           <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto">
// //             Generate a recipe and save it to see it here!
// //           </p>
// //           {/* Optional CTA Button */}
// //           {/* <Link
// //             to="/generate"
// //             className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition transform hover:scale-105"
// //           >
// //             🍳 Generate Your First Recipe
// //           </Link> */}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-dvh bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
// //       <div className="mx-auto max-w-3xl">
// //         <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// //           <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
// //             💖 Your Favourite Recipes
// //           </h1>

// //           {selectionMode && (
// //             <button
// //               onClick={handleDelete}
// //               disabled={deleting || selectedIds.length === 0}
// //               className="rounded-lg sm:rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
// //             >
// //               {deleting ? (
// //                 <>
// //                   <span className="animate-spin">⏳</span> Deleting...
// //                 </>
// //               ) : (
// //                 <>🗑️ Delete Selected ({selectedIds.length})</>
// //               )}
// //             </button>
// //           )}
// //         </div>

// //         <div className="space-y-6">
// //           {favourites.map((favRecipe) => (
// //             <RecipeCard
// //               key={favRecipe.id}
// //               recipe={favRecipe}
// //               selectionMode={selectionMode}
// //               selected={selectedIds.includes(favRecipe.id)}
// //               onSelect={() => handleSelect(favRecipe.id)}
// //               onLongPress={() => setSelectionMode(true)}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Favourites;

// import RecipeCard from "@/components/RecipeCard";
// import { baseURL } from "@/utils/api";
// import { authRequest } from "@/utils/authRequest";
// import React, { useEffect, useState } from "react";

// const Favourites = () => {
//   const [favourites, setFavourites] = useState([]);
//   const [selectionMode, setSelectionMode] = useState(false);
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const fetchFavourites = async () => {
//       const res = await authRequest(`${baseURL}/recipes/favourite`, "GET");
//       if (res.success) setFavourites(res.data.message || []);
//     };
//     fetchFavourites();
//   }, []);

//   const handleSelect = (id) => {
//     setSelectedIds((prev) =>
//       prev.includes(id) ? prev.filter((rid) => rid !== id) : [...prev, id]
//     );
//   };

//   const handleDelete = async () => {
//     if (selectedIds.length === 0) return;

//     setDeleting(true);
//     try {
//       const res = await authRequest(`${baseURL}/recipes/delete`, "POST", {
//         ids: selectedIds,
//       });

//       if (res.success) {
//         setFavourites(favourites.filter((r) => !selectedIds.includes(r.id)));
//         setSelectedIds([]);
//         setSelectionMode(false);
//       }
//     } catch (err) {
//       console.error("Failed to delete recipes:", err);
//     } finally {
//       setDeleting(false);
//     }
//   };

//   if (favourites.length === 0) {
//     return (
//       <div className="min-h-dvh flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 py-16">
//         <div className="text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
//             No favourites yet.
//           </h2>
//           <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto">
//             Generate a recipe and save it to see it here!
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-dvh bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
//       <div className="mx-auto max-w-3xl">
//         {/* Conditionally style header based on selectionMode */}
//         <div
//           className={`mb-8 ${
//             selectionMode
//               ? "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
//               : "text-center"
//           }`}
//         >
//           <h1
//             className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 ${
//               !selectionMode ? "mx-auto" : ""
//             }`}
//           >
//             💖 Your Favourite Recipes
//           </h1>

//           {selectionMode && (
//             <button
//               onClick={handleDelete}
//               disabled={deleting || selectedIds.length === 0}
//               className="rounded-lg sm:rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
//             >
//               {deleting ? (
//                 <>
//                   <span className="animate-spin">⏳</span> Deleting...
//                 </>
//               ) : (
//                 <>🗑️ Delete Selected ({selectedIds.length})</>
//               )}
//             </button>
//           )}
//         </div>

//         <div className="space-y-6">
//           {favourites.map((favRecipe) => (
//             <RecipeCard
//               key={favRecipe.id}
//               recipe={favRecipe}
//               selectionMode={selectionMode}
//               selected={selectedIds.includes(favRecipe.id)}
//               onSelect={() => handleSelect(favRecipe.id)}
//               onLongPress={() => setSelectionMode(true)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Favourites;
import RecipeCard from "@/components/RecipeCard";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import React, { useEffect, useState } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchFavourites = async () => {
      const res = await authRequest(`${baseURL}/recipes/favourite`, "GET");
      if (res.success) setFavourites(res.data.message || []);
    };
    fetchFavourites();
  }, []);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((rid) => rid !== id) : [...prev, id]
    );
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return;

    setDeleting(true);
    try {
      const res = await authRequest(`${baseURL}/recipes/delete`, "POST", {
        ids: selectedIds,
      });

      if (res.success) {
        setFavourites(favourites.filter((r) => !selectedIds.includes(r.id)));
        setSelectedIds([]);
        setSelectionMode(false);
      }
    } catch (err) {
      console.error("Failed to delete recipes:", err);
    } finally {
      setDeleting(false);
    }
  };

  if (favourites.length === 0) {
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 py-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            No favourites yet.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto">
            Generate a recipe and save it to see it here!
          </p>
        </div>
      </div>
    );
  }

  return (
    // <div className="min-h-dvh bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
    //   <div className="mx-auto max-w-3xl">
    //     {/* Header */}
    //     <div
    //       className={`mb-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4 transition-all duration-300`}
    //     >
    //       {/* Title */}
    //       <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left">
    //         💖 Your Favourite Recipes
    //       </h1>

    //       {/* Delete Button (appears only in selection mode) */}
    //       {selectionMode && (
    //         <button
    //           onClick={handleDelete}
    //           disabled={deleting || selectedIds.length === 0}
    //           className="inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-red-600 px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
    //         >
    //           {deleting ? (
    //             <>
    //               <span className="animate-spin">⏳</span> Deleting...
    //             </>
    //           ) : (
    //             <>🗑️ Delete Selected ({selectedIds.length})</>
    //           )}
    //         </button>
    //       )}
    //     </div>

    //     {/* Recipe list */}
    //     <div className="space-y-6">
    //       {favourites.map((favRecipe) => (
    //         <RecipeCard
    //           key={favRecipe.id}
    //           recipe={favRecipe}
    //           selectionMode={selectionMode}
    //           selected={selectedIds.includes(favRecipe.id)}
    //           onSelect={() => handleSelect(favRecipe.id)}
    //           onLongPress={() => setSelectionMode(true)}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-dvh bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Conditionally style header based on selectionMode */}
        <div
          className={`mb-8 ${
            selectionMode
              ? "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              : "text-center"
          }`}
        >
          <h1
            className={`flex text-2xl justify-center sm:text-4xl font-extrabold tracking-tight text-gray-900 `}
          >
            💖 Your Favourite Recipes
          </h1>
          {selectionMode && (
            <button
              onClick={handleDelete}
              disabled={deleting || selectedIds.length === 0}
              className="hidden sm:inline-flex w-auto item-center sm:self-auto items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-red-600 px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {deleting ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <span>
                  <i class="fa-solid fa-trash"></i>
                </span>
              )}
            </button>
          )}
        </div>

        <div className="space-y-6">
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
      {selectionMode && (
        <button
          onClick={handleDelete}
          disabled={deleting || selectedIds.length === 0}
          aria-label="Delete selected recipes"
          className="fixed bottom-5 right-4 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full shadow-lg bg-red-600 text-white sm:hidden focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {deleting ? (
            <span className="animate-spin">⏳</span>
          ) : (
            <i className="fa-solid fa-trash"></i>
          )}

          {/* Optional badge showing selected count */}
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-white text-xs text-red-600 ring-1">
            {selectedIds.length}
          </span>
        </button>
      )}
    </div>
  );
};

export default Favourites;
