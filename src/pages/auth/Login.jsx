import useAuthFormState from "@/hooks/useAuthFormState";
import AuthFormLayout from "@/layout/AuthFormLayout";
import AuthInputLayout, {
  AuthPasswordInputLayout,
} from "@/layout/AuthInputLayout";
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

  const googleAuth = () => {
    window.location.href = `${baseURL}/auth/google-login`;
  };

  return (
    <>
      <AuthFormLayout
        onSubmit={handleLogin}
        title="Welcome Back!"
        subTitle="Please enter your details here"
        message={message}
      >
        <AuthInputLayout
          type="text"
          name="username"
          value={values.username}
          placeholder="Email or Username"
          onChange={handleChange}
          error={errors.username || errors.identifier}
        />

        <AuthPasswordInputLayout
          type="password"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          error={errors.password}
        />
        <div className="flex w-full">
          <Link
            to="/forgot-password"
            className="ml-auto text-sm hover:underline text-gray-600"
          >
            Forgot password?
          </Link>
        </div>

        {message && (
          <div className="text-sm text-center text-red-600 w-full">
            {message}
          </div>
        )}

        <button className="btn bg-[#1FCC79]" type="submit" disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </button>
        <p className="flex justify-center text-gray-500">Or continue with </p>

        <button onClick={googleAuth} className="btn mb-2 bg-[#FF5842]">
          <span className="mr-2">
            <i className="fa-brands fa-google"></i>
          </span>
          Google
        </button>

        <div>
          <span className="mr-2">Not Registered Yet?</span>
          <Link to="/signup" className=" text-[#1bb169] ">
            Sign Up
          </Link>
        </div>
      </AuthFormLayout>
      {/* <p>s
          Delete Account
          <Link to="/delete-account"> Delete Account</Link>
        </p>
        <p>
          Change Password
          <Link to="/change-password"> Change Password</Link> */}
      {/* </p> */}
      {/* <button type="button" onClick={logout}>
        Logout
      </button>
      <button type="button" onClick={user}>
        User
      </button> */}
    </>
  );
};

export default Login;
