import { useState, useRef, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const DropdownNavItem = ({ label, items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  let hoverTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(hoverTimeout);
    };
  }, []);

  return (
    <div
      className={`group relative mx-2 ${className}`}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top label */}
      <div className="flex cursor-pointer items-center text-white">
        <span>{label}</span>
        <RiArrowDropDownLine
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 min-w-[550px] overflow-hidden rounded-sm border border-gray-100 bg-white shadow-xl">
          <div className="grid grid-cols-3 gap-3 px-1 py-3">
            {items.map((item, index) => (
              <Link
                key={index}
                to={`/departments/${item.toLowerCase()}`}
                className="hover:bg-primary cursor-pointer rounded-sm p-1 text-base text-gray-700 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownNavItem;
