import React, { useState } from 'react';

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
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [location, setLocation] = useState<string>('');

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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create Event</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Event Title</label>
        <input
          type="text"
          id="title"
          className="mt-2 p-3 border border-gray-300 rounded-md w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          className="mt-2 p-3 border border-gray-300 rounded-md w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Start Time</label>
        <input
          type="datetime-local"
          id="startTime"
          className="mt-2 p-3 border border-gray-300 rounded-md w-full"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End Time</label>
        <input
          type="datetime-local"
          id="endTime"
          className="mt-2 p-3 border border-gray-300 rounded-md w-full"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          id="location"
          className="mt-2 p-3 border border-gray-300 rounded-md w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 w-full">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
