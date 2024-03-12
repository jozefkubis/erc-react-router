import { NavLink } from "react-router-dom";

const Adenosin = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/verapamil">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
          <ul>
            <li className="font-bold italic">Ak neúčinné:</li>
            <li className="font-bold ">Adenozín (ak nie je preexcitácia)</li>
            <li> 6mg rýchly IV bolus;</li>
            <li> Ak neúčinné, podajte 12mg</li>
            <li> Ak neúčinné, podajte IV 18mg</li>
          </ul>
        </button>
      </NavLink>
      <br />

      <NavLink to="/vagus">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default Adenosin;
