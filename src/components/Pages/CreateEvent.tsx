import { useNavigate } from "react-router-dom";
import EventForm, { EventData } from "../Organisms/EventForm";
import { useCreateEventMutation } from "../../services/api/events.service";

export default function CreateEventContainer() {
  const router = useNavigate();
  const [createEvent, { isLoading }] = useCreateEventMutation();

  const createEventHandler = async (event: EventData) => {
    const data = new FormData();
    data.append("eventname", event.title);
    data.append("description", event.description);
    data.append("startTime", event.startTime);
    data.append("endTime", event.endTime);
    data.append("location", event.location);
    if (event.image) {
      data.append("coverPhoto", event.image);
    }

    const res = await createEvent(data).unwrap();
    if (res.success) {
      router("/profile");
    }
  };

  return (
    <div>
      <EventForm
        onSubmit={(data) => {
          createEventHandler(data);
        }}
        loading={isLoading}
      />
    </div>
  );
}
