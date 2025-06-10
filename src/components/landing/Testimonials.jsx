import React from 'react';
import TestiImg from '../../assets/images/hospital_banner/testimonialsbackground.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import panta from '../../assets/images/doctorsImages/Dr. Hemant Ojha.JPG';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'Lorem ipsum lorem dolor sit amet,Lorem ipsum lorem dolor sit amet,  consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur consequat faucibus porttitor enim et.',
      name: 'Mr.John Doe',
      image: panta,
    },
    {
      id: 2,
      quote:
        'The medical team provided exceptional care during my Lorem ipsum lorem dolor sit amet, treatment. Their expertise and compassion made a difficult time much easier. I would recommend this hospital to anyone seeking quality healthcare.',
      name: 'Mr.Sarah Johnson',
      image: panta,
    },
    {
      id: 3,
      quote:
        'From the moment I walked in, I felt cared for. The staff was attentive,Lorem ipsum lorem dolor sit amet,  the facilities were clean, and the doctors took time to explain everything thoroughly. Truly a five-star experience!',
      name: 'Michael Chen',
      image: panta,
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
                  src={testimonial.image}
                  alt=""
                />
                <p className="relative pb-2 text-center text-sm text-gray-100 lg:text-lg">
                  <span>" {testimonial.quote}"</span>
                </p>
                <p className="pb-1 text-center font-bold text-white">
                  {testimonial.name}
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
