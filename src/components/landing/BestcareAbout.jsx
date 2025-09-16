import Img from '../../assets/images/general photos/5.webp';
import { GoDotFill } from 'react-icons/go';

const BestcareAbout = () => {
  return (
    <section className="container mx-auto px-4 py-10 md:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
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
          <h4 className="text-secondary text-lg font-bold md:text-2xl">
            Welcome to Nisarga Hospital
          </h4>
          <h1 className="text-primary mt-2 text-2xl font-bold md:text-3xl lg:text-5xl">
            Best Care for Your <br />
            Good Health
          </h1>

          {/* Lists Section */}
          <div className="mt-4 flex flex-wrap">
            <ul className="mr-8 mb-3 space-y-2">
              {['A Passion for Healing', '5-Star Care', 'All our best'].map(
                (item) => (
                  <li key={item} className="flex items-start">
                    <GoDotFill className="text-secondary mt-1.5 mr-3" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ),
              )}
            </ul>
            <ul className="mb-3 space-y-2">
              {['Believe in Us', 'Always Caring', 'A Legacy of Excellence'].map(
                (item) => (
                  <li key={item} className="flex items-start">
                    <GoDotFill className="text-secondary mt-1.5 mr-3" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="mt-2">
            <p className="mb-4 text-lg text-gray-600">
              Nisarga Hospital Nepal is a modern, multi-specialty healthcare
              institution committed to providing high-quality, patient-centered
              medical services. Located in the heart of Nepal, our hospital
              stands as a beacon of hope and healing, combining advanced medical
              technology with the warmth of compassionate care. At Nisarga
              Hospital, we believe that health is the foundation of a fulfilling
              life. Our dedicated team of doctors, nurses, and healthcare
              professionals work tirelessly to ensure that every patient
              receives personalized treatment in a safe, comfortable, and
              healing environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestcareAbout;
