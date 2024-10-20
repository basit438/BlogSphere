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
import Layout from "./Screens/layout/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/create",
          element: <Blogcreate />,
        },
       {
        path: "/",
        element: <Bloglist />,
       }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <BlogContextProvider>
        <RouterProvider router={router} />
      </BlogContextProvider>
    </>
  );
}

export default App;
