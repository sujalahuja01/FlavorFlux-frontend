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
//   // const { form, status, runFlow } = useAuthFormState(
//   //   {
//   //     ingredients: [],
//   //     cuisine: "",
//   //   },
//   //   { clearMessageOnChange: false }
//   // );

//   // const { values, errors, setErrors, handleChange } = form;
//   // const { message, setMessage, loading, setLoading } = status;
//   // const [ingredientInput, setIngredientInput] = useState("");
//   // const [errorMessage, setErrorMessage] = useState("");

//   // const addIngredient = (e) => {
//   //   e.preventDefault();
//   //   if (!ingredientInput.trim()) return;

//   //   form.setValues({
//   //     ...values,
//   //     ingredients: [...values.ingredients, ingredientInput.trim()],
//   //   });

//   //   setIngredientInput("");
//   //   if (errors.ingredients) setErrors({ ...errors, ingredients: "" });
//   // };

//   // const handleRecipeGeneration = async (e) => {
//   //   e.preventDefault();

//   //   if (!values.ingredients.length) {
//   //     setErrors({ ingredients: "Type at least one ingredient" });
//   //     return;
//   //   }

//   //   await runFlow({
//   //     requestFn: () =>
//   //       authRequest(`${baseURL}/recipes/generate`, "POST", {
//   //         ...values,
//   //         ingredients: values.ingredients,
//   //       }),
//   //     resetValues: { ingredients: [], cuisine: "" },
//   //   });
//   // };

//   // const refreshRecipe = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setErrorMessage("");

//   //   const prevRecipe = message;
//   //   setMessage("Refreshing");

//   //   try {
//   //     const res = await authRequest(`${baseURL}/recipes/refresh`, "POST");
//   //     if (res.success) {
//   //       setMessage(res.data.message);
//   //     } else {
//   //       setMessage(prevRecipe);
//   //       setErrorMessage(res.error || "Failed to refersh recipe");
//   //     }
//   //   } catch {
//   //     setMessage(prevRecipe);
//   //     setErrorMessage("Unexpected error");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // const saveRecipe = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   try {
//   //     const res = await authRequest(`${baseURL}/recipes/save`, "POST", {
//   //       message,
//   //     });

//   //     if (res.success) {
//   //       setMessage(res.data.message);
//   //     } else {
//   //       setErrorMessage(res.error || "Failed to save recipe");
//   //     }
//   //   } catch {
//   //     setErrorMessage("Network error while saving recipe");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const navigate = useNavigate();
//   const [prompt, setPrompt] = useState("");
//   const [generatedRecipe, setGeneratedRecipe] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePromptChange = (e) => {
//     setPrompt(e.target.value);
//   };

//   const handleGenerate = async (e) => {
//     e.preventDefault();
//     if (!prompt.trim()) return;

//     setIsLoading(true);
//   };

//   const handleSave = () => {
//     navigate("/saved", { state: { recipe: generatedRecipe } });
//   };

//   if (message) {
//     return (
//       <div className="min-h-dvh w-full bg-gray-50 py-10 px-4 sm:px-6">
//         <div className="mx-auto max-w-3xl">
//           <div className="mb-8 flex justify-between items-center">
//             <h1 className="text-3xl font-bold text-gray-900">
//               Generated Recipe
//             </h1>
//             <button
//               onClick={saveRecipe}
//               className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
//             >
//               💾 Save Recipe
//             </button>
//           </div>
//           <RecipeRenderer recipe={generatedRecipe} />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-dvh w-full bg-gray-50 py-10 px-4 sm:px-6">
//       <div className="mx-auto max-w-3xl">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
//             Generate Your Recipe
//           </h1>
//           <p className="text-lg text-gray-600 max-w-md mx-auto">
//             Describe what you'd like (e.g., ingredients you have, cuisine, or
//             meal type), and we'll create a custom recipe for you.
//           </p>
//         </div>

