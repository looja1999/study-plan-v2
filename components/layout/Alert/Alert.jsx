import React from "react";

const Alert = ({ text }) => {
  return (
    <div className="p-3 text-sm bg-gray-300 flex flex-col gap-2">
      <h1 className="tracking-wide font-bold">Alert</h1>
      <p>{text}</p>
    </div>
  );
};

export default Alert;
