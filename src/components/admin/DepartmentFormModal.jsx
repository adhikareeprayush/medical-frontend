import { useState } from 'react';
import { uploadToCloudinary } from '../../utils/cloudinary';

const DepartmentFormModal = ({ department, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: department?.id || null,
    name: department?.name || '',
    description: department?.description || '',
    image_url: department?.image_url || '',
    nepali: department?.nepali || '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsUploading(true);
      let imageUrl = formData.image_url;

      if (imageFile) {
        imageUrl = await uploadToCloudinary(imageFile);
      }

      await onSubmit({ ...formData, image_url: imageUrl });
      setIsUploading(false);
    } catch (err) {
      console.error('Error submitting form:', err);
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-opacity-30 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-semibold">
          {department ? 'Edit Department' : 'New Department'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Department Name"
            className="w-full rounded border p-2"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full rounded border p-2"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description (HTML allowed)"
            className="w-full rounded border p-2"
          />
          <input
            name="nepali"
            value={formData.nepali}
            onChange={handleChange}
            placeholder="Nepali Text"
            className="w-full rounded border p-2"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentFormModal;
