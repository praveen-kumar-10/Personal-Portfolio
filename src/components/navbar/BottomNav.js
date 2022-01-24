import React, { useEffect } from "react";

import "./Navbar.css";
import { Link } from "react-scroll";
import Resume from "../assets/Resume(Praveen_Kumar).pdf";

const BottomNav = () => {
  var links = document.getElementsByClassName("link");

  const resizefun = () => {
    links[0].style.fontWeight = "500";
  };
  window.addEventListener("resize", resizefun);

  useEffect(() => {
    resizefun();
    var active_state = document.getElementById("active_state");
    active_state.style.width = links[0].offsetWidth + "px";
    active_state.style.left = links[0].offsetLeft + "px";
  });
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
        rel="noreferrer"
      >
        Resume
      </a>
    </div>
  );
};

export default BottomNav;
