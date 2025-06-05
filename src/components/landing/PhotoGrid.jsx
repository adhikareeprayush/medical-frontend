import React from 'react';

const PhotoGrid = ({ photos }) => {
  if (!photos || photos.length === 0) return <p>No photos</p>;

  const mainPhoto = photos[0];
  const otherPhotos = photos.slice(1);

  return (
    <div className="flex flex-col w-full items-center gap-4">
      {/* Centered Top Photo */}
      <div className="flex md:max-w-[40%] justify-center">
        <div className="flex flex-col items-center">
          <img
            src={mainPhoto.src}
            alt={mainPhoto.name}
            className="w-full object-cover shadow"
          />
          <div className="bg-secondary/20 flex w-full flex-col items-center p-4 text-center">
            <h3 className="text-primary truncate text-lg font-semibold md:text-xl">
              {mainPhoto.name}
            </h3>
            <p className="text-secondary truncate text-sm md:text-base">
              {mainPhoto.title}
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Grid for Other Photos */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {otherPhotos.map((photo, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={photo.src}
              alt={photo.name}
              className="w-full object-cover shadow"
            />
            <div className="bg-secondary/20 flex w-full flex-col items-center p-4 text-center">
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
    </div>
  );
};

export default PhotoGrid;
