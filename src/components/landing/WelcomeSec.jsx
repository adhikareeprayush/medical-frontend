import React from 'react';
import LearnMoreBtn from '../common/LearnMoreBtn';
import { Link } from 'react-router-dom';
import DoctorBg from '../../assets/images/docbg.png';
// import DoctorImg from '../../assets/images/hospital_banner.jpg';
const WelcomeSec = () => {
  return (
    <section className="relative flex w-full items-center justify-center px-5 py-4 md:px-7 lg:px-0">
      <div className="z-20 flex w-full max-w-3xl flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-secondary text-base font-bold tracking-widest uppercase sm:text-lg md:text-xl">
          Welcome to Nisarga Hospital
        </h1>
        <p className="text-primary font-display2 lg:font-display1">
          A Great Place to Receive Care
        </p>
        <p className="text-sm tracking-wide text-gray-700 sm:text-base md:text-lg">
          Nisarga Hospital is a modern multi-specialty healthcare center in the
          heart of Dhangadhi Nepal, dedicated to delivering high-quality,
          patient-centered care. Combining advanced medical technology with
          compassionate service, our skilled team ensures each patient receives
          personalized treatment in a safe and healing environment.
        </p>
      </div>
      <div className="absolute top-0 left-0 z-10 h-[100%] w-[100%]">
        <img
          className="h-full w-full object-cover"
          src={DoctorBg}
          alt="DoctorBg"
        />
      </div>
    </section>
  );
};

export default WelcomeSec;
