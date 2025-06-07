import SectionHeader from './SectionHeader';

const OurDepartments = () => {
  return (
    <section className="flex w-full flex-col py-3">
      <SectionHeader
        title="Our Departments"
        subtitle="Explore our specialized departments"
      />
      {/* Grid Layout  */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Department Cards */}
        <div className="flex flex-col">
          <img
            className="h-[100px] w-[100px] rounded-full object-cover shadow-md"
            src="src\assets\images\Doc1.png"
          />
          <h3 className="text-xl font-semibold">Cardiology</h3>
        </div>
      </div>
    </section>
  );
};

export default OurDepartments;
