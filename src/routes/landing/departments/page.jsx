const department = {
  id: 10,
  name: 'Neurology',
  nepali: 'तंत्र विज्ञान',
  slug: 'neurology',
  description:
    "<h2>Neurology</h2><p>Neurology focuses on disorders of the <strong>nervous system</strong>, including the brain, spinal cord, and nerves. Our neurology department provides comprehensive care for:</p><ul><li>Stroke</li><li>Epilepsy</li><li>Multiple sclerosis</li><li>Parkinson's disease</li><li>Neuropathies</li></ul><p>We combine advanced diagnostics with personalized treatment plans to enhance patient quality of life.</p>",
  image_url: 'https://vshhospital.com/media/departments/Nurology.jpg',
};

const DepartmentPage = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[300px] w-full md:h-[400px] lg:h-[500px]">
        <img
          className="h-full w-full object-cover object-center"
          src={department.image_url}
          alt=""
        />
      </div>
      <section>
        <div className="flex flex-col gap-1 py-1">
          <h1 className="font-display2 text-primary">{department.name}</h1>
          <h2 className="font-body1 bg-secondary w-fit rounded-lg p-1 text-white">
            {department.nepali}
          </h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: department.description }} />
      </section>
    </div>
  );
};

export default DepartmentPage;
