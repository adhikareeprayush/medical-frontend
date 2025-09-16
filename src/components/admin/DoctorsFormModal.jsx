import { useEffect, useState } from 'react';
import { uploadToCloudinary } from '../../utils/cloudinary';
import { createDoctor, updateDoctorById } from '../../utils/doctors';
import {
  getAllDepartments,
  getAllSpecialities,
  addSpeciality,
} from '../../utils/api';

const DoctorFormModal = ({ onSuccess, onClose, doctor }) => {
  const isEdit = !!doctor;

  const [creatingSpeciality, setCreatingSpeciality] = useState(false);
  const [newSpeciality, setNewSpeciality] = useState('');
  const [specialities, setSpecialities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSpeciality, setLoadingSpeciality] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    imageFile: null,
    qualification: '',
    department_id: '',
    speciality_id: '',
    image_url: '', // Used in edit mode
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
        setErrors({ fetch: 'Failed to load departments or specialities' });
      }
    };

    fetchData();
  }, []);

  // Pre-fill form if editing
  useEffect(() => {
    if (isEdit && doctor) {
      setFormData({
        fullName: doctor.fullName || '',
        qualification: doctor.qualification || '',
        department_id: doctor.department_id || '',
        speciality_id: doctor.speciality_id || '',
        imageFile: null,
        image_url: doctor.image_url || '',
        display_order: doctor.display_order || 0, // Default to 0 if not provided
      });
    }
  }, [doctor, isEdit]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.nmcNo.trim()) newErrors.nmcNo = 'NMC number is required';
    if (!formData.qualification.trim())
      newErrors.qualification = 'Qualification is required';
    if (!formData.description.trim())
      newErrors.description = 'Description is required';
    if (!formData.department_id)
      newErrors.department_id = 'Department is required';
    if (!formData.speciality_id)
      newErrors.speciality_id = 'Speciality is required';
    if (!isEdit && !formData.imageFile)
      newErrors.imageFile = 'Image is required';
    return newErrors;
  };

  const handleSaveSpeciality = async () => {
    setErrors((prev) => ({ ...prev, newSpeciality: '' }));

    if (!newSpeciality.trim()) {
      setErrors((prev) => ({
        ...prev,
        newSpeciality: 'Speciality name is required',
      }));
      return;
    }

    setLoadingSpeciality(true);
    try {
      const res = await addSpeciality({ name: newSpeciality.trim() });

      // Re-fetch the full list of specialities from server
      const specRes = await getAllSpecialities();
      const updatedSpecialities = specRes.data.data;
      setSpecialities(updatedSpecialities);

      // Find the newly added speciality (by name or ID if returned in `res`)
      const newSpec = updatedSpecialities.find(
        (s) => s.id === res.data.id || s.name === newSpeciality.trim(),
      );

      setNewSpeciality('');
      setCreatingSpeciality(false);
      setFormData((prev) => ({
        ...prev,
        speciality_id: newSpec?.id || '',
      }));
    } catch (error) {
      console.error('Failed to add speciality:', error);
      setErrors((prev) => ({
        ...prev,
        newSpeciality: error.message || 'Failed to add speciality',
      }));
    } finally {
      setLoadingSpeciality(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      let imageUrl = formData.image_url;

      // Handle image upload
      if (formData.imageFile) {
        imageUrl = await uploadToCloudinary(formData.imageFile);
      } else if (!isEdit) {
        setErrors({ imageFile: 'Image is required for new doctors' });
        setLoading(false);
        return;
      }

      const parsedDeptId = parseInt(formData.department_id);
      const parsedSpecId = parseInt(formData.speciality_id);

      if (
        !formData.fullName.trim() ||
        !formData.qualification.trim() ||
        isNaN(parsedDeptId) ||
        isNaN(parsedSpecId) ||
        !imageUrl
      ) {
        setErrors({ submit: 'Please fill all required fields correctly.' });
        setLoading(false);
        return;
      }

      const doctorPayload = {
        fullName: formData.fullName.trim(),
        nmcNo: formData.nmcNo.trim(),
        qualification: formData.qualification.trim(),
        description: formData.description.trim(),
        image_url: imageUrl,
        department_id: parsedDeptId,
        speciality_id: parsedSpecId,
        display_order: formData.display_order || 0,
      };

      if (isEdit) {
        await updateDoctorById(doctor.id, doctorPayload);
      } else {
        await createDoctor(doctorPayload);
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error('Form submission failed:', error);
      setErrors({ submit: error.message || 'Failed to submit the form' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="scrollbar-hide relative h-[90vh] w-full max-w-xl overflow-y-scroll rounded-xl bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="mb-4 text-xl font-bold">
          {isEdit ? 'Edit Doctor' : 'Add New Doctor'}
        </h2>

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
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block">NMC Number</label>
            <input
              type="text"
              name="nmcNo"
              className="input w-full"
              value={formData.nmcNo}
              onChange={handleChange}
              required
            />
            {errors.nmcNo && (
              <p className="text-sm text-red-500">{errors.nmcNo}</p>
            )}
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
            {errors.qualification && (
              <p className="text-sm text-red-500">{errors.qualification}</p>
            )}
          </div>
          <div>
            <label className="mb-1 block">Description</label>
            <textarea
              name="description"
              className="input w-full rounded-lg border-[1px] border-gray-300"
              value={formData.description}
              onChange={handleChange}
              rows={3}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block">Rank</label>
            <input
              type="number"
              name="display_order"
              className="input w-full"
              value={formData?.display_order || ''}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  display_order: e.target.value,
                }))
              }
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
            {errors.department_id && (
              <p className="text-sm text-red-500">{errors.department_id}</p>
            )}
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
                {errors.speciality_id && (
                  <p className="text-sm text-red-500">{errors.speciality_id}</p>
                )}
                <button
                  type="button"
                  className="mt-2 text-sm text-blue-600 hover:underline"
                  onClick={() => setCreatingSpeciality(true)}
                >
                  + Add new speciality
                </button>
              </>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter new speciality name"
                  value={newSpeciality}
                  onChange={(e) => setNewSpeciality(e.target.value)}
                  autoFocus
                />
                {errors.newSpeciality && (
                  <p className="text-sm text-red-500">{errors.newSpeciality}</p>
                )}
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="btn btn-primary text-sm"
                    onClick={handleSaveSpeciality}
                    disabled={loadingSpeciality}
                  >
                    {loadingSpeciality ? 'Saving...' : 'Save Speciality'}
                  </button>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                    onClick={() => {
                      setCreatingSpeciality(false);
                      setNewSpeciality('');
                      setErrors((prev) => ({ ...prev, newSpeciality: '' }));
                    }}
                    disabled={loadingSpeciality}
                  >
                    ← Cancel
                  </button>
                </div>
              </div>
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
            {errors.imageFile && (
              <p className="text-sm text-red-500">{errors.imageFile}</p>
            )}
            {isEdit && formData.image_url && (
              <img
                src={formData.image_url}
                alt="Current"
                className="mt-2 h-24 w-24 rounded object-cover"
              />
            )}
          </div>

          {errors.submit && (
            <p className="text-sm text-red-500">{errors.submit}</p>
          )}
          {errors.fetch && (
            <p className="text-sm text-red-500">{errors.fetch}</p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading || creatingSpeciality}
            >
              {loading ? 'Saving...' : isEdit ? 'Update Doctor' : 'Add Doctor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorFormModal;
