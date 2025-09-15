import React from "react";
import { Link } from "react-router-dom";
import { baseURL } from "@/utils/api";
import AuthFormLayout from "@/layout/AuthFormLayout";
import AuthInputLayout from "@/layout/AuthInputLayout";
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

  return (
    <AuthFormLayout title="Signup" onSubmit={handleSignup} message={message}>
      <AuthInputLayout
        type="text"
        name="username"
        value={values.username}
        placeholder="Username"
        onChange={handleChange}
        error={errors.username}
      />

      <AuthInputLayout
        type="email"
        name="email"
        value={values.email}
        placeholder="Email"
        onChange={handleChange}
        error={errors.email}
      />

      <AuthInputLayout
        type="password"
        name="password"
        value={values.password}
        placeholder="Password"
        onChange={handleChange}
        error={errors.password}
      />

      <Link to="/forgot-password">Forgot Password</Link>

      <button type="submit" disabled={loading}>
        {loading ? "Signing Up..." : "Signup"}
      </button>
      <p>
        Already Registered?
        <Link to="/login"> Login Now</Link>
      </p>
    </AuthFormLayout>
  );
};

export default Signup;
