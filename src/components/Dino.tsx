import React from 'react';
import FullDino from "../full_dino_placeholder.png";


function Dino({ promptAsked  } : {promptAsked : boolean}) {
  console.log(promptAsked);
  if (!promptAsked) {
    return (         
      <div className="flex justify-center m-6">
        <img
          src={FullDino}
          alt="dino pic"
          className="object-contain h-40 w-40 pt-1 pl-1 pr-1"
        />
      </div>
    );
  }
  return null;
}

export default Dino;
