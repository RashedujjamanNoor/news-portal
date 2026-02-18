import React from "react";
import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/auth",
    element: <h2>Auth Page</h2>,
  },
  {
    path: "/news",
    element: <h2>News Page</h2>,
  },
  {
    path: "/*",
    element: <h2>404</h2>,
  },
]);
