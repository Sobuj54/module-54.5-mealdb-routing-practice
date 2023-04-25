import React from "react";

const ShowDetails = ({ meal }) => {
  const { strMeal, strArea, strInstructions, strMealThumb } = meal;
  return (
    <div>
      <img src={strMealThumb} className="rounded-md" alt="" />
      <h2 className="text-xl mt-2 font-semibold">Course : {strMeal}</h2>
      <h3 className="text-lg font-medium mt-2">Area : {strArea}</h3>
      <p className="text-base font-normal">Instructions : {strInstructions}</p>
    </div>
  );
};

export default ShowDetails;
