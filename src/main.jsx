import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import MealDetails from "./components/MealDetails/MealDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "meals",
        element: <Meals></Meals>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
      {
        path: "meal/:mealName",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealName}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
