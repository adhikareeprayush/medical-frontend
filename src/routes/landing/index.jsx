import Section from "../../components/landing/Section";
import Hero from "../../components/landing/Hero";
import HeroSec from "../../components/landing/HeroSec";
import WelcomeSec from "../../components/landing/WelcomeSec";
import DoctorSec from "../../components/landing/DoctorSec";
import OurDocSec from "../../components/landing/OurDocSec";
import NewsSection from "../../components/landing/NewsSection";

const index = () => {
  return (
    <>
      <Hero />
      <HeroSec />
      <WelcomeSec />
      <DoctorSec />
      <OurDocSec />
      <NewsSection />
      {/* <Section /> */}
    </>
  );
};

export default index;
