import React, { useState, useEffect } from "react";
import Navbar from "./Components/Header/Navbar";
import HomePage from "./Pages/HomePage";
import Dropdown from "./Components/Header/Dropdown";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
