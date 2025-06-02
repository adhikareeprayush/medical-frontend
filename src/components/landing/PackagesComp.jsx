import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
const PackagesComp = () => {
  return (
    <div className="relative my-4 flex h-[500px] flex-col shadow-2xl lg:w-[300px]">
      <div>
        <h1 className="from-primary rounded-t-lg bg-gradient-to-r to-blue-800 p-4 text-center text-2xl font-bold text-white">
          Title of Test
        </h1>
      </div>

      <div className="flex flex-col justify-between">
        <ul>
          <li className="flex">
            <GiCheckMark className="text-secondary mx-2 mt-2" />
            <span className="mt-1 text-center text-xl">test</span>
          </li>
        </ul>
      </div>
      <div className="absolute top-[80%] right-5 text-xl">
        <button className="bg-primary mx-1 my-2 rounded-2xl px-1 py-1 font-bold text-white">
          Book this Package
        </button>
      </div>
    </div>
  );
};

export default PackagesComp;
