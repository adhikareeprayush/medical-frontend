import React from 'react';
import DoctorBg from '../../assets/images/docbg.png';
import DoctorImg from '../../assets/images/hospital_banner.jpg';

const DoctorSec = () => {
  return (
    <section
      className="relative sm:my-8 mx-auto h-[300px] w-[100%] bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${DoctorImg})` }}
    >
      <div className="absolute top-0 left-0 h-[100%] w-[100%]">
        <img className="h-full w-full object-cover" src={DoctorBg} alt="DoctorBg" />
      </div>
    </section>
  );
};

export default DoctorSec;
