import React from "react";
import { Link } from "react-router-dom";
import NewsData from "../../news.json";
import EyeIcon from "../../assets/icons/eye.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import LearnMoreBtn from "../common/LearnMoreBtn";

const NewsSection = () => {
  return (
    <section className="w-full my-10 flex flex-col items-center justify-center">
      <div className="my-4">
        <h1 className="text-secondary font-bold text-xl tracking-widest uppercase text-center">
          Better Information, Better Health
        </h1>
        <p className="text-primary font-display1 text-center">News</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mt-4">
        {NewsData.map((news) => (
          <div key={news.id} className="shadow-md">
            <Link
              to={`/news/${news.id}`}
              className="flex items-center justify-center gap-4"
            >
              <div className="">
                <img
                  src={news.image}
                  alt={news.title}
                  className=""
                />
              </div>
              <div className="flex flex-col gap-1 p-2">
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
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link
          to="/news"
          className=""
        >
          <LearnMoreBtn text="View All News" styles="mt-4"/>
        </Link>
      </div> 
    </section>
  );
};

export default NewsSection;
