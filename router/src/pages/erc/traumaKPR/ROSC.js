import { NavLink } from "react-router-dom";

const ROSC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 p-2 rounded-md text-white ring ring-red-500 text-center w-48 text-2xl">
        ROSC
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/transport">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">
            Ano
          </button>
        </NavLink>

        <NavLink to="/endcpr">
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

export default ROSC;
