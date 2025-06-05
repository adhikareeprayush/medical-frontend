import React from 'react';
import TestiImg from '../../assets/images/banner/testimonial.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'Lorem ipsum lorem dolor sit amet,Lorem ipsum lorem dolor sit amet,  consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur consequat faucibus porttitor enim et.',
      name: 'Mr.John Doe',
    },
    {
      id: 2,
      quote:
        'The medical team provided exceptional care during my Lorem ipsum lorem dolor sit amet, treatment. Their expertise and compassion made a difficult time much easier. I would recommend this hospital to anyone seeking quality healthcare.',
      name: 'Mr.Sarah Johnson',
    },
    {
      id: 3,
      quote:
        'From the moment I walked in, I felt cared for. The staff was attentive,Lorem ipsum lorem dolor sit amet,  the facilities were clean, and the doctors took time to explain everything thoroughly. Truly a five-star experience!',
      name: 'Michael Chen',
    },
  ];

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
        <ul className="mt-2 flex justify-center space-x-1">{dots}</ul>
      </div>
    ),
    customPading: (i) => (
      <div className="bg-opacity-50 h-1.5 w-1.5 rounded-full bg-white transition-all duration-300"></div>
    ),
  };
  return (
    <section className="relative mx-2 mb-5 h-[250px] py-10 md:py-16">
      <div className="absolute inset-0">
        <img
          src={TestiImg}
          alt="testimonial background"
          className="h-full w-full object-cover"
        />
      </div>
      {/* content */}

      <div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <span className="block text-center text-2xl text-gray-300">
                "
              </span>
              <p className="relative inline-block text-center text-gray-300 after:mx-auto after:mt-1 after:block after:h-[2px] after:w-[40%] after:bg-gray-400">
                {testimonial.quote}
              </p>
              <p className="name py-1 text-center font-bold text-gray-600">
                {testimonial.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
