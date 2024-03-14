import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const After2FirstMinute = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-1 text-xs">
      <NavLink
        to="/afterfinalfirstminute"
        className="flex flex-col justify-center items-center space-y-1 "
      >
        <button className="button bg-white p-1 rounded-md text-blue-700 ring ring-blue-700 w-60">
          <span className="font-bold">Prehodnoťte</span>
          <br />
          Ak bez vzostupu srdcovej frekvencie,
          <br />
          hľadajte pohyb hrudníka
        </button>

        <div className="mx-auto text-blue-700 text-4xl">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60 text-center">
          Keď sa hrudník dvíha <br />
          pokračujte vo ventilácii <br />
        </button>

        <div className="mx-auto text-blue-700 text-4xl">
          <ImArrowDown />
        </div>

        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-60 text-center">
          <span className="font-bold">
            Ak je frekvencia srdca neprítomná/veľmi nízka
          </span>{" "}
          <br />
          (menej ako 60 za minútu) po 30 sekundách ventilácie <br />
          <span className="font-bold">
            Koordinujte 3 kompresie hrudníka a 1 vdych
          </span>{" "}
          <br />
          Zvýšte kyslík na 100% <br />
          Zvážte intubáciu ak sa tak ešte nestalo <br />
          (alebo laryngeálnu masku ak intubácia nie je možná)
        </button>
      </NavLink>

      <NavLink to="/afterfirstminute">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white mt-3">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default After2FirstMinute;
