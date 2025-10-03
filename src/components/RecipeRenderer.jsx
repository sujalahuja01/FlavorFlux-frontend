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

// import React from "react";
// import { useLocation } from "react-router-dom";

// const separator = (items, splitter) => {
//   return items
//     .split(splitter)
//     .map((item) => item.trim())
//     .filter(Boolean);
// };

// const RecipeRenderer = ({ recipe: propRecipe, showImage = false }) => {
//   const location = useLocation();
//   const recipe = propRecipe || location.state?.recipe || null;

//   if (!recipe)
//     return (
//       <div className="flex min-h-dvh w-full items-center justify-center bg-gray-50">
//         <p className="text-center text-lg text-gray-500">Loading recipe...</p>
//       </div>
//     );

//   const steps = recipe.steps ? separator(recipe.steps, "\n") : [];
//   const ingredients = recipe.ingredients
//     ? separator(recipe.ingredients, ",")
//     : [];

//   return (
//     <div className="min-h-dvh w-full bg-gray-500 py-10 px-4 sm:px-6">
//       <div className="mx-auto max-w-3xl">
//         <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100">
//           {showImage && recipe.img_url && (
//             <div className="relative h-64 overflow-hidden bg-gray-100 md:h-80">
//               <img
//                 src={recipe.img_url}
//                 alt={recipe.title || "Recipe"}
//                 className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//                 onError={(e) => {
//                   e.target.style.display = "none";
//                   e.target.parentElement.innerHTML =
//                     '<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50"><span class="text-gray-400">Image not available</span></div>';
//                 }}
//               />
//             </div>
//           )}
//           <div className="p-8 md:p-10">
//             {recipe.title && (
//               <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 {recipe.title}
//               </h1>
//             )}
//             <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
//               {recipe.cuisine && (
//                 <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-800 ring-1 ring-inset ring-amber-200">
//                   🌍 {recipe.cuisine}
//                 </span>
//               )}
//               {recipe.time && (
//                 <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 font-medium text-green-800 ring-1 ring-inset ring-green-200">
//                   ⏱️ {recipe.time}
//                 </span>
//               )}
//             </div>

//             <div className="space-y-10">
//               {ingredients.length > 0 && (
//                 <section aria-labelledby="ingredients-heading">
//                   <h2
//                     id="ingredients-heading"
//                     className="mb-5 text-2xl font-bold text-gray-900"
//                   >
//                     🛒 Ingredients
//                   </h2>
//                   <ul className="space-y-4">
//                     {ingredients.map((ingredient, idx) => (
//                       <li
//                         key={idx}
//                         className="group relative pl-9 opacity-0 animate-fade-in-slide"
//                         style={{
//                           animationDelay: `${idx * 0.1}s`,
//                           animationFillMode: "forwards",
//                         }}
//                       >
//                         <span className="absolute left-2 top-3 inline-block h-2 w-2 rounded-full bg-gray-400 group-hover:bg-indigo-500 transition-all duration-300 scale-90 group-hover:scale-110"></span>
//                         <span className="text-gray-900 leading-relaxed relative group-hover:ml-1 transition-all duration-300 ease-out">
//                           {ingredient}
//                           <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500/80 to-transparent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-out"></span>
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </section>
//               )}
//               {steps.length > 0 && (
//                 <section aria-labelledby="steps-heading">
//                   <h2
//                     id="steps-heading"
//                     className="mb-6 text-2xl font-bold text-gray-900"
//                   >
//                     Steps
//                   </h2>
//                   <div
//                     className="relative border-l border-gray-300 opacity-0 animate-fade-in-slide-right"
//                     style={{
//                       animationDelay: "0.1s",
//                       animationFillMode: "forwards",
//                     }}
//                   >
//                     {steps.map((step, idx) => (
//                       <div
//                         key={idx}
//                         className="relative mb-8 opacity-0 animate-fade-in-slide-right cursor-pointer "
//                         style={{
//                           animationDelay: `${0.4 + idx * 0.12}s`,
//                           animationFillMode: "forwards",
//                         }}
//                       >
//                         <div className="absolute -left-3.5  flex justify-center items-center w-7 h-7 rounded-full bg-black">
//                           <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white">
//                             <div className="flex justify-center items-center w-5 h-5 rounded-full bg-black text-white text-xs font-bold">
//                               {idx + 1}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="ml-6">
//                           <h4 className="text-lg  text-gray-900">{step}</h4>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </section>
//               )}

