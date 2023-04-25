import React from "react";
import { useNavigate } from "react-router-dom";

const ShowDetails = ({ meal }) => {
  const { strMeal, strArea, strInstructions, strMealThumb } = meal;

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="mt-4">
      <img src={strMealThumb} className="rounded-md" alt="" />
      <h2 className="text-xl mt-2 font-semibold">Course : {strMeal}</h2>
      <h3 className="text-lg font-medium mt-2">Area : {strArea}</h3>
      <p className="text-base font-normal relative">
        Instructions : {strInstructions}...
      </p>
      <button
        onClick={goBack}
        className="text-xl font-semibold border-2 rounded border-green-600 p-3 w-full  mt-4 hover:bg-sky-500 h hover:text-white duration-500">
        Previous
      </button>
    </div>
  );
};

export default ShowDetails;
