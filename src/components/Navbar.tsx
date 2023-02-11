import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col font-mono space-y-1 text-2xl text-white">
      <nav>
          <NavLink to="/home">
            <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit">
              home
            </div>
          </NavLink>
          <NavLink to="/logs">
            <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit">
              logs
            </div>
          </NavLink>
          <NavLink to="/resources">
            <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit">
              mental
              <br />
              health
              <br />
              resources
            </div>
          </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
