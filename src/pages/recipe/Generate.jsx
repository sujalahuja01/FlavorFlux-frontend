import IngredientsCount from "@/components/IngredientsCount";
import IngredientsList from "@/components/IngredientsList";
import useAuthFormState from "@/hooks/useAuthFormState";
import AuthInputLayout from "@/layout/AuthInputLayout";
import RecipeInputlayout from "@/layout/RecipeInputlayout";
import { baseURL } from "@/utils/api";
import { authRequest } from "@/utils/authRequest";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Generate = () => {
  const { form, status, runFlow } = useAuthFormState(
    {
      ingredients: [],
      cuisine: "",
    },
    { clearMessageOnChange: false }
  );

  const { values, errors, setErrors, handleChange } = form;
  const { message, setMessage, loading, setLoading } = status;
  const [ingredientInput, setIngredientInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addIngredient = (e) => {
    e.preventDefault();
    if (!ingredientInput.trim()) return;

    form.setValues({
      ...values,
      ingredients: [...values.ingredients, ingredientInput.trim()],
    });

    setIngredientInput("");
    if (errors.ingredients) setErrors({ ...errors, ingredients: "" });
  };

  const handleRecipeGeneration = async (e) => {
    e.preventDefault();

    if (!values.ingredients.length) {
      setErrors({ ingredients: "Type at least one ingredient" });
      return;
    }

    await runFlow({
      requestFn: () =>
        authRequest(`${baseURL}/recipes/generate`, "POST", {
          ...values,
          ingredients: values.ingredients,
        }),
      resetValues: { ingredients: [], cuisine: "" },
      // redirectTo:""
    });
  };

  const refreshRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const prevRecipe = message;
    setMessage("Refreshing");

    try {
      const res = await authRequest(`${baseURL}/recipes/refresh`, "POST");
      if (res.success) {
        setMessage(res.data.message);
      } else {
        setMessage(prevRecipe);
        setErrorMessage(res.error || "Failed to refersh recipe");
      }
    } catch {
      setMessage(prevRecipe);
      setErrorMessage("Unexpected error");
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
        setErrorMessage(res.error || "Failed to save recipe");
      }
    } catch {
      setErrorMessage("Network error while saving recipe");
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
        placeholder="Type an Ingredient"
        value={ingredientInput}
        onChange={(e) => setIngredientInput(e.target.value)}
        error={errors.ingredients}
      />
      <button onClick={addIngredient}> Add ingredient</button>

      <AuthInputLayout
        type="text"
        name="cuisine"
        placeholder="Cuisine"
        value={values.cuisine || ""}
        onChange={handleChange}
        error={errors.cuisine}
      />

      {!message && <IngredientsCount ingredients={values.ingredients} />}
      {values.ingredients.length > 0 && (
        <IngredientsList
          ingredients={values.ingredients}
          generate="submit"
          loader={loading}
        />
      )}

      {message && !errorMessage && (
        <div>
          <button onClick={refreshRecipe} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh Recipe"}
          </button>

          <button onClick={saveRecipe} disabled={loading}>
            {loading ? "Save" : "Save"}
          </button>
        </div>
      )}

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <p>
        Favourites
        <Link to="/favourites">Favourites Recipes</Link>
      </p>
    </RecipeInputlayout>
  );
};
export default Generate;
