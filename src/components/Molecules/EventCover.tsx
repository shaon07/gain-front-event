import { Clock, MapPin } from "lucide-react";

interface EventCoverProps {
  image: string;
  title: string;
  startTime: string;
  location: string;
}

export default function EventCover({
  image,
  title,
  startTime,
  location,
}: EventCoverProps) {
  return (
    <div className="relative h-96">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            {new Date(startTime).toLocaleString()}
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}
