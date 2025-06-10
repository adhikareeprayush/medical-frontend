import React from 'react';
import { FaFirstAid } from 'react-icons/fa';
import { FaRegCalendarCheck } from 'react-icons/fa6';

const StickySidebar = () => {
  return (
    <div className="bg-primary fixed top-[33%] right-0 hidden cursor-pointer flex-col items-center justify-center rounded-l-md lg:flex">
      <div className="hover:bg-secondary flex flex-col items-center justify-center gap-1 px-[12px] pt-4 pb-3 transition-all duration-200">
        <FaFirstAid className="text-2xl text-white" />
        <h3 className="text-[14px] text-white">Find a Doctor</h3>
      </div>
      <div className="hover:bg-secondary flex flex-col items-center justify-center gap-1 px-[12px] pt-4 pb-3 transition-all duration-200">
        <FaRegCalendarCheck className="text-2xl text-white" />
        <h3 className="text-[14px] text-white">Appointment</h3>
      </div>
    </div>
  );
};

export default StickySidebar;
