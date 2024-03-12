import { NavLink } from "react-router-dom";

const QRSwidth = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/regireg">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          QRS úzke (menej ako 0.12 s)
        </button>
      </NavLink>
      <NavLink to="/regiregwide">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          QRS siroké (viac ako 0.12 s)
        </button>
      </NavLink>

      <NavLink to="/tachykardia">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default QRSwidth;
