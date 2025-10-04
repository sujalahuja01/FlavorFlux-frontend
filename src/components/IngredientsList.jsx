import React from "react";

const IngredientsList = ({ ingredients, removeIngredient, loader }) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold tect-gray-900 mb-4">
        🧺 Ingredients on Hand
      </h2>
      <ul className="flex flex-wrap gap-3 mb-8 ">
        {ingredients.map((ing, idx) => (
          <li
            key={idx}
            className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-amber-200 hover:bg-amber-200 transition-all duration-200"
          >
            {ing}
          </li>
        ))}
      </ul>
      {ingredients.length > 3 && (
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-indigo-50 to bg-purple-50 p-6 text-center shadow-inner border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            🍽️ Ready for a recipe?
          </h3>
          <p className="text-gray-600 mb-6">
            Generate a delicious recipe using your selected ingredients!
          </p>

          <button
            type="submit"
            disabled={loader || ingredients.length < 4}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-xl font-bold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
          >
            {loader ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Generating your recipe...
              </>
            ) : (
              "✨ Generate Recipe"
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
// import React from "react";

// const IngredientsList = ({ ingredients, loader, removeIngredient }) => {
//   return (
//     <section className="mt-6 bg-gray-50 rounded-2xl p-6 shadow-inner">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         Ingredients on hand:
//       </h2>

//       <ul className="flex flex-wrap gap-3">
//         {ingredients.map((ing, idx) => (
//           <li
//             key={idx}
//             className="relative flex items-center bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all group"
//           >
//             <span className="text-gray-800">{ing}</span>
//             <button
//               type="button"
//               onClick={() => removeIngredient(idx)}
//               className="absolute -top-2 -right-2 hidden group-hover:flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs hover:bg-red-600 transition"
//               title="Remove"
//             >
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>

//       {ingredients.length > 3 && (
//         <div className="mt-8 text-center">
//           <h3 className="text-lg font-semibold text-gray-800 mb-1">
//             Ready for a recipe?
//           </h3>
//           <p className="text-sm text-gray-600 mb-4">
//             Generate a recipe from your ingredients.
//           </p>
//           <button
//             type="submit"
//             disabled={loader || ingredients.length < 4}
//             className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-xl font-bold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
//           >
//             {loader ? (
//               <>
//                 <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
//                 Generating your recipe...
//               </>
//             ) : (
//               "✨ Generate Recipe"
//             )}
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default IngredientsList;
