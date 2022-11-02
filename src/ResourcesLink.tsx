import React from 'react';
import logo from './logo.svg';
// import './App.css';

function ResourcesLink() {
  return (
    <div className="flex flex-col font-mono h-full justify-end text-2xl text-white w-full">
      <div className="border-4 border-main-bg hover:border-4 hover:border-white hover:cursor-pointer hover:rounded-3xl p-2 rounded-lg text-inherit text-right w-fit">
        (i) mental health resources
      </div>
    </div>
  );
}

export default ResourcesLink;
