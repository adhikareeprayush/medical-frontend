import { Link } from "react-router-dom";
import { useState } from "react";
import hamburger from "../../assets/icons/hamburger.svg";
import close from "../../assets/icons/close.svg";

const navMenus = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Departments", path: "/departments" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <section className="flex items-center w-full justify-between bg-primary py-[18px] lg:flex-row flex-col relative">
      {/* Top Navigation Row */}
      <div className="flex w-full justify-between">
        {/* Desktop Menu */}
        <div className="items-center lg:flex hidden">
          {navMenus.map(({ name, path }, index) => (
            <Link key={index} to={path} className="text-white mx-2">
              {name}
            </Link>
          ))}
        </div>

        {/* Logo for Mobile */}
        <Link to={"/"}>
          <h1 className="uppercase font-display2 text-4xl lg:hidden">
            <span className="text-secondary">med</span>
            <span className="text-white">dical</span>
          </h1>
        </Link>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-2 lg:gap-4">
          <button className="bg-accent px-4 py-2.5 rounded-full text-[16px] font-bold font-body hidden lg:flex">
            Appointment
          </button>
          <button className="lg:hidden  cursor-pointer" onClick={toggleMenu}>
            <img src={isOpen ? close : hamburger} alt="Menu toggle" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`transition-all duration-20 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }  flex flex-col items-center justify-center gap-2 z-10 bg-accent w-full absolute top-[72px] left-0 py-4 rounded-lg lg:hidden`}
      >
        {navMenus.map(({ name, path }, index) => (
          <Link key={index} to={path} className="text-xl" onClick={toggleMenu}>
            {name}
          </Link>
        ))}
        <button className="bg-primary text-white px-4 py-2.5 rounded-full text-[16px] font-bold font-body">
          Appointment
        </button>
      </div>
    </section>
  );
};

export default Nav;
