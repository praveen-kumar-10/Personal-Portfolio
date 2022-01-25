import React from "react";

import "./Navbar.css";
import Logo from "../UI/Logo";
import Container from "../UI/Container";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          className="logo"
        >
          <Logo />
        </Link>
        {/* <a className="logo" href="/">
        </a> */}
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
            to="skills_section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span>Skills</span>
          </Link>
          <Link
            activeClass="active"
            to="certificate_section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span>Certificates</span>
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

          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            <span>Contact</span>
          </Link>
        </div>
      </Container>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
