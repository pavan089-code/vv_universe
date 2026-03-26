import { Calendar, Image, Star } from "lucide-react";

const DashboardCards = ({ bookingCount, portfolioCount = 0, reviewCount = 0 }) => {
  const cards = [
    {
      title: "Total Bookings",
      value: bookingCount,
      icon: Calendar,
      color: "text-blue-400",
    },
    {
      title: "Portfolio Images",
      value: portfolioCount,
      icon: Image,
      color: "text-purple-400",
    },
    {
      title: "Reviews",
      value: reviewCount,
      icon: Star,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow hover:scale-105 hover:bg-gray-800 transition duration-300 flex items-center justify-between"
          >
            <div>
              <h2 className="text-gray-400 text-sm">{card.title}</h2>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>

            <div className={`${card.color} bg-gray-800 p-3 rounded-lg`}>
              <Icon size={28} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;
