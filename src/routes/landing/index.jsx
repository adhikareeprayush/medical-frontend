import Hero from '../../components/landing/Hero';
import WelcomeSec from '../../components/landing/WelcomeSec';
import OurDocSec from '../../components/landing/OurDocSec';
import NewsSection from '../../components/landing/NewsSection';
import ContactSection from '../../components/landing/ContactSection';
import ClinicalDepartment from '../../components/landing/ClinicalDepartment';
import MessageFromHead from '../../components/landing/MessageFromHead';
import MessageFromDirector from '../../components/landing/MessageFromDirector';

const Index = () => {
  return (
    <>
      <div>
        <Hero />
        <WelcomeSec />
        <MessageFromHead />
        <MessageFromDirector />

        {/* <DoctorSec /> */}
        <ClinicalDepartment />
        <OurDocSec />
        <NewsSection />
        <ContactSection />
      </div>

      {/* <StickySidebar /> */}

      {/* <Section /> */}
    </>
  );
};

export default Index;
