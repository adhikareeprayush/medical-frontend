import React from "react";
import DoctorBg from "../../assets/images/docbg.png";
import DoctorImg from "../../assets/images/doctors.png";

const DoctorSec = () => {
  return (
    <section
      className="my-10 relative bg-center bg-contain bg-no-repeat mx-auto w-[75%] h-[300px]"
      style={{ backgroundImage: `url(${DoctorImg})` }}
    >
      <div className="absolute top-0 left-0 w-[100%] h-[100%]">
        <img className="w-full h-full object-contain" src={DoctorBg} alt="" />
      </div>
    </section>
  );
};

export default DoctorSec;
