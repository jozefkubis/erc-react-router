import { NavLink } from "react-router-dom";

const TraumaPostup = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <h2 className="text-blue-800 font-bold">ZAČNITE KPR</h2>

      <NavLink to="/rosc">
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left px-4">
          <ol>
            <p className="font-bold">
              Simultánne liečte reverzibilné príčiny (
              <span className="text-orange-500">H</span>ypoxémia{" "}
              <span className="text-orange-500">H</span>ypovolémia
              <span className="text-orange-500">T</span>enzný pneumotorax{" "}
              <span className="text-orange-500">T</span>amponáda):
            </p>
            <li>1. Kontrolujte katastrofické vonkajšie krvácanie</li>
            <li>
              2. Zabezpečte priechodnosť dýchacích ciest a maximalizujte
              oxygenáciu
            </li>
            <li>3. Bilaterálna dekompresia hrudníka (torakostómie)</li>
            <div className=" rounded-md ring ring-white">
              <li>4. Uvoľnite tamponádu (penetrujúce poranenie hrudníka)</li>
              <li>
                5.Kontrola proximálnej cievy (REBOA/manuálna kompresia aorty
              </li>
            </div>

            <li>6. Fixácia panvy</li>
            <li>7.Krvné produkty / masívny transfúzny protokol</li>
          </ol>
        </button>
      </NavLink>

      <NavLink to="/traumatickypacient">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default TraumaPostup;
