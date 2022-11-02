import React from 'react';
import logo from './logo.svg';
// import './App.css';

function Navbar() {
  return (
    <div className="flex flex-col font-mono h-full space-y-1 text-2xl text-white w-full">
      <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit w-fit">
        home
      </div>
      <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg p-2 rounded-3xl text-inherit w-fit">
        logs
      </div>
    </div>
  );
}

export default Navbar;
