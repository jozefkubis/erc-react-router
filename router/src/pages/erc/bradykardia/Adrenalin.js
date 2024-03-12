import { NavLink } from "react-router-dom";

const Adrenalin = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
        <ul>
          <li className="font-bold">Zvážte dočasné opatrenia:</li>
          <li>Izoprenalín 5 ug/min IV</li>
          <li>Adrenalín 2 - 10 ug/min IV</li>
          <NavLink to="/alternativy">
            <li className="bg-blue-500 rounded-md">Alternatívne lieky*</li>
          </NavLink>
          <li className="italic font-bold">a / alebo</li>
          <li>Transkutánna kardiostimulácia</li>
        </ul>
      </button>

      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
        Vyhľadajte pomoc experta. <br /> Zabezpečte transvenóznu
        kardiostimuláciu.
      </button>

      <button
        className="back-button w-20 bg-amber-700 p-1 rounded-md text-white"
        onClick={goBack}
      >
        Spet
      </button>
    </div>
  );
};

export default Adrenalin;
