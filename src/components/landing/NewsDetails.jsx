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
    return (
      <div className="container mx-auto px-4 py-10 text-center text-red-500">
        News not found
      </div>
    );
  }

  return (
    <>
      <PageBanner
        subtitle="News"
        subSubtitle={newsId}
        title={news.title}
        backgroundImage={SingleNewsBanner}
      />

      <div className="container mx-auto px-4">
        <section className="flex flex-col items-center gap-4 py-6 lg:flex-row">
          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* News Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-md sm:h-80 md:h-96 lg:h-[500px]">
              <img
                src={news.image}
                alt={news.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* News Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600 sm:text-base">
              <div className="flex items-center gap-2">
                <CiCalendar className="text-lg" />
                <span>{news.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <GoPerson className="text-secondary text-lg" />
                <span>By {news.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <IoEyeOutline className="text-lg text-blue-600" />
                <span>{news.views} views</span>
              </div>

              <div className="flex items-center gap-2">
                <FaRegHeart className="text-lg text-[#E2315C]" />
                <span>{news.likes} likes</span>
              </div>
            </div>

            {/* News Content */}
            <div className="mt-6 space-y-4">
              <h1 className="text-2xl leading-tight font-bold sm:text-3xl md:text-4xl">
                {news.title}
              </h1>

              <div className="prose max-w-none text-gray-700">
                {news.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 flex flex-row justify-between gap-4">
              <button className="group hover:bg-primary flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-white sm:text-base">
                <FaArrowRight className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
                Previous Article
              </button>
              <button className="group hover:bg-primary flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-white sm:text-base">
                Next Article
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden w-full lg:block lg:w-1/3">
            <RecentPosts />
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsDetails;
