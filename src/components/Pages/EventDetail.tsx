import React from "react";
import { MapPin, Clock, Share2, Heart } from "lucide-react";
import AttendenseUserList from "../Atoms/AttendenseUserList";

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
        <div className="relative h-96">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {new Date(event.startTime).toLocaleString()}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {event.location}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                RSVP
              </button>

              <button className="text-gray-600 hover:text-gray-800">
                <Share2 className="h-5 w-5" />
              </button>
              
              <button className="text-gray-600 hover:text-red-500">
                <Heart className="h-5 w-5" />
              </button>
            </div>
            {event.isOwner && (
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                Edit Event
              </button>
            )}
          </div>

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
