import { NavLink } from "react-router-dom";

const RizikoAsystolie = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
        <ul>
          <li className="font-bold">Riziko asystólie?</li>
          <li>Nedávna asystólia</li>
          <li> Mobitz II AV blok</li>
          <li>Kompletný srdcový blok so širokým QRS</li>
          <li> Komorová pauza viac ako 3 s</li>
        </ul><br />
        <ul>
          <li>Ak nie: <span className="font-bold">Sledujte!</span></li>
        </ul>
      </button>

      <div className="anoNie flex flex-col space-y-4">
        <NavLink to="/adrenalin">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">Ano</button>
        </NavLink>
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white" onClick={goBack}>
          Spet
        </button>
      </div>
    </div>
  );
};

export default RizikoAsystolie;
