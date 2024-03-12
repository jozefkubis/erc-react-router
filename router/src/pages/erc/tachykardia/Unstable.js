import { NavLink } from "react-router-dom";

const Unstable = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
        <ul>
          <li className="font-bold">Synchronizovaný výboj do 3 pokusov</li>
          <li> Sedácia ALEBO anestézia, ak je pri vedomí</li><br />
          <li className="font-bold italic">Ak neúčinné:</li>
          <li>
            Amiodarón 300mg IV za 10-20 min, alebo prokaínamid 10-15 mg/kg za 20
            min;
          </li>
          <li> Opakujte synchronizovaný výboj</li>
        </ul>
      </button>
      <br />

      <NavLink to="/tachykardia">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default Unstable;
