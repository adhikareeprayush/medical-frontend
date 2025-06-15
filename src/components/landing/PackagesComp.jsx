import { GiCheckMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const PackagesComp = ({ testData }) => {
  return (
    <div className="flex min-h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-white shadow-sm duration-300 hover:cursor-pointer">
      <div className="bg-primary px-3 py-3 text-center">
        <h1 className="text-lg font-bold text-white capitalize sm:text-lg md:text-xl">
          {testData.title}
        </h1>
      </div>

      <div className="flex flex-1 flex-grow flex-col justify-between border-b border-gray-300">
        <div className="scrollbar-none hide-scrollbar overflow-y-auto p-4">
          <ul className="space-y-2">
            {testData.checks.split(',').map((check, idx) => (
              <li className="flex items-start" key={idx}>
                <GiCheckMark className="text-secondary mt-1 mr-2 flex-shrink-0 text-lg sm:text-xl" />
                <span className="text-base sm:text-lg">{check.trim()}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-semibold">
              Price: <span className="line-through">Rs. {testData.price}</span>{' '}
              <span className="text-secondary">
                Rs. {testData.discounted_price}
              </span>
            </span>
          </div>
          <span className="text-base text-gray-500">
            Status:{' '}
            <span
              className={`font-semibold ${
                testData.status.toLowerCase() === 'active'
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {testData.status}
            </span>
          </span>
        </div>

        <div className="">
          <Link to={`/packages/${testData.id}`}>
            <button className="bg-primary hover:bg-secondary w-full rounded-lg px-2 py-4 text-base font-semibold text-white transition-all duration-200 sm:py-2 sm:text-lg">
              See in Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackagesComp;
