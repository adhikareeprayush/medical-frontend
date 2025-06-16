import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CiCalendar } from 'react-icons/ci';
import { FaArrowRight, FaRegHeart } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import PageBanner from './PageBanner';
import banner from '../../assets/images/banner/hospital_banner.jpg';
import RecentPosts from './RecentPosts';
import { getNewsById, updateNewsLikes, updateNewsViews } from '../../utils/api';

const NewsDetails = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedNews = JSON.parse(localStorage.getItem('likedNews') || '[]');
    setLiked(likedNews.includes(Number(newsId)));
  }, [newsId]);

  const handleLike = async () => {
    if (liked) return;

    try {
      await updateNewsLikes(newsId);

      const likedNews = JSON.parse(localStorage.getItem('likedNews') || '[]');
      likedNews.push(Number(newsId));
      localStorage.setItem('likedNews', JSON.stringify(likedNews));
      setLiked(true);
      if (news) setNews((prev) => ({ ...prev, like: prev.like + 1 }));
    } catch (err) {
      console.error('Failed to like:', err);
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await getNewsById(newsId);
        setNews(res.data.data);
      } catch (err) {
        console.error('Failed to fetch news:', err);
        setNews(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsId]);

  useEffect(() => {
    const updateViews = async () => {
      try {
        await updateNewsViews(newsId);
        if (news) setNews((prev) => ({ ...prev, views: prev.views + 1 }));
      } catch (error) {
        console.error('Failed to update views:', error);
      }
    };

    updateViews();
  }, [newsId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  if (!news) {
    return <div className="text-center text-red-500">News not found</div>;
  }

  return (
    <>
      <PageBanner
        subtitle="News"
        subSubtitle={newsId}
        title={news.title}
        backgroundImage={banner}
      />
      <section className="flex w-full gap-2 py-5">
        <div className="flex w-full flex-col gap-2 px-2 lg:flex-3 xl:flex-2">
          <div className="h-[300px] w-full overflow-hidden rounded-sm bg-gray-200 sm:h-[400px] md:h-[500px] lg:h-[560px]">
            <img
              src={news.image_url}
              alt={news.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap gap-4 bg-gray-50 text-sm sm:text-base">
              <div className="flex items-center gap-1 text-gray-700">
                <CiCalendar />
                <p>
                  {new Date(news.createdAt).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex items-center gap-1 text-gray-700">
                <GoPerson className="text-secondary" />
                <Link to={news.source} className="font-body1">
                  <b>source</b>{' '}
                  <span className="text-secondary">
                    {news.source?.match(/https?:\/\/(?:www\.)?([^./]+)/)?.[1] ??
                      'Unknown'}
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-1 text-gray-700">
                <IoEyeOutline className="text-blue-600" />
                <span>{news.views}</span>
              </div>
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 ${liked ? 'opacity-50' : ''}`}
              >
                <FaRegHeart className="text-[#E2315C]" />
                <span>{news.like}</span>
              </button>
            </div>

            <h3 className="text-xl leading-snug font-bold sm:text-2xl">
              {news.title}
            </h3>

            <p className="text-sm leading-relaxed tracking-wide text-[#212124] sm:text-base">
              {news.content || news.description}
            </p>
          </div>

          <div className="flex my-3 w-full justify-between">
            {news.previous ? (
              <Link
                to={`/news/${news.previous.id}`}
                className="group text-primary bg-accent hover:bg-primary tansition flex w-fit cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-medium duration-100 ease-in-out hover:text-white"
              >
                <FaArrowRight className="rotate-180 duration-300 group-hover:-translate-x-[4px]" />
                Previous Article
              </Link>
            ) : (
              <div />
            )}

            {news.next ? (
              <Link
                to={`/news/${news.next.id}`}
                className="group text-primary bg-accent hover:bg-primary flex w-fit cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition duration-100 ease-in-out hover:text-white"
              >
                Next Article
                <FaArrowRight className="duration-300 group-hover:translate-x-[4px]" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
        <div className="hidden flex-1 lg:flex">
          <RecentPosts />
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
