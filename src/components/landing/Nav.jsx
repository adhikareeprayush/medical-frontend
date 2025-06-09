import { Link } from 'react-router-dom';
import { useState } from 'react';
import hamburger from '../../assets/icons/hamburger.svg';
import close from '../../assets/icons/close.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import DropdownNavItem from '../common/PageDropdown';
import logo from '../../assets/logo.png';

const navMenus = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Departments', path: '/departments' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'News', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const departments = [
  'Orthopedic Surgery',
  'General Medicine',
  'Paediatrics',
  'ENT',
  'Ophthalmology',
  'General Surgery',
  'Dermatology',
  'Gynaecology',
  'Cardiology',
  'Nephrology',
  'Anesthesiology',
  'Neuroscience',
];

const services = [
  'Emergency and Trauma Care',
  'Critical Care',
  'Skin and Aesthetics Clinic',
  'Pharmacy',
  'Physiotherapy',
  'Pain Management Services',
  '24/7 Emergency Medical Service',
  'Cath-lab Services',
  'Acute Stroke Unit',
  'Neonatal Intensive Care Unit (NIC)',
  'OPD',
  'OT and Surgical Services',
  'Radiology and Imaging Services',
  'Saturday OPD Clinic',
  'Ventilator Services',
  '24-hour Digital X-ray Services',
  'Anesthesiology & Critical Care',
  'Neurosurgery',
  'Urology Treatment and Surgical',
  '24-hour Surgical Services',
  '24-hour Emergency and Trauma Treatment Services',
  'Modern Physiotherapy',
  'Hepatology',
  'Gastroenterology Treatment Services',
  'Air-conditioned Cabin Services',
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <section className="bg-accent lg:bg-primary relative flex w-full flex-col items-center justify-between py-[18px] lg:flex-row">
      {/* Top Navigation Row */}
      <div className="flex w-full justify-between">
        {/* Desktop Menu */}
        <div className="hidden items-center lg:flex">
          {navMenus.map(({ name, path }, index) => {
            if (name === 'Departments') {
              return (
                <DropdownNavItem
                  key={index}
                  label="Departments"
                  items={departments}
                  path="/departments"
                  className="text-white"
                />
              );
            } else if (name === 'Services') {
              return (
                <DropdownNavItem
                  key={index}
                  label="Services"
                  items={services}
                  path="/services"
                  className="text-white"
                />
              );
            }

            return (
              <Link key={index} to={path} className="mx-2 text-white">
                {name}
              </Link>
            );
          })}
        </div>

        {/* Logo for Mobile */}
        <Link to={'/'}>
          <img
            src={logo}
            alt="Logo"
            className="size-7 object-contain lg:hidden"
          />
        </Link>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-2 lg:gap-4">
          <button className="cursor-pointer lg:hidden" onClick={toggleMenu}>
            <img src={isOpen ? close : hamburger} alt="Menu toggle" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`transition-all duration-20 ease-in-out ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        } bg-accent absolute top-[95px] left-0 z-50 flex w-full flex-col items-center justify-center gap-2 rounded-lg py-4 lg:hidden`}
      >
        {navMenus.map(({ name, path }, index) => (
          <Link key={index} to={path} className="text-xl" onClick={toggleMenu}>
            {name}
          </Link>
        ))}
        <button className="bg-primary font-body rounded-full px-4 py-2.5 text-[16px] font-bold text-white">
          Appointment
        </button>
      </div>
    </section>
  );
};

export default Nav;
