import React from 'react';
import PageBanner from '../../components/landing/PageBanner';
import newsBanner from '../../assets/images/banner/hospital_banner.jpg';
// import AdmistrativeTeam from '../../components/landing/AdmistrativeTeam';
import MedicalTeam from '../../components/landing/MedicalTeam';
import PhotoGrid from '../../components/landing/PhotoGrid';

const doctors = () => {
  return (
    <>
      <PageBanner
        subtitle="Doctors"
        title="Doctors"
        backgroundImage={newsBanner}
      />
      <section className="w-full">
        <MedicalTeam />
      </section>
    </>
  );
};

export default doctors;
