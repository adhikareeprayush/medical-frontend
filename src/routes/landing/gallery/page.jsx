import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, Play, X } from 'lucide-react';
import PageBanner from '../../../components/landing/PageBanner';
import { getGalleryById, getGalleryMediaByGallery } from '../../../utils/api';
import { getYoutubeEmbedUrl } from '../../../utils/getYoutubeEmbedUrl';
import { getTransformedImageUrl } from '../../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../../utils/ProgressiveImage';
import LearnMoreBtn from '../../../components/common/LearnMoreBtn';
import { Link } from 'react-router-dom';

const SingleGallery = () => {
  const { id } = useParams();
  const [gallery, setGallery] = useState(null);
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  console.log(id);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        setError(null);
        const [galleryRes, mediaRes] = await Promise.all([
          getGalleryById(id),
          getGalleryMediaByGallery({ gallery_id: id }),
        ]);
        setGallery(galleryRes.data.data);
        setMediaList(mediaRes.data.data);
      } catch (err) {
        setError('Failed to load gallery.');
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, [id]);

  const filteredMedia =
    currentFilter === 'all'
      ? mediaList
      : mediaList.filter((item) => item.media_type === currentFilter);

  const openLightbox = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedMedia(null);
    setCurrentIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    if (filteredMedia.length === 0) return;
    const prevIndex =
      (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setSelectedMedia(filteredMedia[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const goToNext = () => {
    if (filteredMedia.length === 0) return;
    const nextIndex = (currentIndex + 1) % filteredMedia.length;
    setSelectedMedia(filteredMedia[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const MediaItem = ({ media, onClick }) => (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-[4px] hover:scale-105 hover:shadow-2xl hover:shadow-black/30"
      onClick={onClick}
    >
      {media.media_type === 'image' ? (
        <ProgressiveImage
          lowQualitySrc={getTransformedImageUrl(media.media_url, 40, 40)}
          highQualitySrc={getTransformedImageUrl(media.media_url, 1080, 720)}
          alt={'media'}
          width={350}
          height={300}
          className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div
          className="relative h-[300px] w-full cursor-pointer"
          onClick={() => setVideoLoaded(true)}
        >
          {!videoLoaded ? (
            <img
              src={`https://img.youtube.com/vi/${media.media_url.split('v=')[1]}/hqdefault.jpg`}
              alt="video thumbnail"
              className="h-full w-full object-cover"
            />
          ) : (
            <iframe
              loading="lazy"
              src={getYoutubeEmbedUrl(media.media_url)}
              title={`Video ${media.id}`}
              className="absolute top-0 left-0 h-full w-full"
              frameBorder="0"
              allowFullScreen
            />
          )}
        </div>
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
      <div className="fixed inset-0 z-[200] flex h-screen w-screen items-center justify-center bg-white/5 p-4 backdrop-blur-lg">
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/80"
          >
            <X className="h-4 w-4" />
          </button>
          {/* Prev button */}
          {filteredMedia.length > 1 && (
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black"
              aria-label="Previous"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}
          {/* Next button */}
          {filteredMedia.length > 1 && (
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black"
              aria-label="Next"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}
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
      <PageBanner
        backgroundImage={gallery?.thumbnail_url || ''}
        title={gallery?.name || 'Gallery'}
        subtitle="gallery"
      />
      <section className="py-5">
        <div className="mx-auto flex flex-col gap-4">
          {loading ? (
            <div className="flex h-[300px] min-h-[50vh] items-center justify-center">
              <Loader2 className="text-secondary h-6 w-6 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <>
              {/* Filter Tabs */}
              <div className="mb-6 flex flex-wrap justify-center gap-3">
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
                    onClick={() => openLightbox(media, index)}
                  />
                ))}
              </div>
              {/* Empty state */}
              {filteredMedia?.length === 0 && (
                <div className="text-center">
                  <p className="text-lg">
                    No media found for the selected filter.
                  </p>
                </div>
              )}
            </>
          )}
          <span>
            <Link to={`/gallery`}>
              {' '}
              <LearnMoreBtn
                text="Back to gallery"
                styles="hover:px-2 hover:rounded-md"
              />
            </Link>
          </span>
        </div>
        {/* Lightbox */}
        <Lightbox />
      </section>
    </>
  );
};

export default SingleGallery;
