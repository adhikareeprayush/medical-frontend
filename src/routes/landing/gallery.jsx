import { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';
import PageBanner from '../../components/landing/PageBanner';
import { getGalleryMediaByGallery } from '../../utils/api';
import { getYoutubeEmbedUrl } from '../../utils/getYoutubeEmbedUrl';

const Gallery = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mediaList, setMediaList] = useState();
  const galleryId = 2;
  // Sample media data
  console.log(mediaList);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getGalleryMediaByGallery({
          gallery_id: galleryId,
        });
        setMediaList(response.data.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load gallery media.');
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);
  const filteredMedia =
    currentFilter === 'all'
      ? mediaList
      : mediaList.filter((item) => item.media_type === currentFilter);

  const openLightbox = (media) => {
    setSelectedMedia(media);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  const MediaItem = ({ media, onClick }) => (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-[4px] hover:scale-105 hover:shadow-2xl hover:shadow-black/30"
      onClick={onClick}
    >
      {media.media_type === 'image' ? (
        <img
          src={media.media_url}
          alt={'media'}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <iframe
          src={getYoutubeEmbedUrl(media.media_url)}
          title={`Video ${media.id}`}
          className="h-64 w-full"
          frameBorder="0"
          allowFullScreen
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      {/* Play button for videos */}
      {media.media_type === 'video' && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-16 w-16 scale-0 transform items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-6 w-6 text-gray-800" fill="currentColor" />
          </div>
        </div>
      )}
    </div>
  );

  const Lightbox = () => {
    if (!lightboxOpen || !selectedMedia) return null;

    return (
      <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-white/5 p-4 backdrop-blur-lg">
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/80"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Media content */}
          <div className="aspect-[16/9] w-full max-w-6xl overflow-hidden">
            {selectedMedia?.media_type === 'image' ? (
              <img
                src={selectedMedia.media_url}
                alt={selectedMedia.title}
                className="h-full w-full object-contain"
              />
            ) : (
              <iframe
                src={getYoutubeEmbedUrl(selectedMedia.media_url)}
                title={`Video ${selectedMedia.id}`}
                className="h-full w-full"
                frameBorder="0"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <PageBanner title="Gallery" subtitle="gallery" />
      <section className="py-5">
        <div className="mx-auto flex flex-col gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-secondary text-2xl font-semibold">
              Discover stunning images and captivating videos
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { key: 'all', label: 'All Media' },
              { key: 'image', label: 'Images' },
              { key: 'video', label: 'Videos' },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setCurrentFilter(filter.key)}
                className={`cursor-pointer rounded-full border-2 px-6 py-3 font-medium backdrop-blur-sm transition-all duration-300 ${
                  currentFilter === filter.key
                    ? '-translate-y-1 transform border-white/40 bg-white/20 shadow-lg'
                    : 'border-white/20 bg-white/10 hover:-translate-y-1 hover:border-black/40 hover:bg-white/20 hover:shadow-lg'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMedia?.map((media, index) => (
              <MediaItem
                key={index}
                media={media}
                onClick={() => openLightbox(media)}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredMedia?.length === 0 && (
            <div className="text-center">
              <p className="text-lg">No media found for the selected filter.</p>
            </div>
          )}
        </div>

        {/* Lightbox */}
        <Lightbox />
      </section>
    </>
  );
};

export default Gallery;
