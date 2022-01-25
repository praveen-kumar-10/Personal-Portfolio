import React, { useState, useEffect } from "react";

import "./Skills.css";
import Svg from "./UI/Svg";
import Svg86 from "./UI/Svg86";
import Svg64 from "./UI/Svg64";
import SvgMobile from "./UI/SvgMobile";
import Container from "./UI/Container";
import SvgM from "./UI/SvgM";

const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);
  var windowDimensions = window.innerWidth;
  const resizefun = () => {
    windowDimensions = window.innerWidth;
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", resizefun);

  useEffect(() => {
    resizefun();
  }, [windowDimensions[0]]);
  return (
    <section id="skills_section">
      <Container>
        <h1>Skills</h1>
        {width > 1210 && <Svg className="skills-svg" />}
        {width < 1210 && width > 870 && <Svg86 className="skills-svg" />}
        {width <= 870 && width > 650 && <Svg64 className="skills-svg" />}
        {width <= 650 && width > 468 && <SvgMobile className="skills-svg" />}
        {width <= 468 && <SvgM className="skills-svg" />}
      </Container>
    </section>
  );
};

export default Skills;
