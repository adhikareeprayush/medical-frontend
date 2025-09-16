import React from 'react';
import HospitalBanner from '../../assets/images/banner/hospital_banner.jpg';
import PageBanner from '../../components/landing/PageBanner';
import Appointment from '../../components/landing/Appointment';

const appointment = () => {
  return (
    <>
      <PageBanner
        subtitle="Appointment"
        title="Doctors Appointment"
        backgroundImage={HospitalBanner}
      />
      <Appointment />
    </>
  );
};

export default appointment;
