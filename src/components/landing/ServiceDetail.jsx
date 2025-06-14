const ServiceDetail = ({ service }) => {
  console.log(service);
  if (!service) return <div>Select a service to see details</div>;

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="max-h-[500px] w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <h1 className="font-display2 text-primary font-normal">
        {service.summary}
      </h1>
      {Array.isArray(service?.points) || typeof service?.points === 'string' ? (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {(typeof service?.points === 'string'
            ? JSON.parse(
                service.points
                  .replace(/'''/g, '"') // replace triple single quotes with double quotes
                  .replace(/'/g, '"'), // replace remaining single quotes with double quotes
              )
            : service.points
          )?.map((point, index) => (
            <div key={index} className="flex items-center gap-1">
              <span className="bg-secondary h-2 w-2 rounded-full"></span>
              <span className="text-base text-gray-800">{point}</span>
            </div>
          ))}
        </div>
      ) : null}
      <p className="font-body">{service.description}</p>
    </div>
  );
};
export default ServiceDetail;
