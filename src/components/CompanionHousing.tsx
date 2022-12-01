import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Dino from './Dino';
import Textbox from "./Textbox";
import UpIcon from "../up icon.png";
import DownIcon from "../down icon.png";
import HeartIcon from "../heart icon.png";

function CompanionHousing() {
  const [promptAsked, setPromptAsked] = useState(true);
  console.log(promptAsked);

  return (
    <div className="rounded-[100px] xl:rounded-full bg-secondary-bg flex flex-col justify-around items-center">
      <div className="aspect-square box-content justify-end rounded-3xl bg-white flex flex-col m-10 shadow-inner max-w-xl">
        {/* inside the screen*/}
        <ProgressBar progress="w-[50%]" level={1} promptAsked={promptAsked}/>
        <Dino promptAsked={promptAsked} />
        <div className="p-5">
          <Textbox
            prompt={promptAsked ? "dino: can you tell me about something you liked about today?" : "dino: how are you doing today? :)"}
            choices={promptAsked ? [] : ["good!", "okay", "not great."]}
            promptAsked={promptAsked}
          />
        </div>
      </div>
      <div className="hidden md:flex flex-row w-3/4 justify-center pb-5 space-x-4">
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
