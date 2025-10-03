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
// // //     return <p>No favourites yet.</p>;
// // //   }

// // //   return (
// // //     <div>
// // //       {selectionMode && (
// // //         <button onClick={handleDelete}> Delete selected</button>
// // //       )}
// // //       {favourites.map((favRecipe) => (
// // //         <RecipeCard
// // //           key={favRecipe.id}
// // //           recipe={favRecipe}
// // //           selectionMode={selectionMode}
// // //           selected={selectedIds.includes(favRecipe.id)}
// // //           onSelect={() => handleSelect(favRecipe.id)}
// // //           onLongPress={() => setSelectionMode(true)}
// // //         />
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default Favourites;
// // import RecipeRenderer from "@/components/RecipeRenderer";
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Favourites = () => {
// //   const navigate = useNavigate();
// //   const [prompt, setPrompt] = useState("");
// //   const [generatedRecipe, setGeneratedRecipe] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handlePromptChange = (e) => {
// //     setPrompt(e.target.value);
// //   };

// //   const handleGenerate = async (e) => {
// //     e.preventDefault();
// //     if (!prompt.trim()) return;

// //     setIsLoading(true);

// //     // Simulate API/AI call to generate recipe based on prompt
// //     setTimeout(() => {
// //       // Simple keyword-based generation simulation (replace with real AI API)
// //       const lowerPrompt = prompt.toLowerCase();
// //       let recipeData = {
// //         title: "Generated Recipe",
// //         cuisine: "",
// //         time: "",
// //         ingredients: "",
// //         steps: "",
// //         youtube_link: "",
// //         img_url:
// //           "https://via.placeholder.com/800x400?text=Generated+Recipe+Image", // Placeholder
// //       };

// //       // Example generations based on prompt keywords
// //       if (lowerPrompt.includes("italian") || lowerPrompt.includes("pasta")) {
// //         recipeData = {
// //           title: "Classic Italian Spaghetti Aglio e Olio",
// //           cuisine: "Italian",
// //           time: "20 minutes",
// //           ingredients:
// //             "200g spaghetti, 4 garlic cloves, 1/2 cup olive oil, red pepper flakes, parsley, salt",
// //           steps:
// //             "Boil spaghetti in salted water until al dente.\nMeanwhile, heat olive oil in a pan and sauté sliced garlic until golden.\nAdd red pepper flakes for spice.\nDrain pasta and toss with the garlic oil mixture.\nGarnish with chopped parsley and serve immediately.",
// //           youtube_link: "https://www.youtube.com/watch?v=example",
// //           img_url:
// //             "https://via.placeholder.com/800x400?text=Spaghetti+Aglio+e+Olio",
// //         };
// //       } else if (
// //         lowerPrompt.includes("mexican") ||
// //         lowerPrompt.includes("taco")
// //       ) {
// //         recipeData = {
// //           title: "Quick Beef Tacos",
// //           cuisine: "Mexican",
// //           time: "25 minutes",
// //           ingredients:
// //             "500g ground beef, 8 corn tortillas, 1 onion, 2 tomatoes, lettuce, cheese, taco seasoning, lime",
// //           steps:
// //             "Brown ground beef in a skillet with taco seasoning.\nChop onion, tomatoes, and lettuce.\nWarm tortillas in a dry pan.\nAssemble tacos with beef, veggies, cheese, and a squeeze of lime.\nServe hot with salsa on the side.",
// //           youtube_link: "",
// //           img_url: "https://via.placeholder.com/800x400?text=Beef+Tacos",
// //         };
// //       } else if (
// //         lowerPrompt.includes("vegetarian") ||
// //         lowerPrompt.includes("stir-fry")
// //       ) {
// //         recipeData = {
// //           title: "Vegetarian Tofu Stir-Fry",
// //           cuisine: "Asian",
// //           time: "30 minutes",
// //           ingredients:
// //             "300g firm tofu, 2 bell peppers, 1 broccoli head, soy sauce, ginger, garlic, rice",
// //           steps:
// //             "Press and cube tofu, then fry until golden.\nStir-fry chopped veggies with minced ginger and garlic.\nAdd tofu back and toss with soy sauce.\nServe over steamed rice.\nGarnish with sesame seeds if desired.",
// //           youtube_link: "https://www.youtube.com/watch?v=example2",
// //           img_url: "https://via.placeholder.com/800x400?text=Tofu+Stir-Fry",
// //         };
// //       } else {
// //         // Fallback generic recipe
// //         recipeData = {
// //           title: "Simple Veggie Salad",
// //           cuisine: "American",
// //           time: "10 minutes",
// //           ingredients:
// //             "Mixed greens, cherry tomatoes, cucumber, feta cheese, olive oil, balsamic vinegar",
// //           steps:
// //             "Wash and chop all vegetables.\nToss everything in a bowl.\nDrizzle with olive oil and balsamic.\nTop with crumbled feta and serve fresh.",
// //           youtube_link: "",
// //           img_url: "https://via.placeholder.com/800x400?text=Veggie+Salad",
// //         };
// //       }

// //       setGeneratedRecipe(recipeData);
// //       setIsLoading(false);
// //     }, 2000); // Slightly longer timeout for realism
// //   };

// //   const handleSave = () => {
// //     // Simulate save logic
// //     navigate("/saved", { state: { recipe: generatedRecipe } });
// //   };

// //   if (generatedRecipe) {
// //     return (
// //       <div className="min-h-dvh w-full bg-gray-50 py-10 px-4 sm:px-6">
// //         <div className="mx-auto max-w-3xl">
// //           <div className="mb-8 flex justify-between items-center">
// //             <h1 className="text-3xl font-bold text-gray-900">
// //               Generated Recipe
// //             </h1>
// //             <button
// //               onClick={handleSave}
// //               className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
// //             >
// //               💾 Save Recipe
// //             </button>
// //           </div>
// //           <RecipeRenderer recipe={generatedRecipe} showImage={true} />
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-dvh w-full bg-gray-50 py-10 px-4 sm:px-6">
// //       <div className="mx-auto max-w-3xl">
// //         <div className="text-center mb-8">
// //           <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
// //             Generate Your Recipe
// //           </h1>
// //           <p className="text-lg text-gray-600 max-w-md mx-auto">
// //             Describe what you'd like (e.g., ingredients you have, cuisine, or
// //             meal type), and we'll create a custom recipe for you.
// //           </p>
// //         </div>

// //         <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100">
// //           <div className="p-8 md:p-10">
// //             <form onSubmit={handleGenerate} className="space-y-8">
// //               {/* Prompt Textarea */}
// //               <div className="space-y-2">
// //                 <label
// //                   htmlFor="prompt"
// //                   className="block text-sm font-bold text-gray-900"
// //                 >
// //                   Your Recipe Idea
// //                 </label>
// //                 <textarea
// //                   id="prompt"
// //                   name="prompt"
// //                   value={prompt}
// //                   onChange={handlePromptChange}
// //                   placeholder="e.g., Quick Italian pasta with tomatoes and basil, under 30 minutes..."
// //                   rows={4}
// //                   className="w-full rounded-xl border border-gray-200 px-4 py-3 text-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md resize-none"
// //                   required
// //                 />
// //                 <p className="text-sm text-gray-500">
// //                   Be as detailed as you like—we'll handle the rest!
// //                 </p>
// //               </div>

// //               {/* Generate Button */}
// //               <button
// //                 type="submit"
// //                 disabled={isLoading || !prompt.trim()}
// //                 className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-xl font-bold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
// //               >
// //                 {isLoading ? (
// //                   <>
// //                     <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
// //                     Generating your recipe...
// //                   </>
// //                 ) : (
// //                   "✨ Generate Recipe"
// //                 )}
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Favourites;
// import IngredientsCount from "@/components/IngredientsCount";
// import IngredientsList from "@/components/IngredientsList";
// import useAuthFormState from "@/hooks/useAuthFormState";
// import AuthInputLayout from "@/layout/AuthInputLayout";
// import RecipeInputlayout from "@/layout/RecipeInputlayout";
// import { baseURL } from "@/utils/api";
// import { authRequest } from "@/utils/authRequest";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Generate = () => {
//   const { form, status, runFlow } = useAuthFormState(
//     {
//       ingredients: [],
//       cuisine: "",
//     },
//     { clearMessageOnChange: false }
//   );

//   const { values, errors, setErrors, handleChange } = form;
//   const { message, setMessage, loading, setLoading } = status;
//   const [ingredientInput, setIngredientInput] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const addIngredient = (e) => {
//     e.preventDefault();
//     if (!ingredientInput.trim()) return;

//     form.setValues({
//       ...values,
//       ingredients: [...values.ingredients, ingredientInput.trim()],
//     });

//     setIngredientInput("");
//     if (errors.ingredients) setErrors({ ...errors, ingredients: "" });
//   };

//   const handleRecipeGeneration = async (e) => {
//     e.preventDefault();

//     if (!values.ingredients.length) {
//       setErrors({ ingredients: "Type at least one ingredient" });
//       return;
//     }

//     await runFlow({
//       requestFn: () =>
//         authRequest(`${baseURL}/recipes/generate`, "POST", {
//           ...values,
//           ingredients: values.ingredients,
//         }),
//       resetValues: { ingredients: [], cuisine: "" },
//     });
//   };

//   const refreshRecipe = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage("");

//     const prevRecipe = message;
//     setMessage("Refreshing");

//     try {
//       const res = await authRequest(`${baseURL}/recipes/refresh`, "POST");
//       if (res.success) {
//         setMessage(res.data.message);
//       } else {
//         setMessage(prevRecipe);
//         setErrorMessage(res.error || "Failed to refersh recipe");
//       }
//     } catch {
//       setMessage(prevRecipe);
//       setErrorMessage("Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const saveRecipe = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await authRequest(`${baseURL}/recipes/save`, "POST", {
//         message,
//       });

//       if (res.success) {
//         setMessage(res.data.message);
//       } else {
//         setErrorMessage(res.error || "Failed to save recipe");
//       }
//     } catch {
//       setErrorMessage("Network error while saving recipe");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <RecipeInputlayout
//       title="Generate Recipe"
//       onSubmit={handleRecipeGeneration}
//       message={message}
//     >
//       <AuthInputLayout
//         type="text"
//         name="ingredients"
//         placeholder="Type an Ingredient"
//         value={ingredientInput}
//         onChange={(e) => setIngredientInput(e.target.value)}
//         error={errors.ingredients}
//       />
//       <button className="btn bg-amber-500" onClick={addIngredient}>
//         {" "}
//         Add ingredient
//       </button>

//       <AuthInputLayout
//         type="text"
//         name="cuisine"
//         placeholder="Cuisine"
//         value={values.cuisine || ""}
//         onChange={handleChange}
//         error={errors.cuisine}
//       />

//       {!message && <IngredientsCount ingredients={values.ingredients} />}
//       {values.ingredients.length > 0 && (
//         <IngredientsList
//           ingredients={values.ingredients}
//           generate="submit"
//           loader={loading}
//         />
//       )}

//       {message && !errorMessage && (
//         <div>
//           <button
//             className="btn bg-emerald-700"
//             onClick={refreshRecipe}
//             disabled={loading}
//           >
//             {loading ? "Refreshing..." : "Refresh Recipe"}
//           </button>

//           <button
//             className="btn bg-fuchsia-600"
//             onClick={saveRecipe}
//             disabled={loading}
//           >
//             {loading ? "Save" : "Save"}
//           </button>
//         </div>
//       )}

//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

//       <Link className="btn bg-purple-700 text-center" to="/favourites">
//         Favourites Recipes
//       </Link>
//     </RecipeInputlayout>
//   );
// };
// export default Generate;
