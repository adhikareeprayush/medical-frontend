import React from "react";
import { useParams } from "react-router-dom";
import NewsData from "../../news.json";
import { CiCalendar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import PageBanner from "./PageBanner";
import SingleNewsBanner from "../../assets/images/banner/singleNewsBanner.png";

const NewsDetails = () => {
  const { newsId } = useParams();
  const news = NewsData.find((item) => item.id === parseInt(newsId));

  if (!news) {
    return <div className="text-center text-red-500">News not found</div>;
  }

  return (
    <>
    <PageBanner subtitle="News" subSubtitle={newsId} title={news.title} backgroundImage={SingleNewsBanner} />
    <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-0 mx-auto my-6">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px] overflow-hidden bg-gray-200 rounded-sm">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 py-4">
        {/* Meta info section */}
        <div className="flex flex-wrap gap-4 text-sm sm:text-base bg-gray-50">
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

        <h3 className="text-xl sm:text-2xl font-bold leading-snug">{news.title}</h3>

        <p className="text-sm sm:text-base leading-relaxed tracking-wide text-[#212124]">
          {news.content}
        </p>
      </div>
    </div>
    </>    
  );
};

export default NewsDetails;
