import { NavLink } from "react-router-dom";
import { ImArrowDown } from "react-icons/im";

const AfterFirstMinute = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-1 text-xs">
      <NavLink
        to="/after2firstminute"
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
          <span className="font-bold">Ak sa hrudník nedvíha</span> <br />
          Skontrolujte masku, polohu hlavy a sánky <br />
          Podpora 2 osobami <br />
          (Odsatie/Laryngeálna maska/Tracheálna kanyla) <br />
          Zvážte navýšenie inspiračného tlaku <br />
          <span className="font-bold">Opakujte 5 vdychov</span>
        </button>
      </NavLink>

      <NavLink to="/firstminute">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white mt-3">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default AfterFirstMinute;
