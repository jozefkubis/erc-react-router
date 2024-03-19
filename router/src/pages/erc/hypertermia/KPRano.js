import { NavLink } from "react-router-dom";

import React from "react";
const KPRano = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/kprnie">
        <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-center w-48">
          Univerzálny ALS <br />
          algoritmus
        </button>
      </NavLink>

      <NavLink to="/vyzadujekpr">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default KPRano;
