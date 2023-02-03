import React from 'react';

function Navbar() {
  return (
    <div className="flex flex-col font-mono space-y-1 text-2xl text-white">
      <button className = "border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit text-left"
              onClick = {() => console.log("home")}>
        home
      </button>
      <button className = "border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit text-left"
              onClick = {() => console.log("logs")}>
        logs
      </button>
      <button className = "border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit text-left" 
              onClick = {() => console.log("resources")}>
        mental<br />
        health<br />
        resources
      </button>
    </div>
  );
}

export default Navbar;
