import { NavLink, Outlet } from "react-router-dom";

const Erc = () => {
  return (
    <div className="grid grid-cols-2 place-content-center place-items-center gap-2  text-center w-2/3 m-auto">
      <div className="bg-blue-700 w-full h-full flex items-center justify-center text-white rounded-lg p-4">
        <NavLink
          to="/tachykardia"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Tachykardia
        </NavLink>
      </div>

      <div className="bg-blue-700 w-full h-full flex items-center justify-center text-white rounded-lg p-4">
        <NavLink
          to="/bradykardia"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Bradykardia
        </NavLink>
      </div>

      <div className="bg-blue-700 w-full h-full flex items-center justify-center text-white rounded-lg p-4">
        <NavLink
          to="/pbls"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Pediatrická Základná Resuscitácia
        </NavLink>
      </div>

      <div className="bg-blue-700 w-full h-full flex items-center justify-center text-white rounded-lg p-4">
        <NavLink
          to="/pals"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Pediatrická Rozšírená Resuscitácia
        </NavLink>
      </div>

      <div className="bg-blue-700 w-full h-full flex items-center justify-center text-white rounded-lg p-4">
        <NavLink
          to="/nls"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          NewBorn Life Support
        </NavLink>
      </div>

      <div className="bg-blue-700 w-full h-full flex items-center justify-center text-white rounded-lg p-4">
        <NavLink
          to="/traumatickypacient"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Traumatický pacient so zastavením obehu / rizikom zastavenia obehu
        </NavLink>
      </div>

      <div className="bg-blue-700 w-full h-full flex items-center justify-center text-white rounded-lg p-4">
        <NavLink
          to="/ttavf"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Náhodná Hypotermia
        </NavLink>
      </div>

      <div className="bg-blue-700 w-full h-full flex items-center justify-center text-white rounded-lg p-4">
        <NavLink
          to="/casjekluc"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Hypertermia
        </NavLink>
      </div>

      <br />
      <Outlet />
    </div>
  );
};

export default Erc;
