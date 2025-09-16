import React, { useEffect, useState } from 'react';
import {
  getAllServices,
  addService,
  updateServiceById,
  deleteService,
} from '../../utils/api'; // Adjust if your API util paths differ
import { uploadToCloudinary } from '../../utils/cloudinary';
import { FaQuestion } from 'react-icons/fa'; // fallback icon
import iconMap from '../common/iconMap';
import IconDropdown from '../common/IconDropdown';

const initialForm = {
  title: '',
  summary: '',
  description: '',
  image: '',
  icon: 'stethoscope',
  points: '',
};

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const fetchServices = async () => {
    try {
      const response = await getAllServices();
      setServices(response.data.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const openModalForAdd = () => {
    setForm(initialForm);
    setEditId(null);
    setImageFile(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (item) => {
    setForm({
      title: item.title,
      summary: item.summary,
      description: item.description,
      image: item.image,
      icon: item.icon,
      points: item.points
        ? item.points
            .replace(/^\[|\]$/g, '') // remove [ and ]
            .split(',')
            .map((point) => point.replace(/['"]/g, '').trim()) // remove quotes and trim
            .filter((point) => point)
            .join(', ') // convert array back to comma-separated string
        : '',
    });
    setEditId(item.id);
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
  };

  const handleSubmit = async () => {
    try {
      setIsUploading(true);

      let imageUrl = form.image;

      if (imageFile) {
        imageUrl = await uploadToCloudinary(imageFile);
      }

      // points should be stringified array format
      const pointsFormatted = `[${form.points
        .split(',')
        .map((p) => `'${p.trim()}'`)
        .join(',')}]`;

      const payload = {
        ...form,
        image: imageUrl,
        points: pointsFormatted,
      };

      if (editId) {
        await updateServiceById(editId, payload);
      } else {
        await addService(payload);
      }

      setIsModalOpen(false);
      setForm(initialForm);
      setEditId(null);
      setImageFile(null);
      fetchServices();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
      try {
        await deleteService(id);
        fetchServices();
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Helper to render icon by name
  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName.toLowerCase()] || FaQuestion;
    return <IconComponent size={24} className="text-primary" />;
  };

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Service Details</h2>
        <button
          onClick={openModalForAdd}
          className="btn btn-primary bg-primary hover:bg-primary/90 cursor-pointer rounded px-4 py-2 text-white"
        >
          Add Service
        </button>
      </div>

      {/* Service Cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition duration-200 hover:shadow-lg"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="mb-3 h-40 w-full rounded-md object-cover"
              />
            )}
            <div className="mb-2 flex items-center gap-2">
              {renderIcon(item.icon)}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
            <p className="mb-2 text-sm font-semibold text-gray-600">
              {item.summary}
            </p>
            <p className="mb-3 line-clamp-3 text-sm text-gray-600">
              {item.description}
            </p>

            {item.points && (
              <ul className="mb-3 list-disc pl-5 text-sm text-gray-700">
                {item.points
                  ?.replace(/^\[|\]$/g, '') // remove [ and ]
                  .split(',')
                  .map((point, idx) => (
                    <li key={idx}>{point.replace(/['"]/g, '').trim()}</li> // remove quotes and trim
                  ))}
              </ul>
            )}

            <div className="mt-auto flex gap-4">
              <button
                onClick={() => openModalForEdit(item)}
                className="text-primary cursor-pointer text-sm hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="cursor-pointer text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="scrollbar-hide relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">
              {editId ? 'Edit Service' : 'Add Service'}
            </h3>

            <div>
              <label className="mb-1 block font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                placeholder="Title"
                onChange={handleInputChange}
                className="mb-3 w-full rounded border p-2"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Summary</label>
              <input
                type="text"
                name="summary"
                value={form.summary}
                placeholder="Summary"
                onChange={handleInputChange}
                className="mb-3 w-full rounded border p-2"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Description</label>
              <textarea
                name="description"
                value={form.description}
                placeholder="Description"
                rows={4}
                onChange={handleInputChange}
                className="mb-3 w-full rounded border p-2"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-3 w-full rounded border p-2"
              />
            </div>

            <div className="mb-3 w-fit">
              <label className="mb-1 block font-medium">Icon</label>
              <IconDropdown
                selectedIcon={form.icon}
                onChange={(icon) => setForm({ ...form, icon })}
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Points</label>
              <textarea
                name="points"
                value={form.points}
                placeholder="Points (comma separated)"
                rows={2}
                onChange={handleInputChange}
                className="mb-4 w-full rounded border p-2"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isUploading}
                className={`rounded px-4 py-2 text-white ${
                  isUploading
                    ? 'bg-gray-400'
                    : 'bg-primary hover:bg-primary/90 cursor-pointer'
                }`}
              >
                {editId ? 'Update' : 'Create'}
              </button>
            </div>

            {/* Close button top-right */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceList;
