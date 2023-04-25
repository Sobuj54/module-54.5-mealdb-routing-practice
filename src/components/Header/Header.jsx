import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className=" w-4/5 mx-auto text-white font-bold border- mt-4 bg-green-500 p-4 flex gap-8 justify-center rounded">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/meals">Meals</ActiveLink>
    </nav>
  );
};

export default Header;
