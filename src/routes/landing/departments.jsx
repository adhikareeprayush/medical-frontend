import React, { useEffect, useState, useRef } from 'react';
import { getAllDepartments } from '../../utils/api';
import PageBanner from '../../components/landing/PageBanner';
import { FaSearch } from 'react-icons/fa';
import serviceBanner from '../../assets/images/banner/serviceBanner.png';
import DepartmentCard from '../../components/landing/DepartmentCard';
import { Loader2 } from 'lucide-react';
import Loader from '../../components/common/Loader';

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const fetchedRef = useRef(false); // prevents double fetch

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();
      const unique = removeDuplicates(response.data.data);
      setDepartments(unique);
      console.log('Fetched departments:', unique);
    } catch (error) {
      console.error('Error fetching departments:', error);
      setError('Failed to load departments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!fetchedRef.current) {
      fetchedRef.current = true;
      fetchDepartments();
    }
  }, []);

  const removeDuplicates = (arr) => {
    const map = new Map();
    arr.forEach((dept) => {
      if (!map.has(dept.id)) map.set(dept.id, dept);
    });
    return Array.from(map.values());
  };

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
      <div className="my-6 flex w-full flex-col items-center px-1">
        <div className="">
          <h1 className="text-secondary mb-2 text-center text-base font-bold tracking-widest uppercase sm:text-xl">
            Comprehensive Care Across Specialties
          </h1>
          <p className="text-primary font-display1 text-center">Departments</p>
          <div className="mx-auto my-5 flex w-full max-w-[300px] items-center rounded-full border border-gray-300 bg-white px-2 shadow-sm transition-all focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="search"
              placeholder="Search"
              className="border-none bg-transparent outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="ml-2 cursor-pointer text-gray-500" />
          </div>
        </div>

        {loading && <Loader />}
        {error && <p className="py-10 text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <section className="relative flex h-full w-full flex-col items-center justify-center gap-12 py-2 sm:py-5">
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

export default Department;
