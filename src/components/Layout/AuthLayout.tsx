import { Navigate, Outlet } from "react-router-dom";

interface AuthLayoutProps {
  isAuthenticated: boolean;
}

export default function AuthLayout({ isAuthenticated }: AuthLayoutProps) {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
