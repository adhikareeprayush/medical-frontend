// utils/cloudinary.js

const convertToWebP = (file, quality = 0.8) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const webpFile = new File(
              [blob],
              file.name.replace(/\.\w+$/, '.webp'),
              {
                type: 'image/webp',
                lastModified: Date.now(),
              },
            );
            resolve(webpFile);
          } else {
            reject(new Error('WebP conversion failed'));
          }
        },
        'image/webp',
        quality,
      );
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });

export const uploadToCloudinary = async (file) => {
  let fileToUpload = file;

  // Only convert image files (optional MIME type check)
  if (file.type.startsWith('image/')) {
    try {
      fileToUpload = await convertToWebP(file);
    } catch (err) {
      console.warn(
        'WebP conversion failed, falling back to original file:',
        err,
      );
    }
  }

  const data = new FormData();
  data.append('file', fileToUpload);
  data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // Ensure this is set

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
