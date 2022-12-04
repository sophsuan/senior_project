import { STATES } from "mongoose";
import React, { useState } from "react";
import DinoPfp from "../dino_pfp_placeholder.png";

interface TextboxProps {
  prompt: string;
  selected: number;
  choices: string[];
  promptAsked: boolean;
}

function Input({ promptAsked }: { promptAsked: boolean }) {
  if (promptAsked) {
    return (
      <textarea
        rows={11}
        placeholder="type response here"
        className="p-2.5 text-base rounded-lg text-inherit resize-none"
      ></textarea>
    );
  }
  return null;
}

function LogNav({ promptAsked }: { promptAsked: boolean }) {
  if (promptAsked) {
    return (
      <div className="grid grid-cols-3 gap-10 items-center">
        <button className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-lg rounded-3xl font-bold text-white text-base p-2 text-inherit">
          prompt back
        </button>
        <p className="font-bold text-white text-base text-inherit">
          {new Date().toLocaleString().split(",")[0]}
        </p>
      </div>
    );
  }
  return null;
}

function Textbox(props: TextboxProps) {
  //  const [selectedID, setSelectedID] = useState(0);

  return (
    <div className="flex font-mono bg-main-bg w-full h-full justify-center items-center rounded-lg p-4">
      <div className="flex flex-col box-border h-full w-full p-4 border-4 rounded-lg border-white">
        <LogNav promptAsked={props.promptAsked} />
        <div className="flex flex-row">
          <div className="flex-none hidden lg:block box-border rounded-lg m-3 bg-white">
            <img src={DinoPfp} alt="dino pic" className="pt-1 pl-1 pr-1" />
          </div>
          <div>
            <p className="flex inline items-start font-bold text-white text-base p-1 text-inherit">
              {props.prompt}
            </p>
            <ul>
              {props.choices.map((choice, i) =>
                props.selected === i ? (
                  <li
                    key={choice}
                    className="flex items-start font-bold	text-white text-base pl-5 pb-1 text-inherit"
                  >
                    ▶ {choice}
                  </li>
                ) : (
                  <li
                    key={choice}
                    className="flex items-start font-bold	text-white text-base pl-10 pb-1 text-inherit"
                  >
                    {choice}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <Input promptAsked={props.promptAsked} />
      </div>
    </div>
  );
}

export default Textbox;
