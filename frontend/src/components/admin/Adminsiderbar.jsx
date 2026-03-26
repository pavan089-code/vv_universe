import { Link } from "react-router-dom";

const AdminSidebar = ({ sidebarOpen }) => {
  return (
    <aside
      className={`bg-gray-900 transition-all duration-300 
      ${sidebarOpen ? "w-64" : "w-20"} h-screen`}
    >
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        VV Admin
      </div>

      <nav className="flex flex-col gap-4 p-4">
        <Link to="/admin" className="hover:text-yellow-400">
          Dashboard
        </Link>

        <Link to="/admin/bookings" className="hover:text-yellow-400">
          Bookings
        </Link>

        <Link to="/admin/portfolio" className="hover:text-yellow-400">
          Portfolio
        </Link>

        <Link to="/admin/reviews" className="hover:text-yellow-400">
          Reviews
        </Link>

        <Link to="/admin/blog" className="hover:text-yellow-400">
          Blog
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
