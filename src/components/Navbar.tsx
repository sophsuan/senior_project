import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col font-mono space-y-1 text-2xl text-white">
      <nav>
        <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit">
          <NavLink to="/home">home</NavLink>
        </div>
        <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit">
          <NavLink to="/logs">logs</NavLink>
        </div>
        <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit">
          <NavLink to="/resources">
            mental
            <br />
            health
            <br />
            resources
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
