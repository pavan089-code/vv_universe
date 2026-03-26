import { useEffect, useState } from "react";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [eventFilter, setEventFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings");
      const data = await res.json();
      setBookings(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const getStatusColor = (status) => {
    if (status === "approved") return "bg-green-600";
    if (status === "rejected") return "bg-red-600";
    return "bg-yellow-600";
  };

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/bookings/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    fetchBookings();
  };

  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?",
    );

    if (!confirmDelete) return;

    await fetch(`/api/bookings/${id}`, { method: "DELETE" });

    fetchBookings();
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchSearch = (booking.name || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchEvent =
      eventFilter === "all" || booking.eventType === eventFilter;

    const matchStatus =
      statusFilter === "all" || booking.status === statusFilter;

    return matchSearch && matchEvent && matchStatus;
  });

  return (
    <div className="p-10 text-white">
      {/* Action Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Client Bookings</h1>

        <div className="flex gap-3">
          <button
            onClick={fetchBookings}
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
          >
            Refresh
          </button>

          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
            Export CSV
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Search client..."
          className="p-2 rounded bg-gray-800 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 rounded bg-gray-800"
          value={eventFilter}
          onChange={(e) => setEventFilter(e.target.value)}
        >
          <option value="all">All Events</option>
          <option value="Wedding">Wedding</option>
          <option value="PreWedding">PreWedding</option>
        </select>

        <select
          className="p-2 rounded bg-gray-800"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Table Card */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        <table className="w-full">
          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="text-left py-3 px-4">Client</th>
              <th>Event</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-400">
                  Loading bookings...
                </td>
              </tr>
            ) : filteredBookings.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-12 text-gray-500">
                  <p className="text-lg">📭 No bookings yet</p>
                  <p className="text-sm">
                    Bookings will appear here once clients submit requests.
                  </p>
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b border-gray-800 hover:bg-gray-800 transition"
                >
                  {/* Client */}
                  <td className="flex items-center gap-3 py-3 px-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm">
                      {booking.name?.charAt(0)}
                    </div>

                    {booking.name}
                  </td>

                  {/* Event */}
                  <td>{booking.eventType}</td>

                  {/* Date */}
                  <td>
                    {booking.eventDate
                      ? new Date(booking.eventDate).toLocaleDateString()
                      : "No Date"}
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${getStatusColor(
                        booking.status,
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="space-x-2">
                    <button
                      disabled={booking.status === "approved"}
                      onClick={() => updateStatus(booking._id, "approved")}
                      className="bg-green-600 px-3 py-1 rounded disabled:opacity-40"
                    >
                      Approve
                    </button>

                    <button
                      disabled={booking.status === "rejected"}
                      onClick={() => updateStatus(booking._id, "rejected")}
                      className="bg-yellow-600 px-3 py-1 rounded disabled:opacity-40"
                    >
                      Reject
                    </button>

                    <button
                      onClick={() => deleteBooking(booking._id)}
                      className="bg-red-600 px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookings;
