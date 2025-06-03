import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
const PackagesComp = ({ testData }) => {
  return (
    <div className="relative my-4 flex h-[500px] w-[350px] flex-col rounded-2xl shadow-2xl hover:cursor-pointer hover:shadow-black sm:w-[280px] md:w-[300px] lg:w-[320px]">
      <div className="w-full border-b-1 pb-5">
        <div>
          <h1 className="from-primary rounded-t-lg bg-gradient-to-r to-blue-800 p-4 text-center text-2xl font-bold text-white">
            {testData.title}
          </h1>
        </div>

        <div className="flex max-h-64 flex-col justify-between overflow-y-auto">
          <ul>
            {testData.tests.map((testItem, idx) => (
              <li className="flex" key={idx}>
                <GiCheckMark className="text-secondary mx-2 mt-2 text-xl font-bold" />
                <span className="mt-1 text-center text-xl"> {testItem} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute top-[82%] left-5">
        <button className="bg-primary from-primary mx-1 my-2 cursor-pointer rounded-2xl to-blue-600 px-2 py-1 text-lg font-bold text-white transition-all duration-200 hover:bg-gradient-to-r">
          Book this Package
        </button>
      </div>
    </div>
  );
};

export default PackagesComp;
