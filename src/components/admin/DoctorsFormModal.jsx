// components/DoctorFormModal.jsx
import { useEffect, useState } from 'react';
import { uploadToCloudinary } from '../../utils/cloudinary'; // assumes same upload fn
import { createDoctor } from '../../utils/doctors';
import { getAllDepartments } from '../../utils/api';

const DoctorFormModal = ({ onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    imageFile: null,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [departments, setDepartments] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();
      setDepartments(response.data.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';
      if (formData.imageFile) {
        imageUrl = await uploadToCloudinary(formData.imageFile);
      }

      const newDoctor = {
        fullName: formData.fullName,
        image_url: imageUrl,
      };

      await createDoctor(newDoctor);
      onSuccess(); // refetch doctors
      onClose(); // close modal
    } catch (error) {
      console.error('Form submission failed', error);
      setErrors({ submit: error.message || 'Failed to submit' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments(); // Fetch departments on mount
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Add New Doctor</h2>

      <div>
        {/* Dropdown for departments */}
        <label className="block">Department</label>
        <select
          name="department"
          className="input"
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>

        <label className="block">Full Name</label>
        <input
          type="text"
          name="fullName"
          className="input"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block">Image</label>
        <input
          type="file"
          name="imageFile"
          className="input"
          onChange={handleChange}
          accept="image/*"
        />
      </div>

      {errors.submit && <p className="text-red-500">{errors.submit}</p>}

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Saving...' : 'Add Doctor'}
      </button>
    </form>
  );
};

export default DoctorFormModal;
