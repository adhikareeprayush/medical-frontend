import React, { useEffect, useState } from 'react';
import {
  createGalleryMedia,
  deleteGalleryMediaById,
  getGalleryMediaByGallery,
} from '../../utils/api';
import { uploadToCloudinary } from '../../utils/cloudinary';
import { getYoutubeEmbedUrl } from '../../utils/getYoutubeEmbedUrl';

const GalleryList = () => {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form state
  const [form, setForm] = useState({
    media_type: 'image',
    media_url: '',
  });

  // Store image file (only if media_type is image)
  const [imageFile, setImageFile] = useState(null);

  const [isUploading, setIsUploading] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  const galleryId = 2;

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getGalleryMediaByGallery({
        gallery_id: galleryId,
      });
      setMediaList(response.data.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load gallery media.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'media_type') {
      setImageFile(null);
      setForm((prev) => ({ ...prev, media_url: '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setForm((prev) => ({ ...prev, media_url: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.media_type === 'image' && !imageFile) {
      alert('Please select an image file.');
      return;
    }
    if (form.media_type === 'video' && !form.media_url.trim()) {
      alert('Please enter a video URL.');
      return;
    }

    setIsUploading(true);

    try {
      let mediaUrl = form.media_url;

      if (form.media_type === 'image' && imageFile) {
        mediaUrl = await uploadToCloudinary(imageFile);
      }

      const payload = {
        media_url: mediaUrl,
        media_type: form.media_type,
        gallery_id: galleryId,
      };

      await createGalleryMedia(payload);

      alert('Media added successfully!');
      setForm({ media_type: 'image', media_url: '' });
      setImageFile(null);
      setShowModal(false);
      fetchMedia();
    } catch (err) {
      console.error(err);
      alert('Failed to add media. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this media?')) return;
    try {
      await deleteGalleryMediaById(id);
      alert('Media deleted successfully');
      fetchMedia();
    } catch (err) {
      console.error(err);
      alert('Delete failed, please try again.');
    }
  };

  if (loading) return <div>Loading gallery...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="mx-auto w-full py-5">
      <h2 className="mb-4 text-2xl font-semibold">Gallery Media</h2>

      {/* Button to open modal */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-primary hover:bg-primary/90 mb-6 rounded px-4 py-2 text-white transition"
      >
        Add New Media
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-lg font-semibold">Add New Media</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block font-medium">Media Type</label>
                <select
                  name="media_type"
                  value={form.media_type}
                  onChange={handleChange}
                  disabled={isUploading}
                  className="w-full rounded border border-gray-300 px-3 py-2"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>

              {form.media_type === 'image' ? (
                <div>
                  <label className="mb-1 block font-medium">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={isUploading}
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2"
                  />
                </div>
              ) : (
                <div>
                  <label className="mb-1 block font-medium">Video URL</label>
                  <input
                    type="url"
                    name="media_url"
                    value={form.media_url}
                    onChange={handleChange}
                    placeholder="https://youtube.com/..."
                    disabled={isUploading}
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2"
                  />
                </div>
              )}

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded border border-gray-300 px-4 py-2"
                  disabled={isUploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUploading}
                  className="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-white transition"
                >
                  {isUploading ? 'Uploading...' : 'Add Media'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {mediaList.length === 0 ? (
        <div className="text-gray-500">No media found in the gallery.</div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {mediaList.map(({ id, media_url, media_type }) => (
            <div
              key={id}
              className="overflow-hidden rounded-lg border border-gray-300 shadow-sm"
            >
              {media_type === 'image' ? (
                <img
                  src={media_url}
                  alt={`Media ${id}`}
                  className="h-48 w-full object-cover"
                />
              ) : media_type === 'video' ? (
                <iframe
                  src={getYoutubeEmbedUrl(media_url)}
                  title={`Video ${id}`}
                  className="h-48 w-full"
                  frameBorder="0"
                  allowFullScreen
                />
              ) : (
                <p className="p-4 text-sm text-red-500">
                  Unsupported media type
                </p>
              )}

              <div className="flex justify-end p-2">
                <button
                  onClick={() => handleDelete(id)}
                  disabled={isUploading}
                  className="text-sm text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryList;
