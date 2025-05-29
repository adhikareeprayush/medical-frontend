import { useLocation } from 'react-router-dom';
import serviceBanner from '../../assets/images/banner/serviceBanner.png';
import aboutBanner from '../../assets/images/banner/aboutBanner.png';
import blogBanner from '../../assets/images/banner/newsBanner.png';
import doctorBanner from '../../assets/images/banner/doctorBanner.png';
import contactBanner from '../../assets/images/banner/contactBanner.png';
import appointmentBanner from '../../assets/images/banner/appointmentBanner.png';

const bannerConfig = {
  '/services': {
    title: 'Our Services',
    subtitle: 'Home / Services',
    backgroundImage: serviceBanner,
  },
  '/about': {
    title: 'About Us',
    subtitle: 'Home / About',
    backgroundImage: aboutBanner,
  },
  '/contact': {
    title: 'Contact Us',
    subtitle: 'Home / Contact',
    backgroundImage: contactBanner,
  },
  '/news': {
    title: 'News & Updates',
    subtitle: 'Home / News',
    backgroundImage: blogBanner,
  },
  '/appointment': {
    title: 'Appointment',
    subtitle: 'Home / Appointment',
    backgroundImage: appointmentBanner,
  },
  '/doctor': {
    title: 'Appointment',
    subtitle: 'Home / Appointment',
    backgroundImage: doctorBanner,
  },
};

const PageBanner = () => {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname === '/') {
    return null;
  }
  const banner = bannerConfig[pathname];

  return (
    <div className="flex h-[250px] w-full flex-col">
      <div
        className={
          'relative flex h-full w-full items-center overflow-hidden text-center text-white'
        }
      >
        {banner.backgroundImage && (
          <img
            src={banner.backgroundImage}
            alt="Banner Background"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
        )}
        <div className="bg-secondary/30 absolute -top-[139px] -left-[139px] z-10 h-[239px] w-[239px] rounded-full" />
        <div className="bg-accent/30 absolute !right-[-139px] !bottom-[-139px] z-10 h-[239px] w-[239px] rounded-full" />
        <section className="relative z-10 flex w-full flex-col items-start gap-0">
          <p className="font-body2 text-primary">{banner.subtitle || 'Home'}</p>
          <h1 className="font-display1 text-primary">{banner.title}</h1>
        </section>
        <div className="absolute inset-0 z-0 bg-white/50" />
      </div>
      <div className="z-10 flex h-[8px] w-full">
        <div className="bg-accent h-full flex-1" />
        <div className="bg-primary h-full flex-3" />
        <div className="bg-secondary h-full flex-1" />
      </div>
    </div>
  );
};

export default PageBanner;
