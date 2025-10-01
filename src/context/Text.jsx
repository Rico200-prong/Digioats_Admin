import React from "react";

const Text = ({ className, text }) => {
  return <div className={`font-[400] ${className}`}>{text}</div>;
};

export default Text;
