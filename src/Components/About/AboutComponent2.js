import React from "react";

const AboutComponent2 = () => {
  return (
    <div className="container flex flex-col justify-center items-center my-12">
      <div className="w-1/2 border-l-4 p-16 border-primary bg-gray-50 rounded">
        <h1 className="text-left font-bold text-xl pb-3">
          What is MDS and anemia?
        </h1>
        <p className="text-left text-base pb-5">
          MDS is a rare blood cancer in which blood cells in the bone marrow do
          not grow to become healthy red blood cells, white blood cells, or
          platelets -- all the vital components of blood. Not being able to
          develop healthy red blood cells leads to anemia, which is common with
          MDS. Anemia has many of the same symptoms as MDS and causes even
          greater fatigue.
        </p>
        <p className="text-left text-base">
          It can be exhausting to live with a condition that makes yopu feel
          like you're being held back. If you're caring for a loved one with the
          condition, it can be equally trying. However, right now, research is
          underway on an investigational study drug to see if it may help
          alleviate anemic symptoms and better manage your MDS. And you may be
          able to take part in this study.
        </p>
      </div>
    </div>
  );
};

export default AboutComponent2;