//         <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100">
//           <div className="p-8 md:p-10">
//             <form onSubmit={handleRecipeGeneration} className="space-y-8">
//               {/* Prompt Textarea */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="prompt"
//                   className="block text-sm font-bold text-gray-900"
//                 >
//                   Your Recipe Idea
//                 </label>
//                 <div>
//                   <textarea
//                     name="ingredient"
//                     value={ingredientInput}
//                     onChange={(e) => setIngredientInput(e.target.value)}
//                     placeholder="e.g., Quick Italian pasta with tomatoes and basil, under 30 minutes..."
//                     rows={4}
//                     className="w-full rounded-xl border border-gray-200 px-4 py-3 text-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md resize-none"
//                   />
//                   {errors.ingredients && (
//                     <p className="flex justify-center mt-2 mb-4 text-red-600">
//                       {errors.ingredients}
//                     </p>
//                   )}
//                   <button className="btn bg-amber-500" onClick={addIngredient}>
//                     Add ingredient
//                   </button>
//                   {!message && (
//                     <IngredientsCount ingredients={values.ingredients} />
//                   )}
//                   {values.ingredients.length > 0 && (
//                     <IngredientsList
//                       ingredients={values.ingredients}
//                       generate="submit"
//                       loader={loading}
//                     />
//                   )}
//                 </div>
//                 <p className="text-sm text-gray-500">
//                   Be as detailed as you like—we'll handle the rest!
//                 </p>
//               </div>

//               {/* Generate Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-xl font-bold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
//               >
//                 {loading ? (
//                   <>
//                     <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
//                     Generating your recipe...
//                   </>
//                 ) : (
//                   "✨ Generate Recipe"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Generate;
// // <RecipeInputlayout
// //   title="Generate Recipe"
// //   onSubmit={handleRecipeGeneration}
// //   message={message}
// // >
// //   <AuthInputLayout
// //     type="text"
// //     name="ingredients"
// //     placeholder="Type an Ingredient"
// //     value={ingredientInput}
// //     onChange={(e) => setIngredientInput(e.target.value)}
// //     error={errors.ingredients}
// //   />
// //   <button className="btn bg-amber-500" onClick={addIngredient}>
// //     {" "}
// //     Add ingredient
// //   </button>

// //   <AuthInputLayout
// //     type="text"
// //     name="cuisine"
// //     placeholder="Cuisine"
// //     value={values.cuisine || ""}
// //     onChange={handleChange}
// //     error={errors.cuisine}
// //   />

// //   {!message && <IngredientsCount ingredients={values.ingredients} />}
// //   {values.ingredients.length > 0 && (
// //     <IngredientsList
// //       ingredients={values.ingredients}
// //       generate="submit"
// //       loader={loading}
// //     />
// //   )}

// //   {message && !errorMessage && (
// //     <div>
// //       <button
// //         className="btn bg-emerald-700"
// //         onClick={refreshRecipe}
// //         disabled={loading}
// //       >
// //         {loading ? "Refreshing..." : "Refresh Recipe"}
// //       </button>

// //       <button
// //         className="btn bg-fuchsia-600"
// //         onClick={saveRecipe}
// //         disabled={loading}
// //       >
// //         {loading ? "Save" : "Save"}
// //       </button>
// //     </div>
// //   )}

// //   {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

// //   <Link className="btn bg-purple-700 text-center" to="/favourites">
// //     Favourites Recipes
// //   </Link>
// // </RecipeInputlayout>
// // const { form, status, runFlow } = useAuthFormState(
// //   {
// //     ingredients: [],
// //     cuisine: "",
// //   },
// //   { clearMessageOnChange: false }
// // );

// // const { values, errors, setErrors, handleChange } = form;
// // const { message, setMessage, loading, setLoading } = status;
// // const [ingredientInput, setIngredientInput] = useState("");
// // const [errorMessage, setErrorMessage] = useState("");

// // const addIngredient = (e) => {
// //   e.preventDefault();
// //   if (!ingredientInput.trim()) return;

// //   form.setValues({
// //     ...values,
// //     ingredients: [...values.ingredients, ingredientInput.trim()],
// //   });

// //   setIngredientInput("");
// //   if (errors.ingredients) setErrors({ ...errors, ingredients: "" });
// // };

// // const handleRecipeGeneration = async (e) => {
// //   e.preventDefault();

