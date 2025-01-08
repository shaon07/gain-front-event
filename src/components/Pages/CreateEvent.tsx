import EventForm from "../Organisms/EventForm";

export default function CreateEventContainer() {
  return (
    <div>
      <EventForm onSubmit={(data) => console.log(data)} />
    </div>
  );
}
