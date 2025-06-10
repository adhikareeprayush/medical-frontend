import { GiCheckMark } from 'react-icons/gi';

const PackagesComp = ({ testData }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl shadow-2xl transition-shadow duration-300 hover:cursor-pointer">
      <div className="bg-primary rounded-t-2xl px-3 py-3 text-center">
        <h1 className="text-lg font-bold text-white sm:text-lg md:text-xl">
          {testData.title}
        </h1>
      </div>

      <div className="flex flex-grow flex-col border-b border-gray-300">
        <div className="scrollbar-none hide-scrollbar max-h-[300px] overflow-y-auto p-4 sm:max-h-[280px]">
          <ul className="space-y-2">
            {testData.tests.map((testItem, idx) => (
              <li className="flex items-start" key={idx}>
                <GiCheckMark className="text-secondary mt-1 mr-2 flex-shrink-0 text-lg sm:text-xl" />
                <span className="text-base sm:text-lg">{testItem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <button className="bg-primary w-full rounded-2xl py-2 text-base font-bold text-white transition-all duration-200 hover:bg-blue-800 sm:py-2 sm:text-lg">
            Book this Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackagesComp;
