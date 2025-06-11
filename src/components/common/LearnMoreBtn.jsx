import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const LearnMoreBtn = ({ text, styles = '', textStyles = '' }) => {
  return (
    <button
      type="button"
      className={`group text-primary hover:bg-primary focus:ring-primary flex items-center gap-2 rounded-md py-2 text-sm font-semibold transition-all duration-100 ease-in-out hover:text-white focus:ring-2 focus:ring-offset-2 focus:outline-none ${styles}`}
    >
      <span
        className={`tracking-wide transition-colors duration-300 ${textStyles}`}
      >
        {text}
      </span>
      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
    </button>
  );
};

export default LearnMoreBtn;
