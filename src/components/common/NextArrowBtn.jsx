import React from "react";
import { GrNext } from "react-icons/gr";

const NextArrowBtn = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <GrNext className="text-2xl text-blue-500" />
    </div>
  );
};

export default NextArrowBtn;
