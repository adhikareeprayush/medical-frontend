import phone from '../../assets/icons/contact/phone.svg';
import email from '../../assets/icons/contact/mail.svg';
import location from '../../assets/icons/contact/location.svg';
import clock from '../../assets/icons/contact/clock.svg';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Emergency',
    icon: phone,
    details: [
      { type: 'phone', value: '+977 9865680100' },
      { type: 'phone', value: '+977 9865680100' },
    ],
  },
  {
    title: 'Location',
    icon: location,
    details: [{ type: 'address', value: 'Near Nepal Rastra Bank, Dhangadhi' }],
  },
  {
    title: 'Email',
    icon: email,
    details: [
      { type: 'email', value: 'nisargahospitalnepal@gmail.com' },
      { type: 'email', value: 'nisargahospitalnepal@gmail.com' },
    ],
  },
  {
    title: 'Working Hours',
    icon: clock,
    details: [{ type: 'text', value: 'Everyday: 9 AM - 5 PM' }],
  },
];

const GetInTouch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="my-3">
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="my-4 flex w-full flex-col">
            <h1 className="text-secondary font-caption text-[18px] font-bold uppercase">
              Get In Touch
            </h1>
            <p className="text-primary font-display2">Contact</p>
          </div>
          <div className="flex w-full flex-col">
            <form
              className="bg-primary flex w-full flex-1 flex-col overflow-hidden rounded-[5px]"
              onClick={handleSubmit}
            >
              <div className="flex w-full items-center justify-between gap-0">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="focus:border-b-accent w-1/2 border-r border-b border-b-[#fff] bg-transparent px-2 py-[14px] font-normal text-[#fff] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#fff] focus:border-b focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="focus:border-b-accent w-1/2 border-b border-b-[#fff] bg-transparent px-2 py-[14px] font-normal text-[#fff] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#fff] focus:border-b focus:outline-none"
                />
              </div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="focus:border-b-accent w-full border-b border-b-[#fff] bg-transparent px-2 py-[14px] font-normal text-[#fff] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#fff] focus:border-b focus:outline-none"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="h-[232px] w-full resize-none bg-transparent px-2 py-2 text-white placeholder:text-[#fff] focus:outline-0"
              ></textarea>
              <button
                type="submit"
                className="bg-accent text-primary cursor-pointer resize-none px-4 py-2 text-[16px] font-semibold focus:outline-0 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-3 md:grid-cols-4 lg:w-1/2 lg:grid-cols-2 lg:grid-rows-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.title == 'Location' ? 'bg-primary text-accent' : 'bg-accent text-primary'} flex flex-col items-start justify-center rounded-[5px] px-3 py-2`}
            >
              <img src={card.icon} className="mb-2 size-5" alt="" />
              <h2 className="font-body text-[18px] font-bold uppercase">
                {card.title}
              </h2>
              <ul>
                {card.details.map((detail, idx) => (
                  <li key={idx} className="font-body1">
                    {detail.type === 'phone' ? (
                      <Link to={`tel:${detail.value}`}>{detail.value}</Link>
                    ) : detail.type === 'email' ? (
                      <Link to={`mailto:${detail.value}`}>{detail.value}</Link>
                    ) : (
                      detail.value
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
