import React from "react";
const HomeComponent1 = () => {
  return (
    <>
      <div className="home">
        <div className="container h-full w-1/2 flex justify-items-center items-center">
          <div className="flex flex-col w-3/5 ml-auto">
            <h1 className="text-left text-2xl font-bold tracking-wide whitespace-pre-line pb-3">
              A clinical research study for people with myelodysplastic
              syndromes with anemia
            </h1>
            <p className="text-left text-base whitespace-pre-line pb-6">
              The study is to compare the effectiveness of a study drug versus a
              standard-of-care therapy. Individuals will be evaluated to
              determine their eligibility to participate. Each person who
              qualifies will receive either the study drug or standard-of-care
              therapy, study-related medical exams, and study-related laboratory
              tests at no cost.
            </p>
            <div className="flex flex-row">
              <a
                href="#enquiry"
                className="mr-5 bg-primary text-white p-2 px-4 border-2 border-primary rounded font-semibold transition-all hover:bg-transparent hover:text-primary"
              >
                Check my eligibility
              </a>
              <a
                href="#about"
                className="mr-5 bg-transparent text-primary p-2 px-4 border-2 border-primary rounded font-semibold transition-all hover:bg-primary hover:text-white"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeComponent1;
