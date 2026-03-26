import { useNavigate } from "react-router-dom";

const AdminNavbar = ({ toggleSidebar }) => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/admin/login");
  };

  return (
    <div className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">

      <button
        onClick={toggleSidebar}
        className="bg-gray-700 px-3 py-1 rounded"
      >
        ☰
      </button>

      <h1 className="text-lg font-semibold">
        VV Productions Admin
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>

    </div>
  );
};

export default AdminNavbar;