import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';
import { getAllDoctors } from '../../utils/api';

// Optional: If you're using a fetch or state, you can do so here
// import doctorsData from '../../data/doctors'; // this should contain all doctor objects

const DoctorDetail = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsData = await getAllDoctors();
        setDoctors(doctorsData.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchDoctors();
  }, []);

  const doctor = doctors.find((doc) => doc.slug === slug);

  if (loading) return <p className="mt-10 text-center">Loading...</p>;
  if (!doctor) return <p className="mt-10 text-center">Doctor not found.</p>;

  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={getTransformedImageUrl(doctor.image_url, 800, 500)}
          alt={doctor.fullName}
          className="h-[350px] w-full object-cover"
        />
        <div className="p-6 text-center">
          <h1 className="mb-2 text-2xl font-bold text-red-600">
            {doctor.fullName}
          </h1>

          <p className="mb-1 text-sm">
            <strong>NMC No:</strong> {doctor.nmcNumber}
          </p>

          <p className="mb-1 text-sm">
            <strong>Qualification:</strong> {doctor.qualification}
          </p>

          <p className="mb-1 text-sm">
            <strong>Specialization:</strong> {doctor.specialityName}
          </p>

          <p className="mt-4 text-justify text-sm leading-relaxed whitespace-pre-wrap">
            {doctor.description}
          </p>

          <button className="mt-6 rounded bg-orange-500 px-6 py-2 text-white hover:bg-orange-600">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
