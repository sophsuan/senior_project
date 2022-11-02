import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import CompanionHousing from './CompanionHousing';
import ResourcesLink from './ResourcesLink';

function App() {
  return (
    <div className="flex items-stretch h-screen">
        <div className="border-solid flex-auto pl-[2.5%] pt-[2.5%] w-3/12 ">
            <Navbar />
        </div>
        <div className="border-solid flex-auto w-6/12">
            <CompanionHousing />
        </div>
        <div className="border-solid flex-auto pr-[2.5%] pb-[2.5%] w-3/12">
            <ResourcesLink />
        </div>
    </div>


    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  );
}

export default App;
