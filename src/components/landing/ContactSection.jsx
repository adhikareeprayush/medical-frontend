import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getContactCards } from '../../utils/contact';

const ContactSection = () => {
  const [contactCards, setContactCards] = useState([]);

  useEffect(() => {
    const fetchContactCards = async () => {
      try {
        const data = await getContactCards();
        setContactCards(data);
      } catch (error) {
        console.error('Failed to fetch contact cards:', error);
      }
    };
    fetchContactCards();
  }, []);

  return (
    <section className="my-4 flex w-full flex-col items-center justify-center gap-6 ">
      <div className="text-center">
        <h1 className="text-secondary mb-[20px] text-xl font-bold tracking-widest uppercase sm:text-2xl">
          Get in Touch
        </h1>
        <p className="text-primary font-display2 lg:font-display1">Contact</p>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className={`group ${card.title == 'Location' ? 'bg-primary text-accent' : 'bg-accent text-primary'} flex flex-col justify-center gap-2 rounded-md px-3 py-[38px] transition-colors duration-300`}
          >
            <div className="flex h-9 w-9 items-center justify-center transition-colors duration-300">
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="h-full w-full"
              />
            </div>

            <h3 className="font-body2 text-xl font-semibold tracking-wide transition-colors duration-300">
              {card.title}
            </h3>

            <div className="flex flex-col gap-1">
              {card.details.map((detail, idx) => (
                <p
                  key={idx}
                  className="text-base tracking-wider break-words whitespace-pre-wrap transition-colors duration-300"
                >
                  {detail.type === 'phone' ? (
                    <Link to={`tel:${detail.value}`}>{detail.value}</Link>
                  ) : detail.type === 'email' ? (
                    <Link to={`mailto:${detail.value}`}>{detail.value}</Link>
                  ) : (
                    detail.value
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
