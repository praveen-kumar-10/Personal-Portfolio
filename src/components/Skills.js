import React, { useState, useEffect } from "react";

import "./Skills.css";
import Svg from "./UI/Svg";
import Svg86 from "./UI/Svg86";
import Svg64 from "./UI/Svg64";
import SvgMobile from "./UI/SvgMobile";
import Container from "./UI/Container";
import SvgM from "./UI/SvgM";

const Skills = () => {
  const [windowDimensions, setWindowDimensions] = useState([]);
  window.onresize = () => {
    setWindowDimensions([window.innerWidth, window.innerHeight]);
  };
  useEffect(() => {
    setWindowDimensions([window.innerWidth, window.innerHeight]);
  }, []);
  return (
    <section id="skills_section">
      <Container>
        <h1>Skills</h1>
        {windowDimensions[0] > 1210 && <Svg className="skills-svg" />}
        {windowDimensions[0] < 1210 && windowDimensions[0] > 870 && (
          <Svg86 className="skills-svg" />
        )}
        {windowDimensions[0] <= 870 && windowDimensions[0] > 650 && (
          <Svg64 className="skills-svg" />
        )}
        {windowDimensions[0] <= 650 && windowDimensions[0] > 468 && (
          <SvgMobile className="skills-svg" />
        )}
        {windowDimensions[0] <= 468 && <SvgM className="skills-svg" />}
      </Container>
    </section>
  );
};

export default Skills;
