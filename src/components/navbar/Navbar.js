import React from "react";

import "./Navbar.css";
import Logo from "../UI/Logo";
import Container from "../UI/Container";

import { Link } from "react-scroll";

import Resume from "../assets/Resume(Praveen_Kumar).pdf";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <a className="logo" href="/">
          <Logo />
        </a>
        <div className="links">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            <span>Home</span>
          </Link>
          <Link
            activeClass="active"
            to="about_section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span>About</span>
          </Link>
          <Link
            activeClass="active"
            to="projects_section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span>Projects</span>
          </Link>

          <a href="/">
            <span>Contact</span>
          </a>

          <a
            id="resume_link"
            href={Resume}
            download
            rel="noopener"
            target="_blank"
          >
            <span>Resume</span>
          </a>
        </div>
      </Container>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
