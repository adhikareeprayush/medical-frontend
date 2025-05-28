import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarCheck,
  Settings,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  { title: "Users", path: "/admin/users", icon: <Users size={18} /> },
  { title: "Doctors", path: "/admin/doctors", icon: <Stethoscope size={18} /> },
  {
    title: "Appointments",
    path: "/admin/appointments",
    icon: <CalendarCheck size={18} />,
  },
  { title: "Settings", path: "/admin/settings", icon: <Settings size={18} /> },
];

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <>
      {/* Sidebar Container */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 transform bg-accent transition-transform duration-300 ease-in-out 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        {/* Header */}
        <div className="flex justify-center items-center p-2 border-b border-primary">
          <h1 className="text-2xl font-display2 font-bold uppercase text-white">
            <span className="text-primary">MED</span>
            <span className="text-secondary">DICAL</span>
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="p-4 flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-md font-body1 transition-all duration-150 group ${
                location.pathname === item.path
                  ? "bg-primary text-white"
                  : "hover:bg-secondary"
              }`}
            >
              <span className="group-hover:scale-110 transition-transform duration-150">
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
          className="fixed inset-0 bg-black opacity-40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default AdminSidebar;
