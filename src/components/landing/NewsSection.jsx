import React from 'react';
import { Link } from 'react-router-dom';
import NewsData from '../../news.json';
import EyeIcon from '../../assets/icons/eye.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import LearnMoreBtn from '../common/LearnMoreBtn';

const NewsSection = () => {
  return (
    <section className="my-24 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-secondary text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase mb-3">
          Better Information, Better Health
        </h1>
        <p className="text-primary text-2xl sm:text-3xl font-display1">News</p>
      </div>

      {/* Grid of news */}
      <div className="grid w-full max-w-5xl grid-cols-1 sm:grid-cols-2 gap-4">
        {NewsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Link to={`/news/${news.id}`} className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="w-full lg:w-2/5 h-52 lg:h-auto">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5 p-2 lg:p-3 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-secondary tracking-wider font-medium mb-1">
                    {news.date} | By {news.author}
                  </p>
                  <h3 className="text-lg font-semibold text-black leading-snug mb-3">
                    {news.title}
                  </h3>
                </div>
                <div className="flex gap-4 items-center text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <img src={EyeIcon} alt="Views" className="h-3 w-3" />
                    <span className='text-black font-medium'>{news.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={HeartIcon} alt="Likes" className="h-[21px] w-[21px]" />
                    <span className='text-black font-medium'>{news.likes}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link to="/news">
          <LearnMoreBtn text="View All News" />
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
