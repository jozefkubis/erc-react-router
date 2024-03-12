import { NavLink } from "react-router-dom";

const PALSrytmus = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <button className="button bg-white p-1 rounded-md text-blue-700 ring ring-blue-700 w-52">
        Zhodnoťte rytmus
      </button>

      <NavLink to="/vyboj">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Defibrilovateľný
        </button>
      </NavLink>

      <NavLink to="/palsadrenalin">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Nedefibrilovateľný
        </button>
      </NavLink>

      <NavLink to="/pals">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default PALSrytmus;
