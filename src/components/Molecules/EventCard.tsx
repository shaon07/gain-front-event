import { Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";

interface EventProps {
  id: string | number;
  title: string;
  startTime: string;
  location: string;
  image: string;
  total: number;
  showButton?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export default function EventCard({
  id,
  image,
  title,
  startTime,
  location,
  total,
  showButton = true,
  loading = false,
  onClick = () => {},
}: EventProps) {
  return (
    <div
      key={id}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <Link to={`/events/${id}`} className="block">
        <div className="relative h-48">
          <img
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={image}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      <div className="p-6">
        <Link
          to={`/events/${id}`}
          className="block text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
        >
          {title}
        </Link>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            {new Date(startTime).toLocaleString()}
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            {location}
          </div>

          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2" />
            {total} attending
          </div>
        </div>

        {showButton && (
          <Button onClick={onClick} loading={loading} className="mt-6 w-full">
            Confirm
          </Button>
        )}
      </div>
    </div>
  );
}
