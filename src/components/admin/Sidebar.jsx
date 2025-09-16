import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  Menu,
  X,
  LayoutDashboard,
  Stethoscope,
  CalendarCheck,
  Settings,
  Package,
  Newspaper,
  GalleryHorizontal,
  Quote,
  MessageCircle,
  Briefcase,
} from 'lucide-react';
import { BiCategory } from 'react-icons/bi';

const menuItems = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <LayoutDashboard size={18} />,
  },
  { title: 'Doctors', path: '/admin/doctors', icon: <Stethoscope size={18} /> },
  {
    title: 'Packages',
    path: '/admin/packages',
    icon: <Package size={18} />,
  },
  {
    title: 'News',
    path: '/admin/news',
    icon: <Newspaper size={18} />,
  },
  {
    title: 'Services',
    path: '/admin/services',
    icon: <Briefcase size={18} />,
  },
  {
    title: 'Inquiries',
    path: '/admin/inquiries',
    icon: <MessageCircle size={18} />,
  },
  {
    title: 'Testimonial',
    path: '/admin/testimonial',
    icon: <Quote size={18} />,
  },
  {
    title: 'Gallery',
    path: '/admin/gallery',
    icon: <GalleryHorizontal size={18} />,
  },
  {
    title: 'Appointments',
    path: '/admin/appointments',
    icon: <CalendarCheck size={18} />,
  },
  {
    title: 'Departments',
    path: '/admin/departments',
    icon: <BiCategory size={18} />,
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
        <div className="flex items-center justify-center border-b border-gray-200 px-2 py-1">
          <img className="size-7 object-contain" src={logo}></img>
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
