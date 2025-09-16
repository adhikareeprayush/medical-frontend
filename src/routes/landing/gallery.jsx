import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import PageBanner from '../../components/landing/PageBanner';
import { getAllGalleries } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
// import NewsSection from '../../components/landing/NewsSection';
// import ClinicalDepartment from '../../components/landing/ClinicalDepartment';

const GalleryLanding = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAllGalleries();
        setGalleries(response.data.data);
      } catch (err) {
        setError('Failed to load galleries.');
      } finally {
        setLoading(false);
      }
    };
    fetchGalleries();
  }, []);

  return (
    <>
      <PageBanner title="Gallery" subtitle="gallery" />
      <section className="flex flex-col gap-5 py-5">
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <div className="text-center">
            <p className="text-secondary text-2xl font-semibold">
              Browse all galleries
            </p>
          </div>
          {loading ? (
            <div className="flex h-[300px] min-h-[50vh] items-center justify-center">
              <Loader2 className="text-secondary h-6 w-6 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {galleries.map((gallery) => (
                <div
                  key={gallery.id}
                  className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow transition hover:shadow-lg"
                  onClick={() => navigate(`/gallery/${gallery.id}`)}
                >
                  <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                    {gallery.thumbnail_url ? (
                      <img
                        src={gallery.thumbnail_url}
                        alt={gallery.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-gray-400">No Thumbnail</div>
                    )}
                  </div>
                  <div className="text-primary mt-3 text-center text-lg font-semibold">
                    {gallery.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* <ClinicalDepartment />
        <NewsSection /> */}
      </section>
    </>
  );
};

export default GalleryLanding;
