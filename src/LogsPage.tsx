import { useEffect, useContext } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { userContext } from "./userContext";
import Stage0 from "./images/stage0crop.png";
import Stage1 from "./images/stage1crop.png";
import Stage2 from "./images/stage2crop.png";
import Stage3 from "./images/stage3crop.png";
import Stage4 from "./images/stage4crop.png";
import Stage5 from "./images/stage5crop.png";

interface LogsProps {
  experience: number;
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export function LogsPage(props: LogsProps) {
  const { clientId } = useContext(userContext);
  const [logs, setLogs] = useState([
    { userId: "", date: "", prompt: "", response: "", mood: "" },
  ]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        await fetch(
          "http://localhost:3001/api/log/findUser?" +
            new URLSearchParams({ userId: clientId }),
          {
            method: "GET",
          }
        ).then((response) => {
          return response.json().then((response) => {
            console.log("response: ", response);
            setLogs(response);
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (clientId !== "") fetchLogs();
  }, [clientId]);

  let today = startOfToday();
  let [isDayView, setIsDayView] = useState(false);
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  var DinoPfp;
  const level = Math.trunc(props.experience / 10);
  if (level === 0) {
    DinoPfp = Stage0;
  } else if (level === 1) {
    DinoPfp = Stage1;
  } else if (level === 2) {
    DinoPfp = Stage2;
  } else if (level === 3) {
    DinoPfp = Stage3;
  } else if (level === 4) {
    DinoPfp = Stage4;
  } else {
    DinoPfp = Stage5;
  }

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function previousDay() {
    let day = add(selectedDay, { days: -1 });
    setSelectedDay(day);
  }
  function nextDay() {
    let day = add(selectedDay, { days: 1 });
    setSelectedDay(day);
  }

  function hasLog(day: Date): Number {
    for (var i = 0; i < logs.length; i++) {
      if (isSameDay(day, parseISO(logs[i].date))) {
        //console.log(day, parseISO(logs[i].date));
        return Number(logs[i].mood);
      }
    }
    return -1;
  }

  function findLog(): string {
    let res = logs.find((log) => isSameDay(parseISO(log.date), selectedDay));
    return res ? res.response : "";
  }

  function findPrompt() : string {
    let res = logs.find((log) => isSameDay(parseISO(log.date), selectedDay));
    return res ? res.prompt : "";
  }

  function handleClick() {
    setIsDayView(true);
  }

  function handleBack() {
    setIsDayView(false);
  }

  return (
    <div
      className="flex place-content-center bg-secondary-bg rounded-full flex flex-col justify-around items-center focus:outline-none"
      tabIndex={0}
    >
      <div className="bg-white p-2 rounded-3xl flex place-content-center mt-[5%] mb-[5%]">
        {isDayView ? (
          <div className="bg-yellow-100 rounded-3xl border-2 border-black p-2">
            <div className="bg-yellow-100 rounded-3xl border border-1 border-black h-fit p-4">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="rounded-md sm border border-solid border-1 border-black w-7 h-7 m-2 flex place-content-center"
                  onClick={handleBack}
                >
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-row">
                <div className="flex-none hidden lg:block box-border rounded-lg bg-white h-24 w-24 border-solid border-2 border-black mb-2">
                  <img src={DinoPfp} alt="dino pic" className="rounded-lg" />
                </div>
                <p className="flex inline items-start font-semibold text-black text-base p-1 pl-6 text-inherit max-w-[70%]">
                  {findPrompt()}
                </p>
              </div>
              <textarea
                rows={9}
                placeholder="type response here"
                className="p-2.5 text-base rounded-lg text-inherit resize-none w-full border-solid border-2 border-black"
                value={findLog()}
                readOnly={true}
              ></textarea>
              <div className="flex flex-row justify-around pt-2">
                <button
                  type="button"
                  className="rounded-md w-20 m-2 flex place-content-center"
                  onClick={previousDay}
                >
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <div className="font-mono text-lg font-bold pt-2">
                  {format(selectedDay, "MMM-dd-yyyy").toString()}
                </div>
                <button
                  type="button"
                  className="rounded-md h-15 w-20 m-2 flex place-content-center"
                  onClick={nextDay}
                >
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-square box-content rounded-3xl flex flex-col max-w-fit max-h-fit p-3 pt-4 bg-main-bg">
            <div className="flex items-center">
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-white hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <h2 className="flex-auto text-center font-semibold text-white pb-4">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>

              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-white hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="rounded-3xl max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-10 font-mono font-bold bg-white">
              <div className="md:pr-0 flex flex-col mr-0 justify-center pb-6">
                <div className="grid grid-cols-7 gap-x-3 mt-10 text-md leading-6 text-center text-main-bg">
                  <div>sun</div>
                  <div>mon</div>
                  <div>tue</div>
                  <div>wed</div>
                  <div>thu</div>
                  <div>fri</div>
                  <div>sat</div>
                </div>
                <div className="grid grid-cols-7 mt-2 text-lg">
                  {days.map((day, dayIdx) => (
                    <div
                      key={day.toString()}
                      className={classNames(
                        dayIdx === 0 && colStartClasses[getDay(day)],
                        "py-1.5 px-1.5 "
                      )}
                    >
                      {/*
                - if hasLog && log.mood=="0" : bg-red, text-white
                - if hasLog && log.mood="1" : bg-yellow, text-white
                - if hasLog && log.mood="2" : bg-green, text-white
                */}

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDay(day);
                          handleClick();
                        }}
                        className={classNames(
                          hasLog(day) === 0 &&
                            "bg-green-300 text-white font-semibold",
                          hasLog(day) === 1 &&
                            "bg-yellow-600 text-white font-semibold",
                          hasLog(day) === 2 &&
                            "bg-main-bg text-white font-semibold",
                          isEqual(day, selectedDay) &&
                            !isToday(day) &&
                            "text-red-500",
                          isToday(day) &&
                            "outline outline-4 outline-secondary-bg",
                          !isEqual(day, selectedDay) &&
                            hasLog(day) === -1 &&
                            "hover:bg-gray-200",
                          "mx-auto flex h-12 w-12 items-center justify-center rounded-full"
                        )}
                      >
                        <time dateTime={format(day, "yyyy-MM-dd")}>
                          {format(day, "d")}
                        </time>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex flex-row w-3/4 justify-center pb-5 space-x-4"></div>
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

// source: https://www.youtube.com/watch?v=9ySmMd5Cjc0
