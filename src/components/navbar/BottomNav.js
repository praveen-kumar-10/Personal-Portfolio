import React, { useEffect, useState } from "react";

import "./Navbar.css";
import { Link } from "react-scroll";
import Resume from "../assets/Resume.pdf";

const BottomNav = () => {
  var links = document.getElementsByClassName("link");
  window.addEventListener("resize", () => {
    var active_state = document.getElementById("active_state");
    links[0].style.fontWeight = "bold";
    active_state.style.width = links[0].offsetWidth + "px";
  });
  useEffect(() => {
    var active_state = document.getElementById("active_state");
    links[0].style.fontWeight = 500;
    active_state.style.width = links[0].offsetWidth + "px";
  }, []);
  const activeLink = (event) => {
    var active_state = document.getElementById("active_state");

    for (let i = 0; i < links.length; i++) {
      links[i].style.fontWeight = "normal";
    }
    event.target.style.fontWeight = 500;
    active_state.style.left = event.target.offsetLeft + "px";
    active_state.style.width = event.target.offsetWidth + "px";
  };
  return (
    <div className="responsive_nav">
      <div id="active_state"></div>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={100}
        onClick={activeLink}
        className="link"
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about_section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={activeLink}
        className="link"
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="projects_section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={activeLink}
        className="link"
      >
        Projects
      </Link>

      <a
        id="resume_link"
        href={Resume}
        onClick={activeLink}
        download
        target="_blank"
        className="link"
      >
        Resume
      </a>
    </div>
  );
};

export default BottomNav;
