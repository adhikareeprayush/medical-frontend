import React from 'react';

const PhotoGrid = ({ photos }) => {
  if (!photos || photos.length === 0) return <p>No photos</p>;

  const mainPhoto = photos[0];
  const otherPhotos = photos.slice(1);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* Centered Top Photo */}
      <div className="flex justify-center transition hover:scale-[1.02] md:max-w-[35%]">
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
      <div className="grid w-full grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {otherPhotos.map((photo, index) => (
          <div
            key={index}
            className="flex w-full max-w-[300px] flex-col items-center transition hover:scale-[1.02]"
          >
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

// import React from 'react';

// const PhotoCard = ({ photo }) => (
//   <div className="flex w-full max-w-sm flex-col items-center transition hover:scale-[1.02]">
//     <img
//       src={photo.src}
//       alt={photo.name || 'Photo'}
//       className="w-full rounded-t-md object-cover shadow-sm"
//     />
//     <div className="bg-secondary/20 flex w-full flex-col items-center rounded-b-md p-4 text-center">
//       <h3 className="text-primary truncate text-base font-medium md:text-lg">
//         {photo.name}
//       </h3>
//       <p className="text-secondary truncate text-sm md:text-base">
//         {photo.title}
//       </p>
//     </div>
//   </div>
// );

// const PhotoGrid = ({ photos }) => {
//   if (!photos || photos.length === 0)
//     return <p className="text-gray-500">No photos</p>;

//   const [mainPhoto, ...otherPhotos] = photos;

//   return (
//     <div className="flex w-full flex-col items-center gap-6">
//       {/* Main Photo */}
//       <div className="w-full md:max-w-md">
//         <PhotoCard photo={mainPhoto} />
//       </div>

//       {/* Grid of Other Photos */}
//       <div className="grid w-full justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {otherPhotos.map((photo, index) => (
//           <PhotoCard key={index} photo={photo} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoGrid;
