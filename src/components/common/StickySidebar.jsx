    import React from 'react'
    import { FaFirstAid } from 'react-icons/fa';
    import { FaRegCalendarCheck } from 'react-icons/fa6';
    import { Link } from 'react-router-dom';


    const StickySidebar = () => {
    return (
      <div className="bg-primary fixed top-[33%] right-0 hidden cursor-pointer flex-col items-center justify-center rounded-l-md lg:flex">
        <Link>
          <div className="hover:bg-secondary/80 flex flex-col items-center justify-center gap-1 overflow-hidden px-[12px] pt-4 pb-3 transition-all duration-200">
            <FaFirstAid className="text-3xl text-white" />
            <h3 className="text-base text-white">Find a Doctor</h3>
          </div>
        </Link>
        <Link>
          <div className="hover:bg-secondary/80 flex flex-col items-center justify-center gap-1 overflow-hidden px-[12px] pt-4 pb-3 transition-all duration-200">
            <FaRegCalendarCheck className="text-3xl text-white" />
            <h3 className="text-base text-white">Appointment</h3>
          </div>
        </Link>
      </div>
    );
    }

    export default StickySidebar