//               {recipe.youtube_link && (
//                 <div className="mt-8 pt-6 border-t border-gray-100">
//                   <a
//                     href={recipe.youtube_link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group inline-flex items-center gap-3 rounded-xl bg-red-50 px-6 py-4 text-lg font-semibold text-red-700 ring-1 ring-red-200 transition-all hover:bg-red-100 hover:ring-red-300"
//                   >
//                     <svg
//                       className="h-6 w-6"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                     >
//                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                     </svg>
//                     Watch Video Tutorial
//                     <span className="ml-1 text-red-500 transition-transform group-hover:translate-x-1">
//                       →
//                     </span>
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeRenderer;
// import React from "react";
// import { useLocation } from "react-router-dom";

// const separator = (items, splitter) => {
//   return items
//     .split(splitter)
//     .map((item) => item.trim())
//     .filter(Boolean);
// };

// const RecipeRenderer = ({ recipe: propRecipe, showImage = false }) => {
//   const location = useLocation();
//   const recipe = propRecipe || location.state?.recipe || null;

//   if (!recipe)
//     return (
//       <div className="flex min-h-dvh w-full items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
//         <div className="text-center">
//           <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent mb-4"></div>
//           <p className="text-lg text-gray-500 font-medium">
//             Loading your delicious recipe...
//           </p>
//         </div>
//       </div>
//     );

//   const steps = recipe.steps ? separator(recipe.steps, "\n") : [];
//   const ingredients = recipe.ingredients
//     ? separator(recipe.ingredients, ",")
//     : [];

//   return (
//     <div className="min-h-dvh w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-4xl">
//         {/* Header with back button */}
//         <div className="mb-8 flex items-center gap-4">
//           <button
//             onClick={() => window.history.back()}
//             className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-indigo-300"
//           >
//             <span className="transition-transform group-hover:-translate-x-1">
//               ←
//             </span>
//             Back
//           </button>
//         </div>

//         <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 backdrop-blur-sm">
//           {showImage && recipe.img_url && (
//             <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 md:h-96">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
//               <img
//                 src={recipe.img_url}
//                 alt={recipe.title || "Recipe"}
//                 className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
//                 onError={(e) => {
//                   e.target.style.display = "none";
//                   e.target.parentElement.innerHTML =
//                     '<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-red-50"><div class="text-center"><svg class="mx-auto h-20 w-20 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span class="text-gray-400 text-lg font-medium">Image not available</span></div></div>';
//                 }}
//               />
//               {recipe.title && (
//                 <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
//                   <h1 className="text-4xl font-black tracking-tight text-white drop-shadow-2xl sm:text-5xl">
//                     {recipe.title}
//                   </h1>
//                 </div>
//               )}
//             </div>
//           )}

//           <div className="p-8 md:p-12 lg:p-14">
//             {!showImage && recipe.title && (
//               <div className="mb-10">
//                 <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
//                   {recipe.title}
//                 </h1>
//                 <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
//               </div>
//             )}

//             {/* Recipe Meta Info */}
//             <div className="mb-10 flex flex-wrap items-center gap-3">
//               {recipe.cuisine && (
//                 <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 px-5 py-2.5 ring-1 ring-amber-200 transition-all hover:shadow-lg hover:ring-amber-300">
//                   <span className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-amber-900">
//                     <span className="text-lg">🌍</span>
//                     {recipe.cuisine}
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
//                 </div>
//               )}
//               {recipe.time && (
//                 <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 px-5 py-2.5 ring-1 ring-green-200 transition-all hover:shadow-lg hover:ring-green-300">
//                   <span className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-green-900">
//                     <span className="text-lg">⏱️</span>
//                     {recipe.time}
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
//                 </div>
//               )}
//             </div>

