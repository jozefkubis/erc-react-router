import { NavLink } from "react-router-dom";

const VentricTachy = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/ekv">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
          <ul>
            <li className="font-bold">Ak VT (alebo neistý rytmus):</li>
            <li>Prokaínamid 10-15 mg/kg IV za 20 min, alebo</li>
            <li> Amiodarón 300mg IV za 10-60 min</li>
          </ul>
          <br />
          <ul>
            <li className="font-bold">
              Ak je známa predchádzajúca SVT s ramienkovou blokádou / aberantným
              vedením:
            </li>
            <li> Liečte ako pravidelnú úzkokomplexovú tachykardiu</li>
          </ul>
        </button>
      </NavLink>

      <NavLink to="/regiregwide">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default VentricTachy;
