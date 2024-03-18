import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const MultiorgZlyhanie = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-1 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-left w-66">
        <span className="font-bold">HT IV (3)</span> <br />
        • Zohrejte s použitím ECLS <br />
        • Ak ECLS nie je dostupné do 6 hod, KPR a <br />
        ohrievanie bez ECLS v periférnej nemocnici
        <br />• Ohrejte na teplotu jadra ≥32 °C
      </button>

      <p className="text-blue-700 text-xs">Ak kardiálna instabilita vyriešená</p>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowDown />
      </div>

      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-left w-66">
        • Pripravte sa na multiorgánové zlyhávanie <br />
        a potrebu ECLS podpory <br />
        • Poresuscitačná starostlivosť
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/ukonceniekpr">
          <button className="ano-nie-button bg-blue-700 p-1 px-3 rounded-md text-white ring ring-red-500 w-34 my-4">
            Ak bez ROSC
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

export default MultiorgZlyhanie;
