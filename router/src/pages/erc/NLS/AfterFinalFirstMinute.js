import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";
import { ImArrowUp } from "react-icons/im";

const AfterFinalFirstMinute = () => {
  return (
    <div className="flex flex-col justify-center items-center text-xs">
      <button className="button bg-white p-1 rounded-md text-blue-700 ring ring-blue-700 w-60">
        <span className="font-bold">Prehodnoťte </span>
        <br />
        Skontrolujte frekvenciu srdca každých 30 sekúnd
      </button>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowUp />
      </div>

      <div className="mx-auto text-blue-700 text-4xl">
        <ImArrowDown />
      </div>

      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60 text-center mb-6">
        <span className="font-bold">
          Ak je frekvencia srdca neprítomná/veľmi nízka:
        </span>{" "}
        <br />
        <span className="font-bold">Cievny prístup a lieky</span> <br />
        Zvážte iné faktory napr.: pneumotorax, hypovolémia, <br />
        vrodené abnormality <br />
      </button>

      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60 text-center">
        Informujte rodičov a tím <br />
        Dokončite dokumentáciu
      </button>

      <NavLink to="/after2firstminute">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white mt-3">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default AfterFinalFirstMinute;
