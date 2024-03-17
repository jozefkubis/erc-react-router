import { NavLink } from "react-router-dom";

const Transport = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 p-3 rounded-md text-white ring ring-red-500 text-center ">
        <span className="font-bold">Mimo nemocnice: </span> <br />
        okamžitý transport do vhodnej <br />
        nemocnice <br /> <br />
        <span className="font-bold">V nemocnici:</span> <br />
        damage control surgery / damage <br />
        control resuscitation
      </button>

      <NavLink to="/rosc">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  );
};

export default Transport;
