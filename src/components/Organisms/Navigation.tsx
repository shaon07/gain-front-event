import { User, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
