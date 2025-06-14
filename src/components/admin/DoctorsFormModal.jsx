import { useEffect, useState } from 'react';
import { uploadToCloudinary } from '../../utils/cloudinary';
import { createDoctor } from '../../utils/doctors';
import {
  getAllDepartments,
  getAllSpecialities,
  addSpeciality,
} from '../../utils/api';

const DoctorFormModal = ({ onSuccess, onClose }) => {
  const [creatingSpeciality, setCreatingSpeciality] = useState(false);
  const [newSpeciality, setNewSpeciality] = useState('');

  const [specialities, setSpecialities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    imageFile: null,
    qualification: '',
    department_id: '',
    speciality_id: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [deptRes, specRes] = await Promise.all([
          getAllDepartments(),
          getAllSpecialities(),
        ]);
        setDepartments(deptRes.data.data);
        setSpecialities(specRes.data.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';
      if (formData.imageFile) {
        imageUrl = await uploadToCloudinary(formData.imageFile);
      }

      let specialityId = formData.speciality_id;

      // If adding a new speciality, create it first
      if (creatingSpeciality && newSpeciality.trim()) {
        const res = await addSpeciality({ name: newSpeciality.trim() });
        specialityId = res.data.id;
      }

      const newDoctor = {
        fullName: formData.fullName,
        image_url: imageUrl,
        qualification: formData.qualification,
        department_id: parseInt(formData.department_id),
        speciality_id: parseInt(specialityId),
      };

      await createDoctor(newDoctor);
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Form submission failed', error);
      setErrors({ submit: error.message || 'Failed to submit' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative w-full max-w-xl rounded-xl bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="mb-4 text-xl font-bold">Add New Doctor</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="input w-full"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="mb-1 block">Qualification</label>
            <input
              type="text"
              name="qualification"
              className="input w-full"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="mb-1 block">Department</label>
            <select
              name="department_id"
              className="input w-full"
              value={formData.department_id}
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
          </div>

          <div>
            <label className="mb-1 block">Speciality</label>

            {!creatingSpeciality ? (
              <>
                <select
                  name="speciality_id"
                  className="input w-full"
                  value={formData.speciality_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Speciality</option>
                  {specialities.map((spec) => (
                    <option key={spec.id} value={spec.id}>
                      {spec.name}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  className="mt-2 text-sm text-blue-600 hover:underline"
                  onClick={() => setCreatingSpeciality(true)}
                >
                  + Add new speciality
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter new speciality name"
                  value={newSpeciality}
                  onChange={(e) => setNewSpeciality(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="mt-2 text-sm text-blue-600 hover:underline"
                  onClick={() => {
                    setCreatingSpeciality(false);
                    setNewSpeciality('');
                  }}
                >
                  ← Select from existing
                </button>
              </>
            )}
          </div>

          <div>
            <label className="mb-1 block">Image</label>
            <input
              type="file"
              name="imageFile"
              className="input w-full"
              onChange={handleChange}
              accept="image/*"
            />
          </div>

          {errors.submit && (
            <p className="text-sm text-red-500">{errors.submit}</p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Add Doctor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorFormModal;
