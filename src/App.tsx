import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CompanionHousing from "./components/CompanionHousing";
import ResourcesLink from "./components/ResourcesLink";
import Textbox from "./components/Textbox";

function App() {
  return (
    <div className="flex items-stretch h-screen">
      <div className="flex-auto pl-[2.5%] pt-[2.5%] w-2/12 ">
        <Navbar />
      </div>
      <div className="flex-auto w-1/2 m-10">
        <CompanionHousing />
      </div>
      <div className="flex-auto pb-[2.5%] pr-[2.5%] w-2/12">
        <ResourcesLink />
      </div>
    </div>
  );
}

export default App;
