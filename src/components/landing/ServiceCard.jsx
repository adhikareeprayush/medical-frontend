import { ArrowRight } from "lucide-react";
import bandageIcon from "../../assets/icons/bandage.svg";

const ServiceCard = ({ service }) => {
  return (
    <div className="w-full lg:w-[300px] h-[552px] group relative cursor-pointer">
      <div className="relative h-[300px]">
        <div className="absolute h-full w-full group-hover:opacity-100 opacity-0 rounded-tl-md rounded-tr-md bg-primary/80 duration-300" />
        <img
          src={service.image}
          alt={service.title}
          className={`rounded-tl-md rounded-tr-md object-cover w-full h-full transition-all duration-300 `}
        />
        <div className="absolute w-[80px] h-[80px] flex flex-col justify-center items-center -bottom-[32px] right-[24px] group-hover:bottom-[50%] group-hover:right-[50%] group-hover:translate-x-1/2 group-hover:translate-y-1/2 bg-primary rounded-full duration-300">
          <img src={bandageIcon} alt="icon" width={26} height={26} />
        </div>
      </div>

      <div className="pb-4 pt-5 px-3 bg-white flex flex-col gap-2 border-[1.5px] border-t-0 rounded-bl-md rounded-br-md border-gray-200 ">
        <h3 className="text-lg font-title text-primary">Free Checkup</h3>
        <p className="text-gray-600 font-body line-clamp-4">
          {service.description}
        </p>
        <a
          href={service.link}
          className="text-blue-600 font-body inline-flex items-center hover:underline "
        >
          Learn More{" "}
          <ArrowRight color="black" size={20} className="ml-[4px] " />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
