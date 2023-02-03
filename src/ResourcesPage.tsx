import React from "react";
import UpIcon from "./up icon.png";
import DownIcon from "./down icon.png";
import HeartIcon from "./heart icon.png";

export const ResourcesPage = () => {
  return (
    <div
      className="rounded-[100px] xl:rounded-full bg-secondary-bg flex flex-col justify-around items-center focus:outline-none"
      tabIndex={0}
    >
      <div className="aspect-square place-content-center box-content rounded-3xl bg-white flex flex-col m-8 shadow-inner max-w-xl">
        <div className="max-w-lg">
          <div className="flex text-xl p-3 justify-center font-black font-mono">
            Mental Health Resources
          </div>
          <div className="flex text-l p-3 justify-center font-black font-mono">
            <ul className="list-disc pl-5">
              <li>
                988 Suicide & Crisis Lifeline: 988 for English or Spanish, or
                Lifeline Chat.{" "}
              </li>
              <li>
                TTY users can use their preferred relay service or dial 711 then
                988.{" "}
              </li>
              <li>
                Crisis Text Line: Text SIGNS to 741741 for 24/7, anonymous, free
                crisis counseling Disaster Distress Helpline: CALL or TEXT
                1-800-985-5990 (press 2 for Spanish)
              </li>
              <br />
              source and more:
              https://www.cdc.gov/mentalhealth/tools-resources/individuals/index.htm
            </ul>
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
};
