import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed w-full flex justify-evenly top-0 p-3 bg-[#364663] text-white z-20">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Domov
        </NavLink>

        <NavLink
          to="/erc"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          ERC
        </NavLink>

        <NavLink
          to="/farmakológia"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Farmakológia
        </NavLink>

        <NavLink
          to="/itemlist"
          className={({ isActive }) =>
            isActive ? "activeLink" : "nonactiveLink"
          }
        >
          Zoznam materiálu
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
