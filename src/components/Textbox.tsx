import { STATES } from "mongoose";
import React, { useState } from "react";
import DinoPfp from "../dino_pfp_placeholder.png";

interface TextboxProps {
  prompt: string;
  selected: number;
  choices: string[];
  promptAsked: boolean;
  handlerFunc: () => void;
  dialogueStage: number;
}

function Input({ promptAsked }: { promptAsked: boolean }) {
  if (promptAsked) {
    return (
      <div className="flex flex-col">
        <textarea
          rows={9}
          placeholder="type response here"
          className="p-2.5 text-base rounded-lg text-inherit resize-none"
        ></textarea>
        <button className="font-mono space-y-1 text-2xl text-yellow-900 font-black rounded-lg bg-yellow-300 mt-3 w-full pt-2 pb-2 hover:bg-yellow-400 active:bg-yellow-400">
          Submit
        </button>
      </div>
    );
  }
  return null;
}

function LogNav({
  promptAsked,
  handleBackFn,
}: {
  promptAsked: boolean;
  handleBackFn: () => void;
}) {
  if (promptAsked) {
    return (
      <div className="grid grid-cols-3 gap-10 items-center">
        <button
          className="font-mono space-y-1 text-lg text-yellow-900 font-black rounded-lg bg-yellow-300 mt-1 w-full pt-1 pb-1 hover:bg-yellow-400 active:bg-yellow-400"
          onClick={handleBackFn}
        >
          back
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
        <LogNav
          promptAsked={props.promptAsked}
          handleBackFn={props.handlerFunc}
        />
        <div className="flex flex-row">
          <div className="flex-none hidden lg:block box-border rounded-lg m-3 bg-white">
            <img src={DinoPfp} alt="dino pic" className="pt-1 pl-1 pr-1" />
          </div>
          <div>
            <p className="flex inline items-start font-bold text-white text-base p-1 text-inherit">
              {props.prompt}
            </p>
            <ul>
              {props.dialogueStage === 1 ? (
                <li className="flex items-start font-bold	text-red-200 text-base pt-4 pl-1 pb-1 text-inherit">
                  Press enter key to continue...
                </li>
              ) : (
                props.choices.map((choice, i) =>
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
