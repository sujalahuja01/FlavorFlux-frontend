import useAuthFormState from "@/hooks/useAuthFormState";
import AuthFormLayout from "@/layout/AuthFormLayout";
import AuthInputLayout from "@/layout/AuthInputLayout";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import { runValidation } from "@/utils/formUtils";
import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { form, status, runFlow } = useAuthFormState({
    email: "",
  });

  const { values, errors, setErrors, handleChange } = form;
  const { message, setmessage, loading } = status;

  const handleForgotPass = async (e) => {
    e.preventDefault();

    if (!runValidation(values, "forgot", setErrors, setmessage)) return;

    await runFlow({
      requestFn: () =>
        authRequest(`${baseURL}/auth/forgot_password`, "POST", values),
      resetValue: { email: "" },
      // redirectTo:""
    });
  };

  return (
    <AuthFormLayout
      onSubmit={handleForgotPass}
      title="Forgot Password"
      message={message}
      subTitle=" Enter your email and we'll send you a link to get back into your account"
    >
      <AuthInputLayout
        type="email"
        name="email"
        value={values.email}
        placeholder="Email"
        onChange={handleChange}
        error={errors.email}
      />
      {message && (
        <div className="text-sm text-center text-red-600 w-full">{message}</div>
      )}
      <button
        className="w-full h-11 border-2 border-gray-800 rounded-md shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 bg-[#FFE083] hover:bg-[#ffd24d] cursor-pointer duration-200"
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending reset link..." : "Send Reset Email"}
      </button>
      <p className="flex justify-center text-gray-500">OR</p>
      <Link to="/signup" className="hover:underline ">
        Create new account
      </Link>

      <Link
        to="/login"
        className="pt-2 text-center w-full h-11 border-2 border-gray-800 rounded-md
      shadow-[4px_4px_0_0_#323232] font-semibold text-gray-800 bg-[#FF5842]
      cursor-pointer duration-200"
      >
        Back to login
      </Link>
    </AuthFormLayout>
  );
};

export default ForgotPassword;
