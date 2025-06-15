// utils/cloudinary.js
export const uploadToCloudinary = async (file) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // Ensure this is set
  // cloud_name goes in the URL, not the formData!

  const res = await fetch(import.meta.env.VITE_CLOUDINARY_URL, {
    method: 'POST',
    body: data,
  });

  let json = {};
  try {
    json = await res.json();
  } catch (err) {
    const text = await res.text();
    console.error('Cloudinary response not JSON:', text);
    throw new Error('Cloudinary returned an invalid response');
  }

  if (!res.ok) {
    throw new Error(json.error?.message || 'Failed to upload to Cloudinary');
  }

  return json.secure_url;
};
