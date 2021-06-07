import React from "react";
import AccordionComponent from "./AccordionComponent";
import Fade from "react-reveal/Fade";

const FAQData = [
  {
    id: 1,
    heading: "What do I have to do in the study?",
    paragraph:
      "Participate in various study activities, such as a screening visit. eligibility review, and a treatment period, over the course of about 3 months. This includes a 6-week treatment period where participants apply the study treatment 2x per day, send weekly photos of their lower legs and have a weekly video visit with a study coach. The study will conclude with an in-home visit when you end treatment and a video follow-up visit 4 weeks later. We will provide all instructions and devices needed to participate in the study.",
  },
  {
    id: 2,
    heading: "How long is the study?",
    paragraph:
      "The study will last about 14 weeks, including 6 weeks using the study ointment and 4 weeks of follow-up.",
  },
  {
    id: 3,
    heading: "Can I continue to wear compression socks during the study?",
    paragraph:
      "Since compression stockings are often recommended for those suffering from Statis Dermatitis, we  ask that if you are using compression stockings today, that you continue to wear them during the study. That said, wearing compression stockings is not required for this study.",
  },
  {
    id: 4,
    heading: "What is an at-home clinical study?",
    paragraph:
      "An at-home (or remote) clinical study is one in which you can fully participate at your home. This means there is no need to visit a doctor's office, lab or hospital. we will deliver any materials you may need to participate, and you'll be able to mail items back to us that need to be returned in the regular mail.",
  },
];
export default function FAQComponent() {
  return (
    <div
      id="faq"
      className="container flex flex-col justify-center items-center my-12"
    >
      <div className="w-1/2">
        <Fade bottom>
          <h1 className="text-center font-bold text-2xl pt-7 pb-5">
            Frequently asked questions
          </h1>
        </Fade>
        {FAQData.map(({ id, heading, paragraph }) => (
          <AccordionComponent
            key={id}
            heading={heading}
            paragraph={paragraph}
          />
        ))}
      </div>
    </div>
  );
}
