import { NavLink } from "react-router-dom";

const Vagus = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/adenosin">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-40">
          Vagové manévre
        </button>
      </NavLink>
      <br />

      <NavLink to="/regireg">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default Vagus;
