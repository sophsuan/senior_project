import React, { useState, useEffect, useContext } from "react";
import ProgressBar from "./ProgressBar";
import Dino from "./Dino";
import Textbox from "./Textbox";
import UpIcon from "../up icon.png";
import DownIcon from "../down icon.png";
import HeartIcon from "../heart icon.png";
import { userContext } from "../userContext";

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

function CompanionHousing({
  experience,
  setExperience,
}: {
  experience: number;
  setExperience: Function;
}) {
  const [promptAsked, setPromptAsked] = useState(false);
  const [selectedID, setSelectedID] = useState(0);
  const [pressedEffectUp, setPressedEffectUp] = useState(false);
  const [pressedEffectDown, setPressedEffectDown] = useState(false);
  const [pressedEffectConfirm, setPressedEffectConfirm] = useState(false);
  const choicesList = ["good!", "okay", "not great."];
  const promptsList = [
    "dino: can you tell me about something you liked about today?",
    "dino: what are you grateful for today?",
    "dino: what are some things you like about yourself?",
    "dino: what are some things that always make you smile?",
    "dino: what usually cheers you up when you're down?",
    "dino: what are some things you're doing well right now?",
  ];
  const [promptIdx, setPromptIdx] = useState(Math.floor(Math.random() * 6));
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(0);
  const [progressCSS, setProgressCSS] = useState("");
  const [response, setResponse] = useState("");
  const [writtenPrompt, setWrittenPrompt]= useState("");

  const { clientId } = useContext(userContext);

  const [dialogueStage, setDialogueStage] = useState(() => {
    const storedDiaologueStage = localStorage.getItem("dialogueStage");
    if (storedDiaologueStage) {
      return Number(storedDiaologueStage);
    } else {
      return 0;
    }
  });

  const [countdown, setCountdown] = useState(() => {
    const storedCountdown = localStorage.getItem("countdown");
    if (storedCountdown) {
      return Number(storedCountdown);
    } else {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      return midnight.getTime() - now.getTime();
    }
  });

  useEffect(() => {
    if (dialogueStage !== 2) {
      setPromptIdx(Math.floor(Math.random() * 6));
      setWrittenPrompt(promptsList[promptIdx].slice(6));
    }

    setProgress(Math.trunc((experience % 10) * 10));
    setProgressCSS(String(progress));
    setLevel(Math.trunc(experience / 10));
  }, [dialogueStage, progress, progressCSS, experience]);

  useEffect(() => {
    localStorage.setItem("countdown", ""+countdown);
  }, [countdown]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      setCountdown(midnight.getTime() - now.getTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const postEvent = async () => {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var date = new Date(year, month, day);

    await fetch("http://localhost:3001/api/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: clientId,
        date: date,
        prompt: writtenPrompt,
        response: response,
        mood: selectedID,
      }),
    })
      .catch((err) => {
        console.log(err);

        console.log(
          "body here: " +
            JSON.stringify({
              userId: clientId,
              date: date,
              prompt: writtenPrompt,
              response: response,
              mood: selectedID,
            })
        );
      });

      console.log("bingus: " +
      JSON.stringify({
        userId: clientId,
        date: date,
        prompt: writtenPrompt,
        response: response,
        mood: selectedID,
      }));

    // await fetch("http://localhost:3001/api/prompt", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newPrompt),
    // })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    await fetch(
      "http://localhost:3001/api/user/exp?" +
        new URLSearchParams({
          userId: String(clientId),
          experience: String(experience + 1),
        }),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .catch((err) => console.log(err));

    setDialogueStage(3);
    setPromptAsked(false);

    setExperience(experience + 1);
  };

  const handleBack = () => {
    setPromptAsked(false);
    setDialogueStage(0);
  };

  const handleClickUp = () => {
    if (dialogueStage === 0) setSelectedID((id) => Math.max(0, id - 1));
  };
  const handleClickDown = () => {
    if (dialogueStage === 0) setSelectedID((id) => Math.min(2, id + 1));
  };
  const handleClickConfirm = () => {
    if (dialogueStage !== 2) {
      setDialogueStage(dialogueStage + 1);
    }
    if (dialogueStage === 1) {
      setPromptAsked(true);
    }
    if (dialogueStage === 2) {
      postEvent();
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
    if (event.code === "Enter" && !event.shiftKey) {
      // try catch for adding new mood
      if (dialogueStage < 2) {
        setDialogueStage(dialogueStage + 1);
        if (dialogueStage === 1) {
          setPromptAsked(true);
        }
      }
      if (dialogueStage === 2) {
        postEvent();
      }
      setPressedEffectConfirm(true);
    }
    if (event.code === "Enter" && event.shiftKey) {
      setResponse(response + "\n");
    }
  };

  const keyUpHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
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
        <ProgressBar
          progressCSS={progressCSS}
          level={level}
          promptAsked={promptAsked}
        />
        <Dino promptAsked={promptAsked} level={level} />
        <div className="p-5">
          <Textbox
            prompt={
              dialogueStage === 0
                ? "dino: how are you doing today? :)"
                : dialogueStage === 1
                ? switchResponse(selectedID)
                : dialogueStage === 2
                ? promptsList[promptIdx]
                : "dino: all done for today! i'm very proud of you, see you tomorrow :D"
            }
            choices={promptAsked ? [] : choicesList}
            selected={selectedID}
            promptAsked={promptAsked}
            handlerFunc={handleBack}
            dialogueStage={dialogueStage}
            level={level}
            response={response}
            setResponse={setResponse}
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
          onClick={handleClickConfirm}
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
  );
}

export default CompanionHousing;
