import React from "react";
const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center cursor-pointer items-center bg-gray-200 mt-16"
          : "hidden"
      }
      onClick={toggle}
    >
      <a href="#about" className="p-4 hover:bg-primary">
        About
      </a>
      <a href="#faq" className="p-4 hover:bg-primary">
        FAQ
      </a>
      <a href="#features" className="p-4 hover:bg-primary">
        Features
      </a>
      <a href="#journey" className="p-4 hover:bg-primary">
        Journey
      </a>
      <a href="#enquiry" className="p-4 hover:bg-primary">
        Am I eligible?
      </a>
    </div>
  );
};

export default Dropdown;
