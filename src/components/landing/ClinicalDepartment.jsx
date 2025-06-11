import React, { useState, useRef, useEffect } from 'react';
import clinicalDepartment from '../../data/department.js';
import { Link } from 'react-router-dom';

const ClinicalDepartment = () => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (containerRef.current) {
      setMaxHeight(
        expanded ? `${containerRef.current.scrollHeight}px` : '600px',
      ); // 600px = visible height for collapsed
    }
  }, [expanded]);

  return (
    <section className=" mx-auto shadow mt-40 mb-20">
        <h1 className='text-primary font-display1 text-center tracking-wide mb-14'>Clinical Department in Nisarga</h1>
      <div
        ref={containerRef}
        className="overflow-hidden transition-all duration-700 ease-in-out"
        style={{
          maxHeight: maxHeight,
        }}
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {clinicalDepartment.map((department) => (
            <div key={department.id}>
              <Link
                to={`/departments/${department.id}`}
                className="flex flex-col items-center p-4 text-center"
              >
                <div className="bg-primary mb-3 rounded-2xl p-3">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="h-15 w-15 object-cover"
                  />
                </div>
                <h3 className="text-primary mb-1 text-lg font-semibold">
                  {department.name}
                </h3>
                <h3 className="text-lg">{department.nepali_name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* View More / View Less button */}
      <div className="text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="cursor-pointer border-[1px] border-b-0 px-2 py-1 text-primary font-semibold transition duration-300 tracking-wide hover:bg-primary hover:text-white"
        >
          {expanded ? 'View Less' : 'View More'}
        </button>
      </div>
    </section>
  );
};

export default ClinicalDepartment;
