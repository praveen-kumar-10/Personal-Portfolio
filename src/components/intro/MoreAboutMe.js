import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Container from "../UI/Container";
import "./MoreAboutMe.css";

const MoreAboutMe = () => {
  return (
    <div id="more-about-me" className="content">
      <Container>
        <h1>More About Me</h1>
        <VerticalTimeline className="edu_wrapper">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderTop: "5px solid rgb(255, 121, 121)",
              boxShadow: "10px 10px 20px rgba(0, 98, 255, 0.2)",
            }}
            date="2019 - Present"
            dateClassName="date"
          >
            <h2>B-Tech, CSE</h2>
            <h3>
              Vasireddy Venkatadri Institute Of Technology,
              <br />
              Guntur
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            dateClassName="date"
            iconStyle={{}}
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderTop: "5px solid rgb(0, 197, 0)",
              boxShadow: "10px 10px 20px rgba(0, 98, 255, 0.2)",
            }}
          >
            <h2>Senior Secondary</h2>
            <h3>
              Sri Chaitanya Junior College,
              <br />
              Srikakulam
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderTop: "5px solid rgb(108, 108, 255)",
              boxShadow: "10px 10px 20px rgba(0, 98, 255, 0.2)",
            }}
            date="2016 - 2017"
            dateClassName="date"
          >
            <h2>Secondary</h2>
            <h3>
              Kendriya Vidyalaya,
              <br />
              Srikakulam
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default MoreAboutMe;
