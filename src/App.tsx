import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CompanionHousing from "./components/CompanionHousing";

function App() {
  return (
    <div className="flex h-screen">
      <div className="pl-[2.5%] pt-[2.5%]">
        <Navbar />
      </div>
      <div className="flex-auto pl-[10%] pr-[15%] pt-[2.5%] pb-[2.5%]">
        <CompanionHousing />
        <div className=" flex font-black text-stone-700 font-mono w-full justify-center text-xl pt-4">
          Use keys ⇧, ⇩, and Enter to navigate your game device
        </div>
      </div>
    </div>
  );
}

export default App;
