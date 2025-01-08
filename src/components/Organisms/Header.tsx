import { Link } from "react-router-dom";
import Logo from "../Atoms/Logo";
import UserAvatarLogout from "../Molecules/UserAvatarLogout";

const Header = () => {
  // Mock user data - in a real app this would come from auth context
  const isLoggedIn = true;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <Logo />
          </Link>

          {isLoggedIn && <UserAvatarLogout />}
        </div>
      </div>
    </header>
  );
};

export default Header;
