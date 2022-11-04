import React from "react";
import Textbox from "./Textbox";
import FullDino from "../full_dino_placeholder.png";
import UpIcon from "../up icon.png";
import DownIcon from "../down icon.png";
import HeartIcon from "../heart icon.png";

function CompanionHousing() {
  return (
    <div className="aspect-[10/9] rounded-full bg-secondary-bg flex flex-col justify-center items-center p-20">
      <div className="aspect-square box-content h-2/3 w-4/5 rounded-xl bg-white flex flex-col mb-10 mt-10 pb-2 shadow-inner">
        {/* inside the screen*/}
        <div className="grid place-items-center">♡ ▮▮▮▮▯▯▯▯▯▯</div>
        <div className="flex justify-center mr-3 mt-3">
          {" "}
          <img
            src={FullDino}
            alt="dino pic"
            className="object-contain h-40 w-40 pt-1 pl-1 pr-1"
          />
        </div>
        <div className="p-5">
          <Textbox
            prompt="dino: how are you feeling today? :)"
            choices={["good!", "okay", "not great."]}
          />
        </div>
      </div>
      <div className="flex flex-row w-3/4 justify-between pb-5">
        {/* the buttons */}
        <div className="aspect-square h-28 bg-white rounded-full flex justify-center items-center shadow-lg">
          <img src={UpIcon} alt="up" className="object-contain h-12 mb-2 p-1" />
        </div>
        <div className="aspect-square h-40 bg-white rounded-full flex justify-center items-center shadow-lg">
          <img src={HeartIcon} alt="heart" className="object-contain h-18" />
        </div>
        <div className="aspect-square h-28 bg-white rounded-full flex justify-center items-center shadow-lg">
          <img
            src={DownIcon}
            alt="down"
            className="object-contain h-12 mt-2 p-1"
          />
        </div>
      </div>
    </div>
    /*     <div className="flex flex-col font-mono h-full items-center justify-center text-2xl text-white w-full">
      <div className="aspect-square bg-secondary-bg justify-center items-center rounded-full text-center text-inherit w-9/12">
        dinosaur
        <Textbox prompt="dino: how are you feeling today? :)" choices={["good!", "okay", "not great."]}/>
      </div>
    </div> */
  );
}

export default CompanionHousing;
