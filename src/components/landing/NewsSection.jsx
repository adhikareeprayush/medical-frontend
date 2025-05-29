import React from 'react';
import { Link } from 'react-router-dom';
import NewsData from '../../news.json';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';

const NewsSection = () => {
  return (
    <section className="my-10 flex w-full flex-col items-center justify-center">
      <div className="my-4">
        <h1 className="text-secondary text-center text-xl font-bold tracking-widest uppercase">
          Better Information, Better Health
        </h1>
        <p className="text-primary font-display1 text-center">News</p>
      </div>
      <div className="mt-4 grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:gap-4">
        {NewsData.map((news) => (
          <div
            key={news.id}
            className="h-[160px] overflow-hidden rounded-[5px] shadow-[0_0_20px_rgba(0,0,0,0.05)] md:h-[160px]"
          >
            <Link to={`/news/${news.id}`} className="flex h-full items-center">
              <div className="h-full">
                <img
                  src={news.image} 
                  alt=""
                  className="h-full object-contain"
                />
              </div>
              <div className="flex h-full flex-col gap-1 p-2">
                <h2 className="text-secondary font-small">
                  {news.date} | {news.author}
                </h2>
                <h3 className="font-body1 lg:font-body2 my-1.5 line-clamp-3 flex-grow font-semibold">
                  {news.title}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <IoEyeOutline
                      size={16}
                      strokeWidth={3}
                      className="text-[#526AE9]"
                    />
                    <span>{news.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegHeart size={16} className="text-[#E2315C]" />
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
