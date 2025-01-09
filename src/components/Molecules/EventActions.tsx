import { Heart, Share2 } from "lucide-react";
import Button from "../Atoms/Button";
import { Link } from "react-router-dom";

interface EventActionsProps {
  isOwner: boolean;
  id: number;
  onSave?: () => void;
  onShare?: () => void;
  onRSVP?: () => void;
}

export default function EventActions({
  id,
  isOwner,
  onRSVP = () => {},
  onShare = () => {},
  onSave = () => {},
}: EventActionsProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-4">
        <Button onClick={onRSVP}>RSVP</Button>

        <button onClick={onShare} className="text-gray-600 hover:text-gray-800">
          <Share2 className="h-5 w-5" />
        </button>

        <button onClick={onSave} className="text-gray-600 hover:text-red-500">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {isOwner && (
        <Link
          to={`/edit-event/${id}`}
          className="text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Edit Event
        </Link>
      )}
    </div>
  );
}
