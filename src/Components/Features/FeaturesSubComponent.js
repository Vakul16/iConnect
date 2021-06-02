import React from "react";
import Fade from "react-reveal/Fade";

const FeaturesSubComponent = ({ heading, paragraph, image, bg, reverse }) => {
  return (
    <div className={`bg-${bg} bg-no-repeat bg-cover bg-opacity-40`}>
      <div
        className={`container flex py-32 justify-center items-center ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className={`w-1/5 flex flex-col ${reverse ? "ml-10" : "mr-4"}`}>
          <Fade bottom>
            <h1 className="text-left font-bold text-2xl pb-3">{heading}</h1>
          </Fade>
          <Fade bottom>
            <p className="text-left text-base font-medium pb-5">{paragraph}</p>
          </Fade>
        </div>

        <Fade bottom>
          <div className="w-1/3">
            <img src={image} className="w-full h-auto" alt="logo" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FeaturesSubComponent;
