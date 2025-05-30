import PageBanner from '../../components/landing/PageBanner';
import contactBanner from '../../assets/images/banner/contactBanner.jpg';
import GetInTouch from '../../components/landing/GetInTouch';
import NewsSection from '../../components/landing/NewsSection';

const contact = () => {
  return (
    <>
      <PageBanner
        subtitle="Contact"
        title={'Contact Us'}
        backgroundImage={contactBanner}
      />
      <GetInTouch />
      <NewsSection />
    </>
  );
};

export default contact;
