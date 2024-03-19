import { NavLink } from "react-router-dom";

const CasJeKluc = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/vyzadujekpr">
        <button className="button bg-white rounded-md text-blue-700 ring ring-blue-700 text-xl p-4 text-left">
          ČAS JE KĽÚČOVÝ: PRÍSTUP SCHLADIŤ A UTEKAŤ <br />
          • Najprv schlaďte, potom transportujte do nemocnice
          <br />
          • Okamžité chladenie
          <br />• Rýchlo schlaďte na menej ako 39 °C pokiaľ symptómy vymiznú
        </button>
      </NavLink>

      <button
        onClick={goBack}
        className="back-button w-20 bg-amber-700 p-1 rounded-md text-white"
      >
        Spet
      </button>
    </div>
  );
};

export default CasJeKluc;
