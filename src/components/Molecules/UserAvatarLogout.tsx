import { LogOut } from "lucide-react";
import UserAvatar from "../Atoms/UserAvatar";
import { USER_AVATAR_URL } from "../../constants";

interface UserIconProps {
  onClick?: (data?: any) => void;
}

export default function UserAvatarLogout({
  onClick = () => {},
}: UserIconProps) {
  const handleClick = () => {
    onClick(USER_AVATAR_URL);
  };

  return (
    <div className="flex items-center space-x-4">
      <UserAvatar className="h-8 w-8 rounded-full" src={USER_AVATAR_URL} />
      <button
        onClick={handleClick}
        className="text-gray-500 hover:text-gray-700"
      >
        <LogOut className="h-5 w-5" />
      </button>
    </div>
  );
}
