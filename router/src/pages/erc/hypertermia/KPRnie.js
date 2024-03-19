import { NavLink } from "react-router-dom";

const KPRnie = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <div className="flex space-x-4">
        <button className="button bg-white rounded-md text-blue-700 ring ring-blue-700 text-xs p-2">
          Použite <br />
          teplotnú <br />
          sondu
        </button>

        <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-center w-48">
          Teplota telesného <br />
          jadra viac ako 40,5 ºC
        </button>
      </div>

      <div className="anoNie flex space-x-4">
        <NavLink to="/studenavoda">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">
            Ano
          </button>
        </NavLink>

        <NavLink to="/dezorientovany">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">
            Nie
          </button>
        </NavLink>
      </div>

      <button
        className="back-button w-20 bg-amber-700 p-1 rounded-md text-white"
        onClick={goBack}
      >
        Spet
      </button>
    </div>
  );
};

export default KPRnie;
