import { ArrowRight } from 'lucide-react';
import iconMap from '../common/iconMap'; // Changed to named import
import LearnMoreBtn from '../common/LearnMoreBtn';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon];
  return (
    <a
      href={`/services/${service.slug}`}
      className="group relative flex h-full w-full cursor-pointer flex-col"
    >
      <div className="relative h-[300px]">
        <div className="bg-primary/80 absolute h-full w-full rounded-tl-md rounded-tr-md opacity-0 duration-300 group-hover:opacity-100" />
        <ProgressiveImage
          lowQualitySrc={getTransformedImageUrl(service.image, 10, 10)}
          highQualitySrc={getTransformedImageUrl(service.image, 1080, 720)}
          alt={service.title}
          className="h-full w-full rounded-tl-md rounded-tr-md object-cover"
        />
        <div className="bg-primary absolute right-[24px] -bottom-[32px] flex h-[80px] w-[80px] flex-col items-center justify-center rounded-full duration-300 group-hover:right-[50%] group-hover:bottom-[50%] group-hover:translate-x-1/2 group-hover:translate-y-1/2">
          {IconComponent ? (
            <IconComponent size={26} color="white" />
          ) : (
            <span className="text-xl text-white">?</span>
          )}
        </div>
      </div>

      <div className="flex flex-grow flex-col justify-between gap-2 rounded-br-md rounded-bl-md border-[1.5px] border-t-0 border-gray-200 bg-white px-1 pt-4 pb-2">
        <div className="flex flex-grow flex-col gap-2">
          <h3 className="font-title text-primary line-clamp-2 flex flex-grow items-center">
            {service.title}
          </h3>
          <p className="font-body line-clamp-4 text-gray-600">
            {service.description}
          </p>
        </div>
        <div>
          <LearnMoreBtn text="Learn More" styles="mx-auto px-2" />
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;
