import React from 'react';
import { Link } from 'react-router-dom';
import NewsData from '../../news.json';
import EyeIcon from '../../assets/icons/eye.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import LearnMoreBtn from '../common/LearnMoreBtn';

const NewsSection = () => {
  return (
    <section className="my-24 flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="my-4 text-center"> 
        <h1 className="text-secondary text-xl sm:text-2xl font-bold tracking-widest uppercase mb-[20px]">
          Better Information, Better Health
        </h1>
        <p className="text-primary text-2xl sm:text-3xl font-display1">News</p>
      </div>

      <div className="mt-6 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        {NewsData.map((news) => (
          <div
            key={news.id}
            className="overflow-hidden rounded-sm shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <Link
              to={`/news/${news.id}`}
              className="flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 h-52 md:h-auto">
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-2 p-4">
                <h2 className="text-sm text-secondary">{news.date}</h2>
                <h2 className="text-sm text-secondary">By {news.author}</h2>
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <div className="mt-auto flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <img src={EyeIcon} alt="Views" className="h-3 w-3" />
                    <span>{news.views}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <img src={HeartIcon} alt="Likes" className="h-3 w-3" />
                    <span>{news.likes}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link to="/news">
          <LearnMoreBtn text="View All News" styles="mt-4" />
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
