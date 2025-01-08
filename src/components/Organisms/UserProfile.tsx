import React, { useState, useEffect } from "react";
import UserAvatar from "../Atoms/UserAvatar";
import { USER_AVATAR_URL } from "../../constants";
import UserDetailCard from "../Atoms/UserDetailCard";
import EventList from "../Atoms/EventList";

interface Event {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  location: string;
}

interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [userDetails, setUserDetails] = useState<{
    id: string;
    name: string;
    email: string;
    profilePicture: string;
  } | null>(null);

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Simulate fetching user details and events based on userId
    const fetchedUserDetails = {
      id: userId,
      name: "John Doe",
      email: "john.doe@example.com",
      profilePicture: USER_AVATAR_URL,
    };
    const fetchedEvents = [
      {
        id: "event1",
        title: "Tech Conference 2024",
        startTime: "2024-03-20T09:00:00",
        endTime: "2024-03-20T17:00:00",
        location: "San Francisco, CA",
      },
      {
        id: "event2",
        title: "React Workshop",
        startTime: "2024-04-15T10:00:00",
        endTime: "2024-04-15T14:00:00",
        location: "New York, NY",
      },
    ];

    setUserDetails(fetchedUserDetails);
    setEvents(fetchedEvents);
  }, [userId]);

  if (!userDetails) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* User Info Section */}
        <div className="flex items-center mb-6">
          <UserAvatar
            src={userDetails.profilePicture}
            className="w-24 h-24 rounded-full object-cover mr-6"
          />

          <UserDetailCard name={userDetails.name} email={userDetails.email} />
        </div>

        {/* Events List Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Events</h3>
          {events.length > 0 ? (
            <ul>
              {events.map((event) => (
                <li key={event.id} className="mb-4">
                  <EventList
                    title={event.title}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    location={event.location}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">You don't have any events yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
