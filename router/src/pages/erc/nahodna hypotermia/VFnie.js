import { NavLink } from "react-router-dom";

const VFnie = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-left w-66">
        •Očividné znaky nezvratnej smrti (1) <br />
        •Platné DNR nariadenie <br />
        •Podmienky nebezpečné pre záchrancu <br />
        •Zasypanie lavínou viac ako 60 min, dýchacie cesty <br />
        upchaté snehom a asystólia
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/akekolvekano">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-36">
            AKÉKOĽVEK ÁNO
          </button>
        </NavLink>

        <NavLink to="/vsetkynie">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-36">
            VŠETKY NIE
          </button>
        </NavLink>
      </div>

      <NavLink to="/ttavf">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default VFnie;
