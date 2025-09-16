import { useState, useEffect } from 'react';
import { getAllDoctors, deleteDoctorById } from '../../utils/doctors';
import DoctorsList from './DoctorsList';
import DoctorFormModal from './DoctorsFormModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);

  const fetchDoctors = async () => {
    try {
      const doctorsData = await getAllDoctors();
      console.log('Fetched doctors:', doctorsData.data);
      setDoctors(doctorsData.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch doctors');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoctorById(id);
      toast.success('Doctor deleted successfully');
      fetchDoctors();
    } catch (err) {
      console.error('Failed to delete doctor:', err);
      toast.error('Failed to delete doctor');
    }
  };

  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingDoctor(null);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Doctors</h2>
        <button
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Add Doctor
        </button>
      </div>

      <DoctorsList
        doctors={doctors}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <DoctorFormModal
              doctor={editingDoctor}
              onSuccess={() => {
                toast.success(
                  editingDoctor
                    ? 'Doctor updated successfully'
                    : 'Doctor added successfully',
                );
                fetchDoctors();
                handleCloseModal();
              }}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
