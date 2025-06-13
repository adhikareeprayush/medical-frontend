import React, { useEffect, useState } from 'react';
import {
  getAllNews,
  addNews,
  updateNewsById,
  deleteNews,
} from '../../utils/api';
import { uploadToCloudinary } from '../../utils/cloudinary';

const initialForm = { title: '', description: '', source: '', image_url: '' };

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fetchNews = async () => {
    try {
      const response = await getAllNews();
      console.log(response);
      setNews(response.data.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const openModalForAdd = () => {
    setForm(initialForm);
    setEditId(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (item) => {
    setForm({
      title: item.title,
      description: item.description,
      source: item.source,
      image_url: item.image_url,
    });
    setEditId(item.id);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file); // Store the selected file, no upload yet
  };

  const handleSubmit = async () => {
    try {
      setIsUploading(true);

      let imageUrl = form.image_url;

      // If a new image file is selected, upload it first
      if (imageFile) {
        imageUrl = await uploadToCloudinary(imageFile);
      }

      const payload = { ...form, image_url: imageUrl };

      if (editId) {
        await updateNewsById(editId, payload);
      } else {
        await addNews(payload);
      }

      setIsModalOpen(false);
      setForm(initialForm);
      setEditId(null);
      setImageFile(null);
      fetchNews();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsUploading(false);
    }
  };
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this news item?')) {
      try {
        await deleteNews(id);
        fetchNews();
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">News Details</h2>
        <button
          onClick={openModalForAdd}
          className="btn btn-primary rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add News
        </button>
      </div>

      {/* News Cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition duration-200 hover:shadow-lg"
          >
            {item.image_url && (
              <img
                src={item.image_url}
                alt={item.title}
                className="mb-3 h-40 w-full rounded-md object-cover"
              />
            )}
            <h3 className="mb-1 text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="mb-3 line-clamp-3 text-sm text-gray-600">
              {item.description}
            </p>
            {item.source && (
              <a
                href={item.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 text-sm text-blue-600 hover:underline"
              >
                Read source
              </a>
            )}
            <div className="mt-auto flex gap-4">
              <button
                onClick={() => openModalForEdit(item)}
                className="text-sm text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">
              {editId ? 'Edit News' : 'Add News'}
            </h3>
            <input
              type="text"
              name="title"
              value={form.title}
              placeholder="Title"
              onChange={handleInputChange}
              className="mb-3 w-full rounded border p-2"
            />
            <textarea
              name="description"
              value={form.description}
              placeholder="Description"
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
                className="mb-3 w-full rounded border p-2"
              />
            </div>
            <input
              type="text"
              name="source"
              value={form.source}
              placeholder="Source URL"
              onChange={handleInputChange}
              className="mb-4 w-full rounded border p-2"
            />
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
                className={`rounded px-4 py-2 text-white ${
                  isUploading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {editId ? 'Update' : 'Create'}
              </button>
            </div>

            {/* Close button top-right */}
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

export default NewsList;
