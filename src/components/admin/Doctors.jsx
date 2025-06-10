import { useState, useEffect } from 'react';
import { getAllDoctors } from '../../utils/doctors';
import DoctorsList from './DoctorsList';
import DoctorFormModal from './DoctorsFormModal';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchDoctors = async () => {
    try {
      const doctorsData = await getAllDoctors();
      setDoctors(doctorsData.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Doctors</h2>
        <button
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Add Doctor
        </button>
      </div>

      <DoctorsList doctors={doctors} />

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <DoctorFormModal
              onSuccess={fetchDoctors}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
