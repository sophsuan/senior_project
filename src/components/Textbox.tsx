import React from "react";
import Stage0 from "../images/stage0crop.png";
import Stage1 from "../images/stage1crop.png";
import Stage2 from "../images/stage2crop.png";
import Stage3 from "../images/stage3crop.png";
import Stage4 from "../images/stage4crop.png";
import Stage5 from "../images/stage5crop.png";

interface TextboxProps {
  prompt: string;
  selected: number;
  choices: string[];
  promptAsked: boolean;
  handlerFunc: () => void;
  dialogueStage: number;
  level: number;
  response: string;
  setResponse: Function
}

function Input({
  promptAsked,
  dialogueStage,
  response,
  setResponse
}: {
  promptAsked: boolean;
  dialogueStage: number;
  response: string;
  setResponse: Function
}) {
  const handleTextArea = (e: any) => {
    // Return if user presses the enter key
    if (e.nativeEvent.inputType === "insertLineBreak") {
      return;
    }
    setResponse(e.target.value);
 };

  if (promptAsked && dialogueStage === 2) {
    return (
      <div className="flex flex-col">
        <textarea
          rows={10}
          placeholder="type response here"
          className="p-2.5 text-base rounded-lg text-inherit resize-none tab"
          value={response}
          onChange={(e) => {handleTextArea(e)}}
          autoFocus={true}
        ></textarea>
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
  var DinoPfp;
  if (props.level === 0) {
    DinoPfp = Stage0;
  } else if (props.level === 1) {
    DinoPfp = Stage1;
  } else if (props.level === 2) {
    DinoPfp = Stage2;
  } else if (props.level === 3) {
    DinoPfp = Stage3;
  } else if (props.level === 4) {
    DinoPfp = Stage4;
  } else {
    DinoPfp = Stage5;
  }
  return (
    <div className="flex font-mono bg-main-bg w-full h-full justify-center items-center rounded-lg p-4">
      <div className="flex flex-col box-border h-full w-full p-4 border-4 rounded-lg border-white">
        <LogNav
          promptAsked={props.promptAsked}
          handleBackFn={props.handlerFunc}
        />
        <div className="flex flex-row">
          <div className="flex-none hidden lg:block box-border rounded-lg m-3 bg-white h-24 w-24">
            <img src={DinoPfp} alt="dino pic" className="rounded-lg" />
          </div>
          <div>
            <p className="flex inline items-start font-bold text-white text-base p-1 text-inherit">
              {props.prompt}
            </p>
            <ul>
              {props.dialogueStage === 0 ? (
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
              ) : props.dialogueStage === 1 ? (
                <li className="flex items-start font-bold	text-red-200 text-base pt-4 pl-1 pb-1 text-inherit">
                  Press enter key to continue...
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        <Input
          promptAsked={props.promptAsked}
          dialogueStage={props.dialogueStage}
          response={props.response}
          setResponse={props.setResponse}
        />
        <div>
        {props.dialogueStage === 2 ? (
          <p className="flex items-start font-bold	text-red-200 text-base pt-4 pl-1 pb-1 text-inherit">
            Press enter key to continue...
          </p>
          ) : (
            <></>
          )
        }
      </div>
      </div>

    </div>
  );
}

export default Textbox;
