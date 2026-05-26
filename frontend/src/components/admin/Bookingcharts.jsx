import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const BookingChart = ({ data }) => {

  return (
    <div className="rounded-xl bg-gray-900 p-4 sm:p-6">

      <h2 className="text-lg mb-4">Booking Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="bookings" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default BookingChart;
