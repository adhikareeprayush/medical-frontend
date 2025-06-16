import phone from '../../assets/icons/call.svg';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/location.svg';
import logo from '../../assets/logo.png';

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
    <section className="lg:flex w-full items-center justify-center lg:h-[80px] lg:justify-between">
      <img
        className="hidden size-[110px] object-contain lg:inline-block"
        src={logo}
        alt="Logo"
      />
      <div className="hidden lg:flex flex-wrap items-center justify-around gap-2 lg:flex-nowrap lg:justify-between">
        {contacts.map((contact, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <img
                className="lg:size-2 xl:size-3"
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
                <span className="lg:font-body2 xl:font-body1 text-primary font-medium uppercase">
                  {contact.label}
                </span>
                <span className="lg:font-body2 xl:font-body1 text-secondary font-medium">
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
