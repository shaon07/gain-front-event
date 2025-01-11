import UserAvatar from "../Atoms/UserAvatar";
import { USER_AVATAR_URL } from "../../constants";
import UserDetailCard from "../Atoms/UserDetailCard";
import EventList from "../Atoms/EventList";
import useUserInfo from "../../hooks/userInfo";
import { useGetUserEventsQuery } from "../../services/api/events.service";

export interface Event {
  admin: string;
  coverPhoto: string;
  endTime: string;
  eventname: string;
  location: string;
  startTime: string;
  description: string;
  visitors: []
  _id: string;
}

const UserProfile = () => {
  const { user } = useUserInfo();
  const {data} = useGetUserEventsQuery(null);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* User Info Section */}
        <div className="flex items-center mb-6">
          <UserAvatar
            src={user.userInfo?.user.avatar || USER_AVATAR_URL}
            className="w-24 h-24 rounded-full object-cover mr-6"
          />

          <UserDetailCard
            name={user.userInfo?.user.username}
            email={user.userInfo?.user.email}
          />
        </div>

        {/* Events List Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Events</h3>
          {data?.events.length > 0 ? (
            <ul>
              {data.events.map((event: Event) => (
                <li key={event._id} className="mb-4">
                  <EventList
                    title={event.eventname}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    location={event.location}
                    description={event.description}
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
