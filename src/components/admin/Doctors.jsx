import { useState } from 'react';
import { getDoctorsCards } from '../../utils/doctors';
import DoctorsList from './DoctorsList'; // Assuming you have a DoctorsList component to display the doctors

const Doctors = () => {
  const [isEditingDoctors, setIsEditingDoctors] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [errors, setErrors] = useState({});

  const fetchDoctors = async () => {
    const doctorsData = await getDoctorsCards();
    setDoctors(doctorsData);
    console.log('Doctors fetched:', doctorsData);
  };
  useState(() => {
    fetchDoctors();
  }, []);

  return (
    <div>
      <div className="mt-6 flex flex-col">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-semibold">Your Doctors</h2>
          <button
            className="btn btn-secondary"
            onClick={() => setIsEditingDoctors(!isEditingDoctors)}
          >
            {isEditingDoctors ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <div className="mt-4">
          {isEditingDoctors ? (
            <>Edit your doctors here</>
          ) : (
            <DoctorsList doctors={doctors} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
