import React from 'react'

const ServicesBtn = (props) => {
    const { text, styles } = props
  return (
    <button
      className={`cursor-pointer bg-[#BFD2F8] text-[#1A1A1A] font-semibold py-[10px] px-4 rounded-full w-fit ${styles}`}
    >
      {text}
    </button>
  );
}

export default ServicesBtn