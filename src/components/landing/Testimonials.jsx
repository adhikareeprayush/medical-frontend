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
  console.log(testimonials);

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
  };

  return (
    <section className="relative mb-5 min-h-[300px] py-10 md:py-16">
      <div className="absolute inset-0">
        <img
          src={TestiImg}
          alt="testimonial background"
          className="z-0 h-full w-full object-cover opacity-100"
        />
      </div>
      {/* content */}
      <div className="ml-1 items-center lg:ml-25">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="my-2 h-[100px] w-[100px] rounded-full object-cover"
                  src={testimonial.image_url}
                  alt=""
                />
                <p className="relative pb-2 text-center text-sm text-gray-100 lg:text-lg">
                  <span>" {testimonial.message}"</span>
                </p>
                <p className="pb-1 text-center font-bold text-white">
                  {testimonial.full_name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      ;
    </section>
  );
};

export default Testimonials;
