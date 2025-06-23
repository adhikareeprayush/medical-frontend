import React, { useState, useEffect } from 'react';
import PhotoGrid from '../../components/landing/PhotoGrid';
import { getAllDoctors } from '../../utils/api';

const MedicalTeam = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      const doctorsData = await getAllDoctors();
      setDoctors(doctorsData.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="mx-auto w-full max-w-[1120px] place-items-center px-3 py-6 sm:px-6 md:px-4 lg:px-2">
      <h2 className="text-primary mb-6 text-center text-3xl font-bold">
        Meet Our Medical Team
      </h2>
      <PhotoGrid photos={doctors.data} />
    </div>
  );
};

export default MedicalTeam;
