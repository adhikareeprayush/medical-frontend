import React from 'react';
import { FaFirstAid } from 'react-icons/fa';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const StickySidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary/90 fixed top-[33%] right-0 hidden cursor-pointer flex-col items-center justify-center rounded-l-md md:flex">
      <div
        onClick={() => navigate('/doctors')}
        className="hover:bg-primary flex flex-col items-center justify-center gap-1 px-[12px] pt-4 pb-3 transition-all duration-200"
      >
        <FaFirstAid className="text-3xl text-white" />
        <h3 className="text-base text-white">Find a Doctor</h3>
      </div>
      <div
        onClick={() => navigate('/appointment')}
        className="hover:bg-primary flex flex-col items-center justify-center gap-1 px-[12px] pt-4 pb-3 transition-all duration-200"
      >
        <FaRegCalendarCheck className="text-3xl text-white" />
        <h3 className="text-base text-white">Appointment</h3>
      </div>
    </div>
  );
};

export default StickySidebar;
