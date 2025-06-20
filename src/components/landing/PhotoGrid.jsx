import React from 'react';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';

const PhotoGrid = ({ photos }) => {
  if (!photos || photos.length === 0) return <p>No photos</p>;

  const mainPhoto = photos[0];
  const otherPhotos = photos.slice(1);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {/* Main Photo */}
      {/* Main Photo */}
      <div className="flex w-full justify-center">
        <div className="flex h-full max-w-[350px] flex-col overflow-hidden rounded-md shadow transition hover:scale-[1.02]">
          <ProgressiveImage
            lowQualitySrc={getTransformedImageUrl(mainPhoto.image_url, 40, 40)}
            highQualitySrc={getTransformedImageUrl(
              mainPhoto.image_url,
              1080,
              720,
            )}
            alt={mainPhoto.fullName}
            width={350}
            height={300}
            className="h-[300px] w-[350px] object-cover"
          />

          <div className="bg-secondary/20 flex flex-grow flex-col items-center justify-center gap-1 p-4 text-center">
            <h3 className="text-primary w-full truncate text-lg font-semibold md:text-xl">
              {mainPhoto.fullName}
            </h3>
            <p className="text-secondary w-full truncate text-sm md:text-base">
              {mainPhoto.qualification}
            </p>
            <p className="text-secondary w-full truncate text-sm md:text-base">
              {mainPhoto.specialityName}
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Other Photos */}
      <div className="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
        {otherPhotos.map((photo, index) => (
          <div
            key={index}
            className="flex h-full flex-col overflow-hidden rounded-md shadow transition hover:scale-[1.02]"
          >
            <img
              src={getTransformedImageUrl(photo.image_url, 350, 300)}
              alt={photo.fullName}
              width={350}
              height={300}
              className="h-[300px] w-full object-cover"
            />
            <div className="bg-secondary/20 flex flex-grow flex-col items-center justify-center gap-1 p-4 text-center">
              <h3 className="text-primary w-full truncate text-lg font-semibold md:text-xl">
                {photo.fullName}
              </h3>
              <p className="text-secondary w-full truncate text-sm md:text-base">
                {photo.qualification}
              </p>
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
