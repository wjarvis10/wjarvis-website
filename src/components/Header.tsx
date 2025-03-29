import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import wj_logo from "../assets/images/WJ_logo_2.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100); // delay to wait for homepage to render
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b-2 border-grey-300">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src={wj_logo} // Replace with your actual filename
            alt="WJ Logo"
            className="h-8 w-8 object-contain"
          />
          <div className="text-2xl font-bold">Will Jarvis</div>
        </div>
        <nav className="space-x-6 hidden md:block">
          <button
            onClick={() => handleNav("about")}
            className="hover:underline"
          >
            About
          </button>
          <button
            onClick={() => handleNav("projects")}
            className="hover:underline"
          >
            Projects
          </button>
          <button
            onClick={() => handleNav("contact")}
            className="hover:underline"
          >
            Contact
          </button>
          <a href="/business" className="hover:underline">
            Business
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
