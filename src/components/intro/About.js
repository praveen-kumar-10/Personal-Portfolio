import React from "react";

import "./About.css";

import Container from "../UI/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about_section">
      <Container>
        <div className="left_section">
          <div id="sqr">
            <a
              href="https://github.com/praveen-F1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="fa github" icon={["fab", "github"]} />
              <span>Github</span>
            </a>

            <a
              href="https://www.hackerrank.com/netintipraveenk1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="fa hackerrank"
                icon={["fab", "hackerrank"]}
              />
              <span>Hackerrank</span>
            </a>

            <a
              href="https://www.linkedin.com/in/praveen-kumar-netinti-9845201b4/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="fa linkedin"
                icon={["fab", "linkedin"]}
              />
              <span>Linkedin</span>
            </a>

            <a
              href="https://codepen.io/netintipraveenkumar"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="fa codepen"
                icon={["fab", "codepen"]}
              />
              <span>Codepen</span>
            </a>
          </div>
        </div>
        <div className="right_section">
          <h1>About Me</h1>
          <p>
            Hi, I am Praveen. I am a hard-working engineering graduate
            specialized in Computer Science Engineering with a focus on the
            Frontend, but still exploring other technologies and frameworks that
            catch my interest! I intend to be a part of an organization where I
            can constantly learn and develop my technical and management skills
            and make the best use of them for the growth of the organization. I
            look forward to establishing myself by adopting new technologies as
            well.
          </p>
          <Link
            activeClass="active"
            to="more-about-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            <span id="more">More About Me</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default About;
