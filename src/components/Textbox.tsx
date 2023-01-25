import { PromiseProvider, STATES } from "mongoose";
import React, { useState, useContext } from "react";
import Stage0 from "../images/stage0crop.png";
import Stage1 from "../images/stage1crop.png";
import Stage2 from "../images/stage2crop.png";
import Stage3 from "../images/stage3crop.png";
import Stage4 from "../images/stage4crop.png";
import Stage5 from "../images/stage5crop.png";
import { userContext } from "../userContext";

interface TextboxProps {
  prompt: string;
  selected: number;
  choices: string[];
  promptAsked: boolean;
  handlerFunc: () => void;
  dialogueStage: number;
  level: number;
  setDialogueStage : Function;
  setPromptAsked : Function;
  oldExperience : number;
}

function Input({
  promptAsked,
  selected,
  prompt,
  dialogueStage,
  setDialogueStage,
  setPromptAsked,
  oldExperience
}: {
  promptAsked: boolean;
  selected: number;
  prompt: string;
  dialogueStage: number;
  oldExperience: number;
  setDialogueStage: Function;
  setPromptAsked: Function;
}) {
  const [response, setResponse] = useState("");
  const { clientId } = useContext(userContext);

  const postEvent = async () => {
    const date = new Date();
    const newLog = {
      userId: clientId,
      date: date,
      response: response,
      mood: selected,
    };
    const newPrompt = {
      prompt: prompt,
      date: date,
    };
    console.log("newlog:" + JSON.stringify(newLog));
    await fetch("http://localhost:3001/api/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          userId: "pain",
          date: date,
          response: response,
          mood: selected
        }
      ),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        
        console.log("body here: " +
          JSON.stringify(
          {
            userId: clientId,
            date: date,
            response: response,
            mood: selected
          }
        ));
      });

    await fetch("http://localhost:3001/api/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrompt),
    })
      .then((response) => {
        console.log(response);
      })
      .catch(
        (err) => {
          console.log(err)
        }
        );

    await fetch("http://localhost:3001/api/user/exp/" +
      new URLSearchParams(
        { userId : String(clientId),
          experience : String(oldExperience + 1)
        }),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    setDialogueStage(3);
    setPromptAsked(false);
  };

  if (promptAsked && dialogueStage === 2) {
    return (
      <div className="flex flex-col">
        <textarea
          rows={9}
          placeholder="type response here"
          className="p-2.5 text-base rounded-lg text-inherit resize-none"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        ></textarea>
        <button
          onClick={postEvent}
          className="font-mono space-y-1 text-2xl text-yellow-900 font-black rounded-lg bg-yellow-300 mt-3 w-full pt-2 pb-2 hover:bg-yellow-400 active:bg-yellow-400"
        >
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
          selected={props.selected}
          prompt={props.prompt}
          dialogueStage={props.dialogueStage}
          setDialogueStage={props.setDialogueStage}
          setPromptAsked={props.setPromptAsked}
          oldExperience={props.oldExperience}
        />
      </div>
    </div>
  );
}

export default Textbox;
