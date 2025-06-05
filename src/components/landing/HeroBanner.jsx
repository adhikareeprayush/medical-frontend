import React from 'react'
import ServicesBtn from './ServicesBtn'

const HeroBanner = () => {
  return (
    <div className="flex flex-col gap-2 justify-center h-[300px]">
      <p className="text-secondary font-display font-bold text-xl tracking-widest uppercase">
        Caring for Life
      </p>
      <p className="text-primary font-display1">
        {" "}
        Leading the Way <br /> in Medical Excellence
      </p>
      <ServicesBtn text=" Our Services" styles="mt-3" />
    </div>
  );
}

export default HeroBanner