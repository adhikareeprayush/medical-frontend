import iconMap from '../common/iconMap';

const ServiceSidebar = ({ services, selectedSlug, onSelect }) => {
  return (
    <aside className="hidden h-fit overflow-hidden rounded-[5px] border border-gray-300 lg:flex">
      <ul>
        {services.map((service) => {
          const IconComponent = iconMap[service.icon];

          return (
            <li
              key={service.id}
              onClick={() => onSelect(service.slug)}
              className={`font-body flex cursor-pointer gap-2 px-4 py-3 ${
                selectedSlug === service.slug ? 'bg-primary text-white' : ''
              }`}
            >
              {IconComponent ? (
                <IconComponent
                  size={20}
                  className={`text-secondary inline ${
                    selectedSlug === service.slug ? 'text-white' : ''
                  }`}
                />
              ) : (
                <span className="inline"></span>
              )}
              <p>{service.title}</p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default ServiceSidebar;
