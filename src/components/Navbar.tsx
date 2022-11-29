import React from 'react';

function Navbar() {
  return (
    <div className="flex flex-col font-mono space-y-1 text-2xl text-white">
      <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit">
        home
      </div>
      <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit">
        logs
      </div>
      <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit">
        mental<br />
        health<br />
        resources
      </div>
    </div>
  );
}

export default Navbar;
