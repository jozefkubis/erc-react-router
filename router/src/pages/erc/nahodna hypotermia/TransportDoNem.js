import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const TransportDoNem = () => {
  return (
    <div className="div flex flex-col space-y-1 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-1 rounded-md text-white ring ring-red-500 text-center">
        Transport do najbližšej <br />
        nemocnice, ak je zranený; <br />
        zvážte liečbu na mieste alebo <br />
        v nemocnici, ak nie je zranený <br />
      </button>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowDown />
      </div>

      <button className="button bg-blue-700 p-2 rounded-md text-white ring ring-red-500 text-cneter">
        <ul>
          <span>HT I (3)</span>
          <li>• Teplé prostredie a suché oblečenie</li>
          <li>• Teplé sladené nápoje</li>
          <li>• Aktívny pohyb</li>
        </ul>
      </button>

      <NavLink to="/poruchved">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white mt-4">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default TransportDoNem;
