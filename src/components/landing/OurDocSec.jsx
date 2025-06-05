import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Doc1 from '../../assets/images/Doc1.png';
import Doc2 from '../../assets/images/Doc2.png';
import Doc3 from '../../assets/images/Doc3.png';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import RoundButton from '../common/RoundButton';
import NextArrowBtn from '../common/NextArrowBtn';
import PrevArrowBtn from '../common/PrevArrowBtn';
import LearnMoreBtn from '../common/LearnMoreBtn';
import { Link } from 'react-router-dom';

const Cards = [
  { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist', image: Doc1 },
  { id: 2, name: 'Dr. Jane Smith', specialization: 'Neurologist', image: Doc2 },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialization: 'Pediatrician',
    image: Doc3,
  },
  {
    id: 4,
    name: 'Dr. Michael Brown',
    specialization: 'Orthopedic Surgeon',
    image: Doc1,
  },
  {
    id: 5,
    name: 'Dr. Sarah Davis',
    specialization: 'Dermatologist',
    image: Doc2,
  },
  {
    id: 6,
    name: 'Dr. David Wilson',
    specialization: 'General Practitioner',
    image: Doc3,
  },
];

const OurDocSec = () => {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Show arrows only for screen wider than 1024px (3+ slides)
      setShowArrows(window.innerWidth > 1024);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: showArrows ? <NextArrowBtn /> : null,
    prevArrow: showArrows ? <PrevArrowBtn /> : null,
    responsive: [
      {
        breakpoint: 1024, // 1024 to 801px
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 800, // 800px and below
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white px-4 py-10 md:px-8 lg:px-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-secondary text-xl font-bold tracking-widest uppercase">
          Trusted Care
        </h1>
        <p className="text-primary font-display1 text-2xl md:text-3xl">
          Our Doctors
        </p>
      </div>

      {/* Slider */}
      <div className="mx-auto w-full max-w-6xl">
        <Slider {...settings}>
          {Cards.map((card) => (
            <div key={card.id} className="px-3">
              <div className="flex flex-col items-center overflow-hidden rounded-xl bg-white shadow-lg">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-fit w-fit object-cover"
                />
                <div className="bg-secondary/20 flex w-full flex-col items-center p-4 text-center">
                  <h3 className="text-primary truncate text-lg font-semibold md:text-xl">
                    {card.name}
                  </h3>
                  <p className="text-secondary truncate text-sm md:text-base">
                    {card.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Link to={'/team'}>
        <LearnMoreBtn
          text="View All Doctors"
          styles="mt-6 mx-auto w-fit"
        />
      </Link>
    </section>
  );
};

export default OurDocSec;
