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
    <section className="mx-auto my-20 shadow">
      <h1 className="text-primary font-display2 sm:font-display1 mb-10 px-3 text-center tracking-wide break-words whitespace-pre-wrap">
        Clinical Department in Nisarga
      </h1>
      <div
        ref={containerRef}
        className="overflow-hidden transition-all duration-700 ease-in-out"
        style={{
          maxHeight: maxHeight,
        }}
      >
        <div className="grid grid-cols-2 gap-1 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
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
                <h3 className="text-primary mb-1 text-lg font-semibold break-words whitespace-pre-wrap line-clamp-3">
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
          className="text-primary hover:bg-primary cursor-pointer border-[1px] border-b-0 px-2 py-1 font-semibold tracking-wide transition duration-300 hover:text-white"
        >
          {expanded ? 'View Less' : 'View More'}
        </button>
      </div>
    </section>
  );
};

export default ClinicalDepartment;
