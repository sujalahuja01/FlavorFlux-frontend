import useAuthFormState from "@/hooks/useAuthFormState";
import AuthFormLayout from "@/layout/AuthFormLayout";
import AuthInputLayout from "@/layout/AuthInputLayout";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import { runValidation } from "@/utils/formUtils";
import React from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { form, status, runFlow } = useAuthFormState({
    password: "",
    confirmPassword: "",
  });

  const { values, errors, setErrors, handleChange } = form;
  const { message, setMessage, loading } = status;

  const { token } = useParams();

  const handlePassReset = async (e) => {
    e.preventDefault();

    if (!runValidation(values, "resetPassword", setErrors, setMessage)) return;

    await runFlow({
      requestFn: () =>
        authRequest(`${baseURL}/auth/reset_password/${token}`, "POST", values),
      resetValues: { password: "", confirmPassword: "" },
      // redirectTo:""
    });
  };

  return (
    <AuthFormLayout
      title="Reset Password"
      onSubmit={handlePassReset}
      message={message}
    >
      <AuthInputLayout
        type="password"
        name="password"
        placeholder="New Password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />

      <AuthInputLayout
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Resetting..." : "Reset Password"}
      </button>
    </AuthFormLayout>
  );
};

export default ResetPassword;
