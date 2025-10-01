import React from "react";

const Subheading = ({ className, subHeading }) => {
  return (
    <div className={`font-[500] text-[18px]  ${className}`}>{subHeading}</div>
  );
};

export default Subheading;
