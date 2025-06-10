// utils/cloudinary.js
export const uploadToCloudinary = async (file) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // ✅ Replace with your actual preset
  data.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

  const res = await fetch(import.meta.env.VITE_CLOUDINARY_URL, {
    method: 'POST',
    body: data,
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.error?.message || 'Failed to upload to Cloudinary');
  }
  return json.secure_url;
};
