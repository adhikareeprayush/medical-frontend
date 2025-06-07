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
      <div className="flex w-full flex-col items-center">
        <div className="my-4">
          <h1 className="text-secondary text-center text-xl font-bold tracking-widest uppercase">
            Comprehensive Care Across Specialties
          </h1>
          <p className="text-primary font-display1 text-center">Departments</p>
          <div className="shadow-slate-700black my-2 ml-28 flex w-[300px] items-center justify-between rounded-full px-2 py-1 shadow-2xs md:ml-36 lg:ml-36">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="border-none bg-transparent outline-none focus:border-none focus:outline-none"
            />
            <FaSearch className="cursor-pointer text-gray-400" />
          </div>
        </div>

        <section className="relative flex h-full w-full flex-col items-center justify-center gap-12 py-5">
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
