import React from 'react'
import { Link } from "react-router-dom";
import NewsData from "../../news.json";
import CalenderIcon from "../../assets/icons/calender.svg";
import UserIcon from "../../assets/icons/user.svg";
import EyeIcon from "../../assets/icons/eye.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import LearnMoreBtn from "../common/LearnMoreBtn";

const NewsCard = () => {
    // const { news } = props;
  return (
    <div className='w-[60%] mx-auto my-6 flex flex-col items-center justify-center gap-6'>
        {NewsData.map((news) => (
            <div key={news.id} className="">
                <Link
                    to={`/news/${news.id}`}
                    className="flex flex-col gap-[20px]"
                >
                    <div>
                        <img src={news.image} alt="" />
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex gap-1.5'>
                            <img src={CalenderIcon} alt="" />
                            <span>{news.date}</span>
                        </div>
                        <div className='flex gap-1.5'>
                            <img src={UserIcon} alt="" />
                            <span>By {news.author}</span>
                        </div>
                        <div className='flex gap-1.5'>
                            <img src={EyeIcon} alt="" />
                            <span>{news.views}</span>
                        </div>
                        <div className='flex gap-1.5'>
                            <img src={HeartIcon} alt="" />
                            <span>{news.likes}</span>
                        </div>
                    </div>
                    <h2 className='font-display3 lg:font-display2 text-primary tracking-wide'>{news.title}</h2>
                    <p className=''>{news.content}</p>
                    <LearnMoreBtn text="Read More" textStyles="text-primary font-semibold text-sm" styles="px-2 py-1 bg-accent rounded-full w-fit" />
                </Link>
            </div>
        ))}
    </div>
  )
}

export default NewsCard