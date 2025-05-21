import React from 'react'
import HeroImg1 from '../../../assets/icons/hero.png'
import HeroImg2 from '../../../assets/icons/hero2.png'

const HeroSec = () => {
  return (
    <section
      className="w-full h-[550px] bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${HeroImg1})` }}
    >
        <img src={HeroImg2} className='position w-[100%] h-[100%] left-0' alt="" />
    </section>
  );
}

export default HeroSec