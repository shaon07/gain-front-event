import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageContainer from "../components/Pages/HomePage";
import NotFoundPageContainer from "../components/Pages/NotFoundPage";
import RootLayout from "../components/Layout/RootLayout";
import CreateEventContainer from "../components/Pages/CreateEvent";
import UserProfileContainer from "../components/Pages/UserProfile";
import EventDetailContainer from "../components/Pages/EventDetail";
import LoginPageContainer from "../components/Pages/Login";
import RegisterPageContainer from "../components/Pages/Register";
import PrivateLayout from "../components/Layout/PrivateLayout";
import PublicLayout from "../components/Layout/PublicLayout";
import useUserInfo from "../hooks/userInfo";
import EditEventContainer from "../components/Pages/EditEvent";

export const RoutesProvider = () => {
  const {user} = useUserInfo();
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePageContainer />} />

          <Route element={<PublicLayout isAuthenticated={user.isAuthenticated} />}>
            <Route path="/auth/login" element={<LoginPageContainer />} />
            <Route path="/auth/register" element={<RegisterPageContainer />} />
          </Route>

          <Route element={<PrivateLayout isAuthenticated={user.isAuthenticated} />}>
            <Route
              path="/events/:id"
              element={<EventDetailContainer />}
            />
            <Route path="/create-event" element={<CreateEventContainer />} />
            <Route path="/edit-event/:id" element={<EditEventContainer />} />
            <Route path="/profile" element={<UserProfileContainer />} />
          </Route>

          <Route path="*" element={<NotFoundPageContainer />} />
        </Route>
      </Routes>
    </Router>
  );
};
