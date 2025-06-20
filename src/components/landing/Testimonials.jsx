import { useEffect, useState } from 'react';
import TestiImg from '../../assets/images/hospital_banner/testimonialsbackground.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { getAllTestimonials } from '../../utils/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const fetchTestimonials = async () => {
    try {
      const res = await getAllTestimonials();
      setTestimonials(res.data.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots) => (
      <div className="slick-dots-container">
        <ul className="mt-2 flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    // You can add a custom class for the dots container if needed
    // dotsClass: "slick-dots slick-thumb"
  };

  return (
    <section className="relative flex min-h-[300px] items-center justify-center py-10 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={TestiImg}
          alt="testimonial background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Centered Content */}
      <div className="w-full max-w-3xl px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              {/* Apply text-center to the outer div of each slide's content */}
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  className="my-2 h-[100px] w-[100px] rounded-full object-cover"
                  src={testimonial.image_url}
                  alt={testimonial.full_name}
                />
                <p className="relative pb-2 text-sm text-gray-100 lg:text-lg">
                  “{testimonial.message}”
                </p>
                <p className="pb-1 font-bold text-white">
                  {testimonial.full_name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
