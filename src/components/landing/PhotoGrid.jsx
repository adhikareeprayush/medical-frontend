import React from 'react';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';
import { Link } from 'react-router-dom';
import doctors from '../../routes/landing/doctors';

const PhotoGrid = ({ photos }) => {
  if (!photos || photos.length === 0) return <p>No photos</p>;

  const mainPhoto = photos[0];
  const otherPhotos = photos.slice(1);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {/* Main Photo */}
      {/* Main Photo */}
      <Link to={`/doctors/${mainPhoto?.id}`} className="w-full">
        <div className="flex w-full justify-center">
          <div className="flex h-full max-w-[360px] flex-col overflow-hidden rounded-md shadow transition hover:scale-[1.02]">
            <ProgressiveImage
              lowQualitySrc={getTransformedImageUrl(
                mainPhoto.image_url,
                40,
                40,
              )}
              highQualitySrc={getTransformedImageUrl(
                mainPhoto.image_url,
                1080,
                720,
              )}
              alt={mainPhoto.fullName}
              width={350}
              height={300}
              className="h-[300px] w-[360px] object-cover"
            />

            <div className="relative flex h-[200px] flex-grow flex-col items-center gap-1 p-3 text-center">
              <h3 className="mb-[6px] text-lg font-semibold break-words whitespace-pre-wrap text-red-600 md:text-xl">
                {mainPhoto.fullName}
              </h3>
              <p className="text-secondary mb-[4px] line-clamp-2 w-full text-sm break-words whitespace-pre-wrap md:text-base">
                {mainPhoto.qualification}
              </p>
              <p className="bg-primary absolute bottom-0 left-0 flex h-[70px] w-full items-center justify-center px-2 py-1 text-center text-sm tracking-wide break-words whitespace-pre-wrap text-white md:text-base">
                {mainPhoto.specialityName}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Grid of Other Photos */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {otherPhotos.map((photo, index) => (
          <div
            key={index}
            className="flex h-full flex-col overflow-hidden rounded-md shadow transition hover:scale-[1.02]"
          >
            <Link to={`/doctors/${photo.id}`} className="w-full">
              <img
                src={getTransformedImageUrl(photo.image_url, 350, 300)}
                alt={photo.fullName}
                width={350}
                height={300}
                className="h-[300px] w-full object-cover"
              />
              <div className="relative flex h-[190px] flex-grow flex-col items-center gap-1 p-3 text-center">
                <h3 className="mb-[6px] text-lg font-semibold break-words whitespace-pre-wrap text-red-600 md:text-xl">
                  {photo.fullName}
                </h3>
                <p className="text-secondary mb-[4px] line-clamp-2 w-full text-sm break-words whitespace-pre-wrap md:text-base">
                  {photo.qualification}
                </p>
                <p className="bg-primary absolute bottom-0 left-0 flex h-[70px] w-full items-center justify-center px-2 py-1 text-center text-sm tracking-wide break-words whitespace-pre-wrap text-white md:text-base">
                  {photo.specialityName}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