//             <div className="space-y-12">
//               {/* Ingredients Section */}
//               {ingredients.length > 0 && (
//                 <section aria-labelledby="ingredients-heading">
//                   <div className="mb-6 flex items-center gap-3">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl shadow-lg">
//                       🛒
//                     </div>
//                     <h2
//                       id="ingredients-heading"
//                       className="text-3xl font-black text-gray-900"
//                     >
//                       Ingredients
//                     </h2>
//                   </div>

//                   <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-slate-50 p-6 ring-1 ring-gray-200/50">
//                     <ul className="space-y-3">
//                       {ingredients.map((ingredient, idx) => (
//                         <li
//                           key={idx}
//                           className="group relative flex items-start gap-4 rounded-xl bg-white p-4 opacity-0 animate-fade-in-slide shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-indigo-200"
//                           style={{
//                             animationDelay: `${idx * 0.08}s`,
//                             animationFillMode: "forwards",
//                           }}
//                         >
//                           <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white shadow-md transition-transform group-hover:scale-110">
//                             ✓
//                           </span>
//                           <span className="flex-1 text-base leading-relaxed text-gray-800 group-hover:text-gray-900">
//                             {ingredient}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </section>
//               )}

//               {/* Steps Section */}
//               {steps.length > 0 && (
//                 <section aria-labelledby="steps-heading">
//                   <div className="mb-6 flex items-center gap-3">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl shadow-lg">
//                       👨‍🍳
//                     </div>
//                     <h2
//                       id="steps-heading"
//                       className="text-3xl font-black text-gray-900"
//                     >
//                       Cooking Steps
//                     </h2>
//                   </div>

//                   <div className="space-y-6">
//                     {steps.map((step, idx) => (
//                       <div
//                         key={idx}
//                         className="group relative opacity-0 animate-fade-in-slide-right"
//                         style={{
//                           animationDelay: `${0.3 + idx * 0.1}s`,
//                           animationFillMode: "forwards",
//                         }}
//                       >
//                         <div className="flex gap-5">
//                           {/* Step Number Badge */}
//                           <div className="relative flex-shrink-0">
//                             <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 shadow-lg ring-4 ring-white transition-all group-hover:scale-110 group-hover:shadow-xl">
//                               <span className="text-xl font-black text-white">
//                                 {idx + 1}
//                               </span>
//                             </div>
//                             {idx < steps.length - 1 && (
//                               <div className="absolute left-1/2 top-14 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-200 to-transparent"></div>
//                             )}
//                           </div>

//                           {/* Step Content */}
//                           <div className="flex-1 rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-md ring-1 ring-gray-200/50 transition-all group-hover:shadow-lg group-hover:ring-indigo-200">
//                             <p className="text-lg leading-relaxed text-gray-800">
//                               {step}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </section>
//               )}

//               {/* YouTube Link */}
//               {recipe.youtube_link && (
//                 <div className="mt-10 rounded-2xl bg-gradient-to-br from-red-50 via-pink-50 to-red-50 p-8 ring-1 ring-red-200/50">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-2xl shadow-lg">
//                       📺
//                     </div>
//                     <h3 className="text-2xl font-black text-gray-900">
//                       Video Tutorial
//                     </h3>
//                   </div>
//                   <a
//                     href={recipe.youtube_link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-2xl hover:scale-[1.02] sm:w-auto"
//                   >
//                     <svg
//                       className="h-7 w-7 transition-transform group-hover:scale-110"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                     >
//                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                     </svg>
//                     Watch on YouTube
//                     <span className="text-xl transition-transform group-hover:translate-x-2">
//                       →
//                     </span>
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Footer Note */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-500">
//             Bon appétit! Enjoy your cooking adventure 🍳
//           </p>
//         </div>
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
    <div className="min-h-dvh w-full bg-gray-50 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100">
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
