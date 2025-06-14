import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NextArrowBtn from '../common/NextArrowBtn';
import PrevArrowBtn from '../common/PrevArrowBtn';
import LearnMoreBtn from '../common/LearnMoreBtn';
import { Link } from 'react-router-dom';

const OurDocSec = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    // Show arrows only for screens wider than 1024px
    const handleResize = () => {
      setShowArrows(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/doctors'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();

        // Assuming data is an array of doctors like:
        // [{ id, name, specialization, imageUrl }, ...]
        setDoctors(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    nextArrow: showArrows ? <NextArrowBtn /> : null,
    prevArrow: showArrows ? <PrevArrowBtn /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  if (loading) {
    return <p className="py-10 text-center">Loading doctors...</p>;
  }

  if (error) {
    return <p className="py-10 text-center text-red-500">{error}</p>;
  }

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
          {doctors.map((doc) => (
            <div key={doc.id} className="px-3">
              <div className="flex flex-col items-center overflow-hidden rounded-xl bg-white shadow-lg">
                <img
                  src={doc.imageUrl} // assuming the API provides the full image URL or relative path
                  alt={doc.name}
                  className="h-fit w-fit object-cover"
                />
                <div className="bg-secondary/20 flex w-full flex-col items-center p-4 text-center">
                  <h3 className="text-primary truncate text-lg font-semibold md:text-xl">
                    {doc.name}
                  </h3>
                  <p className="text-secondary truncate text-sm md:text-base">
                    {doc.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Link to={'/team'}>
        <LearnMoreBtn text="View All Doctors" styles="mt-6 mx-auto w-fit" />
      </Link>
    </section>
  );
};

export default OurDocSec;
