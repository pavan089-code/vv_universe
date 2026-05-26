import { useState } from "react";
import AdminSidebar from "../components/admin/Adminsiderbar";
import AdminNavbar from "../components/admin/Adminnavbar";

const AdminLayout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      <AdminSidebar
        sidebarOpen={sidebarOpen}
      />

      <div className="flex min-w-0 flex-1 flex-col">

        <AdminNavbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;
