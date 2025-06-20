import logo from '../../assets/logo.png';
import { Clock, LocationEdit, PhoneCall } from 'lucide-react';
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
    <section className="z-50 hidden w-full items-center justify-center bg-white lg:flex lg:min-h-[80px] lg:justify-between">
      <div className="h-fit w-fit rounded-xl p-1">
        <img
          className="hidden object-contain lg:inline-block"
          src={logo}
          width={160}
          height={160}
          alt="Logo"
        />
      </div>

      <div className="hidden flex-wrap items-center justify-around gap-2 lg:flex lg:flex-nowrap lg:justify-between">
        {contacts.map((contact, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <div className="text-secondary">
                {contact.icon === 'call' ? (
                  <PhoneCall />
                ) : contact.icon === 'clock' ? (
                  <Clock />
                ) : (
                  <LocationEdit />
                )}
              </div>
              {/* <img
                className="text-white lg:size-2 xl:size-3"
                src={
                  contact.icon === 'call' ? (
                    <PhoneCall />
                  ) : contact.icon === 'clock' ? (
                    clock
                  ) : (
                    location
                  )
                }
                alt={contact.label}
              /> */}
              <div className="flex flex-col">
                <span className="lg:font-body2 xl:font-body1 text-primary font-medium uppercase">
                  {contact.label}
                </span>
                <span className="lg:font-body2 xl:font-body1 text-secondary/80 font-medium">
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
