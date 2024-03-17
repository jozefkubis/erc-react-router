import { NavLink } from "react-router-dom";

const EndCPR = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 p-3 rounded-md text-white ring ring-red-500 text-center ">
        Zvážte ukončenie <br />
        resuscitácie
      </button>

      <NavLink to="/rosc">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default EndCPR;
