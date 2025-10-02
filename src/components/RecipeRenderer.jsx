// import React from "react";
// import { useLocation } from "react-router-dom";

// const separator = (items, splitter) => {
//   return items
//     .split(splitter)
//     .map((item) => item.trim())
//     .filter(Boolean);
// };

// const RecipeRenderer = ({ recipe: propRecipe }) => {
//   const location = useLocation();
//   const recipe = propRecipe || location.state?.recipe || null;

//   if (!recipe)
//     return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;

//   const steps = recipe.steps ? separator(recipe.steps, "\n") : [];
//   const ingredients = recipe.ingredients
//     ? separator(recipe.ingredients, ",")
//     : [];

//   return (
//     <div className="min-h-dvh w-full flex justify-center bg-gray-50  py-8 ">
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
//         {recipe.title && (
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">
//             {recipe.title}
//           </h2>
//         )}
//         {recipe.cuisine && (
//           <p className="text-2xl pb-8">Cuisine: {recipe.cuisine}</p>
//         )}

//         {recipe.time && (
//           <p className="text-2xl font-semibold pb-8">Time: {recipe.time}</p>
//         )}
//         {ingredients.length > 0 && (
//           <div className="mb-10">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//               Ingredients
//             </h3>

//             <ul className="space-y-4">
//               {ingredients.map((ingredient, idx) => (
//                 <li
//                   key={idx}
//                   className="group relative pl-8 opacity-0 animate-fade-in-slide"
//                   style={{
//                     animationDelay: `${idx * 0.1}s`,
//                     animationFillMode: "forwards",
//                   }}
//                 >
//                   <span className="absolute left-2 top-3 inline-block h-2 w-2 rounded-full bg-gray-400 group-hover:bg-indigo-500 transition-all duration-300 scale-90 group-hover:scale-110"></span>
//                   <span className="text-gray-900 leading-relaxed relative group-hover:ml-1 transition-all duration-300 ease-out">
//                     {ingredient}
//                     <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500/80 to-transparent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-out"></span>
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

// {steps.length > 0 && (
//   <div>
//     <h3 className="text-2xl font-semibold text-gray-800 mb-6">Steps</h3>
//     <div
//       className="relative border-l border-gray-300 opacity-0 animate-fade-in-slide-right"
//       style={{
//         animationDelay: "0.1s",
//         animationFillMode: "forwards",
//       }}
//     >
//       {steps.map((step, idx) => (
//         <div
//           key={idx}
//           className="relative mb-8 opacity-0 animate-fade-in-slide-right cursor-pointer "
//           style={{
//             animationDelay: `${0.4 + idx * 0.12}s`,
//             animationFillMode: "forwards",
//           }}
//         >
//           <div className="absolute -left-3.5  flex justify-center items-center w-7 h-7 rounded-full bg-black">
//             <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white">
//               <div className="flex justify-center items-center w-5 h-5 rounded-full bg-black text-white text-xs font-bold">
//                 {idx + 1}
//               </div>
//             </div>
//           </div>

//           <div className="ml-6">
//             <h4 className="text-lg  text-gray-900">{step}</h4>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )}
//         {recipe.youtube_link && (
//           <p>
//             <a
//               className="text-2xl "
//               href={recipe.youtube_link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Watch on YouTube
//             </a>
//           </p>
//         )}
//         {recipe.img_url && <img src={recipe.img_url} alt="thumbnail" />}
//       </div>
//     </div>
//   );
// };

// export default RecipeRenderer;
import React from "react";
import { useLocation } from "react-router-dom";

const separator = (items, splitter) => {
  return items
    .split(splitter)
    .map((item) => item.trim())
    .filter(Boolean);
};

const RecipeRenderer = ({ recipe: propRecipe }) => {
  const location = useLocation();
  const recipe = propRecipe || location.state?.recipe || null;

  if (!recipe)
    return (
      <div className="flex min-h-dvh w-full items-center justify-center bg-gray-50">
        <p className="text-center text-lg text-gray-500">Loading recipe...</p>
      </div>
    );

  const steps = recipe.steps ? separator(recipe.steps, "\n") : [];
  const ingredients = recipe.ingredients
    ? separator(recipe.ingredients, ",")
    : [];

  return (
    <div className="min-h-dvh w-full bg-gray-500 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          {recipe.img_url && (
            <div className="relative h-64 overflow-hidden bg-gray-100 md:h-80">
              <img
                src={recipe.img_url}
                alt={recipe.title || "Recipe"}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50"><span class="text-gray-400">Image not available</span></div>';
                }}
              />
            </div>
          )}
          <div className="p-8 md:p-10">
            {recipe.title && (
              <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {recipe.title}
              </h1>
            )}
            <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
              {recipe.cuisine && (
                <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-800 ring-1 ring-inset ring-amber-200">
                  🌍 {recipe.cuisine}
                </span>
              )}
              {recipe.time && (
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 font-medium text-green-800 ring-1 ring-inset ring-green-200">
                  ⏱️ {recipe.time}
                </span>
              )}
            </div>

            <div className="space-y-10">
              {ingredients.length > 0 && (
                <section aria-labelledby="ingredients-heading">
                  <h2
                    id="ingredients-heading"
                    className="mb-5 text-2xl font-bold text-gray-900"
                  >
                    🛒 Ingredients
                  </h2>
                  <ul className="space-y-4">
                    {ingredients.map((ingredient, idx) => (
                      <li
                        key={idx}
                        className="group relative pl-9 opacity-0 animate-fade-in-slide"
                        style={{
                          animationDelay: `${idx * 0.1}s`,
                          animationFillMode: "forwards",
                        }}
                      >
                        <span className="absolute left-2 top-3 inline-block h-2 w-2 rounded-full bg-gray-400 group-hover:bg-indigo-500 transition-all duration-300 scale-90 group-hover:scale-110"></span>
                        <span className="text-gray-900 leading-relaxed relative group-hover:ml-1 transition-all duration-300 ease-out">
                          {ingredient}
                          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500/80 to-transparent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {steps.length > 0 && (
                <section aria-labelledby="steps-heading">
                  <h2
                    id="steps-heading"
                    className="mb-6 text-2xl font-bold text-gray-900"
                  >
                    Steps
                  </h2>
                  <div
                    className="relative border-l border-gray-300 opacity-0 animate-fade-in-slide-right"
                    style={{
                      animationDelay: "0.1s",
                      animationFillMode: "forwards",
                    }}
                  >
                    {steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="relative mb-8 opacity-0 animate-fade-in-slide-right cursor-pointer "
                        style={{
                          animationDelay: `${0.4 + idx * 0.12}s`,
                          animationFillMode: "forwards",
                        }}
                      >
                        <div className="absolute -left-3.5  flex justify-center items-center w-7 h-7 rounded-full bg-black">
                          <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white">
                            <div className="flex justify-center items-center w-5 h-5 rounded-full bg-black text-white text-xs font-bold">
                              {idx + 1}
                            </div>
                          </div>
                        </div>

                        <div className="ml-6">
                          <h4 className="text-lg  text-gray-900">{step}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {recipe.youtube_link && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={recipe.youtube_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-xl bg-red-50 px-6 py-4 text-lg font-semibold text-red-700 ring-1 ring-red-200 transition-all hover:bg-red-100 hover:ring-red-300"
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Watch Video Tutorial
                    <span className="ml-1 text-red-500 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeRenderer;
