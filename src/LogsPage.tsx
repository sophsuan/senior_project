import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const LogsPage = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="flex h-screen place-content-center">
      <div className="flex self-center max-h-md">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};
