import { ArrowRight } from 'lucide-react';
import iconMap from '../common/iconMap';
import LearnMoreBtn from '../common/LearnMoreBtn';

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon];
  return (
    <a href={`/services/${service.slug}`} className="group relative h-[552px] w-full cursor-pointer lg:w-[300px]">
      <div className="relative h-[300px]">
        <div className="bg-primary/80 absolute h-full w-full rounded-tl-md rounded-tr-md opacity-0 duration-300 group-hover:opacity-100" />
        <img
          src={service.image}
          alt={service.title}
          className={`h-full w-full rounded-tl-md rounded-tr-md object-cover transition-all duration-300`}
        />
        <div className="bg-primary absolute right-[24px] -bottom-[32px] flex h-[80px] w-[80px] flex-col items-center justify-center rounded-full duration-300 group-hover:right-[50%] group-hover:bottom-[50%] group-hover:translate-x-1/2 group-hover:translate-y-1/2">
          {/* <img src={bandageIcon} alt="icon" width={26} height={26} /> */}
           {IconComponent ? (
            <IconComponent size={26} color="white" />
          ) : (
            // fallback icon or nothing
            <span className="text-white text-xl">?</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-br-md rounded-bl-md border-[1.5px] border-t-0 border-gray-200 bg-white px-3 pt-5 pb-4">
        <h3 className="font-title text-primary text-lg">Free Checkup</h3>
        <p className="font-body line-clamp-4 text-gray-600">
          {service.description}
        </p>
        <LearnMoreBtn text='Learn More' styles='mx-auto'/>
      </div>
    </a>
  );
};

export default ServiceCard;
