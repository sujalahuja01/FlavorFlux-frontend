import useAuthFormState from "@/hooks/useAuthFormState";
import AuthFormLayout from "@/layout/AuthFormLayout";
import AuthInputLayout, {
  AuthPasswordInputLayout,
} from "@/layout/AuthInputLayout";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import { runValidation } from "@/utils/formUtils";

import React, { useEffect, useState } from "react";

const ChangePassword = () => {
  const { form, status, runFlow } = useAuthFormState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  const [user, setUser] = useState(null);
  const { values, errors, setErrors, handleChange } = form;
  const { message, setMessage, loading } = status;

  useEffect(() => {
    authRequest(`${baseURL}/auth/user`, "GET").then((res) => {
      if (res.success) setUser(res.data.user);
    });
  }, []);

  const handlePassChange = async (e) => {
    e.preventDefault();

    const formType = user.google_login ? "resetPassword" : "changePassword";

    if (!runValidation(values, formType, setErrors, setMessage)) return;

    await runFlow({
      requestFn: () =>
        authRequest(`${baseURL}/auth/change_password`, "POST", values),
      resetValues: { currentPassword: "", password: "", confirmPassword: "" },
      // redirectTo:""
    });
  };

  if (!user) return <p>Loading...</p>;

  return (
    <AuthFormLayout
      title="Change Password"
      onSubmit={handlePassChange}
      message={message}
    >
      {!user.google_login && (
        <AuthPasswordInputLayout
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          value={values.currentPassword}
          onChange={handleChange}
          error={errors.currentPassword}
        />
      )}

      <AuthPasswordInputLayout
        type="password"
        name="password"
        placeholder="New Password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />
      <AuthPasswordInputLayout
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Changing... " : "change Password"}
      </button>
    </AuthFormLayout>
  );
};

export default ChangePassword;
