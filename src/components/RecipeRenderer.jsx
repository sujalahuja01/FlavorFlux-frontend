// import React from "react";
// import { useLocation } from "react-router-dom";

// const separator = (items, splitter, Element, className = "") => {
//   return items
//     .split(splitter)
//     .map((item) => item.trim())
//     .filter(Boolean)
//     .map((item, idx) =>
//       React.createElement(Element, { key: idx, className }, item)
//     );
// };

// const RecipeRenderer = ({ recipe: propRecipe }) => {
//   const location = useLocation();
//   const recipe = propRecipe || location.state?.recipe || null;

//   if (!recipe) return <p>Loading recipe...</p>;

//   return (
//     <div className="flex flex-col justify-center items-start h-dvh gap-6 ml-2">
//       {recipe.title && <h2 className="900 text-2xl ">{recipe.title}</h2>}
//       {recipe.cuisine && <p className="text-2xl ">Cuisine: {recipe.cuisine}</p>}
//       {recipe.ingredients && (
//         <div>
//           <h3 className="text-2xl ">Ingredients</h3>
//           <ul>
//             {separator(
//               recipe.ingredients,
//               ",",
//               "li",
//               "mb-2 text-gray-700 leading-relaxed "
//             )}
//           </ul>
//         </div>
//       )}
//       {recipe.steps && (
//         <div>
//           <h3 className="text-2xl mb-3 ">Steps</h3>

//           {separator(
//             recipe.steps,
//             "\n",
//             "p",
//             "mb-2 text-gray-700 leading-relaxed "
//           )}
//         </div>
//       )}
//       {recipe.time && <p className="text-2xl ">Time: {recipe.time}</p>}

//       {recipe.youtube_link && (
//         <p>
//           <a
//             className="text-2xl "
//             href={recipe.youtube_link}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Watch on YouTube
//           </a>
//         </p>
//       )}
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
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;

  const steps = recipe.steps ? separator(recipe.steps, "\n") : [];
  const ingredients = recipe.ingredients
    ? separator(recipe.ingredients, ",")
    : [];

  return (
    <div className="min-h-dvh w-full flex justify-center bg-gray-50  py-8 ">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        {recipe.title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {recipe.title}
          </h2>
        )}
        {recipe.cuisine && (
          <p className="text-2xl pb-8">Cuisine: {recipe.cuisine}</p>
        )}

        {recipe.time && (
          <p className="text-2xl font-semibold pb-8">Time: {recipe.time}</p>
        )}
        {ingredients.length > 0 && (
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Ingredients
            </h3>

            <ul className="space-y-4">
              {ingredients.map((ingredient, idx) => (
                <li
                  key={idx}
                  className="group relative pl-8 opacity-0 animate-fade-in-slide"
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
          </div>
        )}

        {steps.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Steps</h3>
            <div className="relative border-l border-gray-300 ">
              {steps.map((step, idx) => (
                <div key={idx} className="relative mb-8  ">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeRenderer;
