import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const FirstMinute = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-1 text-xs">
      <NavLink
        to="/afterfirstminute"
        className="flex flex-col justify-center items-center space-y-1"
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60">
          <span className="font-bold">Pôrod</span> <br />
          Ak je to možné odložte podviazanie pupočníka
        </button>

        <div className="mx-auto text-blue-700 text-xs">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60">
          Zapnite časovač alebo zaznamenajte čas <br />
          <span className="font-bold">Osušte/zabaľte, stimulujte,</span> <br />
          <span className="font-bold">udržujte v teple</span>
        </button>

        <div className="mx-auto text-blue-700 text-xs">
          <ImArrowDown />
        </div>

        <button className="button bg-white p-1 rounded-md text-blue-700 ring ring-blue-700 w-60">
          <span className="font-bold">Zhodnoťte tonus, dýchanie,</span> <br />
          <span className="font-bold">frekvenciu srdca</span>
        </button>

        <div className="mx-auto text-blue-700 text-xs">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60 text-center">
          Pri nedostatočnom dýchaní: <br />
          <span className="font-bold">Spriechodnite dýchacie cesty</span> <br />
          U predčasne narodených - zvážte CPAP
        </button>

        <div className="mx-auto text-blue-700 text-xs">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60 text-center">
          <span className="font-bold">Ak nedýchajú alebo sú prítomné</span>{" "}
          <br />
          <span className="font-bold">lapavé dychy:</span> <br />
          <span className="font-bold">5 vdychov (30cm H 2O)</span> <br />
          Monitorujte SpO 2 +/-EKG
        </button>
      </NavLink>

      <NavLink to="/nls">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white mt-3">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default FirstMinute;
