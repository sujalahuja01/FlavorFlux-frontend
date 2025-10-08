import AuthSwitch from "@/components/AuthSwitch";
import useAuthFormState from "@/hooks/useAuthFormState";
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
    email: "",
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

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!values.username && !values.password && !values.email) {
      setMessage("No ghosting the fields, drop the info 👻");
      return;
    }

    if (!runValidation(values, "signup", setErrors, setMessage)) return;

    await runFlow({
      requestFn: () => authRequest(`${baseURL}/auth/signup`, "POST", values),
      resetValues: { username: "", email: "", password: "" },
      // redirectTo: "/login",
    }).then(() => setChecked(false));
  };

  const googleAuth = () => {
    window.location.href = `${baseURL}/auth/google-login`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f7fb]">
      <AuthSwitch checked={checked} setChecked={setChecked} />

      <div className="relative w-87 h-130 " style={{ perspective: "1000px" }}>
        <div
          className={`relative w-full h-full transition-transform duration-700 ${
            checked ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 bg-gray-200 border-2 border-gray-800 rounded-md shadow-[6px_6px_0_0_#323232] p-6 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <form onSubmit={handleLogin}>
              <h2 className="text-2xl font-bold text-center mb-6 ">Login</h2>
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
                  type="password"
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
              {message && (
                <div className="text-sm text-center text-red-600 w-full">
                  {message}
                </div>
              )}
              <button
                className="w-full h-11 mt-6 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 bg-[#FFE083] hover:bg-[#ffd24d] cursor-pointer duration-200"
                type="submit"
                disabled={loading}
                onClick={() => handleLogin}
              >
                {loading ? "Logging In..." : "Login"}
              </button>
              <p className="text-gray-600 mt-4 text-center">or continue with</p>
              <button
                onClick={googleAuth}
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
            </form>
          </div>

          <div
            className="absolute inset-0 bg-gray-200 border-2 border-gray-800 rounded-md shadow-[6px_6px_0_0_#323232] p-6 rotate-y-180 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <form onSubmit={handleSignup}>
              <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
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
                <AuthInputLayout
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  onChange={handleChange}
                  error={errors.email}
                  icon="fa-envelope"
                />
                <AuthPasswordInputLayout
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Password"
                  onChange={handleChange}
                  error={errors.password}
                />
              </div>

              {message && (
                <div className="text-sm text-center text-red-600 w-full mt-6 ">
                  {message}
                </div>
              )}
              <button
                className="w-full h-11 mt-6 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 bg-[#FFE083] hover:bg-[#ffd24d] cursor-pointer duration-200"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Signup"}
              </button>
              <p className="text-gray-600 mt-4 text-center">or continue with</p>
              <button
                onClick={googleAuth}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
