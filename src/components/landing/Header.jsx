import phone from "../../assets/icons/call.svg";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/location.svg";

const contacts = [
  {
    icon: "call",
    label: "Emergency",
    text: "(237) 681-812-255",
  },
  {
    icon: "clock",
    label: "Work Hour",
    text: "09:00 - 20:00 Everyday",
  },
  {
    icon: "location",
    label: "Location",
    text: "0123 Some Place",
  },
];

const Header = () => {
  return (
    <section className="w-full flex items-center lg:justify-between justify-center lg:h-[80px] py-2">
      <h1 className="uppercase font-display2 text-4xl lg:inline-block hidden ">
        <span className="text-primary">med</span>
        <span className="text-secondary">ddical</span>
      </h1>
      <div className="flex items-center lg:justify-between gap-2 flex-wrap lg:flex-nowrap justify-around">
        {contacts.map((contact, index) => {
          return (
            <div key={index} className="flex items-center gap-1">
              <img
                className="lg:size-4 size-3"
                src={
                  contact.icon === "call"
                    ? phone
                    : contact.icon === "clock"
                    ? clock
                    : location
                }
                alt={contact.label}
              />
              <div className="flex flex-col">
                <span className="font-body1 text-primary font-medium uppercase ">
                  {contact.label}
                </span>
                <span className="font-body1 text-secondary font-medium ">
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
