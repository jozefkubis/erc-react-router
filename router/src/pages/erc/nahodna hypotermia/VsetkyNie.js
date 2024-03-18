import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const VsetkyNie = () => {
  return (
    <div className="div flex flex-col space-y-1 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-left w-66">
        •Začnite KPR, neodkladajte transport <br />
        •Ak kontinuálna KPR nie je možná, pri sťaženej alebo <br />
        nebezpečnej záchrane zvážte intermitentnú alebo odloženú KPR
        <br />
        •Zabezpečenie priechodnosti dýchacích ciest
        <br />
        •Teplota telesného jadra menej ako 30 °C najviac 3 výboje, žiadny
        <br />
        adrenalín
        <br />
        •Získajte informácie o mechanizme nehody
      </button>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowDown />
      </div>

      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-left w-66">
        <span className="font-bold">
          Zastavenie srdca z inej príčiny <br />
          predchádzalo schladeniu
        </span>{" "}
        <br />
        •Zasypanie lavínou menej ako 60 min
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/transportvfnie">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20 my-4">
            Ano
          </button>
        </NavLink>

        <NavLink to="/prognostikacianabenefit">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20 my-4">
            Nie
          </button>
        </NavLink>
      </div>

      <NavLink to="/vfnie">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default VsetkyNie;
