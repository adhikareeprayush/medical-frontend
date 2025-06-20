import Section from '../../components/landing/Section';
import React, { useEffect, useState } from 'react';
import Hero from '../../components/landing/Hero';
import WelcomeSec from '../../components/landing/WelcomeSec';
import DoctorSec from '../../components/landing/DoctorSec';
import OurDocSec from '../../components/landing/OurDocSec';
import NewsSection from '../../components/landing/NewsSection';
import ContactSection from '../../components/landing/ContactSection';
import ClinicalDepartment from '../../components/landing/ClinicalDepartment';
import LoadingComp from '../../components/common/LoadingComp';

const Index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading time or wait for an API call
    const timer = setTimeout(() => setLoading(false), 1000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <div>
          <Hero />
          <WelcomeSec />
          <DoctorSec />
          <ClinicalDepartment />
          <OurDocSec />
          <NewsSection />
          <ContactSection />
        </div>
      )}
      {/* <StickySidebar /> */}

      {/* <Section /> */}
    </>
  );
};

export default Index;
