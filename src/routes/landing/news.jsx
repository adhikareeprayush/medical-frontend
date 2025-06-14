import NewsCard from '../../components/landing/NewsCard';
import PageBanner from '../../components/landing/PageBanner';
import newsBanner from '../../assets/images/banner/newsBanner.png';
import RecentPosts from '../../components/landing/RecentPosts';
import { useEffect, useState } from 'react';
import { getAllNews } from '../../utils/api';
const News = () => {
  const [newsList, setNewsList] = useState([]);
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
  return (
    <>
      <PageBanner subtitle="News" title="News" backgroundImage={newsBanner} />
<<<<<<< HEAD
      <section className="flex w-full justify-center gap-3 py-5">
        <div className="flex flex-col gap-6 lg:flex-3 xl:flex-2">
          {mockNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
=======
      <section className="flex w-full justify-center gap-2 py-5">
        <div className="flex flex-col gap-2 lg:flex-3 xl:flex-2">
          {loading ? (
            <div className="flex justify-center py-10">
              <div className="border-primary h-10 w-10 animate-spin rounded-full border-4 border-t-transparent" />
            </div>
          ) : newsList.length > 0 ? (
            newsList.map((news) => <NewsCard key={news.id} news={news} />)
          ) : (
            <p className="text-center text-gray-500">No news available.</p>
          )}
>>>>>>> 693f4030d23270b99c1f88900b7dd46f4013d548
        </div>
        <div className="hidden flex-1 lg:flex">
          <RecentPosts />
        </div>
      </section>
    </>
  );
};

export default News;
