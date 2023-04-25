import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  //   console.log(meal);
  return (
    <div className="border-2 border-green-400 p-5 rounded-md">
      <h3 className="text-3xl font-semibold mt-3">Dish : {meal.strCategory}</h3>
      <Link to={`/meal/${meal.strCategory}`}>
        <button className="border-2 border-indigo-400 font-semibold rounded p-2">
          Meal Info
        </button>
      </Link>
    </div>
  );
};

export default Meal;
