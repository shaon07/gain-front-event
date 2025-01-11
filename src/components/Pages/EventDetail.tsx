import AttendenseUserList from "../Atoms/AttendenseUserList";
import EventCover from "../Molecules/EventCover";
import EventActions from "../Molecules/EventActions";
import { useGetEventDetailQuery } from "../../services/api/events.service";
import { useParams } from "react-router-dom";
import useUserInfo from "../../hooks/userInfo";

const EventDetailContainer = () => {
  const { id } = useParams();
  const {user} = useUserInfo();
  const {data, isLoading} = useGetEventDetailQuery({ eventId: id });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <EventCover
          image={data?.event?.coverPhoto}
          title={data?.event?.eventname}
          startTime={data?.event?.startTime}
          location={data?.event?.location}
        />

        <div className="p-8">
          <EventActions id={data?.event?._id} isOwner={user.userInfo?.user?._id === data?.event?.admin} />

          <div className="prose max-w-none mb-8">
            <p>{data?.event?.description}</p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-semibold mb-6">
              Attendees ({data.event.visitors.length})
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.event.visitors.map((attendee: any) => (
                <AttendenseUserList
                  key={attendee._id}
                  id={attendee._id}
                  name={attendee.username}
                  image={attendee.avatar}
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
