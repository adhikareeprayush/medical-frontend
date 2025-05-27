import React from 'react'
import HeroSec from '../components/landing/Hero Section/HeroSec';
import WelcomeSec from '../components/WelcomeSec';
import DoctorSec from '../components/landing/DoctorSec';
import OurDocSec from '../components/landing/Hero Section/OurDocSec';

const Home = () => {
  return (
    <div>
      <HeroSec />
      <WelcomeSec />
      <DoctorSec />
      <OurDocSec />
    </div>
  );
}

export default Home