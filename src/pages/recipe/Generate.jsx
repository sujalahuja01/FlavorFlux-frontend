import useAuthFormState from "@/hooks/useAuthFormState";
import AuthInputLayout from "@/layout/AuthInputLayout";
import RecipeInputlayout from "@/layout/RecipeInputlayout";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import React from "react";
import { Link } from "react-router-dom";

const Generate = () => {
  const { form, status, runFlow } = useAuthFormState(
    {
      ingredients: "",
      cuisine: "",
    },
    { clearMessageOnChange: false }
  );

  const { values, errors, setErrors, handleChange } = form;
  const { message, setMessage, loading, setLoading } = status;

  const handleRecipeGeneration = async (e) => {
    e.preventDefault();

    if (!values.ingredients) {
      setErrors({ ingredients: "Type the ingredients " });
      return;
    }

    await runFlow({
      requestFn: () =>
        authRequest(`${baseURL}/recipes/generate`, "POST", {
          ...values,
          ingredients: values.ingredients
            .split(",")
            .map((i) => i.trim())
            .filter(Boolean),
        }),
      // redirectTo:""
    });
  };

  const refreshRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await authRequest(`${baseURL}/recipes/refresh`, "POST");
      setMessage(res.data.message);
    } catch {
      setMessage("Failed to refersh recipe");
    } finally {
      setLoading(false);
    }
  };

  const saveRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await authRequest(`${baseURL}/recipes/save`, "POST", {
        message,
      });

      if (res.success) {
        setMessage(res.data.message);
      } else {
        setMessage(res.error);
      }
    } catch {
      setMessage("Failed to save recipe");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecipeInputlayout
      title="Generate Recipe"
      handler={handleRecipeGeneration}
      message={message}
    >
      <AuthInputLayout
        type="text"
        name="ingredients"
        placeholder="Type your Ingredients"
        value={values.ingredients || ""}
        onChange={handleChange}
        error={errors.ingredients}
      />
      <AuthInputLayout
        type="text"
        name="cuisine"
        placeholder="Cuisine"
        value={values.cuisine || ""}
        onChange={handleChange}
        error={errors.cuisine}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Generating" : "generate"}
      </button>

      <button onClick={refreshRecipe} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh Recipe"}
      </button>

      <button onClick={saveRecipe} disabled={loading}>
        {loading ? "Save" : "Save"}
      </button>
      <br />
      <p>
        Change Password
        <Link to="/favourites"> favourites</Link>
      </p>
    </RecipeInputlayout>
  );
};
export default Generate;
