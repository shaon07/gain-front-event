import EventCard from "../Molecules/EventCard";

// Mock data - in a real app this would come from an API
const events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description:
      "Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.",
    startTime: "2024-03-20T09:00:00",
    endTime: "2024-03-20T18:00:00",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    attendees: [
      {
        id: "1",
        name: "John Doe",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: "2",
        name: "Jane Smith",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 2,
    title: "Startup Networking Mixer",
    description:
      "Connect with fellow entrepreneurs and investors in this exclusive networking event.",
    startTime: "2024-03-22T18:00:00",
    endTime: "2024-03-22T21:00:00",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    attendees: [
      {
        id: "3",
        name: "Alice Johnson",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
];

const EventListCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            startTime={event.startTime}
            location={event.location}
            image={event.image}
            total={event.attendees.length}
          />
        ))}
      </div>
    </div>
  );
};

export default EventListCard;
