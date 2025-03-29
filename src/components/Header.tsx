import React, { useState, useEffect, useRef } from "react";
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

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const aboutSection = document.getElementById("about");
      aboutSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b-2 border-grey-300">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src={wj_logo} // Replace with your actual filename
            alt="WJ Logo"
            className="h-8 w-8 object-contain"
          />
          <div className="text-2xl font-bold">Will Jarvis</div>
        </div>
        <div className="md:hidden relative" ref={menuRef}>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            {menuOpen ? "✕" : "☰"}
          </button>
          {menuOpen && (
            <div
              className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 transform transition-all duration-200 origin-top ${
                menuOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <button
                onClick={() => {
                  handleNav("about");
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                About
              </button>
              <button
                onClick={() => {
                  handleNav("projects");
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  handleNav("contact");
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Contact
              </button>
              <a
                href="/business"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Business
              </a>
            </div>
          )}
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
