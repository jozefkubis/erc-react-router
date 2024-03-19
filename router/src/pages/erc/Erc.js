import { NavLink, Outlet } from "react-router-dom";

const Erc = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4 ">
      <NavLink
        to="/tachykardia"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonactiveLink"
        }
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Tachykardia
        </button>
      </NavLink>

      <NavLink
        to="/bradykardia"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonactiveLink"
        }
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Bradykardia
        </button>
      </NavLink>

      <NavLink
        to="/pbls"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonactiveLink"
        }
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Pediatrická Základná Resuscitácia
        </button>
      </NavLink>

      <NavLink
        to="/pals"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonactiveLink"
        }
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Pediatrická Rozšírená Resuscitácia
        </button>
      </NavLink>

      <NavLink
        to="/nls"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonactiveLink"
        }
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          NewBorn Life Support
        </button>
      </NavLink>

      <NavLink
        to="/traumatickypacient"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonactiveLink"
        }
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Traumatický pacient so zastavením obehu / rizikom zastavenia obehu
        </button>
      </NavLink>

      <NavLink
        to="/ttavf"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonactiveLink"
        }
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Náhodná Hypotermia
        </button>
      </NavLink>

      <NavLink
        to="/casjekluc"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonactiveLink"
        }
      >
        <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 w-52">
          Hypertermia
        </button>
      </NavLink>

      <br />
      <Outlet />
    </div>
  );
};

export default Erc;
