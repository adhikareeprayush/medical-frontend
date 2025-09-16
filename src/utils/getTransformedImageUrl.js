export const getTransformedImageUrl = (url, width, height) => {
  if (!url || !url.includes('/upload/')) {
    return url;
  }

  const parts = url.split('/upload/');
  if (parts.length !== 2) {
    return url;
  }

  return `${parts[0]}/upload/w_${width},h_${height},c_fill/${parts[1]}`;
};
