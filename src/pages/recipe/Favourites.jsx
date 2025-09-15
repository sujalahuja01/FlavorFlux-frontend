import useAuthFormState from "@/hooks/useAuthFormState";
import AuthFormLayout from "@/layout/AuthFormLayout";
import React from "react";

const Favourites = () => {
  const { form, status, runFlow } = useAuthFormState({
    ingredients: "",
    cuisine: "",
  });

  const { values, errorrs, setErrors, handleChange } = form;
  const { message, setMessage, loading } = status;

  const handleRecipeGeneration = async () => {};

  return <AuthFormLayout></AuthFormLayout>;
};

export default Favourites;
