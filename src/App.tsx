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
      </div>
    </div>
  );
}

export default App;
