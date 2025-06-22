import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getContactCards } from '../../utils/contact';
import { addInquiry } from '../../utils/api';
import { toast } from 'react-toastify';

const GetInTouch = () => {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addInquiry(formData);
      toast.success('Your inquiry has been submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Failed to send inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCards = async () => {
      const data = await getContactCards();
      setCards(data);
    };
    fetchCards();
  }, []);

  return (
    <>
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
                onSubmit={handleSubmit}
              >
                <div className="flex w-full items-center justify-between gap-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="focus:border-b-accent w-1/2 border-r border-b border-b-[#fff] bg-transparent px-2 py-[14px] font-normal text-[#fff] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#fff] focus:border-b focus:outline-none"
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:border-b-accent w-1/2 border-b border-b-[#fff] bg-transparent px-2 py-[14px] font-normal text-[#fff] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#fff] focus:border-b focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="focus:border-b-accent w-full border-b border-b-[#fff] bg-transparent px-2 py-[14px] font-normal text-[#fff] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#fff] focus:border-b focus:outline-none"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[232px] w-full resize-none bg-transparent px-2 py-2 text-white placeholder:text-[#fff] focus:outline-0"
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-accent text-primary cursor-pointer resize-none px-4 py-2 text-[16px] font-semibold focus:outline-0 focus:outline-none"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:w-1/2">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.title === 'Location' ? 'bg-primary text-accent' : 'bg-accent text-primary'} flex flex-col items-start justify-center rounded-[5px] px-3 py-2`}
              >
                <img src={card.icon} className="mb-2 size-5" alt="card-icon" />
                <h2 className="font-body text-[18px] font-bold uppercase">
                  {card.title}
                </h2>
                <ul>
                  {card.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="font-body1 overflow-hidden break-words whitespace-pre-wrap"
                      style={{ wordBreak: 'break-word' }}
                    >
                      {detail.type === 'phone' ? (
                        <Link to={`tel:${detail.value}`}>{detail.value}</Link>
                      ) : detail.type === 'email' ? (
                        <Link to={`mailto:${detail.value}`}>
                          {detail.value}
                        </Link>
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
    </>
  );
};

export default GetInTouch;
