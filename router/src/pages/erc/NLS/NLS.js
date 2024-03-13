import { NavLink } from "react-router-dom";
import React from "react";

const NLS = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-1">
      <NavLink to="/firstminute">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52 text-center">
          Prvých 60 sekúnd
        </button>
      </NavLink>

      <NavLink to="/erc">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white mt-3">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default NLS;
