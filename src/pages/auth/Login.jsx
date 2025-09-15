import useAuthFormState from "@/hooks/useAuthFormState";
import AuthFormLayout from "@/layout/AuthFormLayout";
import AuthInputLayout from "@/layout/AuthInputLayout";
import { baseURL, fetchOptions } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import { runValidation } from "@/utils/formUtils";
import { Link } from "react-router-dom";

const Login = () => {
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

  const logout = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseURL}/auth/logout`, fetchOptions("POST"));
    const data = await res.json();
    if (res.ok) {
      setMessage(data.message);
    } else {
      setMessage("Network error. Try again later.");
    }
  };

  const user = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseURL}/auth/user`, fetchOptions("GET"));
    const data = await res.json();
    if (res.ok) {
      setMessage(data.user.name);
    } else {
      setMessage("Network error. Try again later.");
    }
  };

  return (
    <>
      <AuthFormLayout onSubmit={handleLogin} title="Login" message={message}>
        <AuthInputLayout
          type="text"
          name="username"
          value={values.username}
          placeholder="Email or Username"
          onChange={handleChange}
          error={errors.username || errors.identifier}
        />

        <AuthInputLayout
          type="password"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          error={errors.password}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </button>
        <Link to="/forgot-password">Forgot Password</Link>
        <p>
          Not Registered Yet?
          <Link to="/signup"> Register Now</Link>
        </p>
        <p>
          Delete Account
          <Link to="/delete-account"> Delete Account</Link>
        </p>
        <p>
          Change Password
          <Link to="/change-password"> Change Password</Link>
        </p>
      </AuthFormLayout>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <button type="button" onClick={user}>
        User
      </button>
    </>
  );
};

export default Login;