// //   if (!values.ingredients.length) {
// //     setErrors({ ingredients: "Type at least one ingredient" });
// //     return;
// //   }

// //   await runFlow({
// //     requestFn: () =>
// //       authRequest(`${baseURL}/recipes/generate`, "POST", {
// //         ...values,
// //         ingredients: values.ingredients,
// //       }),
// //     resetValues: { ingredients: [], cuisine: "" },
// //   });
// // };

// // const refreshRecipe = async (e) => {
// //   e.preventDefault();
// //   setLoading(true);
// //   setErrorMessage("");

// //   const prevRecipe = message;
// //   setMessage("Refreshing");

// //   try {
// //     const res = await authRequest(`${baseURL}/recipes/refresh`, "POST");
// //     if (res.success) {
// //       setMessage(res.data.message);
// //     } else {
// //       setMessage(prevRecipe);
// //       setErrorMessage(res.error || "Failed to refersh recipe");
// //     }
// //   } catch {
// //     setMessage(prevRecipe);
// //     setErrorMessage("Unexpected error");
// //   } finally {
// //     setLoading(false);
// //   }
// // };

// // const saveRecipe = async (e) => {
// //   e.preventDefault();
// //   setLoading(true);

// //   try {
// //     const res = await authRequest(`${baseURL}/recipes/save`, "POST", {
// //       message,
// //     });

// //     if (res.success) {
// //       setMessage(res.data.message);
// //     } else {
// //       setErrorMessage(res.error || "Failed to save recipe");
// //     }
// //   } catch {
// //     setErrorMessage("Network error while saving recipe");
// //   } finally {
// //     setLoading(false);
// //   }
// // };

// // import IngredientsCount from "@/components/IngredientsCount";
// // import IngredientsList from "@/components/IngredientsList";
// // import useAuthFormState from "@/hooks/useAuthFormState";
// // import AuthInputLayout from "@/layout/AuthInputLayout";
// // import RecipeInputlayout from "@/layout/RecipeInputlayout";
// // import { baseURL } from "@/utils/api";
// // import { authRequest } from "@/utils/authRequest";
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IngredientsCount from "@/components/IngredientsCount";
import IngredientsList from "@/components/IngredientsList";
import RecipeRenderer from "@/components/RecipeRenderer";
import useAuthFormState from "@/hooks/useAuthFormState";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";

