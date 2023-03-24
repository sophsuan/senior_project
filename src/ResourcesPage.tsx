import React from "react";
import UpIcon from "./up icon.png";
import DownIcon from "./down icon.png";
import HeartIcon from "./heart icon.png";

export const ResourcesPage = () => {
  return (
    <div
      className='rounded-[100px] xl:rounded-full bg-secondary-bg flex flex-col justify-around items-center focus:outline-none'
      tabIndex={0}
    >
      <div className='aspect-square place-content-center box-content rounded-3xl bg-white flex flex-col m-8 shadow-inner max-w-xl'>
        <div className='max-w-lg'>
          <div className='flex text-xl p-3 justify-center font-black font-mono'>
            Mental Health Resources
          </div>
          <div className='flex text-l p-3 justify-center font-black font-mono'>
            <ul className='list-disc pl-5'>
              <li>
                <a
                  className='text-blue-600 underline dark:text-blue-500 hover:no-underline'
                  href='https://988lifeline.org/'
                >
                  988 Suicide & Crisis Lifeline
                </a>
                : 988 for English or Spanish, or{" "}
                <a
                  className='underline hover:no-underline'
                  href='https://988lifeline.org/chat/'
                >
                  Lifeline Chat
                </a>
                . TTY users can use their preferred relay service or dial 711
                then 988.
              </li>
              <li>
                <p className='text-blue-600 inline'>Crisis Text Line</p>: Text
                SIGNS to 741741 for 24/7, anonymous, free crisis counseling
                Disaster Distress Helpline: CALL or TEXT 1-800-985-5990 (press 2
                for Spanish)
              </li>
              <li>
                <a
                  className='text-blue-600 underline dark:text-blue-500 hover:no-underline'
                  href='https://www.samhsa.gov/disaster-preparedness'
                >
                  Disaster Distress Helpline
                </a>
                : CALL or TEXT 1-800-985-5990 (press 2 for Spanish)
              </li>
              <li>
                <a
                  className='text-blue-600 underline dark:text-blue-500 hover:no-underline'
                  href='https://locator.apa.org/?_ga=1.122738379.1939913089.1455299072'
                >
                  American Psychological Association:
                </a>{" "}
                Find a Psychologist for professional assistance
              </li>
              <br />
              <p className='text-blue-600'>Source and more resources:</p>
              <a
                className='underline hover:no-underline'
                href='https://www.cdc.gov/mentalhealth/tools-resources/individuals/index.htm'
              >
                https://www.cdc.gov/mentalhealth/tools-resources/individuals/index.htm
              </a>
              <br />
              <br />
              <br />
              <br />
              <p className='text-blue-600'>Disclaimer:</p>
              <p>
                This is not a complete list of resources, rather just a good
                place to get started, and not a substitute for professional
                advice. We encourage you to seek professional and/or medical
                help if you require it.
              </p>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:flex flex-row w-3/4 justify-center pb-5 space-x-4">
        <button
          disabled={true}
          className={`${"shadow-none bg-red-200 pt-1 "} aspect-square h-28 bg-white rounded-full flex justify-center items-center shadow-lg`}
        >
          <img src={UpIcon} alt="up" className="object-contain h-12 mb-2 p-1" />
        </button>
        <button
          disabled={true}
          className={`${"shadow-none bg-red-200 pt-1 "} aspect-square h-40 bg-white rounded-full flex justify-center items-center shadow-lg `}
        >
          <img src={HeartIcon} alt="heart" className="object-contain h-18" />
        </button>

        <button
          disabled={true}
          className={`${"shadow-none bg-red-200 pt-1 "} aspect-square h-28 bg-white rounded-full flex justify-center items-center shadow-lg `}
        >
          <img
            src={DownIcon}
            alt="down"
            className="object-contain h-12 mt-2 p-1"
          />
        </button>
      </div>*/}
    </div>
  );
};
