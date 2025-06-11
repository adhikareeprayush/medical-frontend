import React, { useState, useRef, useEffect } from 'react';
import { FaStethoscope, FaBaby, FaTooth, FaHeartbeat } from 'react-icons/fa';
import iconMap from './iconMap';

const IconDropdown = ({ selectedIcon, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const SelectedIconComponent = iconMap[selectedIcon];

  return (
    <div className="relative inline-block w-full" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 rounded border px-3 py-2 text-left hover:bg-gray-100"
      >
        <div className="flex items-center gap-2">
          {SelectedIconComponent && <SelectedIconComponent size={20} />}
          <span className="capitalize">{selectedIcon || 'Select icon'}</span>
        </div>
        <svg
          className={`h-5 w-5 transform transition-transform ${open ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border bg-white shadow-lg">
          {Object.entries(iconMap).map(([key, IconComponent]) => (
            <li
              key={key}
              onClick={() => {
                onChange(key);
                setOpen(false);
              }}
              className="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-blue-100"
            >
              <IconComponent size={20} />
              <span className="capitalize">{key}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default IconDropdown;
