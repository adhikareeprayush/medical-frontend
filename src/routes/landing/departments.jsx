import PageBanner from '../../components/landing/PageBanner';
import { Link } from 'react-router-dom';
import serviceBanner from '../../assets/images/banner/serviceBanner.png';
import doc1 from '../../assets/images/Doc1.png';
import doc2 from '../../assets/images/Doc2.png';
import doc3 from '../../assets/images/Doc3.png';

const departmentData = [
  {
    id: 1,
    name: 'Cardiology',
    description:
      'Expert care for heart conditions with advanced diagnostics and treatments.',
    image: doc1,
  },
  {
    id: 2,
    name: 'Neurology',
    description:
      'Comprehensive care for neurological disorders with a team of specialists.',
    image: doc2,
  },
  {
    id: 3,
    name: 'Orthopedics',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: doc3,
  },
];

const department = () => {
  return (
    <>
      <PageBanner
        subtitle="Departments"
        title={'Our Departments'}
        backgroundImage={serviceBanner}
      />
      <div className="flex w-full flex-col items-center">
        <div className="my-4">
          <h1 className="text-secondary text-center text-xl font-bold tracking-widest uppercase">
            Comprehensive Care Across Specialties
          </h1>
          <p className="text-primary font-display1 text-center">Departments</p>
        </div>
        <section className="relative flex h-full w-full flex-col items-center justify-center gap-10 py-5">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {departmentData.map((dept) => (
              <Link key={dept.id} className="bg-accent text-primary shadow-md">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="h-[320px] w-full object-cover"
                />
                <div className="flex flex-col items-center justify-center px-2 pb-2">
                  <h3 className="mt-2 text-center text-lg font-semibold">
                    {dept.name}
                  </h3>
                  <p className="text-center text-sm">{dept.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default department;
