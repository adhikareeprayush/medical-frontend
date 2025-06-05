import { Link } from 'react-router-dom';
import { useState } from 'react';
import hamburger from '../../assets/icons/hamburger.svg';
import close from '../../assets/icons/close.svg';

const navMenus = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Departments', path: '/departments' },
  { name: 'Our Team', path: '/team' },
  { name: 'News', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <section className="bg-primary relative flex w-full flex-col items-center justify-between py-[18px] lg:flex-row">
      {/* Top Navigation Row */}
      <div className="flex w-full justify-between">
        {/* Desktop Menu */}
        <div className="hidden items-center lg:flex">
          {navMenus.map(({ name, path }, index) => (
            <Link key={index} to={path} className="mx-2 text-white">
              {name}
            </Link>
          ))}
        </div>

        {/* Logo for Mobile */}
        <Link to={'/'}>
          <h1 className="font-display2 text-4xl uppercase lg:hidden">
            <span className="text-secondary">med</span>
            <span className="text-white">dical</span>
          </h1>
        </Link>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-2 lg:gap-4">
          <button className="bg-accent font-body hidden rounded-full px-4 py-2.5 text-[16px] font-bold lg:flex">
            Appointment
          </button>
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
        } bg-accent absolute top-[72px] left-0 z-50 flex w-full flex-col items-center justify-center gap-2 rounded-lg py-4 lg:hidden`}
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
