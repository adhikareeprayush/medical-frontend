import React from 'react';
import LearnMoreBtn from '../common/LearnMoreBtn';

const WelcomeSec = () => {
  return (
    <section className="my-30 flex w-full items-center justify-center">
      <div className="flex w-[60%] flex-col items-center justify-center gap-2">
        <h1 className="text-secondary text-center text-xl font-bold tracking-widest uppercase">
          Welcome to Nisarga Hospital
        </h1>
        <p className="text-primary font-display1 text-center">
          A Great Place to Receive Care
        </p>
        <p className="text-center tracking-wide">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fuga
          nemo quibusdam at iste dignissimos nostrum quam magnam? Asperiores,
          non, unde velit eveniet sequi iste a pariatur rerum voluptatem numquam
          magnam itaque?
        </p>
        <LearnMoreBtn text="Learn More" styles="mt-2" />
      </div>
    </section>
  );
};

export default WelcomeSec;
