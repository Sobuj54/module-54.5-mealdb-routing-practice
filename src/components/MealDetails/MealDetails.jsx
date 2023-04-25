import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowDetails from "../ShowDetails/ShowDetails";

const MealDetails = () => {
  const mealDetails = useLoaderData();
  console.log(mealDetails.meals);
  return (
    <div className="md:grid grid-cols-3 gap-4 w-4/5 mx-auto mt-3">
      {mealDetails.meals.map((meal) => (
        <ShowDetails key={meal.idMeal} meal={meal}></ShowDetails>
      ))}
    </div>
  );
};

export default MealDetails;
