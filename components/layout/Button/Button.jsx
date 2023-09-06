import React from "react";

const Button = ({ title, onClickHandle }) => {
  return (
    <button
      onClick={onClickHandle}
      className="min-w-[100px] text-sm p-2 bg-primary border border-primary font-bold text-white hover:border-primary hover:text-primary  hover:bg-white transition-colors ease-linear cursor-pointer"
    >
      {title}
    </button>
  );
};

export default Button;
