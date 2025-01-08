import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import Navigation from "../Organisms/Navigation";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
