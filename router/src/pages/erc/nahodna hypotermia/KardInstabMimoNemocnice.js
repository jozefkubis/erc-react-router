import { NavLink } from "react-router-dom";

const KardInstabMimoNemocnice = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 px-4 py-2 rounded-md text-white ring ring-red-500 text-left w-68">
        <ol>
          <span>Kardiálna instabilita mimo nemocnice</span>
          <li>• STK menej 90 mmHg (2)</li>
          <li>• Kardiovaskulárna instabilita</li>
          <li>
            • Teplota telesného jadra menej 32 °C u starých <br />
            a polymorbídnych alebo menej ako 30 °C u mladých <br />a zdravých{" "}
          </li>
        </ol>
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/transport2">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-40">
            VŠETKY NIE
          </button>
        </NavLink>

        <NavLink to="/transportecls">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-40">
            VŠETKY ÁNO
          </button>
        </NavLink>
      </div>

      <NavLink to="/poruchved">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default KardInstabMimoNemocnice;
