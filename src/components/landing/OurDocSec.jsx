// import { useEffect, useState } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import NextArrowBtn from '../common/NextArrowBtn';
// import PrevArrowBtn from '../common/PrevArrowBtn';
// import LearnMoreBtn from '../common/LearnMoreBtn';
// import { Link } from 'react-router-dom';
// import { getAllDoctors } from '../../utils/api';

// const OurDocSec = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showArrows, setShowArrows] = useState(true);

//   const fetchDoctors = async () => {
//     try {
//       const response = await getAllDoctors();
//       console.log('Fetched doctors:', response.data.data);
//       setDoctors(response.data.data);
//       console.log('Fetched doctors:', response.data.data);
//     } catch (err) {
//       console.error('Error fetching doctors:', err);
//       setError('Failed to load doctors');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   useEffect(() => {
//     // Show arrows only for screens wider than 1024px
//     const handleResize = () => {
//       setShowArrows(window.innerWidth > 1024);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const settings = {
//     infinite: true,
//     speed: 1000,
//     centerMode: true,
//     centerPadding: '0px',
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: 'linear',
//     pauseOnHover: true,
//     nextArrow: showArrows ? <NextArrowBtn /> : null,
//     prevArrow: showArrows ? <PrevArrowBtn /> : null,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 1,
//           arrows: false,
//         },
//       },
//     ],
//   };

//   if (loading) {
//     return <p className="py-10 text-center">Loading doctors...</p>;
//   }

//   if (error) {
//     return <p className="py-10 text-center text-red-500">{error}</p>;
//   }

//   return (
//     <section className="w-full bg-white px-4 py-10 md:px-8 lg:px-12">
//       {/* Header */}
//       <div className="mb-8 text-center">
//         <h1 className="text-secondary text-xl font-bold tracking-widest uppercase">
//           Trusted Care
//         </h1>
//         <p className="text-primary font-display1 text-2xl md:text-3xl">
//           Our Doctors
//         </p>
//       </div>

//       {/* Slider */}
//       <div className="mx-auto w-full max-w-6xl">
//         <Slider {...settings}>
//           {doctors.map((doc) => (
//             <div key={doc.id} className="px-3">
//               <div className="flex flex-col items-center overflow-hidden rounded-xl bg-white shadow-lg">
//                 <img
//                   src={doc.image_url} // assuming the API provides the full image URL or relative path
//                   alt={doc.name}
//                   className="h-[300px] w-full object-cover"
//                 />
//                 <div className="bg-secondary/20 flex w-full flex-col items-center p-4 text-center">
//                   <h3 className="text-primary truncate text-lg font-semibold md:text-xl">
//                     {doc.fullName}
//                   </h3>
//                   <p className="text-secondary truncate text-sm md:text-base">
//                     {doc.specialityName}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <Link to={'/team'}>
//         <LearnMoreBtn text="View All Doctors" styles="hover:px-2" />
//       </Link>
//     </section>
//   );
// };

// export default OurDocSec;

import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NextArrowBtn from '../common/NextArrowBtn';
import PrevArrowBtn from '../common/PrevArrowBtn';
import LearnMoreBtn from '../common/LearnMoreBtn';
import { Link } from 'react-router-dom';
import { getAllDoctors } from '../../utils/api';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';

const OurDocSec = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showArrows, setShowArrows] = useState(true);

  const fetchDoctors = async () => {
    try {
      const response = await getAllDoctors();
      console.log('Fetched doctors:', response.data.data);
      setDoctors(response.data.data);
      console.log('Fetched doctors:', response.data.data);
    } catch (err) {
      console.error('Error fetching doctors:', err);
      setError('Failed to load doctors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    // Show arrows only for screens wider than 1024px
    const handleResize = () => {
      setShowArrows(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  if (error) {
    return <p className="py-10 text-center text-red-500">{error}</p>;
  }

  return (
    <section className="w-full bg-white px-[27px] py-10 sm:px-7 lg:px-12">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 text-center sm:mb-7">
        <h1 className="text-secondary text-base font-bold tracking-widest uppercase sm:text-lg md:text-xl">
          Trusted Care
        </h1>
        <p className="text-primary font-display2 lg:font-display1">
          Our Doctors
        </p>
      </div>

      {/* Slider */}
      <div className="mx-auto w-full max-w-6xl">
        <Slider
          {...settings}
          className="[&_.slick-slide]:flex [&_.slick-slide]:items-stretch [&_.slick-slide>div]:h-full"
        >
          {doctors.map((doc) => (
            <div key={doc.id} className="h-full px-3">
              <Link
                to={`/doctors/${doc.id}`}
                className="flex flex-col lg:flex-row"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg">
                  <ProgressiveImage
                    lowQualitySrc={getTransformedImageUrl(
                      doc.image_url,
                      40,
                      40,
                    )}
                    highQualitySrc={getTransformedImageUrl(
                      doc.image_url,
                      1080,
                      720,
                    )}
                    alt={doc.name}
                    className="h-[300px] w-full object-cover"
                  />
                  <div className="relative flex h-[200px] flex-grow flex-col items-center gap-1 p-4 text-center">
                    <h3 className="mb-[6px] text-lg font-semibold break-words whitespace-pre-wrap text-red-600 md:text-xl">
                      {doc.fullName}
                    </h3>
                    <p className="text-secondary mb-[4px] line-clamp-2 w-full text-sm break-words whitespace-pre-wrap md:text-base">
                      {doc.qualification}
                    </p>
                    <p className="bg-primary absolute bottom-0 left-0 flex h-[70px] w-full items-center justify-center px-2 py-1 text-center text-sm break-words whitespace-pre-wrap text-white md:text-base">
                      {doc.specialityName}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <Link to={'/doctors'}>
        <LearnMoreBtn
          text="View All Doctors"
          styles="mt-4 sm:mt-5 mx-auto w-fit hover:px-2"
        />
      </Link>
    </section>
  );
};

export default OurDocSec;
