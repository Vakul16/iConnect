import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Fade from "react-reveal/Fade";

export default function JourneyComponent() {
  return (
    <div id="journey">
      <Fade bottom>
        <h1 className="text-center text-2xl pb-4 mt-4 pt-12">
          Patient Journey
        </h1>
      </Fade>
      <Timeline className="justify-center items-center">
        <TimelineItem className="w-1/2">
          <TimelineSeparator className="w-8 h-32">
            <TimelineDot className="bg-white text-black w-8 h-8 rounded-full flex justify-center items-center">
              1
            </TimelineDot>
            <TimelineConnector className="bg-gray-200" />
          </TimelineSeparator>
          <TimelineContent>
            <Fade bottom>
              <h1 className="text-xl pb-5">Check eligibility</h1>
            </Fade>
            <Fade bottom>
              <p className="pb-4">
                Check your eligibility by taking up the{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  <a href="#enquiry">eligibility test</a>
                </span>
                . If you are eligible, you can connect with the team at a study
                site of your choice.
              </p>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="w-1/2">
          <TimelineSeparator className="w-8 h-32">
            <TimelineDot className="bg-white text-black w-8 h-8 rounded-full flex justify-center items-center">
              2
            </TimelineDot>
            <TimelineConnector className="bg-gray-200" />
          </TimelineSeparator>
          <TimelineContent>
            <Fade bottom>
              <h1 className="text-xl pb-5">Screening Period</h1>
            </Fade>
            <Fade bottom>
              <p className="pb-4">
                The team will connect with you and screen you with other
                preliminary tests. This can take up to 30-35 days which may be
                extended.
              </p>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="w-1/2">
          <TimelineSeparator className="w-8 h-32">
            <TimelineDot className="bg-white text-black w-8 h-8 rounded-full flex justify-center items-center">
              3
            </TimelineDot>
            <TimelineConnector className="bg-gray-200" />
          </TimelineSeparator>
          <TimelineContent>
            <Fade bottom>
              <h1 className="text-xl pb-5">Treatment Period</h1>
            </Fade>
            <Fade bottom>
              <p className="pb-4">
                Eligible candidates will receive initial treatment for up to 24
                weeks during which the health, sleep and physical activities
                will be monitored.
              </p>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="w-1/2">
          <TimelineSeparator className="w-8 h-32">
            <TimelineDot className="bg-white text-black w-8 h-8 rounded-full flex justify-center items-center">
              4
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Fade bottom>
              <h1 className="text-xl pb-5">Follow-up Period</h1>
            </Fade>
            <Fade bottom>
              <p className="pb-6">
                A follow-up period where you will be contacted approximately
                every 12 weeks to ask how you are doing.
              </p>
            </Fade>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