const Generate = () => {
  const { form, status, runFlow } = useAuthFormState(
    {
      ingredients: [],
      cuisine: "",
    },
    { clearMessageOnChange: false }
  );

  const { values, errors, setErrors } = form;
  const { message, setMessage, loading, setLoading } = status;

  const [ingredientInput, setIngredientInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [recipeMessage, setRecipeMessage] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (!recipeMessage) return;
    const t = setTimeout(() => setRecipeMessage(""), 4000);
    return () => clearTimeout(t);
  }, [recipeMessage]);

  const addIngredient = (e) => {
    e.preventDefault();

    if (recipeMessage) setRecipeMessage("");

    if (!ingredientInput.trim()) return;

    form.setValues({
      ...values,
      ingredients: [...values.ingredients, ingredientInput.trim()],
    });

    setIngredientInput("");
    if (errors.ingredients) setErrors({ ...errors, ingredients: "" });
  };

  const removeIngredient = (index) => {
    form.setValues({
      ...values,
      ingredients: values.ingredients.filter((_, i) => i !== index),
    });
  };

  const handleRecipeGeneration = async (e) => {
    e.preventDefault();

    if (recipeMessage) setRecipeMessage("");

    if (values.ingredients.length < 1) {
      setErrors({ ingredients: "Type at least one ingredient" });
      return;
    }

    await runFlow({
      requestFn: () =>
        authRequest(`${baseURL}/recipes/generate`, "POST", {
          ...values,
          ingredients: values.ingredients,
        }),
      resetValues: { ingredients: [], cuisine: "" },
    });
  };

  const refreshRecipe = async () => {
    setIsRefreshing(true);
    setErrorMessage("");

    const prevRecipe = message;

    try {
      const res = await authRequest(`${baseURL}/recipes/refresh`, "POST");

      if (res.success) {
        setMessage(res.data.message);
      } else {
        setMessage(prevRecipe);
        setErrorMessage(res.error || "Fialed to refresh recipe");
      }
    } catch {
      setMessage(prevRecipe);
      setErrorMessage("Unexpected error while refreshing recipe");
    } finally {
      setIsRefreshing(false);
    }
  };

  const saveRecipe = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await authRequest(`${baseURL}/recipes/save`, "POST", {
        message,
      });
      if (res.success) {
        setRecipeMessage(res.data.message || "Recipe saved successfullyyyyy");
        setMessage("");
      } else {
        setErrorMessage(res.error || "Failed to save recipe");
      }
    } catch (err) {
      setErrorMessage("Network error while saving recipe");
    } finally {
      setLoading(false);
    }
  };

  if (message && typeof message === "object") {
    return (
      <div className="min-h-dvh w-full bg-gray-50 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4">
            <button
              onClick={() => setMessage("")}
              className=" flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md ring-1 ring-gray-200 transition-all hover:ring-indigo-300"
            >
              <span>←</span>
            </button>
          </div>

          <div className="mb-8 flex justify-between item-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Generated recipe
            </h1>
            <button
              onClick={saveRecipe}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 "
            >
              💾 Save Recipe
            </button>
          </div>
          <div className="mt-4 text-center">
            {errorMessage ? (
              <p className="text-red-600 font-medium animate-pulse">
                {errorMessage}
              </p>
            ) : typeof message === "string" ? (
              !errorMessage && (
                <p className="text-green-600 font-medium animate-fadeIn">
                  {message}
                </p>
              )
            ) : null}
          </div>
          <RecipeRenderer recipe={message} />
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={refreshRecipe}
              disabled={isRefreshing}
              className="rounded-xl bg-emerald-700 px-6 py-3 text-white font-semibold hover:bg-emerald-800 transition"
            >
              {isRefreshing ? "Refreshing..." : "Refresh recipe"}
            </button>
            {/* <Link
                to="/favourites"
                className="rounded-xl bg-purple-700 px-6 py-3 text-white font-semibold hover:bg-purple-800 transition"
              >
                💖 Favourites
              </Link> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh w-full bg-gray-50 py-6 sm:py-10 px-3 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-2 sm:mb-4">
            Generate your recipe
          </h1>
          {/* <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            Add ingredients you have and optionally specify a cuisine. We'll
            cook up a custom recipe just for you!
          </p> */}
          {!message && <IngredientsCount ingredients={values.ingredients} />}
        </div>
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-xl ring-1 ring-gray-100">
          <div className="p-5 sm:p-8 md:p-10">
            <form onSubmit={handleRecipeGeneration} className="space-y-8">
              <div className="space-y-2">
                <label
                  htmlFor="ingredients"
                  className="block text-sm font-bold text-gray-900"
                >
                  Add Ingredients
                </label>
                <div>
                  <textarea
                    name="ingredients"
                    id="ingredients"
                    value={ingredientInput}
                    onChange={(e) => setIngredientInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        addIngredient(e);
                      }
                    }}
                    placeholder="Type an ingredient and click 'Add Ingredient'"
                    rows={2}
                    className="w-full mb-4 rounded-lg sm:rounded-xl border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md resize-none"
                  />
                  {errors.ingredients && (
                    <p className=" text-center mt-2 text-sm text-red-600">
                      {errors.ingredients}
                    </p>
                  )}
                  <button
                    onClick={addIngredient}
                    className="w-full rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold text-white shadow-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
                  >
                    ➕ Add Ingredient
                  </button>
                  {/* <Link
                    to="/favourites"
                    className="rounded-xl bg-purple-700 px-6 py-3 text-white font-semibold hover:bg-purple-800 transition"
                  >
                    💖 Favourites
                  </Link> */}

                  {values.ingredients.length > 0 && (
                    <IngredientsList
                      ingredients={values.ingredients}
                      loader={loading}
                      removeIngredient={removeIngredient}
                    />
                  )}
                  {recipeMessage && (
                    <div className="text-sm sm:text-base text-center text-green-600 w-full mt-4 font-medium animate-fadeIn">
                      {recipeMessage}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
