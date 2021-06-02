import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="px-56">
        <div className="flex flex-row">
          <Fade bottom>
            <div>
              <h1 className="text-left font-semibold text-lg pb-2">Address</h1>
              <p>
                350 5th Ave, New York, NY <br />
                10118, USA
              </p>
            </div>
          </Fade>

          <div className="pl-10">
            <Fade bottom>
              <h1 className="text-left font-semibold text-lg pb-2">Links</h1>
            </Fade>
            <Fade bottom>
              <ul className="text-primary cursor-pointer">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#enquiry">Eligibility</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#journey">Journey</a>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <div>
            <h1 className="text-left font-semibold text-lg pb-2">Contacts</h1>
            <ul>
              <li>support@iconnect.com</li>
              <li>+1 (0) 000 0000 001</li>
              <li>+1 (0) 000 0000 002</li>
            </ul>
          </div>
        </Fade>
        <div className="pt-20 text-gray-400">
          <p> &copy; Copyright 2021 iConnect - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
