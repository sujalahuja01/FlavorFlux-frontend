import useAuthFormState from "@/hooks/useAuthFormState";
import AuthFormLayout from "@/layout/AuthFormLayout";
import AuthInputLayout from "@/layout/AuthInputLayout";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import { runValidation } from "@/utils/formUtils";
import React from "react";

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
    >
      <AuthInputLayout
        type="email"
        name="email"
        value={values.email}
        placeholder="Email"
        onChange={handleChange}
        error={errors.email}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending reset link..." : "Send Reset Email"}
      </button>
    </AuthFormLayout>
  );
};

export default ForgotPassword;
