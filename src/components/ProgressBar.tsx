import React from 'react';
import PixelHeart from './../images/pixel-heart.svg';

function ProgressBar ({progress, level, promptAsked} : {progress : number, level : number, promptAsked : boolean}) {
  if (!promptAsked) {
    return (
      <div className="flex font-mono h-10 items-center mt-[8%] rounded-full self-center text-xl lg:text-2xl text-main-bg w-11/12">
        <img className="aspect-square flex h-[200%] z-50" src={PixelHeart} />
        <div className="border-[6px] border-main-bg bg-main-bg flex flex-row font-mono h-full justify-start -ml-[12%] rounded-full text-white w-full">
            <span className={`bg-white flex h-full rounded-full w-[${progress}%]`} />
        </div>
        <div className="ml-4 w-20">
          lv {level}
        </div>
      </div>
    );
  }
  return null;
}

export default ProgressBar;
