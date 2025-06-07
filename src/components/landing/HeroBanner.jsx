import React from 'react'
import ServicesBtn from './ServicesBtn'
import { Link } from 'react-router-dom' 

const HeroBanner = () => {
  return (
    <div className="flex h-[300px] flex-col justify-center gap-2">
      <p className="text-secondary font-display text-xl font-bold tracking-widest uppercase">
        Caring for Life
      </p>
      <p className="text-primary font-display1">
        {' '}
        Leading the Way <br /> in Medical Excellence
      </p>
      <Link to="/services">
        <ServicesBtn text=" Our Services" styles="mt-3 hover:bg-primary/80 hover:text-white transition-all duration-200" />
      </Link>
    </div>
  );
}

export default HeroBanner