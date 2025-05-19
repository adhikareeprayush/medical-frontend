import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <>
        <div className="flex h-screen">
        <aside className="w-64 bg-gray-800 text-white p-4">
            Admin Sidebar
        </aside>
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
            <Outlet />
        </main>
        </div>
    </>
  )
}

export default AdminLayout