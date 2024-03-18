import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const PrognostikaciaNaBenefit = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-1 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-center w-64">
        Transport do nemocnice s ECLS (4); <br />
        NEUKONČUJTE KPR
      </button>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowDown />
      </div>

      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-left w-66">
        <span className="font-bold">
          Zvážte prognostikáciu na stanovenie <br />
          benefitu ECLS (6)
          <br />
        </span>
        • HOPE pravdepodobnosť prežitia ≥10
        <br />• ICE skóre menej ako 12
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/multiorgzlyhanie">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-34 my-4">
            AKÉKOĽVEK ÁNO
          </button>
        </NavLink>

        <NavLink to="/ukonceniekpr">
          <button className="ano-nie-button bg-blue-700 p-1 px-3 rounded-md text-white ring ring-red-500 w-34 my-4">
            AKÉKOĽVEK NIE
          </button>
        </NavLink>
      </div>

      <button
        className="back-button w-20 bg-amber-700 p-1 rounded-md text-white"
        onClick={goBack}
      >
        Spet
      </button>
    </div>
  );
};

export default PrognostikaciaNaBenefit;
