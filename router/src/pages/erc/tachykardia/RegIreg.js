import { NavLink } from "react-router-dom";

const RegIreg = () => {
  return (
    <div className="div flex flex-col justify-center items-center">
      <NavLink to="/vagus">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-40">
          Pravidelný rytmus
        </button>
      </NavLink>
      <br />
      <NavLink to="/fip">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-40">
          Nepravidelný rytmus
        </button>
      </NavLink>
      <br />

      <NavLink to="/qrswidth">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default RegIreg;
