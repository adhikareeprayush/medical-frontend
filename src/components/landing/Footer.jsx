import { useState } from "react";
import { Link } from "react-router-dom";
import send from "../../assets/icons/send.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const footerMenus = [
  {
    title: "Important Links",
    subMenus: [
      { title: "Appointment", link: "/appointment" },
      { title: "Doctors", link: "/doctors" },
      { title: "Services", link: "/services" },
      { title: "About Us", link: "/about" },
    ],
  },
  {
    title: "Contact Us",
    subMenus: [
      { title: "Call: (+251) 911 11 11 11", link: "tel:+251911111111" },
      {
        title: "Email: fildineesoe@gmail.com",
        link: "mailto:fildineesoe@gmail.com",
      },
      { title: "Address: Addis Ababa, Ethiopia", link: "#" },
    ],
  },
];

const socialLinks = [
  { icon: facebookIcon, link: "https://www.facebook.com" },
  { icon: instagramIcon, link: "https://www.instagram.com" },
  { icon: linkedinIcon, link: "https://www.linkedin.com" },
];

const Footer = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleMenu = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-primary py-4 w-full flex flex-col items-center gap-3 text-white">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:flex-wrap w-full gap-4">
        {/* Logo and slogan */}
        <div className="flex flex-col gap-2">
          <h1 className="uppercase font-display2 text-4xl">
            <span className="text-accent">meddical</span>
          </h1>
          <p className="text-white font-body1 max-w-[300px]">
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
        </div>

        {/* Menus */}
        {footerMenus.map((menu, index) => (
          <div key={index} className="w-full lg:w-auto">
            {/* Mobile Accordion Header */}
            <button
              className="lg:hidden w-full flex justify-between items-center font-body2 font-medium py-2"
              onClick={() => toggleMenu(index)}
            >
              {menu.title}
              <span className="text-accent text-xl">
                {openIndexes[index] ? "−" : "+"}
              </span>
            </button>

            {/* Mobile: Conditional rendering */}
            <div
              className={`${openIndexes[index] ? "block" : "hidden"} lg:block`}
            >
              <div className="flex flex-col gap-1 pl-2">
                {menu.subMenus.map((subMenu, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subMenu.link}
                    className="text-white font-body1 py-0.5"
                  >
                    {subMenu.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Newsletter */}
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <div className="text-white font-body2">Newsletter</div>
          <div className="flex gap-2 relative w-full max-w-[272px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-2 py-2.5 rounded-md border border-gray-300 text-black"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <img src={send} alt="Send" />
            </button>
          </div>
        </div>
      </div>

      <hr className="h-[1px] w-full border-accent my-4" />

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3">
        <p className="font-body1 text-center lg:text-left">
          © 2021 Hospital’s name. All Rights Reserved by PNTEC-LTD
        </p>
        <div className="flex items-center gap-3 justify-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.icon} alt="social icon" className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
