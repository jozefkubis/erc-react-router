import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const Atropin = () => {
  return (
    <div className="div flex flex-col space-y-2 justify-center items-center">
      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-40">
        Atropín 0,5 mg IV
      </button>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowDown/>
      </div>

      <NavLink to="/rizikoasystolie">
        <button className="button bg-blue-700 p-1 mb-4 rounded-md text-white ring ring-red-500 w-40">
          Uspokojivá odpoveď
        </button>
      </NavLink>

      <NavLink to="/adrenalin">
        <button className="button bg-blue-700 p-1 mb-4 rounded-md text-white ring ring-red-500 w-40">
          Neuspokojivá odpoveď
        </button>
      </NavLink>

      <NavLink to="/bradykardia">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default Atropin;
