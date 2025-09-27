import AuthFormLayout from "@/layout/AuthFormLayout";
import { baseURL } from "@/utils/api";
import React from "react";
import { authRequest } from "@/utils/authRequest";
import AuthInputLayout, {
  AuthPasswordInputLayout,
} from "@/layout/AuthInputLayout";
import { runValidation } from "@/utils/formUtils";
import useAuthFormState from "@/hooks/useAuthFormState";

const DeleteUser = () => {
  const { form, status, runFlow } = useAuthFormState({
    password: "",
  });

  const { values, errors, setErrors, handleChange } = form;
  const { message, setMessage, loading } = status;

  const handleDelete = async (e) => {
    e.preventDefault();

    // if (!runValidation(values, "delete", setErrors, setMessage)) return;

    await runFlow({
      requestFn: () => authRequest(`${baseURL}/auth/delete`, "DELETE", values),
      resetValues: { password: "" },
      redirectTo: "/signup",
    });
  };

  return (
    <AuthFormLayout
      onSubmit={handleDelete}
      message={message}
      title="Delete Account"
    >
      <AuthPasswordInputLayout
        type="password"
        name="password"
        value={values.password}
        placeholder="Password"
        onChange={handleChange}
        error={errors.password}
      />

      {message && (
        <div className="text-sm text-center text-red-600 w-full">{message}</div>
      )}

      <button
        className="btn mt-4 bg-[#FF5842]"
        type="submit"
        disabled={loading}
      >
        {loading ? "Deleting Account..." : "Delete Account"}
      </button>
    </AuthFormLayout>
  );
};

export default DeleteUser;
