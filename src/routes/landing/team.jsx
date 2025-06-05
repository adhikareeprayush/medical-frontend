import React from 'react'
import PageBanner from '../../components/landing/PageBanner';
import newsBanner from '../../assets/images/banner/newsBanner.png';
import AdmistrativeTeam from '../../components/landing/AdmistrativeTeam';
import MedicalTeam from '../../components/landing/MedicalTeam';
import PhotoGrid from '../../components/landing/PhotoGrid';

const team = () => {
  return (
    <>
      <PageBanner subtitle="Our Team" title="Our Team" backgroundImage={newsBanner} />
      <section className=''>
        <div className="mx-auto max-w-6xl p-6">
          <AdmistrativeTeam />
          <MedicalTeam />
        </div>
      </section>
    </>
  );
}

export default team