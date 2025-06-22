import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LearnMoreBtn from '../common/LearnMoreBtn';
import { getAllNews } from '../../utils/api';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';

const NewsSection = () => {
  const [recentNews, setRecentNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getAllNews(4);
        setRecentNews(res.data.data || []);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <section className="my-15 flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-secondary mb-3 text-sm font-bold tracking-widest uppercase sm:text-base md:text-lg">
          Better Information, Better Health
        </h1>
        <p className="text-primary font-display1 text-2xl sm:text-3xl">News</p>
      </div>

      {/* Grid of news */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2">
        {recentNews.map((news) => (
          <div
            key={news.id}
            className="rounded-md bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <Link to={`/news/${news.id}`} className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="h-52 w-full lg:h-auto lg:w-2/5">
                <ProgressiveImage
                  lowQualitySrc={getTransformedImageUrl(news.image_url, 40, 40)}
                  highQualitySrc={getTransformedImageUrl(
                    news.image_url,
                    1080,
                    720,
                  )}
                  alt={news.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex w-full flex-col justify-between p-2 lg:w-3/5 lg:p-3">
                <div>
                  {/* <p className="text-secondary mb-1 text-sm font-medium tracking-wider">
                    {new Date(news.createdAt).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}{' '}
                    |{' '}
                    {news.source?.match(/https?:\/\/(?:www\.)?([^./]+)/)?.[1] ??
                      'Unknown'}
                  </p> */}
                  <h3 className="mb-3 text-lg leading-snug font-semibold text-black">
                    {news.title}
                  </h3>
                </div>
                {/* <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <img src={EyeIcon} alt="Views" className="h-3 w-3" />
                    <span className="font-medium text-black">{news.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src={HeartIcon}
                      alt="Likes"
                      className="h-[21px] w-[21px]"
                    />
                    <span className="font-medium text-black">{news.likes}</span>
                  </div>
                </div> */}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link to="/news">
          <LearnMoreBtn text="View All News" styles="hover:px-2" />
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
