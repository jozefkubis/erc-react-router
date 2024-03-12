import { NavLink } from "react-router-dom";

const FiPwide = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button  bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
        <ul>
          <li className="font-bold">Medzi možnosti patrí:</li>
          <li>
            FiP s ramienkovou blokádou liečte ako úzkomplexovú tachykardiu
          </li>
          <li>
            Pri torsades de pointes podajte 2 g magnézia v priebehu 10 minút
          </li>
        </ul>
      </button>

      <NavLink to="/regiregwide">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default FiPwide;
