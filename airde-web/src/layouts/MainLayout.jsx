import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary selection:text-on-primary min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <Chatbot />
    </div>
  );
}
