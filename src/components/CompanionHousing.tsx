import React, { useState, KeyboardEvent } from "react";
import ProgressBar from "./ProgressBar";
import Dino from "./Dino";
import Textbox from "./Textbox";
import UpIcon from "../up icon.png";
import DownIcon from "../down icon.png";
import HeartIcon from "../heart icon.png";

function switchResponse(param: number): string {
  switch (param) {
    case 0:
      return "dino: glad to hear it!";
    case 1:
      return "dino: yeah, me too honestly.";
    case 2:
      return "dino: i'm sorry...maybe tomorrow will be better.";
  }
  return "sorry i'm a shitty dev and there's been an error :(";
}

function CompanionHousing() {
  const [promptAsked, setPromptAsked] = useState(false);
  const [dialogueStage, setDialogueStage] = useState(0);
  const [selectedID, setSelectedID] = useState(0);
  const [pressedEffectUp, setPressedEffectUp] = useState(false);
  const [pressedEffectDown, setPressedEffectDown] = useState(false);
  const [pressedEffectConfirm, setPressedEffectConfirm] = useState(false);
  const choicesList = ["good!", "okay", "not great."];
  let promptIdx = 0;

  console.log(promptAsked);
  console.log(dialogueStage);

  const switchPrompt = () => {
    const promptsList = [
      "dino: can you tell me about something you liked about today?",
      "dino: what are you grateful for today",
      "dino: what are some things you like about yourself?",
      "dino: what are some things that always make you smile?",
      "dino: what usually cheers you up when you're down?",
      "dino: what are some things you're doing well right now?",
    ];
    if (dialogueStage !== 2) promptIdx = Math.floor(Math.random() * 6);
    return promptsList[promptIdx];
  };

  const handleBack = () => {
    setPromptAsked(false);
    setDialogueStage(0);
  };

  const handleClickUp = () => {
    if (dialogueStage === 0) setSelectedID((id) => Math.max(0, id - 1));
  };
  const handleClickDown = () => {
    if (dialogueStage === 0) setSelectedID((id) => Math.max(0, id + 1));
  };
  const handleClickConfrim = () => {
    setDialogueStage(dialogueStage + 1);
    if (dialogueStage === 1) {
      setPromptAsked(true);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.code);
    if (event.code === "ArrowUp") {
      if (dialogueStage === 0) setSelectedID((id) => Math.max(0, id - 1));
      setPressedEffectUp(true);
    }
    if (event.code === "ArrowDown") {
      if (dialogueStage === 0) setSelectedID((id) => Math.min(2, id + 1));
      setPressedEffectDown(true);
    }
    if (event.code === "Enter") {
      // try catch for adding new mood
      if (dialogueStage < 2) {
        console.log(choicesList[selectedID]);
        //setIsSubmitted(true);
        setDialogueStage(dialogueStage + 1);
        if (dialogueStage === 1) {
          setPromptAsked(true);
        }
      }
      setPressedEffectConfirm(true);
    }
  };

  const keyUpHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.code);
    if (event.code === "ArrowUp") {
      setPressedEffectUp(false);
    }
    if (event.code === "ArrowDown") {
      setPressedEffectDown(false);
    }
    if (event.code === "Enter") {
      setPressedEffectConfirm(false);
    }
  };

  return (
    <div
      className="rounded-[100px] xl:rounded-full bg-secondary-bg flex flex-col justify-around items-center focus:outline-none"
      tabIndex={0}
      onKeyDown={keyDownHandler}
      onKeyUp={keyUpHandler}
    >
      <div className="aspect-square box-content justify-end rounded-3xl bg-white flex flex-col m-10 shadow-inner max-w-xl">
        {/* inside the screen*/}
        <ProgressBar progress="w-[50%]" level={1} promptAsked={promptAsked} />
        <Dino promptAsked={promptAsked} />
        <div className="p-5">
          <Textbox
            prompt={
              dialogueStage === 0
                ? "dino: how are you doing today? :)"
                : dialogueStage === 1
                ? switchResponse(selectedID)
                : switchPrompt()
            }
            choices={promptAsked ? [] : choicesList}
            selected={selectedID}
            promptAsked={promptAsked}
            handlerFunc={handleBack}
            dialogueStage={dialogueStage}
          />
        </div>
      </div>
      <div className="hidden md:flex flex-row w-3/4 justify-center pb-5 space-x-4">
        {/* the buttons */}
        <button
          onClick={handleClickUp}
          className={`${
            pressedEffectUp && "shadow-none bg-red-200 pt-1 "
          } aspect-square h-28 bg-white rounded-full flex justify-center items-center shadow-lg hover:bg-red-200 active:shadow-none active:pt-1`}
        >
          <img src={UpIcon} alt="up" className="object-contain h-12 mb-2 p-1" />
        </button>
        <button
          onClick={handleClickConfrim}
          className={`${
            pressedEffectConfirm && "shadow-none bg-red-200 pt-1 "
          } aspect-square h-40 bg-white rounded-full flex justify-center items-center shadow-lg hover:bg-red-200 active:shadow-none active:pt-1`}
        >
          <img src={HeartIcon} alt="heart" className="object-contain h-18" />
        </button>

        <button
          onClick={handleClickDown}
          className={`${
            pressedEffectDown && "shadow-none bg-red-200 pt-1 "
          } aspect-square h-28 bg-white rounded-full flex justify-center items-center shadow-lg hover:bg-red-200 active:shadow-none active:pt-1`}
        >
          <img
            src={DownIcon}
            alt="down"
            className="object-contain h-12 mt-2 p-1"
          />
        </button>
      </div>
    </div>
    /*     <div clas
    sName="flex flex-col font-mono h-full items-center justify-center text-2xl text-white w-full">
      <div className="aspect-square bg-secondary-bg justify-center items-center rounded-full text-center text-inherit w-9/12">
        dinosaur
        <Textbox prompt="dino: how are you feeling today? :)" choices={["good!", "okay", "not great."]}/>
      </div>
    </div> */
  );
}

export default CompanionHousing;
