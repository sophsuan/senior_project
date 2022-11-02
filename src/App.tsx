import React from 'react';
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
        <div className="border-solid flex-auto pb-[2.5%] pr-[2.5%] w-3/12">
            <ResourcesLink />
        </div>
    </div>
  );
}

export default App;
