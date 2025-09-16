import AdminHeader from '../../components/admin/AdminHeader';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaCogs,
  FaBoxOpen,
  FaNewspaper,
  FaServicestack,
  FaUserMd,
  FaEnvelopeOpenText,
  FaQuoteRight,
  FaImages,
  FaBuilding,
} from 'react-icons/fa';

const sections = [
  {
    name: 'Dashboard',
    icon: <FaHome size={64} />,
    visitLink: '/admin/dashboard',
    manageLink: '/admin/dashboard',
  },

  {
    name: 'Packages',
    icon: <FaBoxOpen size={64} />,
    visitLink: '/admin/packages',
    manageLink: '/admin/packages',
  },
  {
    name: 'News',
    icon: <FaNewspaper size={64} />,
    visitLink: '/admin/news',
    manageLink: '/admin/news',
  },
  {
    name: 'Services',
    icon: <FaServicestack size={64} />,
    visitLink: '/admin/services',
    manageLink: '/admin/services',
  },
  {
    name: 'Doctors',
    icon: <FaUserMd size={64} />,
    visitLink: '/admin/doctors',
    manageLink: '/admin/doctors',
  },
  {
    name: 'Inquiries',
    icon: <FaEnvelopeOpenText size={64} />,
    visitLink: '/admin/inquiries',
    manageLink: '/admin/inquiries',
  },
  {
    name: 'Testimonial',
    icon: <FaQuoteRight size={64} />,
    visitLink: '/admin/testimonial',
    manageLink: '/admin/testimonial',
  },
  {
    name: 'Gallery',
    icon: <FaImages size={64} />,
    visitLink: '/admin/gallery',
    manageLink: '/admin/gallery',
  },
  {
    name: 'Departments',
    icon: <FaBuilding size={64} />,
    visitLink: '/admin/departments',
    manageLink: '/admin/departments',
  },
  {
    name: 'Settings',
    icon: <FaCogs size={64} />,
    visitLink: '/admin/settings',
    manageLink: '/admin/settings',
  },
];

const dashboard = () => {
  return (
    <>
      <AdminHeader
        title={'Dashboard'}
        subtitle={'Overview of all departments'}
      />
      <div className="flex">
        <div className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sections.map((item, index) => (
            <div
              key={index}
              className="flex h-[16rem] w-full flex-col items-center bg-white p-4"
            >
              <div className="text-[24px] font-semibold">{item.name}</div>
              <div className="text-primary flex flex-grow items-center justify-center">
                {item.icon}
              </div>
              <div className="flex gap-4">
                {/* <Link
                  to={item.visitLink}
                  className="border-secondary-800 hover:bg-secondary-800 border-1 px-4 py-1 duration-200 hover:text-white"
                >
                  Visit
                </Link> */}
                <Link
                  to={item.manageLink}
                  className="border-primary hover:bg-primary border-1 px-4 py-1 duration-200 hover:text-white"
                >
                  Manage
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default dashboard;
