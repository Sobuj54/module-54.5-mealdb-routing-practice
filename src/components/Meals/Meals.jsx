import { list } from "postcss";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const meals = useLoaderData();
  return (
    <div className="w-4/5 mx-auto mt-4 md:grid grid-cols-3 gap-3">
      {meals.categories.map((meal) => (
        <Meal key={meal.idCategory} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default Meals;
