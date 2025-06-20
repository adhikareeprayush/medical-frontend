import { useState } from 'react';

export function ProgressiveImage({
  lowQualitySrc,
  highQualitySrc,
  alt,
  className,
}) {
  const [isHighResLoaded, setHighResLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={lowQualitySrc}
        alt={alt}
        aria-hidden="true"
        className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ${
          isHighResLoaded ? 'opacity-0' : 'opacity-100 blur-sm'
        }`}
      />
      <img
        src={highQualitySrc}
        alt={alt}
        loading="lazy"
        className={`relative h-full w-full object-cover transition-opacity duration-700 ${
          isHighResLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setHighResLoaded(true)}
      />
    </div>
  );
}
