import { useState } from 'react';
import { Link } from 'react-router-dom';
import send from '../../assets/icons/send.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

const footerMenus = [
  {
    title: 'Important Links',
    subMenus: [
      { title: 'Appointment', link: '/appointment' },
      { title: 'Doctors', link: '/doctors' },
      { title: 'Services', link: '/services' },
      { title: 'About Us', link: '/about' },
    ],
  },
  {
    title: 'Contact Us',
    subMenus: [
      { title: 'Call: (+251) 911 11 11 11', link: 'tel:+251911111111' },
      {
        title: 'Email: fildineesoe@gmail.com',
        link: 'mailto:fildineesoe@gmail.com',
      },
      { title: 'Address: Addis Ababa, Ethiopia', link: '#' },
    ],
  },
];

const socialLinks = [
  { icon: facebookIcon, link: 'https://www.facebook.com' },
  { icon: instagramIcon, link: 'https://www.instagram.com' },
  { icon: linkedinIcon, link: 'https://www.linkedin.com' },
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
    <section className="bg-primary flex w-full flex-col items-center gap-3 py-4 text-white">
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-between">
        {/* Logo and slogan */}
        <div className="flex flex-col gap-2">
          <h1 className="font-display2 text-4xl uppercase">
            <span className="text-accent">meddical</span>
          </h1>
          <p className="font-body1 max-w-[300px] text-white">
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
        </div>

        {/* Menus */}
        {footerMenus.map((menu, index) => (
          <div key={index} className="w-full lg:w-auto">
            {/* Mobile Accordion Header */}
            <button
              className="font-body2 flex w-full items-center justify-between py-2 font-medium lg:hidden"
              onClick={() => toggleMenu(index)}
            >
              {menu.title}
              <span className="text-accent text-xl">
                {openIndexes[index] ? '−' : '+'}
              </span>
            </button>

            {/* Mobile: Conditional rendering */}
            <div
              className={`${openIndexes[index] ? 'block' : 'hidden'} lg:block`}
            >
              <div className="flex flex-col gap-1 pl-2">
                {menu.subMenus.map((subMenu, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subMenu.link}
                    className="font-body1 py-0.5 text-white"
                  >
                    {subMenu.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Newsletter */}
        <div className="flex w-full flex-col gap-2 lg:w-auto">
          <div className="font-body2 text-white">Newsletter</div>
          <div className="relative flex w-full max-w-[272px] gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="focus:border-accent bg-accent placeholder:text-primary w-full rounded-md border border-gray-300 px-2 py-2.5 text-black focus:outline-none"
            />
            <button className="absolute top-1/2 right-1 -translate-y-1/2 transform">
              <img src={send} alt="Send" />
            </button>
          </div>
        </div>
      </div>

      <hr className="border-accent my-4 h-[1px] w-full" />

      {/* Footer Bottom */}
      <div className="flex w-full flex-col items-center justify-between gap-3 lg:flex-row">
        <p className="font-body1 text-center lg:text-left">
          © 2021 Hospital’s name. All Rights Reserved by PNTEC-LTD
        </p>
        <div className="flex items-center justify-center gap-3">
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
