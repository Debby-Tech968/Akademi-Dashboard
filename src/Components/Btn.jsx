import React from "react";

const Btn = ({ text, className, icon }) => {
  return (
    <button className={`flex items-center gap-2 ${className}`}>
      {text}
      {icon && <img src={icon} alt="icon" className="w-4 h-4" />}
    </button>
  );
};

export default Btn;
