import { useEffect, useState } from 'react';
import NewsCard from '../../components/landing/NewsCard';
import PageBanner from '../../components/landing/PageBanner';
import newsBanner from '../../assets/images/banner/newsBanner.png';
import RecentPosts from '../../components/landing/RecentPosts';
import { getAllNews } from '../../utils/api';
import Loader from '../../components/common/Loader';

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getAllNews();
        setNewsList(res.data.data || []);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      <PageBanner subtitle="News" title="News" backgroundImage={newsBanner} />
      <section className="flex w-full justify-center gap-2 py-5">
        <div className="flex flex-col gap-4 px-2 lg:flex-3 xl:flex-2">
          {loading ? (
            <Loader />
          ) : newsList.length > 0 ? (
            <>
              {newsList.slice(0, visibleCount).map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
              {visibleCount < newsList.length && (
                <button
                  onClick={handleShowMore}
                  className="bg-primary hover:bg-primary-dark self-center rounded-md px-4 py-2 text-white"
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">No news available.</p>
          )}
        </div>
        <div className="hidden flex-1 lg:flex">
          <RecentPosts />
        </div>
      </section>
    </>
  );
};

export default News;
