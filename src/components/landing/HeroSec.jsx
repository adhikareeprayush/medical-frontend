import React from "react";
import HeroImg1 from "../../assets/images/hero.png";
import HeroImg2 from "../../assets/images/hero2.png";
import HeroBanner from "./HeroBanner";  
import AppointmentSec from "./AppointmentSec";

const HeroSec = () => {
  return (
    <section
      className="w-full h-[530px] bg-center bg-cover bg-no-repeat z-20 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${HeroImg1})` }}
    >
      <HeroBanner />
      <AppointmentSec />
    </section>
  );
};

export default HeroSec;
