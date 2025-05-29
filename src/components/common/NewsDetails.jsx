import React from "react";
import { useParams } from "react-router-dom";
import EyeIcon from "../../assets/icons/eye.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import NewsData from "../../news.json";

const NewsDetails = () => {
  const { newsId } = useParams();

  const news = NewsData.find((item) => item.id === parseInt(newsId));

  if (!news) {
    return <div className="text-center text-red-500">News not found</div>;
  }
  return (
    <div>
      <div>
        <img src={news.image} alt="" />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <h2 className="text-secondary ">{news.date}</h2>
        <h2 className="text-secondary ">By {news.author}</h2>
        <h3 className="text-lg font-semibold  my-1.5">{news.title}</h3>
        <div className="flex gap-4 items-center">
          <div className="flex gap-1 items-center">
            <img src={EyeIcon} alt="" className="h-2 w-2" />
            <span>{news.views}</span>
          </div>
          <div className="flex gap-1 items-center">
            <img src={HeartIcon} alt="" className="h-2 w-2" />
            <span>{news.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
