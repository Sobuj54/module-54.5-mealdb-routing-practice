import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" w-2/4 mx-auto text-white font-bold text-center border- mt-4 bg-cyan-400 p-4">
      <Link to="/">Home</Link>
      <Link to="/meals" className="ml-6">
        Meals
      </Link>
    </nav>
  );
};

export default Header;
