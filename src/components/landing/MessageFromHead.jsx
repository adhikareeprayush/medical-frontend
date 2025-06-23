import React from 'react';
import HeadImg from '../../assets/images/Hospital members/founder.jpg';

const MessageFromHead = () => {
  return (
    <section className="mx:px-8 container mx-auto px-4 py-10 lg:py-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
        {/* image section */}
        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-sm">
            <div className="flex flex-col gap-1">
              <img
                src={HeadImg}
                alt="Headimage"
                className="h-auto w-full max-w-[500px] object-cover md:max-w-full lg:h-[500px] lg:w-[580px]"
              />
              <p className="text-primary text-center text-lg font-semibold">
                Mr. Tritha Raj Panta - Chairman
              </p>
            </div>
          </div>
        </div>
        {/* content section */}
        <div className="flex flex-col">
          <h4 className="text-secondary center text-lg font-bold sm:text-center md:text-center md:text-2xl lg:text-start">
            Message From Chairman
          </h4>

          <div className="mt-2">
            <p className="mb-3 text-lg text-gray-600 sm:text-center lg:text-start">
              Welcome to Nisarga Hospital Nepal, a center of healing where
              compassion, commitment, and care come together to serve our
              community. From the very beginning, our goal has been to provide
              accessible, affordable, and high-quality healthcare to people
              across Nepal. We take pride in combining modern medical technology
              with the dedication of our experienced doctors, nurses, and staff
              to ensure that every patient receives personalized treatment in a
              safe and supportive environment.
            </p>
            <p className="text-lg text-gray-600 sm:text-center lg:text-start">
              {' '}
              Healthcare is more than just a service, it is a promise to stand
              by people during their most vulnerable moments. At Nisarga
              Hospital, we treat every patient with dignity, empathy, and
              respect. As we continue to grow and evolve, our mission remains
              clear: to bring better health and brighter futures to every
              individual who walks through our doors. Thank you for trusting us
              to be a part of your health journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromHead;
