import { NavLink } from "react-router-dom";

const PPPC = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/restorak">
        <button className="button bg-blue-700 p-3 rounded-md text-white ring ring-red-500 text-center ">
          <span className="font-bold">P</span>rax? <br />
          <span className="font-bold">P</span>omôcky? <br />
          <span className="font-bold">P</span>rostredie? <br />
          <span className="text-xs">Čas uplynulý od straty vitálnych </span>
          <br />
          <span className="text-xs">funkcií menej ako 15 min?</span>
        </button>
      </NavLink>

      <NavLink to="/traumapostup">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default PPPC;
