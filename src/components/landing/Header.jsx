import phone from '../../assets/icons/call.svg';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/location.svg';

const contacts = [
  {
    icon: 'call',
    label: 'Emergency',
    text: '(+977) 9865680100',
  },
  {
    icon: 'clock',
    label: 'Work Hour',
    text: '09:00 - 05:00 Everyday',
  },
  {
    icon: 'location',
    label: 'Location',
    text: 'Near Nepal Rastra Bank, Dhangadhi, Nepal',
  },
];

const Header = () => {
  return (
    <section className="flex w-full items-center justify-center py-2 lg:h-[80px] lg:justify-between">
      <h1 className="font-display2 hidden text-4xl uppercase lg:inline-block">
        <span className="text-primary">med</span>
        <span className="text-secondary">dical</span>
      </h1>
      <div className="flex flex-wrap items-center justify-around gap-2 lg:flex-nowrap lg:justify-between">
        {contacts.map((contact, index) => {
          return (
            <div key={index} className="flex items-center gap-1">
              <img
                className="size-3 lg:size-4"
                src={
                  contact.icon === 'call'
                    ? phone
                    : contact.icon === 'clock'
                      ? clock
                      : location
                }
                alt={contact.label}
              />
              <div className="flex flex-col">
                <span className="font-body1 text-primary font-medium uppercase">
                  {contact.label}
                </span>
                <span className="font-body1 text-secondary font-medium">
                  {contact.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Header;
