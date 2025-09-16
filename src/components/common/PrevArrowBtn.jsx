import React from 'react'
import { GrPrevious } from "react-icons/gr";

const PrevArrowBtn = (props) => {
    const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
        <GrPrevious className="text-2xl text-blue-500" />
    </div>
  )
}

export default PrevArrowBtn