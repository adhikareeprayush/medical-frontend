import React from 'react';
import HeadImg from '../../assets/images/Hospital members/founder.jpg';

const MessageFromHead = () => {
  return (
    <section className="py-10 lg:py-16">
      <div className="flex flex-col gap-4 md:gap-2 lg:flex-row lg:gap-6">
        {/* image section */}
        <div className="flex justify-center">
          <div className="rounded-sm">
            <div className="relative flex flex-col gap-1">
              <div className="bg-primary/80 absolute -bottom-1 left-0 z-0 hidden h-[300px] w-[300px] md:w-[300px] lg:-bottom-3 lg:-left-3 lg:block"></div>
              <img
                src={HeadImg}
                alt="Headimage"
                className="z-1 mx-auto h-auto w-[80%] rounded-xl object-cover md:h-[650px] lg:max-w-[650px] lg:min-w-[500px] lg:rounded-br-[60px]"
              />
            </div>
          </div>
        </div>
        {/* content section */}
        <div className="flex flex-col justify-center gap-4 px-4 lg:px-0">
          <div className="mt-2">
            <p className="mb-3 text-center text-gray-500 sm:text-center md:mt-3 md:text-center md:text-3xl lg:text-start lg:text-3xl">
              Welcome to Nisarga Hospital- where compassion meets advanced
              technology to provide affordable, high-quality healthcare. Thank
              you for trusting us with your health - we are here for you,
              always.
            </p>
            <p className="text-primary border-primary flex w-full flex-col items-center justify-center gap-0 px-3 text-lg leading-0 font-semibold lg:block lg:w-fit lg:border-l-4 lg:leading-2">
              <span className="text-lg lg:text-2xl">Mr. Tirth Raj Pant</span>
              <br />{' '}
              <span className="text-lg font-normal text-gray-600">
                Chairman
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromHead;
