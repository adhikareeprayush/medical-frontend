import React from 'react';
import LearnMoreBtn from '../common/LearnMoreBtn';
import { Link } from 'react-router-dom';

const WelcomeSec = () => {
  return (
    <section className="my-30 flex w-full items-center justify-center px-5 md:px-7 lg:px-0">
      <div className="flex w-full max-w-3xl flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-secondary text-base font-bold tracking-widest uppercase sm:text-lg md:text-xl">
          Welcome to Nisarga Hospital
        </h1>
        <p className="text-primary font-display2 lg:font-display1">
          A Great Place to Receive Care
        </p>
        <p className="text-sm tracking-wide text-gray-700 sm:text-base md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fuga
          nemo quibusdam at iste dignissimos nostrum quam magnam? Asperiores,
          non, unde velit eveniet sequi iste a pariatur rerum voluptatem numquam
          magnam itaque?
        </p>
        <Link to="/about" className="mt-2">
          <LearnMoreBtn text="Learn More" styles="hover:px-2" />
        </Link>
      </div>
    </section>
  );
};

export default WelcomeSec;
