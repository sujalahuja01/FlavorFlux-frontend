// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RecipeCard = ({
//   recipe,
//   selectionMode,
//   selected,
//   onSelect,
//   onLongPress,
// }) => {
//   const navigate = useNavigate();
//   const timerRef = useRef(null);
//   const [longPressTriggered, setLongPressTriggered] = useState(false);

//   const handleClick = () => {
//     if (selectionMode) {
//       onSelect();
//     } else if (!longPressTriggered) {
//       navigate(`/recipes`, { state: { recipe } });
//     }
//     setLongPressTriggered(false);
//   };

//   const startPress = () => {
//     if (selectionMode) return;
//     timerRef.current = setTimeout(() => {
//       onLongPress();
//       onSelect();
//       setLongPressTriggered(true);
//     }, 700);
//   };

//   const endPress = () => {
//     clearTimeout(timerRef.current);
//   };

//   const displayIngredients =
//     recipe.ingredients
//       ?.split(",")
//       .map((ing) => ing.trim())
//       .filter(Boolean)
//       .slice(0, 3) || [];

//   return (
//     <div
//       onClick={handleClick}
//       onMouseDown={startPress}
//       onMouseUp={endPress}
//       onMouseLeave={endPress}
//       onTouchStart={startPress}
//       onTouchEnd={endPress}
//       className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.01] ${
//         selected ? "ring-2 ring-red-500" : ""
//       }`}
//       style={{ touchAction: "manipulation" }}
//     >
//       {selectionMode && (
//         <div className="absolute top-4 right-4 z-10">
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               checked={selected}
//               onChange={(e) => {
//                 e.stopPropagation();
//                 onSelect();
//               }}
//               className="sr-only peer"
//             />
//             <div
//               className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
//                 selected
//                   ? "bg-red-600 border-red-600"
//                   : "border-gray-300 hover:border-gray-400"
//               } peer-checked:bg-red-600`}
//             >
//               {selected && (
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="3"
//                     d="M5 13l4 4L19 7"
//                   ></path>
//                 </svg>
//               )}
//             </div>
//           </label>
//         </div>
//       )}

//       <div className="p-5 sm:p-6">
//         {recipe.title && (
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
//             {recipe.title}
//           </h2>
//         )}

//         {displayIngredients.length > 0 && (
//           <div className="mt-2">
//             <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
//               Key Ingredients
//             </h3>
//             <ul className="space-y-1">
//               {displayIngredients.map((ing, idx) => (
//                 <li
//                   key={idx}
//                   className="text-sm sm:text-base text-gray-800 before:content-['•'] before:mr-2 before:text-indigo-500"
//                 >
//                   {ing}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {!recipe.title && !recipe.ingredients && (
//           <p className="text-gray-600 italic">No preview available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RecipeCard = ({
//   recipe,
//   selectionMode,
//   selected,
//   onSelect,
//   onLongPress,
// }) => {
//   const navigate = useNavigate();
//   const timerRef = useRef(null);
//   const [longPressTriggered, setLongPressTriggered] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   const handleClick = () => {
//     if (selectionMode) {
//       onSelect();
//     } else if (!longPressTriggered) {
//       navigate(`/recipes`, { state: { recipe } });
//     }
//     setLongPressTriggered(false);
//   };

//   const startPress = () => {
//     if (selectionMode) return;
//     timerRef.current = setTimeout(() => {
//       onLongPress();
//       onSelect();
//       setLongPressTriggered(true);
//     }, 700);
//   };

//   const endPress = () => {
//     clearTimeout(timerRef.current);
//   };

//   // Show only first few steps for preview
//   const displaySteps =
//     recipe.steps
//       ?.split("\n")
//       .map((s) => s.trim())
//       .filter(Boolean)
//       .slice(0, 4) || [];

