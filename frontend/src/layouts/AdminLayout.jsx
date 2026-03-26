import { useState } from "react";
import AdminSidebar from "../components/admin/Adminsiderbar";
import AdminNavbar from "../components/admin/Adminnavbar";

const AdminLayout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-950 text-white">

      <AdminSidebar
        sidebarOpen={sidebarOpen}
      />

      <div className="flex flex-col flex-1">

        <AdminNavbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;