// import useAuthFormState from "@/hooks/useAuthFormState";
// import AuthFormLayout from "@/layout/AuthFormLayout";
// import AuthInputLayout, {
//   AuthPasswordInputLayout,
// } from "@/layout/AuthInputLayout";
// import { baseURL, fetchOptions } from "@/utils/api";
// import { authRequest } from "@/utils/authRequest";
// import { runValidation } from "@/utils/formUtils";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const { form, status, runFlow } = useAuthFormState({
//     username: "",
//     password: "",
//   });

//   const { values, errors, setErrors, handleChange } = form;
//   const { message, setMessage, loading } = status;

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!runValidation(values, "login", setErrors, setMessage)) return;

//     await runFlow({
//       requestFn: () =>
//         authRequest(`${baseURL}/auth/login`, "POST", {
//           identifier: values.username,
//           password: values.password,
//         }),
//       resetValues: { username: "", password: "" },
//       redirectTo: "/generate",
//     });
//   };

//   const logout = async (e) => {
//     e.preventDefault();
//     const res = await fetch(`${baseURL}/auth/logout`, fetchOptions("POST"));
//     const data = await res.json();
//     if (res.ok) {
//       setMessage(data.message);
//     } else {
//       setMessage("Network error. Try again later.");
//     }
//   };

//   const user = async (e) => {
//     e.preventDefault();
//     const res = await fetch(`${baseURL}/auth/user`, fetchOptions("GET"));
//     const data = await res.json();
//     if (res.ok) {
//       setMessage(data.user.name);
//     } else {
//       setMessage("Network error. Try again later.");
//     }
//   };

//   const googleAuth = () => {
//     window.location.href = `${baseURL}/auth/google-login`;
//   };

//   return (
//     <>
//       <AuthFormLayout
//         onSubmit={handleLogin}
//         title="Welcome Back!"
//         subTitle="Please enter your details here"
//         message={message}
//       >
//         <AuthInputLayout
//           type="text"
//           name="username"
//           value={values.username}
//           placeholder="Email or Username"
//           onChange={handleChange}
//           error={errors.username || errors.identifier}
//         />

//         <AuthPasswordInputLayout
//           type="password"
//           name="password"
//           value={values.password}
//           placeholder="Password"
//           onChange={handleChange}
//           error={errors.password}
//         />
//         <div className="flex w-full">
//           <Link
//             to="/forgot-password"
//             className="ml-auto text-sm hover:underline text-gray-600"
//           >
//             Forgot password?
//           </Link>
//         </div>

//         {message && (
//           <div className="text-sm text-center text-red-600 w-full">
//             {message}
//           </div>
//         )}

//         <button
//           className="btn bg-[#FFE083] hover:bg-[#ffd24d] text-gray-800"
//           type="submit"
//           disabled={loading}
//         >
//           {loading ? "Logging In..." : "Login"}
//         </button>
//         <p className="flex justify-center text-gray-600">Or continue with </p>

//         <button onClick={googleAuth} className="btn mb-2 bg-[#FF5842]">
//           <span className="mr-2">
//             <img src="/images/google-svg.svg" alt="" />
//           </span>
//           Google
//         </button>

//         <div>
//           <span className="mr-2 text-gray-600 ">Not Registered Yet?</span>
//           <Link to="/signup" className=" text-[#1bb169] hover:underline">
//             Sign Up
//           </Link>
//         </div>
//         {/* <button className="btn bg-amber-500" type="button" onClick={logout}>
//           Logout
//         </button>
//         <button className="btn bg-amber-950" type="button" onClick={user}>
//           User
//         </button> */}
//       </AuthFormLayout>
//       {/* <p>s
//           Delete Account
//           <Link to="/delete-account"> Delete Account</Link>
//         </p>
//         <p>
//           Change Password
//           <Link to="/change-password"> Change Password</Link> */}
//       {/* </p> */}
//     </>
//   );
// };

