import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarCheck,
  Settings,
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <LayoutDashboard size={18} />,
  },
  { title: 'Users', path: '/admin/users', icon: <Users size={18} /> },
  { title: 'Doctors', path: '/admin/doctors', icon: <Stethoscope size={18} /> },
  {
    title: 'Appointments',
    path: '/admin/appointments',
    icon: <CalendarCheck size={18} />,
  },
  { title: 'Settings', path: '/admin/settings', icon: <Settings size={18} /> },
];

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <>
      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-40 transform rounded-2xl bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-center border-b border-gray-200 p-2">
          <h1 className="font-display2 text-2xl font-bold text-white uppercase">
            <span className="text-primary">MED</span>
            <span className="text-secondary">DICAL</span>
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-1 p-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`font-body1 group flex items-center gap-2 rounded-md px-4 py-2 transition-all duration-150 ${
                location.pathname === item.path
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/10 text-gray-700'
              }`}
            >
              <span className="transition-transform duration-150 group-hover:scale-110">
                {item.icon}
              </span>
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default AdminSidebar;
