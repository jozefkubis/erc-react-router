import { NavLink } from "react-router-dom";

const StudenaVoda = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <NavLink to="/zastavitchladenie">
        <div className="flex flex-col space-y-4">
          <button className="button bg-white rounded-md text-blue-700 ring ring-blue-700 text-xs p-2">
            Vaňa na ½ až ¾ naplnená <br />
            vodou a ľadom, 1–17 °C,
            <br />
            miešaná alebo cirkulujúca
          </button>

          <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-center w-48">
            Rýchle schladenie <br />
            (ponorenie <br />
            do studenej vody)
          </button>
        </div>
      </NavLink>

      <button
        className="back-button w-20 bg-amber-700 p-1 rounded-md text-white"
        onClick={goBack}
      >
        Spet
      </button>
    </div>
  );
};

export default StudenaVoda;
