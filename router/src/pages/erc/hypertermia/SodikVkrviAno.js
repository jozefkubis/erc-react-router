import { NavLink } from "react-router-dom";

const SodikVkrviAno = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/">
        <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-center w-64">
          Pri poruche vedomia začnite podávať <br />
          3% NaCl IV 100ml bolus v 10 min <br />
          intervaloch, iba druhý a tretí bolus, <br />
          ak je potrebný. Pri normálnom stave <br />
          vedomia podajte sodík perorálne 
        </button>
      </NavLink>

      <button
        className="back-button w-20 bg-amber-700 p-1 rounded-md text-white"
        onClick={goBack}
      >
        Spet
      </button>
    </div>
  );
};

export default SodikVkrviAno;
