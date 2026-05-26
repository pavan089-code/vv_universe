const RecentBookings = ({ bookings }) => {
  // safety check
  if (!bookings || bookings.length === 0) {
    return (
      <div className="bg-gray-900 p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
        <p className="text-gray-400">No bookings yet</p>
      </div>
    );
  }

  const recentBookings = bookings
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>

      <div className="overflow-x-auto">
      <table className="w-full min-w-[620px]">
        <thead className="text-gray-400 border-b border-gray-700">
          <tr>
            <th className="text-left py-3">Client</th>
            <th>Event</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {recentBookings.map((booking) => (
            <tr
              key={booking._id}
              className="border-b border-gray-800 hover:bg-gray-800"
            >
              <td className="py-3">{booking.name}</td>

              <td>{booking.eventType}</td>

              <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    booking.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : booking.status === "Approved"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-500/20 text-gray-300"
                  }`}
                >
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RecentBookings;
