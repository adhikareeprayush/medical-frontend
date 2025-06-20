export const getTransformedImageUrl = (url, width, height) => {
  const parts = url.split('/upload/');
  return `${parts[0]}/upload/w_${width},h_${height},c_fill/${parts[1]}`;
};
