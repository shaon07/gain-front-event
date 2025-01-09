import { Link } from "react-router-dom";
import Button from "../Atoms/Button";

export default function AuthMenu() {
  return (
    <div className="flex items-center gap-2">
      <Link to="/auth/register">
        <Button>Sign Up</Button>
      </Link>

      <Link to="/auth/login">
        <Button>Log In</Button>
      </Link>
    </div>
  );
}
