import {
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
} from "lucide-react";

const EventDetails = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Event Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-yellow-400" />
            <div>
              <p className="text-gray-400 text-sm">
                Date
              </p>
              <p className="text-white font-medium">
                6th June   2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock3 className="text-yellow-400" />
            <div>
              <p className="text-gray-400 text-sm">
                Time
              </p>
              <p className="text-white font-medium">
                6:00 PM Onwards
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-yellow-400" />
            <div>
              <p className="text-gray-400 text-sm">
                Venue
              </p>
              <p className="text-white font-medium">
                6 Mall, Kothapet
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Ticket className="text-yellow-400" />
            <div>
              <p className="text-gray-400 text-sm">
                Entry Fee
              </p>
              <p className="text-white font-medium">
                ₹139
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-yellow-400 text-lg font-semibold">
            One Beat. Many Souls. Infinite Music.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;  