import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Doc1 from "../../../assets/Doc1.png";
import Doc2 from "../../../assets/Doc2.png";
import Doc3 from "../../../assets/Doc3.png";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import RoundButton from "../../RoundButton";
import NextArrowBtn from "../../NextArrowBtn";
import PrevArrowBtn from "../../PrevArrowBtn";

const Cards = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    image: Doc1,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Neurologist",
    image: Doc2,
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialization: "Pediatrician",
    image: Doc3,
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    specialization: "Orthopedic Surgeon",
    image: Doc1,
  },
  {
    id: 5,
    name: "Dr. Sarah Davis",
    specialization: "Dermatologist",
    image: Doc2,
  },
  {
    id: 6,
    name: "Dr. David Wilson",
    specialization: "General Practitioner",
    image: Doc3,
  },
];

const OurDocSec = () => {
  const settings = {
    centerMode: true, // Add this
    centerPadding: "0",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <NextArrowBtn />,
          prevArrow: <PrevArrowBtn />,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="my-25 w-full h-[530px]">
      <div className="w-full flex flex-col items-center justify-center gap-2 my-4">
        <h1 className="text-secondary font-bold text-xl tracking-widest uppercase text-center">
          Trusted Care
        </h1>
        <p className="text-primary font-display1 text-center">Our Doctors</p>
      </div>

      <div className="slider-container flex justify-center w-full">
        <Slider {...settings} className="max-w-[1080px] my-2 w-full px-2">
          {Cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-2 outline-none"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-fit object-cover"
              />
              <div className="bg-secondary/25 gap-0.5 flex flex-col items-center justify-center p-2">
                <h3 className="text-primary font-semibold text-lg lg:text-xl tracking-wider truncate">
                  {card.name}
                </h3>
                <p className="text-secondary text-md lg:text-lg tracking-wide truncate">
                  {card.specialization}
                </p>
                <div className="flex gap-3 my-2">
                  <RoundButton
                    divStyles="bg-primary text-gray-400"
                    spanStyles="bg-blue-700"
                    text={<FaFacebookF size={20} />}
                  />
                  <RoundButton
                    divStyles="bg-primary text-gray-400"
                    spanStyles="bg-blue-700"
                    text={<FaLinkedin size={20} />}
                  />
                  <RoundButton
                    divStyles="bg-primary text-gray-400"
                    spanStyles="bg-black"
                    text={<FaInstagram size={20} />}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurDocSec;