// export default Login;
// import useAuthFormState from "@/hooks/useAuthFormState";
// import AuthFormLayout from "@/layout/AuthFormLayout";
// import AuthInputLayout, {
//   AuthPasswordInputLayout,
// } from "@/layout/AuthInputLayout";
// import { baseURL, fetchOptions } from "@/utils/api";
// import { authRequest } from "@/utils/authRequest";
// import { runValidation } from "@/utils/formUtils";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const { form, status, runFlow } = useAuthFormState({
//     username: "",
//     password: "",
//   });

//   const { values, errors, setErrors, handleChange } = form;
//   const { message, setMessage, loading } = status;

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!runValidation(values, "login", setErrors, setMessage)) return;

//     await runFlow({
//       requestFn: () =>
//         authRequest(`${baseURL}/auth/login`, "POST", {
//           identifier: values.username,
//           password: values.password,
//         }),
//       resetValues: { username: "", password: "" },
//       redirectTo: "/generate",
//     });
//   };

//   const googleAuth = () => {
//     window.location.href = `${baseURL}/auth/google-login`;
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#FAFAFA]">
//       {/* Left Section – Form */}
//       <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-10">
//         <form
//           onSubmit={handleLogin}
//           className="bg-white rounded-2xl shadow-md w-full max-w-md p-8"
//         >
//           <h1 className="text-3xl font-semibold text-gray-900 mb-2">
//             New Here?
//           </h1>
//           <p className="text-gray-600 mb-6">Let's get you signed up.</p>

//           {/* Sign In / Sign Up Tabs */}
//           <div className="flex gap-3 mb-8">
//             <button
//               type="button"
//               className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
//             >
//               Sign In
//             </button>
//             <Link
//               to="/signup"
//               className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-center"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <AuthInputLayout
//               type="text"
//               name="username"
//               value={values.username}
//               placeholder="Email Address"
//               onChange={handleChange}
//               error={errors.username || errors.identifier}
//             />
//           </div>

//           {/* Password Input */}
//           <AuthPasswordInputLayout
//             type="password"
//             name="password"
//             value={values.password}
//             placeholder="Password"
//             onChange={handleChange}
//             error={errors.password}
//           />

//           {message && (
//             <div className="text-sm text-red-600 text-center mt-2 mb-2">
//               {message}
//             </div>
//           )}

//           {/* Continue Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#FFD970] hover:bg-[#FFCB38] text-gray-800 font-medium py-3 rounded-lg mt-4 transition"
//           >
//             {loading ? "Logging In..." : "Continue"}
//           </button>

//           {/* Divider */}
//           <div className="my-5 border-t border-gray-200 relative">
//             <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-2 text-sm text-gray-500">
//               or continue with
//             </span>
//           </div>

//           {/* Google Button */}
//           <button
//             onClick={googleAuth}
//             type="button"
//             className="w-full flex justify-center items-center gap-2 bg-white border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
//           >
//             <img
//               src="/images/google-svg.svg"
//               alt="Google"
//               className="w-5 h-5"
//             />
//             <span className="text-gray-700 font-medium">
//               Continue with Google
//             </span>
//           </button>
//         </form>
//       </div>

//       {/* Right Section – Image (hidden on small screens) */}
//       <div className="hidden md:flex w-1/2 justify-center items-center p-10">
//         <img
//           src="/images/image-removebg-preview.png"
//           alt="Chef Illustration"
//           className="w-[80%] max-w-lg object-contain"
//         />
//       </div>
//     </div>
//   );
// };

