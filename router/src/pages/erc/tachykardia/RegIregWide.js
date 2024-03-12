import { NavLink } from "react-router-dom";

const RegIregWide = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/ventrictachy">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-44">
          Pravidelný rytmus
        </button>
      </NavLink>
      <NavLink to="/fipwide">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-44">
          Nepravidelný rytmus
        </button>
      </NavLink>

      <NavLink to="/qrswidth">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default RegIregWide;
