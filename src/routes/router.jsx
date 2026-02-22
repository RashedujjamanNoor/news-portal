import React from "react";
import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../layouts/HomeLayout";
import { Home } from "../pages/Home";
import { CategoryNews } from "../pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
    ],
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
