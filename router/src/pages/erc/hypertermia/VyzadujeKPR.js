import { NavLink } from "react-router-dom";

const VyzadujeKPR = () => {
  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-center w-48">
      Vyžaduje KPR?
      </button>

      <div className="anoNie flex space-x-4">
        <NavLink to="/kprano">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">
            Ano
          </button>
        </NavLink>

        <NavLink to="/kprnie">
          <button className="ano-nie-button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-20">
            Nie
          </button>
        </NavLink>
      </div>

      <NavLink to="/erc">
        <button className="back-button w-20 bg-amber-700 p-1 rounded-md text-white">
          Spet
        </button>
      </NavLink>
    </div>
  )
}

export default VyzadujeKPR