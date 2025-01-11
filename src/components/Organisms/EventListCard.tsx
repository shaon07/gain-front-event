import { toast } from "react-toastify";
import { useAppSelector } from "../../context/redux/hook";
import { RootState } from "../../context/redux/store";
import useUserInfo from "../../hooks/userInfo";
import {
  useConfirmEventMutation,
  useGetAllEventsQuery,
} from "../../services/api/events.service";
import EventCard from "../Molecules/EventCard";
import { Event } from "./UserProfile";

const EventListCard = () => {
  const { user } = useUserInfo();
  const {
    allEvents: events,
    eventNameFilter,
    eventLocationFilter,
    eventDateEndTimeFilter,
    eventDateStartTimeFilter,
  } = useAppSelector((state: RootState) => state.eventSlice);
  const { refetch } = useGetAllEventsQuery(null);
  const [confirmEvent, { isLoading }] = useConfirmEventMutation();

  const handleConfirmEvent = async (event: Event) => {
    const res = await confirmEvent({ eventId: event._id })
      .unwrap()
      .catch((e) => {
        toast.warn(e.data?.message);
        return;
      });
    if (res.success) {
      refetch();
    }
  };

  const filteredEvents = events
    .filter((event: Event) =>
      event.eventname.toLowerCase().includes(eventNameFilter.toLowerCase())
    )
    .filter((event: Event) =>
      event.location.toLowerCase().includes(eventLocationFilter.toLowerCase())
    )
    .filter((event: Event) => {
      if (eventDateEndTimeFilter) {
        return new Date(event.endTime) >= new Date(eventDateEndTimeFilter);
      } else {
        return event;
      }
    })
    .filter((event: Event) => {
      if (eventDateStartTimeFilter) {
        return new Date(event.endTime) <= new Date(eventDateStartTimeFilter);
      } else {
        return event;
      }
    });

  if (events.length === 0) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event: Event) => (
            <EventCard
              key={event._id}
              id={event._id}
              title={event.eventname}
              startTime={event.startTime}
              location={event.location}
              image={event.coverPhoto}
              total={event.visitors.length}
              showButton={user.userInfo?.user?._id !== event.admin}
              loading={isLoading}
              onClick={() => handleConfirmEvent(event)}
            />
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  );
};

export default EventListCard;
