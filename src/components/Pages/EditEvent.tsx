import { useNavigate, useParams } from "react-router-dom";
import EventForm, { EventData } from "../Organisms/EventForm";
import {
  useGetEventDetailQuery,
  useUpdateEventMutation,
} from "../../services/api/events.service";

export default function EditEventContainer() {
  const router = useNavigate();
  const [updateEvent, { isLoading: updateLoading }] = useUpdateEventMutation();
  const { id } = useParams();
  const { data, isLoading } = useGetEventDetailQuery({ eventId: id });

  if (isLoading) return <p>Loading...</p>;

  const eventDefaultData = {
    title: data.event.eventname,
    description: data.event.description,
    startTime: new Date(data.event.startTime).toISOString().slice(0, 16),
    endTime: new Date(data.event.endTime).toISOString().slice(0, 16),
    location: data.event.location,
    image: data.event.coverPhoto,
  };

  const handleSubmit = async (event: EventData) => {
    const data = new FormData();
    data.append("eventname", event.title);
    data.append("description", event.description);
    data.append("startTime", event.startTime);
    data.append("endTime", event.endTime);
    data.append("location", event.location);
    if (!!event.image && typeof event.image !== "string") {
      data.append("coverPhoto", event.image);
    }

    const res = await updateEvent({
      eventId: id,
      formData: data,
    }).unwrap();

    if (res.success) {
      router(`/events/${id}`);
    }
  };

  return (
    <div>
      <EventForm
        event={eventDefaultData}
        loading={updateLoading}
        onSubmit={(event) => handleSubmit(event)}
      />
    </div>
  );
}
