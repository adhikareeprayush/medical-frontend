import Section from "../../components/landing/Section";
import Hero from "../../components/landing/Hero";
import HeroSec from "../../components/landing/HeroSec";
import WelcomeSec from "../../components/landing/WelcomeSec";
import DoctorSec from "../../components/landing/DoctorSec";
import OurDocSec from "../../components/landing/OurDocSec";
import NewsSection from "../../components/landing/NewsSection";
import ContactSection from "../../components/landing/ContactSection";
import { Sticker } from "lucide-react";
import StickySidebar from "../../components/common/StickySidebar";

const index = () => {
  return (
    <>
      {/* <StickySidebar /> */}
      <Hero />
      <HeroSec />
      <WelcomeSec />
      <DoctorSec />
      <OurDocSec />
      <NewsSection />
      <ContactSection />
      {/* <Section /> */}
    </>
  );
};

export default index;
