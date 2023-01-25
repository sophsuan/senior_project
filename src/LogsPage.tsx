import { useEffect, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import UpIcon from "./up icon.png";
import DownIcon from "./down icon.png";
import HeartIcon from "./heart icon.png";
import { userContext } from "./userContext";

const tmpLogs = [
  {
    userId: "user1",
    date: "2023-01-09T13:00",
    response: "This is the first log",
    mood: "1",
  },
  {
    userId: "user2",
    date: "2023-01-01T17:00",
    response: "This is the second log",
    mood: "0",
  },
  {
    userId: "user3",
    date: "2023-01-20T14:00",
    response: "This is the third log",
    mood: "2",
  },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export function LogsPage() {
  const { clientId } = useContext(userContext);
  const [logs, setLogs] = useState();

  // useEffect(() => {
  //   const fetchLogs = async () => {
  //     try {
  //       await fetch(
  //         "http://localhost:3001/api/user?" +
  //           new URLSearchParams({ userId: clientId }),
  //         {
  //           method: "GET",
  //         }
  //       ).then((response) => {
  //         return response.json().then((response) => {
  //           console.log("response experience", response);
  //           setLogs(response);
  //         });
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (clientId !== "") fetchLogs();
  // }, [clientId]);

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

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

  function hasLog(day: Date): Number {
    for (var i = 0; i < tmpLogs.length; i++) {
      if (isSameDay(day, parseISO(tmpLogs[i].date))) {
        console.log(day, parseISO(tmpLogs[i].date));
        return Number(tmpLogs[i].mood);
      }
    }
    return -1;
  }

  return (
    <div
      className="flex place-content-center bg-secondary-bg rounded-full flex flex-col justify-around items-center focus:outline-none"
      tabIndex={0}
    >
      <div className="bg-white p-2 rounded-3xl flex place-content-center">
        <div className="aspect-square box-content rounded-3xl flex flex-col max-w-fit max-h-fit p-3 pb-0 pt-4 bg-main-bg">
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
          <div className="rounded-3xl max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 font-mono font-bold bg-white ">
            <div className="md:pr-14">
              <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-main-bg">
                <div>sun</div>
                <div>mon</div>
                <div>tue</div>
                <div>wed</div>
                <div>thu</div>
                <div>fri</div>
                <div>sat</div>
              </div>
              <div className="grid grid-cols-7 mt-2 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      "py-1.5"
                    )}
                  >
                    {/*
                - if hasLog && log.mood=="0" : bg-red, text-white
                - if hasLog && log.mood="1" : bg-yellow, text-white
                - if hasLog && log.mood="2" : bg-green, text-white
                */}

                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        hasLog(day) === 2 &&
                          "bg-green-300 text-white font-semibold",
                        hasLog(day) === 1 &&
                          "bg-yellow-600 text-white font-semibold",
                        hasLog(day) === 0 &&
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
      </div>
      <div className="hidden md:flex flex-row w-3/4 justify-center pb-5 space-x-4">
        {/* the buttons */}
        <button
          className={`${"shadow-none bg-red-200 pt-1 "} aspect-square h-28 bg-white rounded-full flex justify-center items-center shadow-lg hover:bg-red-200 active:shadow-none active:pt-1`}
        >
          <img src={UpIcon} alt="up" className="object-contain h-12 mb-2 p-1" />
        </button>
        <button
          className={`${"shadow-none bg-red-200 pt-1 "} aspect-square h-40 bg-white rounded-full flex justify-center items-center shadow-lg hover:bg-red-200 active:shadow-none active:pt-1`}
        >
          <img src={HeartIcon} alt="heart" className="object-contain h-18" />
        </button>

        <button
          className={`${"shadow-none bg-red-200 pt-1 "} aspect-square h-28 bg-white rounded-full flex justify-center items-center shadow-lg hover:bg-red-200 active:shadow-none active:pt-1`}
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
