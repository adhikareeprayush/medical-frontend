import PageBanner from '../../components/landing/PageBanner';
import { FaSearch } from 'react-icons/fa';
import serviceBanner from '../../assets/images/banner/serviceBanner.png';
import departmentData from '../../data/departmentData';
import DepartmentCard from '../../components/landing/DepartmentCard';

const department = () => {
  return (
    <>
      <PageBanner
        subtitle="Departments"
        title="Our Departments"
        backgroundImage={serviceBanner}
      />
      <div className="flex w-full flex-col items-center my-6">
        <div className="">
          <h1 className="text-secondary text-center text-xl font-bold tracking-widest uppercase mb-2">
            Comprehensive Care Across Specialties
          </h1>
          <p className="text-primary font-display1 text-center">Departments</p>
          <div className="mx-auto my-5 flex w-full max-w-[300px] items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm transition-all focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            <FaSearch className="ml-2 cursor-pointer text-gray-500 transition-colors hover:text-gray-700" />
          </div>
        </div>

        <section className="relative flex h-full w-full flex-col items-center justify-center gap-12 py-3">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
            {departmentData.map((dept) => (
              <DepartmentCard key={dept.id} dept={dept} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default department;
