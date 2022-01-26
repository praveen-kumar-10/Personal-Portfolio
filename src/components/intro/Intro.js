import React from "react";
import Typewriter from "typewriter-effect";

import Resume from "../../assets/Resume(Praveen_Kumar).pdf";

import "./Intro.css";

import photo from "../../assets/profilePhoto.png";
import bg from "../../assets/bg.gif";
import Container from "../UI/Container";

const Intro = () => {
  return (
    <header id="home">
      <Container>
        <div className="left_child">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Hi, I'm Praveen",
                  "I'm Creative",
                  "I Love to Develop",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h3>STUDENT</h3>
          <a
            href={Resume}
            download="Resume(Praveen_Kumar).pdf"
            className="resume_download"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="right_child">
          <div id="bg">
            <img src={bg} alt="bg" />
          </div>
          <div id="profile_img">
            <img src={photo} alt="profile" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Intro;
