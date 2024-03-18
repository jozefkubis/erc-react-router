import { NavLink } from "react-router-dom";

const TransportECLS = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/ht2aleboht3">
        <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-center w-48">
          Transport do nemocnice <br />s ECLS (4)
        </button>
      </NavLink>

      <NavLink to="/kardinstabmimonemocnice">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default TransportECLS;
