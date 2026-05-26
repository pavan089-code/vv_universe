import { useNavigate } from "react-router-dom";

const AdminNavbar = ({ toggleSidebar }) => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("token");

    navigate("/admin/login");
  };

  return (
    <div className="flex items-center justify-between gap-3 border-b border-gray-800 bg-gray-900 p-3 sm:p-4">

      <button
        onClick={toggleSidebar}
        className="rounded bg-gray-700 px-3 py-2"
        aria-label="Toggle admin sidebar"
      >
        ☰
      </button>

      <h1 className="min-w-0 truncate text-sm font-semibold sm:text-lg">
        VV Productions Admin
      </h1>

      <button
        onClick={handleLogout}
        className="rounded bg-red-600 px-3 py-2 text-sm hover:bg-red-700 sm:px-4"
      >
        Logout
      </button>

    </div>
  );
};

export default AdminNavbar;
