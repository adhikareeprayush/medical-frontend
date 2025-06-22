import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import hamburger from '../../assets/icons/hamburger.svg';
import close from '../../assets/icons/close.svg';
import DropdownNavItem from '../common/PageDropdown';
import logo from '../../assets/logo.png';
import { getAllDepartments, getAllServices } from '../../utils/api';
import { MenuIcon, X } from 'lucide-react';

const navMenus = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Departments', path: '/departments' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

// const services = [
//   'Emergency and Trauma Care',
//   'Critical Care',
//   'Skin and Aesthetics Clinic',
//   'Pharmacy',
//   'Physiotherapy',
//   'Pain Management Services',
//   '24/7 Emergency Medical Service',
//   'Cath-lab Services',
//   'Acute Stroke Unit',
//   'Neonatal Intensive Care Unit (NIC)',
//   'OPD',
//   'OT and Surgical Services',
//   'Radiology and Imaging Services',
//   'Saturday OPD Clinic',
//   'Ventilator Services',
//   '24-hour Digital X-ray Services',
//   'Anesthesiology & Critical Care',
//   'Neurosurgery',
//   'Urology Treatment and Surgical',
//   '24-hour Surgical Services',
//   '24-hour Emergency and Trauma Treatment Services',
//   'Modern Physiotherapy',
//   'Hepatology',
//   'Gastroenterology Treatment Services',
//   'Air-conditioned Cabin Services',
// ];

const Nav = () => {
  const [services, setServices] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getAllServices();
        setServices(response.data.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    const fetchDepartments = async () => {
      try {
        const response = await getAllDepartments();
        setDepartments(response.data.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [serviceRes, departmentRes] = await Promise.all([
          getAllServices(),
          getAllDepartments(),
        ]);
        setServices(serviceRes.data.data || []);
        setDepartments(departmentRes.data.data || []);
      } catch (error) {
        console.error('Error fetching navigation data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex h-[100px] w-full flex-col items-center justify-between bg-transparent lg:flex-row">
      {/* Top Navigation Row */}
      <div
        className={`flex w-full justify-between ${isHome ? 'bg-white lg:bg-transparent' : 'bg-transparent py-0 lg:bg-white lg:py-2'} `}
      >
        {/* Desktop Menu */}
        <section className="hidden items-center gap-5 lg:flex">
          <div className="h-fit w-fit rounded-xl">
            <img
              className="hidden object-contain brightness-150 filter lg:inline-block"
              src={logo}
              width={100}
              height={100}
              alt="Logo"
            />
          </div>
          <div className="flex">
            {navMenus.map(({ name, path }, index) => {
              if (name === 'Departments') {
                return (
                  <DropdownNavItem
                    key={index}
                    label="Departments"
                    items={departments}
                    path="/departments"
                    className="hover:text-secondary grid-cols-3 text-xl font-semibold text-white xl:grid-cols-4"
                  />
                );
              } else if (name === 'Services') {
                return (
                  <DropdownNavItem
                    key={index}
                    label="Services"
                    items={services}
                    path="/services"
                    className="hover:text-secondary grid-cols-4 text-xl font-semibold text-white"
                  />
                );
              }

              return (
                <Link
                  key={index}
                  to={path}
                  className={`mx-2 text-xl font-semibold duration-300 hover:scale-[1.1] ${isHome ? 'hover:text-secondary text-white' : 'hover:text-secondary text-black'} `}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Logo for Mobile */}
        <Link to={'/'}>
          <img
            src={logo}
            alt="Logo"
            className="size-[105px] object-contain lg:hidden"
          />
        </Link>

        {/* Right-side Buttons */}
        <div className="mr-2 flex items-center gap-2 lg:gap-4">
          <button className="cursor-pointer lg:hidden" onClick={toggleMenu}>
            <img src={isOpen ? close : hamburger} alt="Menu toggle" />
            {!isOpen ? <MenuIcon /> : <X />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen
            ? 'pointer-events-auto translate-x-0 opacity-100'
            : 'pointer-events-none -translate-x-100 opacity-0'
        } bg-accent absolute top-[105px] left-0 z-50 flex w-full flex-col items-center justify-center gap-3 py-4 lg:hidden`}
      >
        {navMenus.map(({ name, path }, index) => {
          return (
            <Link
              key={index}
              to={path}
              className="text-primary text-xl"
              onClick={toggleMenu}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
