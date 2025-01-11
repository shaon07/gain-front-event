import { User, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../Atoms/Input";
import { useAppDispatch } from "../../context/redux/hook";
import {
  setEventDateEndTimeFilter,
  setEventDateStartTimeFilter,
  setEventLocationFilter,
  setEventNameFilter,
} from "../../context/redux/slices/event.slice";

const Navigation = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Link>

            <Link
              to="/create-event"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Create Event
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Input
              className="!p-1 !mt-0"
              placeholder="Search by title"
              onChange={(value) => {
                dispatch(setEventNameFilter(value));
              }}
            />
            <Input
              className="!p-1 !mt-0"
              placeholder="Search by location"
              onChange={(value) => {
                dispatch(setEventLocationFilter(value));
              }}
            />
            <Input
              type="datetime-local"
              className="!p-1 !mt-0"
              onChange={(value) => {
                dispatch(setEventDateStartTimeFilter(value));
              }}
            />
            <Input
              type="datetime-local"
              className="!p-1 !mt-0"
              onChange={(value) => {
                dispatch(setEventDateEndTimeFilter(value));
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
