import { NavLink } from "react-router-dom";

const FiP = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button  bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
        <ul>
          <li className="font-bold">Pravdepodobne fibrilácia predsiení:</li>
          <li>Kontrolujte frekvenciu beta-blokátorom alebo diltiazemom</li>
          <li>Pri zlyhávaní srdca zvážte digoxín alebo amiodarón</li>
          <li>Antikoagulujte, ak je doba trvania viac ako 48 h</li>
        </ul>
      </button>
      <br />

      <NavLink to="/regireg">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default FiP;
