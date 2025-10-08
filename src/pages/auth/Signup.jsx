import React from "react";
import { Link } from "react-router-dom";
import { baseURL } from "@/utils/api";
import AuthFormLayout from "@/layout/AuthFormLayout";
import AuthInputLayout, {
  AuthPasswordInputLayout,
} from "@/layout/AuthInputLayout";
import { authRequest } from "@/utils/authRequest";
import { runValidation } from "@/utils/formUtils";
import useAuthFormState from "@/hooks/useAuthFormState";

const Signup = () => {
  const { form, status, runFlow } = useAuthFormState({
    username: "",
    email: "",
    password: "",
  });

  const { values, errors, setErrors, handleChange } = form;
  const { message, setMessage, loading } = status;

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
      redirectTo: "/login",
    });
  };

  const googleAuth = () => {
    window.location.href = `${baseURL}/auth/google-login`;
  };

  return (
    <AuthFormLayout
      title="Welcome!"
      onSubmit={handleSignup}
      message={message}
      subTitle="Please enter your details here"
    >
      <AuthInputLayout
        type="text"
        name="username"
        value={values.username}
        placeholder="Username"
        onChange={handleChange}
        error={errors.username}
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

      <button
        className="w-full h-11 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 bg-[#FFE083] hover:bg-[#ffd24d] cursor-pointer duration-200"
        type="submit"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Signup"}
      </button>
      <p className="flex justify-center text-gray-500 mt-4 ">
        Or continue with{" "}
      </p>

      <button
        onClick={googleAuth}
        className="w-full h-11 border-2 border-gray-800 rounded-md bg-[#FF5842] text-white shadow-[4px_4px_0_0_#323232] font-semibold  flex items-center justify-center gap-2 cursor-pointer"
      >
        <span className="mr-2">
          <i className="fa-brands fa-google"></i>
        </span>
        Google
      </button>
      <div>
        <span className="mr-2">Already Registered?</span>
        <Link className="text-[#1bb169] " to="/login">
          Login Now
        </Link>
      </div>
    </AuthFormLayout>
  );
};

export default Signup;
