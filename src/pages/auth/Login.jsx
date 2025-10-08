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
      {/* Outer 3D perspective */}
      <AuthSwitch checked={checked} setChecked={setChecked} />

      <div
        className="relative w-[350px] h-[460px]"
        style={{ perspective: "1000px" }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 ${
            checked ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 bg-white rounded-xl shadow-lg border border-gray-300 p-6"
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
                value=""
                placeholder="Email or Username"
                onChange={() => {}}
                error=""
                icon="fa-envelope"
              />
              <AuthPasswordInputLayout
                name="password"
                value=""
                placeholder="Password"
                onChange={() => {}}
                error=""
              />
            </div>

            <div className="flex justify-end text-sm text-gray-600 mt-2">
              <Link to="/forgot-password" className="hover:underline">
                Forgot password?
              </Link>
            </div>

            <button className="w-full h-11 mt-6 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 bg-[#FFE083] hover:bg-[#ffd24d] cursor-pointer duration-200">
              Let’s go!
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
