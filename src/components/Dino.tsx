import React from 'react';
import Stage0 from "../images/stage0.png";
import Stage1 from "../images/stage1.png";
import Stage2 from "../images/stage2.png";
import Stage3 from "../images/stage3.png";
import Stage4 from "../images/stage4.png";
import Stage5 from "../images/stage5.png";


function Dino({ promptAsked, level  } : {promptAsked : boolean, level : number}) {
  console.log("dino.tsx promptAsked:" + promptAsked);
  var FullDino;
  if (level === 0) {
    FullDino = Stage0;
  } else if (level === 1) {
    FullDino = Stage1;
  } else if (level === 2) {
    FullDino = Stage2;
  } else if (level === 3) {
    FullDino = Stage3;
  } else if (level === 4) {
    FullDino = Stage4;
  } else {
    FullDino = Stage5;
  }
  if (!promptAsked) {
    return (         
      <div className="flex justify-center p-5">
        <img
          src={FullDino}
          alt="dino pic"
          className="object-contain w-48"
        />
      </div>
    );
  }
  return null;
}

export default Dino;
