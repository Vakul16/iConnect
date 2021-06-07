import React from "react";
import AboutSubComponent from "./AboutSubComponent";
import Fade from "react-reveal/Fade";

const AboutData = [
  {
    id: 1,
    title: "Eligibility",
    description:
      "18 years or older participants with symptoms of MDS or anaemia",
  },
  {
    id: 2,
    title: "Monthly Check-ups",
    description:
      "A check-up every third weekend of the month to keep track of patient's health and recovery.",
  },
  {
    id: 3,
    title: "Treatment Period",
    description:
      "The total treatment period of this study is about 20-24 weeks.",
  },
  {
    id: 4,
    title: "Compensation",
    description:
      "Participants might receive up to $300 for taking part in the study",
  },
];

const AboutComponent1 = () => {
  return (
    <div id="about" className="bg-aboutPattern bg-cover bg-no-repeat">
      <div className="container flex flex-col justify-center items-center py-20">
        <Fade bottom>
          <h1 className="text-left text-white font-bold text-2xl pb-4">
            About the study
          </h1>
        </Fade>
        <p className="text-left text-white text-base pb-6">
          Here are some key highlights of our study
        </p>
        <div className="grid grid-cols-2 gap-4 w-3/5">
          {AboutData.map(({ id, title, description }) => (
            <AboutSubComponent
              key={id}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutComponent1;
