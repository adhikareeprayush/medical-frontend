import React, { useEffect, useState } from 'react';
import { getAllDepartments } from '../../utils/api';
import PageBanner from '../../components/landing/PageBanner';
import { FaSearch } from 'react-icons/fa';
import serviceBanner from '../../assets/images/banner/serviceBanner.png';
import DepartmentCard from '../../components/landing/DepartmentCard';

const department = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();
      setDepartments(response.data.data);
      console.log('Fetched departments:', response.data.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  useEffect(() => {
    fetchDepartments();
    setLoading(false);
  }, []);

  // Optional: filter departments by search term
  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <PageBanner
        subtitle="Departments"
        title="Our Departments"
        backgroundImage={serviceBanner}
      />
      <div className="flex w-full flex-col items-center">
        <div className="my-4">
          <h1 className="text-secondary text-center text-xl font-bold tracking-widest uppercase">
            Comprehensive Care Across Specialties
          </h1>
          <p className="text-primary font-display1 text-center">Departments</p>
          <div className="my-2 ml-10 flex w-[300px] items-center justify-between rounded-full px-2 py-1 shadow-2xs md:ml-36 lg:ml-36">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="border-none bg-transparent outline-none focus:border-none focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="cursor-pointer text-gray-400" />
          </div>
        </div>

        {loading && <p className="py-10 text-center">Loading departments...</p>}
        {error && <p className="py-10 text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <section className="relative flex h-full w-full flex-col items-center justify-center gap-12 py-5">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
              {filteredDepartments.length > 0 ? (
                filteredDepartments.map((dept) => (
                  <DepartmentCard key={dept.id} dept={dept} />
                ))
              ) : (
                <p className="w-full py-10 text-center">
                  No departments found.
                </p>
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default department;
