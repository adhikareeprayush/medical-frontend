import React from 'react';

const PhotoGrid = ({ photos }) => {
  if (!photos || photos.length === 0) return <p>No photos</p>;

  const mainPhoto = photos[0];
  const otherPhotos = photos.slice(1);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {/* Main Photo */}
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[300px] overflow-hidden rounded-md shadow transition hover:scale-[1.02]">
          <img
            src={mainPhoto.image_url}
            alt={mainPhoto.fullName}
            className="h-[300px] w-full object-cover"
          />
          <div className="bg-secondary/20 flex h-[120px] flex-col items-center justify-center p-4 text-center">
            <h3 className="text-primary w-full truncate text-lg font-semibold md:text-xl">
              {mainPhoto.fullName}
            </h3>
            <p className="text-secondary w-full truncate text-sm md:text-base">
              {mainPhoto.specialityName}
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Other Photos */}
      <div className="grid w-full grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {otherPhotos.map((photo, index) => (
          <div
            key={index}
            className="mx-auto w-full max-w-[350px] overflow-hidden rounded-md shadow transition hover:scale-[1.02]"
          >
            <img
              src={photo.image_url}
              alt={photo.fullName}
              className="h-[300px] w-full object-cover"
            />
            <div className="bg-secondary/20 flex h-[120px] flex-col items-center justify-center p-4 text-center">
              <h3 className="text-primary w-full text-lg font-semibold md:text-xl">
                {photo.fullName}
              </h3>
              <p className="text-secondary w-full text-sm md:text-base">
                {photo.specialityName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
