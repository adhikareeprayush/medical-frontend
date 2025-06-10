import { useState, useRef, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const DropdownNavItem = ({ label, items, path, className = '' }) => {
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
        setHoveredItem(null);
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
      className="group relative mx-2"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top label */}
      <Link to={path}>
        <div className="flex cursor-pointer items-center text-white">
          <span className="leading-none">{label}</span>
          <RiArrowDropDownLine
            size={30}
            className={`align-middle transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 min-w-[650px] overflow-hidden rounded-sm border border-gray-100 bg-white shadow-xl">
          <div className={`grid grid-cols-4 gap-3 px-1 py-3 ${className}`}>
            {items.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={`/departments/${item.toLowerCase()}`}
                  className="hover:bg-primary relative block cursor-pointer truncate rounded-sm p-1 text-base text-gray-700 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownNavItem;
