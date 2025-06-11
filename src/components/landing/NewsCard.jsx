import { CiCalendar } from 'react-icons/ci';
import { GoPerson } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { FaArrowRight, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LearnMoreBtn from '../common/LearnMoreBtn';
const NewsCard = ({ news }) => {
  return (
    <div className="flex flex-col gap-1 overflow-hidden">
      {/* News Image */}
      <div className="h-[400px] w-full overflow-hidden bg-gray-200">
        <img
          src={news.image}
          alt={news.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 py-2">
        <div className="flex flex-grow flex-col gap-2">
          <div className="flex items-center gap-3 bg-gray-50">
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
          <h3 className="text-lg font-bold">{news.title}</h3>
          <p className="font-body1 line-clamp-4 text-[#212124]">
            {news.content}
          </p>
        </div>
        <Link
          to={`/news/${news.id}`}
          className=""
        >
          <LearnMoreBtn text='Read More' styles='hover:px-2'/>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
