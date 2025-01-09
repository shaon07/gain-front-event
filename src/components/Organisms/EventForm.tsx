import React, { useState } from "react";
import Input from "../Atoms/Input";
import TextArea from "../Atoms/TextArea";
import Button from "../Atoms/Button";

interface EventFormProps {
  onSubmit: (eventData: EventData) => void;
}

interface EventData {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eventData: EventData = {
      title,
      description,
      startTime,
      endTime,
      location,
    };
    onSubmit(eventData);
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
          value={title}
          onChange={(value) => setTitle(value)}
          required
        />
      </div>

      <div className="mb-4">
        <TextArea
          label="Event Description"
          value={description}
          onChange={setDescription}
          required
        />
      </div>

      <div className="mb-4">
        <Input
          label="Start Time"
          type="datetime-local"
          value={startTime}
          onChange={(value) => setStartTime(value)}
          required
        />
      </div>

      <div className="mb-4">
        <Input
          label="End Time"
          type="datetime-local"
          value={endTime}
          onChange={(value) => setEndTime(value)}
          required
        />
      </div>

      <div className="mb-4">
        <Input
          label="Location"
          value={location}
          onChange={(value) => setLocation(value)}
        />
      </div>

      <Button type="submit" className="w-full">Create Event</Button>
    </form>
  );
};

export default EventForm;
