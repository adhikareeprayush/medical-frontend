import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const LearnMoreBtn = (props) => {
    const { text, styles } = props;
  return (
    <button
      className={`flex gap-1 items-center justify-center cursor-pointer ${styles}`}
    >
      <p className="text-secondary tracking-wide">{text}</p>
      <FaArrowRight className='text-primary'/>
    </button>
  );
}

export default LearnMoreBtn