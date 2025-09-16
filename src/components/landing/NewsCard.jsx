// import { CiCalendar } from 'react-icons/ci';
// import { GoPerson } from 'react-icons/go';
// import { IoEyeOutline } from 'react-icons/io5';
// import { FaArrowRight, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LearnMoreBtn from '../common/LearnMoreBtn';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';
const NewsCard = ({ news }) => {
  return (
    <div className="flex flex-col gap-1 overflow-hidden">
      {/* News Image */}
      <div className="h-[400px] w-full overflow-hidden bg-gray-200">
        <ProgressiveImage
          lowQualitySrc={getTransformedImageUrl(news.image_url, 40, 40)}
          highQualitySrc={getTransformedImageUrl(news.image_url, 1080, 720)}
          alt={news.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 py-2">
        <div className="flex flex-grow flex-col gap-2">
          <div className="flex items-center gap-3 bg-gray-50">
            {/* <div className="flex items-center gap-1 text-base">
              <CiCalendar strokeWidth={1} />
              <p className="font-body1">
                {new Date(news.createdAt).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div> */}

            {/* <div className="flex items-center gap-1 text-base">
              <GoPerson strokeWidth={1} className="text-secondary" />
              <Link to={news.source} className="font-body1">
                <b>source</b>{' '}
                {news.source?.match(/https?:\/\/(?:www\.)?([^./]+)/)?.[1] ??
                  'Unknown'}
              </Link>
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

              <div className="font-semibold">{news.like}</div>
            </div> */}
          </div>
          <h3 className="text-lg font-bold">{news.title}</h3>
          <p className="font-body1 line-clamp-4 text-[#212124]">
            {news.content}
          </p>
        </div>
        <Link to={`/news/${news.id}`} className="">
          <LearnMoreBtn text="Read More" styles="hover:px-2 hover:rounded-md" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
