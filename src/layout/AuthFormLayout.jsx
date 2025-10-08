// import React from "react";

// const AuthFormLayout = ({ title, onSubmit, children, subTitle }) => {
//   return (
//     <div
//       className="relative w-full flex flex-col justify-center items-center bg-gray-50 "
//       style={{ height: "100dvh" }}
//     >
//       <form onSubmit={onSubmit} className="flex flex-col items-center">
//         <div className="flex flex-col justify-center items-center mb-6">
//           <h2 className="text-2xl font-bold mb-2">{title}</h2>

//           <p className="text-gray-600 text-center w-80 ">{subTitle} </p>
//         </div>
//         <div className=" w-80 flex flex-col justify-center items-center gap-3">
//           {children}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AuthFormLayout;
import React from "react";

const AuthFormLayout = ({ title, onSubmit, children, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={onSubmit}
        className="bg-gray-200 border-2 border-gray-800 rounded-md shadow-[6px_6px_0_0_#323232] w-[320px] sm:w-[360px] p-8 flex flex-col items-center gap-5"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          {subTitle && (
            <p className="text-gray-600 text-sm mt-1 max-w-xs text-center">
              {subTitle}{" "}
            </p>
          )}
        </div>
        <div className=" w-full flex flex-col items-center gap-5">
          {children}
        </div>
      </form>
    </div>
  );
};

export default AuthFormLayout;
