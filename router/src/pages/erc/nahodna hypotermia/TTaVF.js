import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const TTaVF = () => {
  return (
    <div className="div flex flex-col space-y-1 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-1 rounded-md text-white ring ring-red-500 text-center">
        Teplota telesného jadra menej ako 35 °C alebo studený <br />
        na dotyk
      </button>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowDown />
      </div>

      <button className="button bg-blue-700 p-2 rounded-md text-white ring ring-red-500 text-cneter">
        Vitálne funkcie zachované?
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/poruchved">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20 my-4">
            Ano
          </button>
        </NavLink>

        <NavLink to="/">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20 my-4">
            Nie
          </button>
        </NavLink>
      </div>

      <NavLink to="/erc">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default TTaVF;
