import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const FirstMinute = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-1 text-xs">
      <NavLink
        to=""
        className="flex flex-col justify-center items-center space-y-1"
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60">
          Pôrod <br />
          Ak je to možné odložte podviazanie pupočníka
        </button>

        <div className="mx-auto text-blue-700 text-xs">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60">
          Zapnite časovač alebo zaznamenajte čas <br />
          Osušte/zabaľte, stimulujte, <br />
          udržujte v teple
        </button>

        <div className="mx-auto text-blue-700 text-xs">
          <ImArrowDown />
        </div>

        <button className="button bg-white p-1 rounded-md text-blue-700 ring ring-blue-700 w-60">
          Zhodnoťte tonus, dýchanie, <br />
          frekvenciu srdca
        </button>

        <div className="mx-auto text-blue-700 text-xs">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60 text-center">
          Pri nedostatočnom dýchaní: <br />
          Spriechodnite dýchacie cesty <br />U predčasne narodených - zvážte
          CPAP
        </button>

        <div className="mx-auto text-blue-700 text-xs">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60 text-center">
          Ak nedýchajú alebo sú prítomné <br />
          lapavé dychy: <br />
          5 vdychov (30cm H 2O) <br />
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
