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

const RecipeRenderer = ({ recipe: propRecipe }) => {
  const location = useLocation();
  const recipe = propRecipe || location.state?.recipe || null;

  if (!recipe)
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;

  // Split steps by newline
  const steps = recipe.steps
    ? recipe.steps
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="min-h-dvh w-full flex justify-center bg-gray-50  py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        {recipe.title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {recipe.title}
          </h2>
        )}

        {/* Steps Timeline */}
        {steps.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Steps</h3>
            <div className="relative border-l border-gray-300">
              {steps.map((step, idx) => (
                <div key={idx} className="mb-8 ml-6">
                  {/* Circle Number */}
                  <span className="absolute -left-3 flex  justify-center w-6 h-6 rounded-full border-2 border-gray-400 bg-white text-sm font-bold text-gray-600">
                    {idx + 1}
                  </span>

                  {/* Step Content */}
                  <div className="flex flex-col">
                    <span className="text-sm uppercase text-gray-500">
                      Step {idx + 1}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {step}
                    </h4>
                    {/* Optional status tags */}
                    {/* <span className="mt-1 inline-block text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-500">
                      Pending
                    </span> */}
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
