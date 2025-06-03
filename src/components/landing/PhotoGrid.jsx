import React from 'react';

const PhotoGrid = ({ photos }) => {
  if (!photos || photos.length === 0) return <p>No photos</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* First image only takes one cell */}
      <div></div>
      <div className="col-span-1">
        <div className="flex flex-col items-center">
          <img
            src={photos[0].src}
            alt={photos[0].name}
            className="w-fit object-cover shadow"
          />
          {/* <p className="mt-2 font-semibold">{photos[0].name}</p>
          <p className="text-sm text-gray-500">{photos[0].title}</p> */}
          <div className="bg-secondary/20 rounded-sm flex w-full flex-col items-center p-4 text-center">
            <h3 className="text-primary truncate text-lg font-semibold md:text-xl">
              {photos[0].name}
            </h3>
            <p className="text-secondary truncate text-sm md:text-base">
              {photos[0].title}
            </p>
          </div>
        </div>
      </div>

      {/* Empty placeholders to keep A on first row alone */}
      <div></div>

      {/* Remaining images: 3 per row */}
      {photos.slice(1).map((photo, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={photo.src}
            alt={photo.name}
            className="w-fit object-cover shadow"
          />
          {/* <p className="mt-2 font-semibold">{photo.name}</p>
          <p className="text-sm text-gray-500">{photo.title}</p> */}
          <div className="bg-secondary/20 rounded-sm flex w-full flex-col items-center p-4 text-center">
            <h3 className="text-primary truncate text-lg font-semibold md:text-xl">
              {photo.name}
            </h3>
            <p className="text-secondary truncate text-sm md:text-base">
              {photo.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
