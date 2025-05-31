import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const LearnMoreBtn = (props) => {
    const { text, styles, textStyles } = props;
  return (
    <button
      className={`flex gap-1 items-center cursor-pointer ${styles}`}
    >
      <p className={`tracking-wider ${textStyles}`}>{text}</p>
      <FaArrowRight className='text-primary'/>
    </button>
  );
}

export default LearnMoreBtn