import PageBanner from '../../components/landing/PageBanner';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import serviceBanner from '../../assets/images/banner/serviceBanner.png';
import cardiology from '../../assets/images/departmentsphoto/cardiology.jpg';
import nephrology from '../../assets/images/departmentsphoto/nephrology.jpg';
import Orthopedics from '../../assets/images/departmentsphoto/orthopedic.jpg';
import generalsurgery from '../../assets/images/departmentsphoto/General-Surger.jpg';
import generalmedicine from '../../assets/images/departmentsphoto/General-Medicine.jpg';
import neuroscience from '../../assets/images/departmentsphoto/neuroscience.jpg';
import gynaecology from '../../assets/images/departmentsphoto/gyanocology.png';
import paediatrics from '../../assets/images/departmentsphoto/paedaitrics.jpg';
import ENT from '../../assets/images/departmentsphoto/ent.jpg';
import Oncology from '../../assets/images/departmentsphoto/oncology.jpg';
import Dermatology from '../../assets/images/departmentsphoto/dermatology.jpg';
import Cardiology from '../../assets/images/departmentsphoto/cardiology.jpg';
import Nephrology from '../../assets/images/departmentsphoto/nephrology.jpg';
import Anesthesiology from '../../assets/images/departmentsphoto/anesthesiology.png';
import RecentPosts from '../../components/landing/RecentPosts';

const departmentData = [
  {
    id: 1,
    name: 'Cardiology',
    nepali: 'कार्डियोलोजी',
    description:
      'Expert care for heart conditions with advanced diagnostics and treatments.',
    image: cardiology,
  },
  {
    id: 2,
    name: 'Neurology',
    nepali: 'स्नायु विज्ञान',
    description:
      'Comprehensive care for neurological disorders with a team of specialists.',
    image: nephrology,
  },
  {
    id: 3,
    name: 'Orthopedics',
    nepali: 'हाड जोर्नी विभाग',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: Orthopedics,
  },
  {
    id: 4,
    name: 'General Surgery',
    nepali: 'शल्य चिकित्सा',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: generalsurgery,
  },
  {
    id: 5,
    name: 'General Medicine',
    nepali: 'सामान्य चिकित्सा',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: generalmedicine,
  },
  {
    id: 6,
    name: 'Neuroscience',
    nepali: 'स्नायु विज्ञान',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: neuroscience,
  },
  {
    id: 7,
    name: 'Gynaecology/ Obstetrics',
    nepali: 'स्त्री रोग / प्रसूति विज्ञान',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: gynaecology,
  },
  {
    id: 8,
    name: 'Paediatrics',
    nepali: 'बालरोग',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: paediatrics,
  },
  {
    id: 9,
    name: 'ENT',
    nepali: 'कान नाक घाँटी',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: ENT,
  },
  {
    id: 10,
    name: 'Cardiology',
    nepali: 'कार्डियोलोजी',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: Cardiology,
  },
  {
    id: 11,
    name: 'Oncology',
    nepali: 'ओन्कोलोजी',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: Oncology,
  },
  {
    id: 12,
    name: 'Dermatology',
    nepali: 'त्वचा विज्ञान',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: Dermatology,
  },
  {
    id: 13,
    name: 'Nephrology',
    nepali: 'नेफ्रोलोजी',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: Nephrology,
  },
  {
    id: 14,
    name: 'Anesthesiology',
    nepali: 'एनेस्थेसियोलोजी',
    description:
      'Specialized treatment for musculoskeletal issues, including surgeries and rehabilitation.',
    image: Anesthesiology,
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
                  <h3 className="mt-2 text-center text-lg font-semibold md:text-left">
                    {dept.name}
                  </h3>
                  <h3 className="bg-primary my-1 px-1 py-0.5 text-center text-sm font-semibold text-white md:text-left">
                    {dept.nepali}
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
