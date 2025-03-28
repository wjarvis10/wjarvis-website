import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Will Jarvis</div>
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
