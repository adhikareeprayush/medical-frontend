import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsData from '../../news.json';
import { CiCalendar } from 'react-icons/ci';
import { FaArrowRight, FaRegHeart } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import PageBanner from './PageBanner';
import SingleNewsBanner from '../../assets/images/banner/singleNewsBanner.png';
import RecentPosts from './RecentPosts';

const NewsDetails = () => {
  const { newsId } = useParams();
  const news = NewsData.find((item) => item.id === parseInt(newsId));

  if (!news) {
    return <div className="text-center text-red-500">News not found</div>;
  }

  return (
    <>
      <PageBanner
        subtitle="News"
        subSubtitle={newsId}
        title={news.title}
        backgroundImage={SingleNewsBanner}
      />
      <section className="flex w-full gap-2 py-5">
        <div className="flex flex-col gap-2 lg:flex-3 xl:flex-2">
          <div className="h-[300px] w-full overflow-hidden rounded-sm bg-gray-200 sm:h-[400px] md:h-[500px] lg:h-[560px]">
            <img
              src={news.image}
              alt={news.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-1">
            {/* Meta info section */}
            <div className="flex flex-wrap gap-4 bg-gray-50 text-sm sm:text-base">
              <div className="flex items-center gap-1 text-gray-700">
                <CiCalendar />
                <p>{news.date}</p>
              </div>

              <div className="flex items-center gap-1 text-gray-700">
                <GoPerson className="text-secondary" />
                <p>By {news.author}</p>
              </div>

              <div className="flex items-center gap-1 text-gray-700">
                <IoEyeOutline className="text-blue-600" />
                <span>{news.views}</span>
              </div>

              <div className="flex items-center gap-1 text-gray-700">
                <FaRegHeart className="text-[#E2315C]" />
                <span>{news.likes}</span>
              </div>
            </div>

            <h3 className="text-xl leading-snug font-bold sm:text-2xl">
              {news.title}
            </h3>

            <p className="text-sm leading-relaxed tracking-wide text-[#212124] sm:text-base">
              {news.content}
            </p>
          </div>

          <div className="flex w-full justify-between">
            <button className="group text-primary bg-accent flex w-fit cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-medium">
              <FaArrowRight className="rotate-180 duration-300 group-hover:-translate-x-[4px]" />
              Previous Article
            </button>
            <button className="group text-primary bg-accent flex w-fit cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-medium">
              Next Article
              <FaArrowRight className="duration-300 group-hover:translate-x-[4px]" />
            </button>
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
