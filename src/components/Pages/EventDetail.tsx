import React from "react";
import AttendenseUserList from "../Atoms/AttendenseUserList";
import EventCover from "../Molecules/EventCover";
import EventActions from "../Molecules/EventActions";

interface Attendee {
  id: string;
  name: string;
  image: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  image: string;
  attendees: Attendee[];
  isOwner: boolean;
}

const EventDetailContainer: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <EventCover
          image={event.image}
          title={event.title}
          startTime={event.startTime}
          location={event.location}
        />

        <div className="p-8">
          <EventActions id={event.id} isOwner={event.isOwner} />

          <div className="prose max-w-none mb-8">
            <p>{event.description}</p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-semibold mb-6">
              Attendees ({event.attendees.length})
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {event.attendees.map((attendee) => (
                <AttendenseUserList
                  key={attendee.id}
                  id={attendee.id}
                  name={attendee.name}
                  image={attendee.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailContainer;
