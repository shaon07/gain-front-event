import { Link } from "react-router-dom";
import Logo from "../Atoms/Logo";
import UserAvatarLogout from "../Molecules/UserAvatarLogout";
import AuthMenu from "../Molecules/AuthMenu";
import useUserInfo from "../../hooks/userInfo";

export default function Header() {
  const { user } = useUserInfo();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <Logo />
          </Link>

          {user.isAuthenticated ? <UserAvatarLogout /> : <AuthMenu />}
        </div>
      </div>
    </header>
  );
}
