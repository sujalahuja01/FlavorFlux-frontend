import { Outlet, Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <nav>
        <Link to={"/login"}>Login</Link>
        <br />
        <Link to={"/signup"}>Signup</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
