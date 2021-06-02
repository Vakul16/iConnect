import React from "react";
import Fade from "react-reveal/Fade";

const HomeComponent2 = () => {
  return (
    <>
      <div className="container py-16 flex flex-col justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-left font-bold text-2xl pb-6">
            Are blood transfusions holding you back?
          </h1>
          <Fade bottom>
            <p className="text-left text-base">
              The purpose of the study is to compare the effectiveness of a
              study drug versus a standard-of-care therapy. Individuals wil be
              evaluated to determine their eligibility to participate. Each
              person who qualifies will receive either the study drug or
              standard-of-care therapy, study-related medical exams, and
              study-related laboratory tests at no cost.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};
export default HomeComponent2;
