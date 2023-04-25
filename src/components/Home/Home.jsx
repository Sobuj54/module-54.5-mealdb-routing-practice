import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1 className="text-3xl mt-7 font-medium w-4/5 mx-auto text-center">
        Go to Meals to find food .
      </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
