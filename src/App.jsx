import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Bloglist from "./Screens/BlogList/Bloglist";
import Blogcreate from "./Screens/BlogCreate/Blogcreate";
import BlogContextProvider from "./context/BlogContext";
import { BlogContext } from "./context/BlogContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Bloglist />,
    },
    {
      path: "/create",
      element: <Blogcreate />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <BlogContextProvider value={{}}>
        <RouterProvider router={router} />
      </BlogContextProvider>
    </>
  );
}

export default App;
