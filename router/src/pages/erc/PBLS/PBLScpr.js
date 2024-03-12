import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const PBLScpr = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-1">
      <button className="button bg-white p-1 rounded-md text-blue-700 ring ring-blue-700 w-52">
        Pokiaľ nie sú jasné znaky života
      </button>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowDown />
      </div>

      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
        15 stlačení hrudníka
      </button>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowDown />
      </div>

      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52 text-center">
        2 vdychy
        <br /> ďalej striedajte
        <br /> 15 stlačení : 2 vdychy
      </button>

      <NavLink to="/pblsnotbreathing">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white mt-3">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default PBLScpr;