//   return (
//     <div
//       onClick={handleClick}
//       onMouseDown={startPress}
//       onMouseUp={endPress}
//       onTouchStart={startPress}
//       onTouchEnd={endPress}
//       onMouseLeave={() => {
//         endPress();
//         setExpanded(false);
//       }}
//       // Hover effect only applies to desktop (sm+)
//       onMouseEnter={() => {
//         if (window.innerWidth >= 640) setExpanded(true);
//       }}
//       className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg ring-1 ring-gray-100 transition-all duration-500 cursor-pointer transform hover:shadow-2xl sm:hover:scale-[1.02] ${
//         selected ? "ring-2 ring-red-500" : ""
//       }`}
//       style={{
//         touchAction: "manipulation",
//         minHeight: expanded && window.innerWidth >= 640 ? "370px" : "280px",
//       }}
//     >
//       {/* Selection checkbox */}
//       {selectionMode && (
//         <div className="absolute top-4 right-4 z-10">
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               checked={selected}
//               onChange={(e) => {
//                 e.stopPropagation();
//                 onSelect();
//               }}
//               className="sr-only peer"
//             />
//             <div
//               className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
//                 selected
//                   ? "bg-red-600 border-red-600"
//                   : "border-gray-300 hover:border-gray-400"
//               }`}
//             >
//               {selected && (
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="3"
//                     d="M5 13l4 4L19 7"
//                   ></path>
//                 </svg>
//               )}
//             </div>
//           </label>
//         </div>
//       )}

//       {/* Recipe Image */}
//       <div className="relative h-48 sm:h-56 overflow-hidden">
//         {recipe.img_url ? (
//           <img
//             src={recipe.img_url}
//             alt={recipe.title || "Recipe"}
//             className="h-full w-full object-cover transition-transform duration-500 sm:hover:scale-105"
//             onError={(e) => {
//               e.target.style.display = "none";
//               e.target.parentElement.innerHTML =
//                 '<div class="flex h-full w-full items-center justify-center bg-gray-50 text-gray-400">Image not available</div>';
//             }}
//           />
//         ) : (
//           <div className="flex h-full w-full items-center justify-center bg-gray-50 text-gray-400">
//             No Image
//           </div>
//         )}
//       </div>

//       {/* Title + hover preview */}
//       <div className="p-5 sm:p-6">
//         {recipe.title && (
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
//             {recipe.title}
//           </h2>
//         )}

//         {/* Steps preview visible only on hover + sm+ */}
//         <div
//           className={`transition-all duration-500 overflow-hidden hidden sm:block ${
//             expanded ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
//           }`}
//         >
//           {displaySteps.length > 0 ? (
//             <ul className="space-y-2 text-sm text-gray-700">
//               {displaySteps.map((step, idx) => (
//                 <li
//                   key={idx}
//                   className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-indigo-500"
//                 >
//                   {step}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500 italic">No steps preview available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RecipeCard = ({
//   recipe,
//   selectionMode,
//   selected,
//   onSelect,
//   onLongPress,
// }) => {
//   const navigate = useNavigate();
//   const timerRef = useRef(null);
//   const [longPressTriggered, setLongPressTriggered] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   const handleClick = () => {
//     if (selectionMode) {
//       onSelect();
//     } else if (!longPressTriggered) {
//       navigate(`/recipes`, { state: { recipe } });
//     }
//     setLongPressTriggered(false);
//   };

//   const startPress = () => {
//     if (selectionMode) return;
//     timerRef.current = setTimeout(() => {
//       onLongPress();
//       onSelect();
//       setLongPressTriggered(true);
//     }, 700);
//   };

//   const endPress = () => {
//     clearTimeout(timerRef.current);
//   };

//   const displaySteps =
//     recipe.steps
//       ?.split("\n")
//       .map((s) => s.trim())
//       .filter(Boolean)
//       .slice(0, 4) || [];

//   return (
//     <div
//       onClick={handleClick}
//       onMouseDown={startPress}
//       onMouseUp={endPress}
//       onTouchStart={startPress}
//       onTouchEnd={endPress}
//       onMouseLeave={() => {
//         endPress();
//         setExpanded(false);
//       }}
//       // Hover effect only applies on desktop (sm+)
//       onMouseEnter={() => {
//         if (window.innerWidth >= 640) setExpanded(true);
//       }}
//       className={`relative overflow-hidden rounded-2xl sm:rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition-all duration-500 cursor-pointer transform hover:shadow-2xl sm:hover:scale-[1.02] ${
//         selected ? "ring-2 ring-red-500" : ""
//       }`}
//       style={{
//         touchAction: "manipulation",
//         minHeight: expanded && window.innerWidth >= 640 ? "370px" : "280px",
//       }}
//     >
//       {/* Selection checkbox */}
//       {selectionMode && (
//         <div className="absolute top-4 right-4 z-10">
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               checked={selected}
//               onChange={(e) => {
//                 e.stopPropagation();
//                 onSelect();
//               }}
//               className="sr-only peer"
//             />
//             <div
//               className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
//                 selected
//                   ? "bg-red-600 border-red-600"
//                   : "border-gray-300 hover:border-gray-400"
//               }`}
//             >
//               {selected && (
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="3"
//                     d="M5 13l4 4L19 7"
//                   ></path>
//                 </svg>
//               )}
//             </div>
//           </label>
//         </div>
//       )}

