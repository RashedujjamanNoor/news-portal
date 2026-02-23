import React from "react";
import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../layouts/HomeLayout";
import { Home } from "../pages/Home";
import { CategoryNews } from "../pages/CategoryNews";
import { LoginPage } from "../pages/LoginPage";
import { Register } from "../pages/Register";

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
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/*",
    element: <h2>404</h2>,
  },
]);
