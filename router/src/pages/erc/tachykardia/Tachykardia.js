import { NavLink } from "react-router-dom";

const Tachykardia = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
        <ul>
          <li className="font-bold">ZHODNOŤTE pacienta ABCDE prístupom</li>
          <li>Podajte kyslík pri SpO2 menej 94 % a zaistite IV prístup</li>
          <li>Monitorujte EKG, TK, SpO2. Urobte 12-zvodové EKG</li>
          <li>
            Identifikujte a liečte reverzibilné príčiny (napr. elektrolytové
            abnormality, hypovolémiu)
          </li>
        </ul>
      </button>

      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
        <ol>
          <li className="font-bold">Život ohrozujúce príznaky?</li>
          <li>Šok</li>
          <li>Synkopa</li>
          <li>Ischémia myokardu</li>
          <li>Závažné zlyhávanie srdca</li>
        </ol>
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/unstable">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">
            Ano
          </button>
        </NavLink>

        <NavLink to="/qrswidth">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">
            Nie
          </button>
        </NavLink>
      </div>
      
      <NavLink to="/erc">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default Tachykardia;
