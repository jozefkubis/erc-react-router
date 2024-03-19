import { NavLink } from "react-router-dom";

const SodikVkrvi = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-center w-48">
        Sodík v krvi <br />
        menej ako 130 mmol/L
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/sodikvkrviano">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">
            Ano
          </button>
        </NavLink>

        <NavLink to="/dehydratovany">
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

export default SodikVkrvi;
