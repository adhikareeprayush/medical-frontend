import PageBanner from '../../components/landing/PageBanner';
import contactBanner from '../../assets/images/banner/hospital_banner.jpg';
import GetInTouch from '../../components/landing/GetInTouch';
import NewsSection from '../../components/landing/NewsSection';
import Iframe from 'react-iframe';
import { getContactDetails } from '../../utils/api';
import { useEffect } from 'react';

const contact = () => {
  // Fetch contact details if needed

  return (
    <>
      <PageBanner
        subtitle="Contact"
        title={'Contact Us'}
        backgroundImage={contactBanner}
      />
      <section className="w-full py-3">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.902875757413!2d80.59183284702709!3d28.70605181273307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ed8c4c1998e5%3A0x5c75d7f452367609!2sNisarga%20Hospital!5e0!3m2!1sen!2snp!4v1748607739490!5m2!1sen!2snp"
          height="450px"
          className="w-full rounded-lg"
        ></Iframe>
      </section>
      <GetInTouch />
      <NewsSection />
    </>
  );
};

export default contact;
