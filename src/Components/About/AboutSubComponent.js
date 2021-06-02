import React from "react";
import Fade from "react-reveal/Fade";

const AboutSubComponent = ({ title, description }) => {
  return (
    <div className="bg-white px-5 py-8 rounded">
      <h1 className="text-left font-bold text-2xl pb-3">{title}</h1>
      <Fade bottom>
        <p className="text-left text-base">{description}</p>
      </Fade>
    </div>
  );
};

export default AboutSubComponent;
