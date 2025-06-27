// import BestcareAbout from '../../components/landing/BestcareAbout';
import PageBanner from '../../components/landing/PageBanner';
import aboutBanner from '../../assets/images/banner/hospital_banner.jpg';
// import Testimonials from '../../components/landing/Testimonials';
import OurDocSec from '../../components/landing/OurDocSec';
import NewsSection from '../../components/landing/NewsSection';
import MessageFromHead from '../../components/landing/MessageFromHead';
import MessageFromDirector from '../../components/landing/MessageFromDirector';

const about = () => {
  return (
    <div>
      <PageBanner
        subtitle="About"
        title={'About'}
        backgroundImage={aboutBanner}
      />
      {/* <BestcareAbout /> */}
      <MessageFromHead />
      <MessageFromDirector />
      {/* <Testimonials /> */}
      <OurDocSec />
      <NewsSection />
    </div>
  );
};

export default about;