//       {/* Recipe Image */}
//       <div className="relative h-48 sm:h-56 overflow-hidden">
//         {recipe.img_url ? (
//           <img
//             src={recipe.img_url}
//             alt={recipe.title || "Recipe"}
//             className="h-full w-full object-cover"
//             onError={(e) => {
//               e.target.style.display = "none";
//               e.target.parentElement.innerHTML =
//                 '<div class="flex h-full w-full items-center justify-center bg-gray-50 text-gray-400">Image not available</div>';
//             }}
//           />
//         ) : (
//           <div className="flex h-full w-full items-center justify-center bg-gray-50 text-gray-400">
//             No Image
//           </div>
//         )}
//       </div>

//       {/* Title + hover preview */}
//       <div className="p-5 sm:p-6">
//         {recipe.title && (
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
//             {recipe.title}
//           </h2>
//         )}

//         {/* Steps preview — visible only on hover (sm+) */}
//         <div
//           className={`transition-all duration-700 ease-in-out overflow-hidden hidden sm:block ${
//             expanded ? "max-h-44 opacity-100 mt-3" : "max-h-0 opacity-0"
//           }`}
//         >
//           {displaySteps.length > 0 ? (
//             <ul className="space-y-2 text-sm text-gray-700">
//               {displaySteps.map((step, idx) => (
//                 <li
//                   key={idx}
//                   className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-indigo-500"
//                 >
//                   {step}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500 italic">No steps preview available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({
  recipe,
  selectionMode,
  selected,
  onSelect,
  onLongPress,
}) => {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (selectionMode) {
      onSelect();
    } else if (!longPressTriggered) {
      navigate(`/recipes`, { state: { recipe } });
    }
    setLongPressTriggered(false);
  };

  const startPress = () => {
    if (selectionMode) return;
    timerRef.current = setTimeout(() => {
      onLongPress();
      onSelect();
      setLongPressTriggered(true);
    }, 700);
  };

  const endPress = () => clearTimeout(timerRef.current);

  const displaySteps =
    recipe.steps
      ?.split("\n")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 4) || [];

  return (
    <div
      onClick={handleClick}
      onMouseDown={startPress}
      onMouseUp={endPress}
      onTouchStart={startPress}
      onTouchEnd={endPress}
      onMouseLeave={() => {
        endPress();
        setExpanded(false);
      }}
      onMouseEnter={() => {
        if (window.innerWidth >= 640) setExpanded(true);
      }}
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg ring-1 ring-gray-100 transition-all duration-500 cursor-pointer transform hover:shadow-2xl sm:hover:scale-[1.02] ${
        selected ? "ring-2 ring-red-500" : ""
      }`}
      style={{
        touchAction: "manipulation",
        minHeight: expanded && window.innerWidth >= 640 ? "370px" : "280px",
      }}
    >
      {/* Selection Checkbox */}
      {selectionMode && (
        <div className="absolute top-4 right-4 z-10">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selected}
              onChange={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              className="sr-only peer"
            />
            <div
              className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                selected
                  ? "bg-red-600 border-red-600"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              {selected && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>
          </label>
        </div>
      )}

      {/* Recipe Image */}
      <div className="relative h-48 sm:h-65 overflow-hidden">
        {recipe.img_url ? (
          <img
            src={recipe.img_url}
            alt={recipe.title || "Recipe"}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<div class="flex h-full w-full items-center justify-center bg-gray-50 text-gray-400">Image not available</div>';
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-50 text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Title + Step Preview */}
      <div className="p-5 sm:p-6">
        {recipe.title && (
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
            {recipe.title}
          </h2>
        )}

        {/* Step preview — visible only on desktop hover */}
        <div
          className={`hidden sm:block transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
            expanded
              ? "max-h-48 opacity-100 translate-y-0 mt-3"
              : "max-h-0 opacity-0 translate-y-5"
          }`}
        >
          {displaySteps.length > 0 ? (
            <ul className="space-y-2 text-sm text-gray-700">
              {displaySteps.map((step, idx) => (
                <li
                  key={idx}
                  className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-indigo-500"
                >
                  {step}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No steps preview available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
