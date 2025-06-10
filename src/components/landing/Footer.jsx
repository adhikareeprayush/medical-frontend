import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import send from '../../assets/icons/send.svg';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import RoundButton from '../common/RoundButton';
import { getContactDetails } from '../../utils/api';
import { getSocial } from '../../utils/social';

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: '',
    email: '',
    address: '',
  });
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        // Get contact details
        const contactRes = await getContactDetails();
        const data = contactRes?.data?.data?.[0];

        if (data) {
          setContactInfo({
            phone: data.phone_number?.split(',')[0]?.trim() || '',
            email: data.email?.split(',')[0]?.trim() || '',
            address: data.location || '',
          });
        }

        // Get social links
        const socialRes = await getSocial();
        console.log('Social Links:', socialRes);
        const formattedLinks = socialRes
          .map((item) => {
            const site = item.site.toLowerCase();
            const link = item.link;

            switch (site) {
              case 'facebook':
                return { icon: <FaFacebookF size={25} />, link };
              case 'instagram':
                return { icon: <FaInstagram size={25} />, link };
              case 'linkedIn':
                return { icon: <FaLinkedin size={25} />, link };
              default:
                return null;
            }
          })
          .filter(Boolean);

        setSocialLinks(formattedLinks);
      } catch (err) {
        console.error('Error loading footer data:', err);
      }
    };

    fetchFooterData();
  }, []);

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
        {
          title: `Call: ${contactInfo.phone}`,
          link: `tel:${contactInfo.phone}`,
        },
        {
          title: `Email: ${contactInfo.email}`,
          link: `mailto:${contactInfo.email}`,
        },
        {
          title: `Address: ${contactInfo.address}`,
          link: 'https://maps.app.goo.gl/LHB7up7JELBmZzJg8',
        },
      ],
    },
  ];

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
            <span className="text-accent">Nisarga Hospital</span>
          </h1>
          <p className="font-body1 max-w-[300px] text-white">
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
        </div>

        {/* Menus */}
        {footerMenus.map((menu, index) => (
          <div key={index} className="w-full lg:w-auto">
            <button
              className="font-body2 flex w-full items-center justify-between py-2 font-medium lg:hidden"
              onClick={() => toggleMenu(index)}
            >
              {menu.title}
              <span className="text-accent text-xl">
                {openIndexes[index] ? '−' : '+'}
              </span>
            </button>

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
          © 2021 Nisarga hospital's. All Rights Reserved by PNTEC-LTD
        </p>
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RoundButton
                divStyles="bg-primary text-gray-400"
                spanStyles="bg-blue-700"
                text={social.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
