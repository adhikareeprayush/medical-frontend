import React from "react";
import { useParams } from "react-router-dom";
import NewsData from "../../news.json";
import { CiCalendar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const NewsDetails = () => {
  const { newsId } = useParams();

  const news = NewsData.find((item) => item.id === parseInt(newsId));

  if (!news) {
    return <div className="text-center text-red-500">News not found</div>;
  }
  return (
    <div className="w-[60%] mx-auto my-6">
      <div className="h-[560px] w-full overflow-hidden bg-gray-200">
        <img
          src={news.image}
          alt={news.title}
          className="h-full w-fit mx-auto object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div className="flex flex-grow flex-col gap-3">
          <div className="flex items-center gap-4 bg-gray-50">
            <div className="flex items-center gap-1 text-base">
              <CiCalendar strokeWidth={1} />
              <p className="font-body1">{news.date}</p>
            </div>

            <div className="flex items-center gap-1 text-base">
              <GoPerson strokeWidth={1} className="text-secondary" />
              <p className="font-body1">By {news.author}</p>
            </div>
            <div className="flex items-center gap-1">
              <IoEyeOutline
                size={16}
                strokeWidth={3}
                className="text-[#526AE9]"
              />

              <div className="font-semibold">{news.views}</div>
            </div>
            <div className="flex items-center gap-1">
              <FaRegHeart size={16} className="text-[#E2315C]" />

              <div className="font-semibold">{news.likes}</div>
            </div>
          </div>
          <h3 className="text-2xl font-bold">{news.title}</h3>
          <p className="font-body1 tracking-widest text-[#212124]">
            {news.content}
          </p>
    </div>
    </div>
    </div>
  );
};

export default NewsDetails;
