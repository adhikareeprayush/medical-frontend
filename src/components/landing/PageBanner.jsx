import { useLocation } from "react-router-dom";
import serviceBanner from "../../assets/images/banner/serviceBanner.png";
import aboutBanner from "../../assets/images/banner/aboutBanner.png";
import blogBanner from "../../assets/images/banner/blogBanner.png";
import doctorBanner from "../../assets/images/banner/doctorBanner.png";
import contactBanner from "../../assets/images/banner/contactBanner.png";
import appointmentBanner from "../../assets/images/banner/appointmentBanner.png";

const bannerConfig = {
  "/services": {
    title: "Our Services",
    subtitle: "Home / Services",
    backgroundImage: serviceBanner,
  },
  "/about": {
    title: "About Us",
    subtitle: "Home / About",
    backgroundImage: aboutBanner,
  },
  "/contact": {
    title: "Contact Us",
    subtitle: "Home / Contact",
    backgroundImage: contactBanner,
  },
  "/news": {
    title: "News & Updates",
    subtitle: "Home / News",
    backgroundImage: blogBanner,
  },
  "/appointment": {
    title: "Appointment",
    subtitle: "Home / Appointment",
    backgroundImage: appointmentBanner,
  },
  "/doctor": {
    title: "Appointment",
    subtitle: "Home / Appointment",
    backgroundImage: doctorBanner,
  },
};

const PageBanner = () => {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname === "/") {
    return null;
  }
  const banner = bannerConfig[pathname];

  return (
    <div className="w-full h-[250px] flex flex-col">
      <div
        className={
          "relative w-full h-full flex items-center text-center text-white overflow-hidden "
        }
      >
        {banner.backgroundImage && (
          <img
            src={banner.backgroundImage}
            alt="Banner Background"
            className="absolute inset-0 z-0 w-full h-full object-cover "
          />
        )}
        <div className="absolute w-[239px] h-[239px] -top-[139px] -left-[139px] rounded-full bg-secondary/30 z-10" />
        <div className="absolute w-[239px] h-[239px] !bottom-[-139px] !right-[-139px] rounded-full bg-accent/30 z-10" />
        <section className="relative z-10 w-full flex flex-col items-start gap-0 ">
          <p className="font-body2 text-primary ">
            {banner.subtitle || "Home"}
          </p>
          <h1 className="font-display1 text-primary">{banner.title}</h1>
        </section>
        <div className="absolute inset-0 bg-white/50 z-0" />
      </div>
      <div className="w-full flex h-[8px] z-10 ">
        <div className="h-full flex-1 bg-accent " />
        <div className="h-full flex-3 bg-primary " />
        <div className="h-full flex-1 bg-secondary " />
      </div>
    </div>
  );
};

export default PageBanner;
