import { useState, useRef, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const DropdownNavItem = ({ label, items, path, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  let hoverTimeout;
  const location = useLocation();
  const isHome = location.pathname === '/';

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
      className="group relative mx-2"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top label */}
      <Link to={path}>
        <div
          className={`group flex cursor-pointer items-center text-xl font-semibold duration-300 hover:scale-[1.1] ${isHome ? 'hover:text-secondary text-white' : 'hover:text-secondary text-black'}`}
        >
          <span className="leading-none">{label}</span>
          <RiArrowDropDownLine
            size={30}
            className={`align-middle transition-transform duration-300 group-hover:rotate-180`}
          />
        </div>
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 min-w-[550px] overflow-hidden rounded-sm bg-black/80 shadow-xl xl:min-w-[650px]">
          <div className={`grid gap-3 px-1 py-3 ${className}`}>
            {items.map((item, index) => (
              <div key={index} className="relative">
                <Link
                  to={`/${path.replace(/^\//, '')}/${item.slug}`}
                  className="hover:bg-primary relative block cursor-pointer truncate rounded-sm p-1 text-base text-white hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title || item.name}
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
