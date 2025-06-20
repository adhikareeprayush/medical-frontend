import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';

const ServiceDetail = ({ service }) => {
  console.log(service);
  if (!service) return <div>Select a service to see details</div>;

  return (
    <div className="flex flex-1 flex-col gap-2 px-1">
      <div className="h-[500px] w-full overflow-hidden">
        <ProgressiveImage
          lowQualitySrc={getTransformedImageUrl(service.image, 10, 10)}
          highQualitySrc={getTransformedImageUrl(service.image, 1080, 720)}
          alt={service.title}
          className="h-full w-full"
        />
      </div>
      <h1 className="font-display2 text-primary font-normal">
        {service.summary}
      </h1>
      {Array.isArray(service?.points) || typeof service?.points === 'string' ? (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {service.points
            ?.replace(/^\[|\]$/g, '') // remove [ and ]
            .split(',')
            .map((point, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <span className="bg-secondary h-2 w-2 rounded-full"></span>
                <span className="text-base text-gray-800">
                  {point.replace(/['"]/g, '').trim()}
                </span>
              </div>
            ))}
        </div>
      ) : null}
      <p className="font-body">{service.description}</p>
    </div>
  );
};
export default ServiceDetail;
