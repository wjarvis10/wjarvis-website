import React from "react";
import wj_logo from "../../public/images/WJ_logo_2.png";
const Header: React.FC = () => {
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
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
