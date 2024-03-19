import { NavLink } from "react-router-dom";

const Dezorientovany = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-center w-48">
        Teplota telesného jadra <br />
        menej ako 40,5 ºC a zmätený/ <br />
        dezorientovaný
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/studenavoda">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">
            Ano
          </button>
        </NavLink>

        <NavLink to="/sodikvkrvi">
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

export default Dezorientovany;