// export default Login;
import AuthSwitch from "@/components/AuthSwitch";
import useAuthFormState from "@/hooks/useAuthFormState";
import AuthFormLayout from "@/layout/AuthFormLayout";
import AuthInputLayout, {
  AuthPasswordInputLayout,
} from "@/layout/AuthInputLayout";
import { baseURL, fetchOptions } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import { runValidation } from "@/utils/formUtils";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [checked, setChecked] = useState(false);
  const { form, status, runFlow } = useAuthFormState({
    username: "",
    password: "",
  });

  const { values, errors, setErrors, handleChange } = form;
  const { message, setMessage, loading } = status;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!runValidation(values, "login", setErrors, setMessage)) return;

    await runFlow({
      requestFn: () =>
        authRequest(`${baseURL}/auth/login`, "POST", {
          identifier: values.username,
          password: values.password,
        }),
      resetValues: { username: "", password: "" },
      redirectTo: "/generate",
    });
  };

  const googleAuth = () => {
    window.location.href = `${baseURL}/auth/google-login`;
  };
  return (
    //   <AuthFormLayout
    //     onSubmit={handleLogin}
    //     title="Welcome Back "
    //     subTitle="Log in to continue exploring delicious recipes"
    //   >
    //     {/* <AuthSwitch /> */}
    //     <AuthInputLayout
    //       type="text"
    //       name="username"
    //       value={values.username}
    //       placeholder="Email or Username"
    //       onChange={handleChange}
    //       error={errors.username || errors.identifier}
    //       icon="fa-envelope"
    //     />

    //     <AuthPasswordInputLayout
    //       name="password"
    //       value={values.password}
    //       placeholder="Password"
    //       onChange={handleChange}
    //       error={errors.password}
    //     />

    //     <div className="flex w-full justify-end text-sm text-gray-600">
    //       <Link to="/forgot-password" className="hover:underline">
    //         Forgot password?
    //       </Link>
    //     </div>

    //     {message && (
    //       <div className="text-sm text-center text-red-600 w-full">{message}</div>
    //     )}

    //     <button
    //       className="w-full h-11 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 bg-[#FFE083] hover:bg-[#ffd24d] cursor-pointer duration-200"
    //       type="submit"
    //       disabled={loading}
    //     >
    //       {loading ? "Logging In..." : "Let’s go!"}
    //     </button>

    //     <p className="text-gray-600 mt-4">or continue with</p>

    //     <button
    //       type="button"
    //       onClick={googleAuth}
    //       className="w-full h-11 border-2 border-gray-800 rounded-md bg-[#FF5842] text-white shadow-[4px_4px_0_0_#323232] font-semibold  flex items-center justify-center gap-2 cursor-pointer"
    //     >
    //       <img src="/images/google-svg.svg" alt="Google" className="w-5 h-5" />
    //       Google
    //     </button>

    //     <div className="text-gray-700 text-sm mt-3">
    //       Not Registered Yet?{" "}
    //       <Link to="/signup" className="text-blue-600 hover:underline">
    //         Sign Up
    //       </Link>
    //     </div>
    //   </AuthFormLayout>
    // );<AuthSwitch />
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f7fb]">
      <AuthSwitch checked={checked} setChecked={setChecked} />

      <div className="relative w-87 h-115" style={{ perspective: "1000px" }}>
        <div
          className={`relative w-full h-full transition-transform duration-700 ${
            checked ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 bg-gray-200 border-2 border-gray-800 rounded-md shadow-[6px_6px_0_0_#323232] p-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            <div className="flex flex-col gap-4">
              <AuthInputLayout
                type="text"
                name="username"
                value={values.username}
                placeholder="Email or Username"
                onChange={handleChange}
                error={errors.username || errors.identifier}
                icon="fa-envelope"
              />
              <AuthPasswordInputLayout
                name="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
                error={errors.password}
              />
            </div>

            <div className="flex justify-end text-sm text-gray-600 mt-2">
              <Link to="/forgot-password" className="hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              className="w-full h-11 mt-6 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 bg-[#FFE083] hover:bg-[#ffd24d] cursor-pointer duration-200"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>

            <p className="text-gray-600 mt-4 text-center">or continue with</p>

            <button
              type="button"
              className="w-full h-11 mt-2 border-2 border-gray-800 rounded-md bg-[#FF5842] text-white shadow-[4px_4px_0_0_#323232] font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <img
                src="/images/google-svg.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>

            <div className="text-gray-700 text-sm mt-3 text-center">
              Not Registered Yet?{" "}
              <span
                onClick={() => setChecked(true)}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </div>
          </div>

          <div
            className="absolute inset-0 bg-white rounded-xl shadow-lg border border-gray-300 p-6 rotate-y-180 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <p className="text-gray-500">Signup form will go here</p>
            <button
              onClick={() => setChecked(false)}
              className="mt-6 px-4 py-2 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 bg-[#FFE083] hover:bg-[#ffd24d] cursor-pointer"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
