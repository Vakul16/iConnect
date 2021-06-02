import React from "react";
import Fade from "react-reveal/Fade";

const AboutComponent3 = () => {
  return (
    <div className="container flex flex-col justify-center items-center my-12">
      <div className="w-1/2 p-16 bg-primary rounded">
        <Fade bottom>
          <h1 className="text-left text-white font-bold text-xl pb-7">
            Let's find out if you are eligible for this study.
          </h1>
        </Fade>
        <Fade bottom>
          <p className="text-left text-white text-base pb-7">
            Take up this questionnaire to help us determine if you have symptoms
            that are common for MDS and anemia. If you have the common symptoms,
            you may be eligible to take part in the study.
          </p>
        </Fade>
        <Fade bottom>
          <button className="bg-white text-gray-600 p-2 px-4 border-2 rounded inline-flex	justify-center items-center hover:bg-transparent hover:text-white">
            <span className="mr-2">Start answering</span>
            <i className="text-gray-600 fas fa-arrow-right hover:text-white"></i>
          </button>
        </Fade>
      </div>
    </div>
  );
};
export default AboutComponent3;
