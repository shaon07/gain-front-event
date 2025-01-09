import { Navigate, Outlet } from "react-router-dom";

interface PrivateLayoutProps {
  isAuthenticated: boolean;
}

export default function PrivateLayout({ isAuthenticated }: PrivateLayoutProps) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
}
