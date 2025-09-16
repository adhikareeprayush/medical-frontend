import React, { useEffect, useState } from 'react';
import {
  getAllTestimonials,
  addTestimonial,
  deleteTestimonial,
} from '../../utils/api';
import { uploadToCloudinary } from '../../utils/cloudinary';

const initialForm = { full_name: '', message: '', image_url: '' };

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [imageFile, setImageFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchTestimonials = async () => {
    try {
      const res = await getAllTestimonials();
      setTestimonials(res.data.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

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

      let imageUrl = form.image_url;

      if (imageFile) {
        imageUrl = await uploadToCloudinary(imageFile);
      }

      const payload = { ...form, image_url: imageUrl, video_url: '' };
      console.log(payload);

      await addTestimonial(payload);

      setIsModalOpen(false);
      setForm(initialForm);
      setImageFile(null);
      fetchTestimonials();
    } catch (error) {
      console.error('Error adding testimonial:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        setIsDeleting(true);
        await deleteTestimonial(id);
        fetchTestimonials();
      } catch (error) {
        console.error('Error deleting testimonial:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Testimonial
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No testimonials found.
          </p>
        ) : (
          testimonials.map(({ id, full_name, message, image_url }) => (
            <div
              key={id}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              {image_url && (
                <img
                  src={image_url}
                  alt={full_name}
                  className="mb-3 h-24 w-24 self-center rounded-full object-cover"
                />
              )}
              <h3 className="mb-1 text-center text-lg font-semibold text-gray-800">
                {full_name}
              </h3>
              <p className="mb-3 text-center text-gray-600">{message}</p>
              <button
                onClick={() => handleDelete(id)}
                disabled={isDeleting}
                className="mx-auto rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700 disabled:bg-red-400"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Add Testimonial</h3>

            <input
              type="text"
              name="full_name"
              value={form.full_name}
              placeholder="Full Name"
              onChange={handleInputChange}
              className="mb-3 w-full rounded border p-2"
            />

            <textarea
              name="message"
              value={form.message}
              placeholder="Message"
              rows={4}
              onChange={handleInputChange}
              className="mb-3 w-full rounded border p-2"
            />

            <div>
              <label className="mb-1 block font-medium">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4 w-full rounded border p-2"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isUploading}
                className={`cursor-pointer rounded px-4 py-2 text-white ${
                  isUploading ? 'bg-gray-400' : 'bg-primary hover:bg-primary/90'
                }`}
              >
                Add
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialList;
