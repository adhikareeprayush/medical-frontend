import React from 'react';
import { Link } from 'react-router-dom';
import NewsData from '../../news.json';
import EyeIcon from '../../assets/icons/eye.svg';
import HeartIcon from '../../assets/icons/heart.svg';

const NewsSection = () => {
  return (
    <section className="my-10 flex w-full flex-col items-center justify-center">
      <div className="my-4">
        <h1 className="text-secondary text-center text-xl font-bold tracking-widest uppercase">
          Better Information, Better Health
        </h1>
        <p className="text-primary font-display1 text-center">News</p>
      </div>
      <div className="mt-4 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
        {NewsData.map((news) => (
          <div key={news.id} className="overflow-hidden rounded-lg shadow-md">
            <Link to={`/news/${news.id}`} className="flex justify-center">
              <div>
                <img src={news.image} className="h-full object-cover" alt="" />
              </div>
              <div className="flex flex-col gap-1 px-2">
                <h2 className="text-secondary">{news.date}</h2>
                <h2 className="text-secondary">By {news.author}</h2>
                <h3 className="my-1.5 text-lg font-semibold">{news.title}</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <img src={EyeIcon} alt="" className="h-2 w-2" />
                    <span>{news.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={HeartIcon} alt="" className="h-2 w-2" />
                    <span>{news.likes}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
