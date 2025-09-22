import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import DeleteUser from "./pages/auth/DeleteUser";
import ChangePassword from "./pages/auth/ChangePassword";
import Generate from "./pages/recipe/Generate";
import RecipeRenderer from "./components/RecipeRenderer";
import Favourites from "./pages/recipe/Favourites";
import NotFound from "./components/NotFound";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Signup /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    { path: "forgot-password", element: <ForgotPassword /> },
    { path: "reset-password/:token", element: <ResetPassword /> },
    { path: "delete-account", element: <DeleteUser /> },
    { path: "change-password", element: <ChangePassword /> },
    { path: "generate", element: <Generate /> },
    { path: "favourites", element: <Favourites /> },
    { path: "recipes", element: <RecipeRenderer /> },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
