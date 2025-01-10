import { LogOut } from "lucide-react";
import UserAvatar from "../Atoms/UserAvatar";
import { USER_AVATAR_URL } from "../../constants";
import useUserInfo from "../../hooks/userInfo";
import { useLogoutMutation } from "../../services/api/user.service";

interface UserIconProps {
  onClick?: (data?: any) => void;
}

export default function UserAvatarLogout({
  onClick = () => {},
}: UserIconProps) {
  const { user } = useUserInfo();
  const [logout, { isLoading }] = useLogoutMutation();
  const avatar = user?.userInfo?.user?.avatar || USER_AVATAR_URL;

  const handleClick = async () => {
    await logout(null);
    onClick(avatar);
  };

  return (
    <div className="flex items-center space-x-4">
      <UserAvatar className="h-8 w-8 rounded-full" src={avatar} />

      <button
        disabled={isLoading}
        onClick={handleClick}
        className="text-gray-500 hover:text-gray-700"
      >
        <LogOut className="h-5 w-5" />
      </button>
    </div>
  );
}
