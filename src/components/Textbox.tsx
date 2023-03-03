import React, { useEffect, forwardRef } from "react";
import Stage0 from "../images/stage0crop.png";
import Stage1 from "../images/stage1crop.png";
import Stage2 from "../images/stage2crop.png";
import Stage3 from "../images/stage3crop.png";
import Stage4 from "../images/stage4crop.png";
import Stage5 from "../images/stage5crop.png";

interface TextboxProps {
  prompt: string;
  selected: number;
  setSelected: Function;
  choices: string[];
  promptAsked: boolean;
  handlerFunc: () => void;
  dialogueStage: number;
  setDialogueStage: Function;
  level: number;
  response: string;
  setResponse: Function;
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
  setResponse: Function;
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
      <div className='flex flex-col'>
        <textarea
          rows={10}
          placeholder='type response here'
          className='p-2.5 text-base rounded-lg text-inherit resize-none tab'
          value={response}
          onChange={e => {
            handleTextArea(e);
          }}
          autoFocus={true}
        ></textarea>
      </div>
    );
  }
  return null;
}

function LogNav({
  promptAsked,
  handleBackFn
}: {
  promptAsked: boolean;
  handleBackFn: () => void;
}) {
  if (promptAsked) {
    return (
      <div className='grid grid-cols-3 gap-10 items-center'>
        <button
          className='font-mono space-y-1 text-lg text-yellow-900 font-black rounded-lg bg-yellow-300 mt-1 w-full pt-1 pb-1 hover:bg-yellow-400 active:bg-yellow-400'
          onClick={handleBackFn}
        >
          back
        </button>
        <p className='font-bold text-white text-base text-inherit'>
          {new Date().toLocaleString().split(",")[0]}
        </p>
      </div>
    );
  }
  return null;
}

const Textbox = forwardRef(function Textbox(
  props: TextboxProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  var DinoPfp;

  useEffect(() => {
    // Focuses on game device
    if (props.dialogueStage !== 2) {
      if (ref && typeof ref !== "function") {
        if (ref.current) {
          ref.current.focus();
        }
      }
    }
  }, [props.dialogueStage, ref]);

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

  const handleChoiceClick = (i: number) => {
    props.setSelected(i);
    props.setDialogueStage(props.dialogueStage + 1);
  };

  return (
    <div className='flex font-mono bg-main-bg w-full h-full justify-center items-center rounded-lg p-4'>
      <div className='flex flex-col box-border h-full w-full p-4 border-4 rounded-lg border-white'>
        <LogNav
          promptAsked={props.promptAsked}
          handleBackFn={props.handlerFunc}
        />
        <div className='flex flex-row'>
          <div className='flex-none hidden lg:block box-border rounded-lg m-3 bg-white h-24 w-24'>
            <img src={DinoPfp} alt='dino pic' className='rounded-lg' />
          </div>
          <div>
            <p className='flex inline items-start font-bold text-white text-base p-1 text-inherit'>
              {props.prompt}
            </p>
            <ul>
              {props.dialogueStage === 0 ? (
                props.choices.map((choice, i) =>
                  props.selected === i ? (
                    <li
                      key={choice}
                      className='flex items-start font-bold	text-white text-base pl-5 text-inherit'
                    >
                      <p className='p-1'>▶</p>
                      <button
                        className='border-2 border-main-bg hover:border-2 hover:border-white hover:cursor-pointer hover:rounded-lg p-1 rounded-3xl text-inherit'
                        onClick={() => handleChoiceClick(i)}
                      >
                        {choice}
                      </button>
                    </li>
                  ) : (
                    <li
                      key={choice}
                      className='flex items-start font-bold	text-white text-base pl-10 text-inherit'
                    >
                      <button
                        className='border-2 border-main-bg hover:border-2 hover:border-white hover:cursor-pointer hover:rounded-lg p-1 rounded-3xl text-inherit'
                        onClick={() => handleChoiceClick(i)}
                      >
                        {choice}
                      </button>
                    </li>
                  )
                )
              ) : props.dialogueStage === 1 ? (
                <li className='flex items-start font-bold	text-red-200 text-base pt-4 pl-1 pb-1 text-inherit'>
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
            <p className='flex items-start font-bold	text-red-200 text-base pt-4 pl-1 pb-1 text-inherit'>
              Press enter key to continue...
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
});

export default Textbox;
