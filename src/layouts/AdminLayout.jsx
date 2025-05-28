import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/Sidebar";
import { Menu } from "lucide-react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="flex-1 p-4 overflow-auto">
        {/* Toggle button only on small screens */}
        <div className="lg:hidden mb-4">
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
