import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const PBLSnotBreathing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-5">
      <NavLink
        to="/pblscpr"
        className="flex flex-col space-y-1 justify-center items-center"
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Nedýcha alebo nedýcha normálne
        </button>

        <div className="mx-auto text-blue-700 text-4xl">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          5 záchranných vdychov
        </button>
      </NavLink>

      <NavLink to="/pbls">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default PBLSnotBreathing;
