import React from "react";
import logo from "../../Assets/logo.png";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center bg-white bg-opacity-75 h-16 text-black fixed top-0 left-0 w-full shadow-sm font-body font-medium"
      role="navigation"
    >
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="store" className="pl-10" />
        </a>
        <a href="/" className="pl-4">
          iConnect
        </a>
      </div>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block  hidden">
        <a href="#about" className="p-5 hover:text-primary">
          About
        </a>
        <a href="#faq" className="p-5 hover:text-primary">
          FAQ
        </a>
        <a href="#features" className="p-5 hover:text-primary">
          Features
        </a>
        <a href="#journey" className="p-5 hover:text-primary">
          Journey
        </a>
        <a
          href="#enquiry"
          className="py-2 px-4 bg-primary border-2 border-primary rounded text-white hover:bg-transparent hover:text-primary"
        >
          Am I eligible?
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
