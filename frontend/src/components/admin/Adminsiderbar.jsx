import { Link } from "react-router-dom";

const AdminSidebar = ({ sidebarOpen }) => {
  return (
    <aside
      className={`shrink-0 overflow-hidden bg-gray-900 transition-all duration-300 
      ${sidebarOpen ? "w-64" : "w-0 md:w-20"} min-h-screen`}
    >
      <div className="truncate border-b border-gray-700 p-4 text-lg font-bold">
        {sidebarOpen ? "VV Admin" : "VV"}
      </div>

      <nav className="flex flex-col gap-4 p-4">
        <Link to="/admin" className="truncate hover:text-yellow-400">
          Dashboard
        </Link>

        <Link to="/admin/bookings" className="truncate hover:text-yellow-400">
          Bookings
        </Link>

        <Link to="/admin/portfolio" className="truncate hover:text-yellow-400">
          Portfolio
        </Link>

        <Link to="/admin/reviews" className="truncate hover:text-yellow-400">
          Reviews
        </Link>

        <Link to="/admin/jam-registrations" className="truncate hover:text-yellow-400">
          Jam Registrations
        </Link>

        <Link to="/admin/blog" className="truncate hover:text-yellow-400">
          Blog
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
