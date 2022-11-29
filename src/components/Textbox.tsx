import React from "react";
import DinoPfp from "../dino_pfp_placeholder.png";

interface TextboxProps {
  prompt: string;
  choices: string[];
}

function Textbox(props: TextboxProps) {
  return (
    <div className="flex bg-main-bg w-full h-179 justify-center items-center rounded-lg p-4">
      <div className="flex box-border h-full w-full p-4 border-4 rounded-lg border-white">
        <div className="hidden lg:block box-border h-100 w-100 rounded-lg m-3 bg-white">
          <img src={DinoPfp} alt="dino pic" className="pt-1 pl-1 pr-1" />
        </div>
        <div>
          <p className="flex items-start font-bold text-white text-base p-2">
            {props.prompt}
          </p>
          <ul>
            {props.choices.map((choice) => (
              <li className="flex items-start font-bold	text-white text-base pl-10 pb-1">
                {choice}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Textbox;
