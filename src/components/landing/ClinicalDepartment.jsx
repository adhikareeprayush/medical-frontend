import React, { useState } from 'react';
import clinicalDepartment from '../../data/department.js';
import { Link } from 'react-router-dom';

const ClinicalDepartment = () => {
  const [showAll, setShowAll] = useState(false);

  const departmentsToShow = showAll
    ? clinicalDepartment
    : clinicalDepartment.slice(0, Math.ceil(clinicalDepartment.length / 2));

  const toggleShowAll = () => setShowAll((prev) => !prev);

  return (
    <section className="mx-auto mt-40 mb-10 max-w-screen-xl">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {departmentsToShow.map((department) => (
          <div key={department.id}>
            <Link
              to={`/departments/${department.id}`}
              className="flex flex-col items-center p-4 text-center"
            >
              <div className="bg-primary mb-3 rounded-2xl p-3">
                <img
                  src={department.image}
                  alt={department.name}
                  className="h-16 w-16 object-cover"
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

      <div className="mt-6 text-center">
        <button
          onClick={toggleShowAll}
          className="font-medium text-blue-600 hover:underline"
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </section>
  );
};

export default ClinicalDepartment;
