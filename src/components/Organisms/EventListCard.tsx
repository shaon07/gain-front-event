import useUserInfo from "../../hooks/userInfo";
import { useGetAllEventsQuery } from "../../services/api/events.service";
import EventCard from "../Molecules/EventCard";
import { Event } from "./UserProfile";

const EventListCard = () => {
  const { user } = useUserInfo();
  const { data } = useGetAllEventsQuery(null);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.events.map((event: Event) => (
          <EventCard
            key={event._id}
            id={event._id}
            title={event.eventname}
            startTime={event.startTime}
            location={event.location}
            image={event.coverPhoto}
            total={event.visitors.length}
            showButton={user.userInfo?.user?._id !== event.admin}
          />
        ))}
      </div>
    </div>
  );
};

export default EventListCard;
