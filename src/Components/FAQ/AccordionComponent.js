import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const AccordionComponent = ({ heading, paragraph }) => {
  return (
    <Accordion className="border-b-2 border-gray">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-primary" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h3 className="text-left font-semibold text-lg pb-2">{heading}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p className="text-left text-base pb-2">{paragraph}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
