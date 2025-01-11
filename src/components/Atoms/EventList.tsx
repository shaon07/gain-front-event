interface EventListProps {
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
}

export default function EventList({
  title,
  startTime,
  endTime,
  location,
  description,
}: EventListProps) {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">
        {new Date(startTime).toLocaleString()} -{" "}
        {new Date(endTime).toLocaleString()}
      </p>
      <p className="text-sm text-gray-600">Description: {description}</p>
      <p className="text-sm text-gray-600">Location: {location}</p>
    </div>
  );
}
