import { useState, useRef } from 'react';
import DropBtn from '../DropBtn';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DropdownNavItem = ({ label, items, onClick }) => {
  const [isPageOpen, setIsPageOpen] = useState(false);
  const pagesDropdownRef = useRef();
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsPageOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsPageOpen(false);
    }, 200);
    setHoverTimeout(timeout);
  };

  return (
    <li
      ref={pagesDropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hover:text-primary ease relative cursor-pointer duration-200"
    >
      <div className="flex cursor-pointer items-center gap-1">
        <span>{label}</span>
        <RiArrowDropDownLine
          size={24}
          styles={`w-3 h-3 transition-transform ${
            isPageOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {isPageOpen && (
        <div className="border-opacity-25 absolute top-20 left-0 z-[1000] mt-4 min-w-[600px] rounded-md border border-black bg-white p-4 shadow-lg">
          <div className="grid grid-cols-3 gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="hover:text-primary cursor-pointer rounded-md px-4 py-2 text-sm font-semibold text-gray-700"
                onClick={() => onClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default DropdownNavItem;
