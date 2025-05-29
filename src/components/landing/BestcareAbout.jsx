import React from 'react';
import Img from '../../assets/images/Doc2.png';
import dotIcon from '../../assets/icons/dot.svg';

const BestcareAbout = () => {
  return (
    <section className="container mx-auto px-4 py-10 md:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-sm">
            <img
              src={Img}
              alt="BestcareImg"
              className="h-auto w-full max-w-[500px] object-cover md:max-w-full lg:h-[500px] lg:w-[550px]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-secondary text-lg font-bold md:text-xl">
            Welcome to Hospital name
          </h4>
          <h1 className="text-primary mt-2 text-2xl font-bold md:text-3xl lg:text-4xl">
            Best Care for Your Good Health
          </h1>

          {/* Lists Section */}
          <div className="mt-4 flex flex-wrap">
            <ul className="mr-8 mb-3 space-y-2">
              {['A Passion for Healing', '5-Star Care', 'All our best'].map(
                (item) => (
                  <li key={item} className="flex items-start">
                    <img
                      src={dotIcon}
                      alt="bullet"
                      className="mt-1.5 mr-3 h-3 w-3"
                    />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ),
              )}
            </ul>
            <ul className="mb-3 space-y-2">
              {['Believe in Us', 'Always Caring', 'A Legacy of Excellence'].map(
                (item) => (
                  <li key={item} className="flex items-start">
                    <img
                      src={dotIcon}
                      alt="dot"
                      className="mt-1.5 mr-3 h-3 w-3"
                    />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="mt-2">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestcareAbout;
