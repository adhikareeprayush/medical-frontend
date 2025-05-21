import React from 'react'

const ServicesBtn = (props) => {
    const { text, styles } = props
  return (
    <button
      className={`bg-[#BFD2F8] text-[#1A1A1A] font-bold py-2 px-4 rounded-full ${styles}`}
    >
      {text}
    </button>
  );
}

export default ServicesBtn