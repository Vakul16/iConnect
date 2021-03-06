import React from "react";
import FeaturesSubComponent from "./FeaturesSubComponent";
import Research from "../../Assets/img-1.jpg";
import Monthly from "../../Assets/img-2.jpg";
import InHome from "../../Assets/img-3.jpg";
const FeaturesComponent1 = () => {
  return (
    <div id="features">
      <FeaturesSubComponent
        title="Research Facility"
        description="The research labs at our study sites use state-of-the-art equipment operated by highly qualified technicians."
        image={Research}
        bg="journey1"
      />
      <FeaturesSubComponent
        title="Monthly Check-ups"
        description="The study conducts patient check-up every third weekend of the month to keep track of patient's health and recovery."
        image={Monthly}
        reverse={true}
        bg="journey2"
      />
      <FeaturesSubComponent
        title="In-home Check-ups"
        description="Eligible candidates can choose for in-home consultation every month from our trained study professionals."
        image={InHome}
        bg="journey3"
      />
    </div>
  );
};

export default FeaturesComponent1;
