import React, { useEffect, useState } from 'react';
import {
  createGalleryMedia,
  deleteGalleryMediaById,
  getGalleryMediaByGallery,
  getAllGalleries,
  createGallery,
  updateGalleryById,
} from '../../utils/api';
import { uploadToCloudinary } from '../../utils/cloudinary';
import { getYoutubeEmbedUrl } from '../../utils/getYoutubeEmbedUrl';

const GalleryList = () => {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gallery state
  const [galleries, setGalleries] = useState([]);
  const [selectedGalleryId, setSelectedGalleryId] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [newGallery, setNewGallery] = useState({ name: '' });
  const [newGalleryImageFile, setNewGalleryImageFile] = useState(null);
  const [creatingGallery, setCreatingGallery] = useState(false);
  const [editGalleryId, setEditGalleryId] = useState(null);
  const [editGalleryName, setEditGalleryName] = useState('');
  const [editGalleryImageFile, setEditGalleryImageFile] = useState(null);
  const [updatingGallery, setUpdatingGallery] = useState(false);

  // Form state
  const [form, setForm] = useState({
    media_type: 'image',
    media_url: '',
  });
  const [imageFile, setImageFile] = useState(null); // will be replaced by imageFiles
  const [imageFiles, setImageFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Fetch galleries on mount
  useEffect(() => {
    fetchGalleries();
  }, []);

  // Fetch media when gallery changes
  useEffect(() => {
    if (selectedGalleryId) fetchMedia(selectedGalleryId);
  }, [selectedGalleryId]);

  const fetchGalleries = async () => {
    setGalleryLoading(true);
    try {
      const response = await getAllGalleries();
      setGalleries(response.data.data);
      if (response.data.data.length > 0) {
        setSelectedGalleryId(response.data.data[0].id);
      }
    } catch (err) {
      setError('Failed to load galleries.');
    } finally {
      setGalleryLoading(false);
    }
  };

  const fetchMedia = async (galleryId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getGalleryMediaByGallery({
        gallery_id: galleryId,
      });
      setMediaList(response.data.data);
    } catch (err) {
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
    const files = Array.from(e.target.files);
    setImageFiles(files);
    setForm((prev) => ({ ...prev, media_url: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedGalleryId) {
      alert('Please select a gallery.');
      return;
    }
    if (form.media_type === 'image' && imageFiles.length === 0) {
      alert('Please select at least one image file.');
      return;
    }
    if (form.media_type === 'video' && !form.media_url.trim()) {
      alert('Please enter a video URL.');
      return;
    }
    setIsUploading(true);
    try {
      if (form.media_type === 'image') {
        // Upload all images and create media for each
        for (const file of imageFiles) {
          const mediaUrl = await uploadToCloudinary(file);
          const payload = {
            media_url: mediaUrl,
            media_type: 'image',
            gallery_id: selectedGalleryId,
          };
          await createGalleryMedia(payload);
        }
        alert('Images added successfully!');
      } else {
        const payload = {
          media_url: form.media_url,
          media_type: 'video',
          gallery_id: selectedGalleryId,
        };
        await createGalleryMedia(payload);
        alert('Video added successfully!');
      }
      setForm({ media_type: 'image', media_url: '' });
      setImageFiles([]);
      setShowModal(false);
      fetchMedia(selectedGalleryId);
    } catch (err) {
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
      fetchMedia(selectedGalleryId);
    } catch (err) {
      alert('Delete failed, please try again.');
    }
  };

  // Gallery creation handlers
  const handleNewGalleryChange = (e) => {
    const { name, value } = e.target;
    setNewGallery((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file change for new gallery
  const handleNewGalleryImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setNewGalleryImageFile(file);
  };

  const handleCreateGallery = async (e) => {
    e.preventDefault();
    if (!newGallery.name.trim()) {
      alert('Gallery name is required');
      return;
    }
    if (!newGalleryImageFile) {
      alert('Please select a thumbnail image.');
      return;
    }
    setCreatingGallery(true);
    try {
      let thumbnailUrl = '';
      if (newGalleryImageFile) {
        thumbnailUrl = await uploadToCloudinary(newGalleryImageFile);
      }
      const payload = {
        name: newGallery.name,
        thumbnail_url: thumbnailUrl,
      };
      const response = await createGallery(payload);
      alert('Gallery created!');
      setShowGalleryModal(false);
      setNewGallery({ name: '' });
      setNewGalleryImageFile(null);
      fetchGalleries();
      setSelectedGalleryId(response.data.data.id);
    } catch (err) {
      alert('Failed to create gallery.');
    } finally {
      setCreatingGallery(false);
    }
  };

  // Open edit modal for gallery
  const openEditGallery = (gallery) => {
    setEditGalleryId(gallery.id);
    setEditGalleryName(gallery.name);
  };

  // Handle image file change for edit gallery
  const handleEditGalleryImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setEditGalleryImageFile(file);
  };

  // Handle update gallery name and thumbnail
  const handleUpdateGallery = async (e) => {
    e.preventDefault();
    if (!editGalleryName.trim()) {
      alert('Gallery name is required');
      return;
    }
    if (!editGalleryImageFile) {
      alert('Please select a thumbnail image.');
      return;
    }
    setUpdatingGallery(true);
    try {
      let thumbnailUrl = '';
      if (editGalleryImageFile) {
        thumbnailUrl = await uploadToCloudinary(editGalleryImageFile);
      }
      await updateGalleryById(editGalleryId, {
        name: editGalleryName,
        thumbnail_url: thumbnailUrl,
      });
      alert('Gallery updated!');
      setEditGalleryId(null);
      setEditGalleryName('');
      setEditGalleryImageFile(null);
      fetchGalleries();
    } catch (err) {
      alert('Failed to update gallery.');
    } finally {
      setUpdatingGallery(false);
    }
  };

  if (galleryLoading) return <div>Loading galleries...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="mx-auto flex w-full flex-col items-center py-5">
      {/* Gallery selection and creation */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Gallery Card List for Selection */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {galleries.map((g) => (
              <div className="flex flex-col items-center gap-2" key={g.id}>
                <button
                  onClick={() => setSelectedGalleryId(g.id)}
                  className={`focus:ring-primary/60 flex max-w-[140px] min-w-[120px] flex-col items-center justify-center border px-1 py-1 transition outline-none ${selectedGalleryId === g.id ? 'shadow-lg' : 'border-gray-300 bg-white hover:bg-gray-100'}`}
                  aria-pressed={selectedGalleryId === g.id}
                  tabIndex={0}
                >
                  <div className="mb-2 flex aspect-video w-full items-center justify-center overflow-hidden rounded bg-gray-100">
                    {g.thumbnail_url ? (
                      <img
                        src={g.thumbnail_url}
                        alt={g.name}
                        className="h-16 w-full object-cover"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">No Image</span>
                    )}
                  </div>
                  <span className="w-full truncate text-center text-xs font-medium text-gray-800">
                    {g.name}
                  </span>
                </button>
                <button
                  onClick={() => openEditGallery(g)}
                  className="text-sm text-blue-600 hover:underline"
                  aria-label={`Edit gallery ${g.name}`}
                >
                  Edit
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowGalleryModal(true)}
              className="border-secondary text-secondary hover:bg-secondary/10 focus:ring-secondary/60 flex max-w-[140px] min-w-[120px] flex-col items-center justify-center rounded-lg border border-dashed px-2 py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
              aria-label="Add new gallery"
            >
              <span className="text-3xl font-bold">+</span>
              <span className="text-xs font-medium">New Gallery</span>
            </button>
          </div>
        </div>
      </div>

      {/* Edit Gallery Modal */}
      {editGalleryId && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={() => setEditGalleryId(null)}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-lg font-semibold">Edit Gallery</h3>
            <form onSubmit={handleUpdateGallery} className="space-y-4">
              <div>
                <label className="mb-1 block font-medium">Gallery Name</label>
                <input
                  type="text"
                  value={editGalleryName}
                  onChange={(e) => setEditGalleryName(e.target.value)}
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2"
                  disabled={updatingGallery}
                />
              </div>
              <div>
                <label className="mb-1 block font-medium">
                  Thumbnail Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleEditGalleryImageChange}
                  disabled={updatingGallery}
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
                {editGalleryImageFile && (
                  <div className="mt-2 text-xs text-gray-500">
                    Selected: {editGalleryImageFile.name}
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditGalleryId(null)}
                  className="rounded border border-gray-300 px-4 py-2"
                  disabled={updatingGallery}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={updatingGallery}
                  className="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-white transition"
                >
                  {updatingGallery ? 'Updating...' : 'Update'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Gallery Modal */}
      {showGalleryModal && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={() => setShowGalleryModal(false)}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-lg font-semibold">Create New Gallery</h3>
            <form onSubmit={handleCreateGallery} className="space-y-4">
              <div>
                <label className="mb-1 block font-medium">Gallery Name</label>
                <input
                  type="text"
                  name="name"
                  value={newGallery.name}
                  onChange={handleNewGalleryChange}
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2"
                  disabled={creatingGallery}
                />
              </div>
              <div>
                <label className="mb-1 block font-medium">
                  Thumbnail Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleNewGalleryImageChange}
                  disabled={creatingGallery}
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
                {newGalleryImageFile && (
                  <div className="mt-2 text-xs text-gray-500">
                    Selected: {newGalleryImageFile.name}
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowGalleryModal(false)}
                  className="rounded border border-gray-300 px-4 py-2"
                  disabled={creatingGallery}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creatingGallery}
                  className="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-white transition"
                >
                  {creatingGallery ? 'Creating...' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Button to open modal */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-primary hover:bg-primary/90 mb-6 w-fit rounded px-4 py-2 text-white transition"
        disabled={!selectedGalleryId}
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
                  <label className="mb-1 block font-medium">
                    Upload Images
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    disabled={isUploading}
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2"
                  />
                  {imageFiles.length > 0 && (
                    <div className="mt-2 text-xs text-gray-500">
                      Selected: {imageFiles.map((f) => f.name).join(', ')}
                    </div>
                  )}
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
