import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageContainer from "../components/Pages/HomePage";
import NotFoundPageContainer from "../components/Pages/NotFoundPage";
import RootLayout from "../components/Layout/RootLayout";
import CreateEventContainer from "../components/Pages/CreateEvent";
import UserProfileContainer from "../components/Pages/UserProfile";
import EventDetailContainer from "../components/Pages/EventDetail";

// Mock event data for the detail page
const mockEvent = {
  id: 1,
  title: "Tech Conference 2024",
  description:
    "Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.",
  startTime: "2024-03-20T09:00:00",
  endTime: "2024-03-20T18:00:00",
  location: "San Francisco, CA",
  image:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  attendees: [
    {
      id: "1",
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: "2",
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  isOwner: true,
};

export const RoutesProvider = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePageContainer />} />
          <Route
            path="/events/:id"
            element={<EventDetailContainer event={mockEvent} />}
          />
          <Route path="/create-event" element={<CreateEventContainer />} />
          <Route path="/edit-event/:id" element={<CreateEventContainer />} />
          <Route path="/profile" element={<UserProfileContainer />} />
          <Route path="*" element={<NotFoundPageContainer />} />
        </Route>
      </Routes>
    </Router>
  );
};
