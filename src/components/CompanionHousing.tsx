import React from 'react';
import ProgressBar from './ProgressBar';

function CompanionHousing() {
  return (
    <div className="flex flex-col font-mono h-full items-center justify-center text-2xl text-white w-full">
      <div className="aspect-square bg-secondary-bg flex justify-center rounded-full text-center text-inherit w-9/12">
        <ProgressBar progress="w-[50%]" level={1} />
      </div>
    </div>
  );
}

export default CompanionHousing;
