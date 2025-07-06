import React, { useEffect, useState } from 'react';
import { getDoctorById } from '../../utils/api';
import { useParams } from 'react-router-dom';
import { ProgressiveImage } from '../../utils/ProgressiveImage';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';

const DoctorDetail = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchDoctor = async () => {
      setLoading(true);
      try {
        const res = await getDoctorById(slug);
        setDoctor(res.data.data);
      } catch (err) {
        console.error('Failed to fetch doctor:', err);
        setDoctor(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [slug]);
  console.log(doctor);
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white">
        <div className="flex flex-col gap-4">
          <a
            href="/doctors"
            className="pl-2 text-gray-600 underline hover:text-gray-800"
          >
            Back to Doctors
          </a>
          {/* Header Section */}
          <div className="flex flex-col items-center gap-2">
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <ProgressiveImage
                lowQualitySrc={getTransformedImageUrl(doctor.image_url, 40, 40)}
                highQualitySrc={getTransformedImageUrl(
                  doctor.image_url,
                  1080,
                  720,
                )}
                alt={doctor.fullName}
                className="rounded-2xl"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-2 text-[20px] font-bold tracking-wide text-gray-800 lg:text-[28px]">
                {doctor.fullName}
              </h1>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-2">
            {/* NMC Number */}
            <div className="flex flex-col rounded-xl border-l-4 border-teal-400 bg-gray-50 p-2 sm:flex-row">
              <div className="mb-2 text-lg font-bold text-gray-700 sm:mb-0 sm:min-w-48">
                NMC NO:
              </div>
              <div className="text-lg text-gray-600">{doctor.nmcNo}</div>
            </div>

            {/* Specialization */}
            <div className="flex flex-col rounded-xl border-l-4 border-blue-400 bg-gray-50 p-2 sm:flex-row">
              <div className="mb-2 text-lg font-bold text-gray-700 sm:mb-0 sm:min-w-48">
                Specialization:
              </div>
              <div className="text-lg text-gray-600">
                {doctor.specialityName}
              </div>
            </div>

            {/* Qualification */}
            <div className="flex flex-col rounded-xl border-l-4 border-purple-400 bg-gray-50 p-2 sm:flex-row">
              <div className="mb-2 text-lg font-bold text-gray-700 sm:mb-0 sm:min-w-48">
                Qualification:
              </div>
              <div className="text-lg text-gray-600">
                {doctor.qualification}
              </div>
            </div>
          </div>

          {/* Biography Section */}
          {/* <div className="">
            <p>{doctor.description}</p>
          </div> */}
          <button className="bg-secondary transform rounded-full p-2 text-white">
            Book An Appointment with {doctor.fullName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
