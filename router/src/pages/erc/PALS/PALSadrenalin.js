import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const PALSadrenalin = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <NavLink
        to="/palsrytmus"
        className="flex flex-col space-y-1 justify-center items-center"
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Ihneď podajte adrenalín
          <br />
          IV/IO
          <br />
          10 mcg/kg (max 1mg)
        </button>

        <div className="mx-auto text-blue-700 text-4xl">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Okamžite pokračujte
          <br />
          v KPR 2 min
          <br />
          Minimalizujte prerušenia
        </button>
      </NavLink>

      <NavLink to="/palsrytmus">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default PALSadrenalin;
