import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/Sidebar';
import { Menu } from 'lucide-react';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen gap-3 bg-gray-100 px-3 py-3">
      <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="flex-1 overflow-auto">
        {/* Toggle button only on small screens */}
        <div className="mb-4 lg:hidden">
          <button onClick={toggleSidebar} className="text-primary">
            <Menu />
          </button>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
