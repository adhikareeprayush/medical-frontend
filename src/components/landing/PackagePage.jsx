import React from 'react';
import PageBanner from '../../components/landing/PageBanner';
import PackageBanner from '../../assets/images/hospital_banner/hospital_banner.jpg';
import Data from '../../data/packages.json';
import { useParams } from 'react-router-dom';

const PackagePage = () => {
  const { slug } = useParams();
  const data = Data.find((item) => item.slug === slug);

  if (!data) {
    return <div className="text-center text-red-500">News not found</div>;
  }
  return (
    <>
      <PageBanner
        subtitle="Package"
        subSubtitle={data.id}
        title={data.title}
        backgroundImage={PackageBanner}
      />
      <section className="container mx-auto px-1 py-8 md:px-4 md:py-12 xl:px-[140px]">
        <section className="container mx-auto px-4 py-8 md:py-12 xl:px-[140px]">
          <h2 className="text-primary mb-5 text-3xl font-semibold">
            Tests Included:
          </h2>

          <ul className="divide-y divide-gray-200 rounded-lg border shadow-md">
            {data.tests.map((test, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="font-medium">{test.name}</span>
                <div className="text-right">
                  <span className="mr-3 text-gray-500 line-through">
                    ₹{test.actualPrice}
                  </span>
                  <span className="text-primary font-semibold">
                    ₹{test.discountedPrice}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <button className="bg-primary hover:bg-secondary rounded-lg px-8 py-3 font-semibold text-white transition-colors duration-200">
              Book Now
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default PackagePage;
