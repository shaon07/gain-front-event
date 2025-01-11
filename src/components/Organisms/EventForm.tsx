import React, { useState } from "react";
import Input from "../Atoms/Input";
import TextArea from "../Atoms/TextArea";
import Button from "../Atoms/Button";

export interface EventData {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  image: File | null;
}

interface EventFormProps {
  onSubmit?: (event: EventData) => void;
  loading?: boolean;
  event?: EventData;
}

export default function EventForm({
  onSubmit = () => {},
  loading = false,
  event
}: EventFormProps) {
  const [eventState, setEventState] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    location: "",
    image: null,
    ...event
  } as EventData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(eventState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">Create Event</h2>

      <div className="mb-4">
        <Input
          label="Event Title"
          placeholder="Enter event title"
          value={eventState.title}
          onChange={(value) => {
            setEventState({ ...eventState, title: value });
          }}
          required
        />
      </div>

      <div className="mb-4">
        <TextArea
          label="Event Description"
          value={eventState.description}
          onChange={(value) => {
            setEventState({ ...eventState, description: value });
          }}
          required
        />
      </div>

      <div className="mb-4">
        <Input
          label="Start Time"
          type="datetime-local"
          value={eventState.startTime}
          onChange={(value) => {
            setEventState({ ...eventState, startTime: value });
          }}
          required
        />
      </div>

      <div className="mb-4">
        <Input
          label="End Time"
          type="datetime-local"
          value={eventState.endTime}
          onChange={(value) => {
            setEventState({ ...eventState, endTime: value });
          }}
          required
        />
      </div>

      <div className="mb-4">
        <Input
          label="Location"
          value={eventState.location}
          onChange={(value) => {
            setEventState({ ...eventState, location: value });
          }}
          required
        />
      </div>

      <div className="mb-4">
        <Input
          label="Cover Photo"
          type="file"
          onChange={(_, data) => {
            setEventState({ ...eventState, image: data.target.files[0] });
          }}
          required={!eventState.image}
        />
      </div>

      <Button type="submit" loading={loading} className="w-full">
        Create Event
      </Button>
    </form>
  );
}
