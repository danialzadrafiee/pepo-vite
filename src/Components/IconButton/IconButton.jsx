import React from "react";
const IconButton = ({ children, onClick, buttonClass }) => (
  <button onClick={onClick} className={`size-10 border text-primary-500 flex items-center justify-center rounded border-primary-700 bg-primary-950 ${buttonClass}`}>
    {children}
  </button>
);

export default IconButton;
