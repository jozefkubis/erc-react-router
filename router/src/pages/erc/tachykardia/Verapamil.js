import { NavLink } from "react-router-dom";

const Verapamil = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/ekv">
        <button className="button  bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
          <ul>
            <li className="font-bold italic">Ak neúčinné:</li>
            <li>Verapamil alebo beta-blokátor</li>
          </ul>
        </button>
      </NavLink>
      <br />

      <NavLink to="/adenosin">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default Verapamil;
