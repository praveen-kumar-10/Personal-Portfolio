import React from "react";

import "./Certificates.css";

import Container from "../UI/Container";
import CertComp from "./CertComp";

const certificates = [
  {
    title: "Coursera Crash Course on Python ( Google )",
    org: "Coursera",
    issued: "Issued Aug 2020",
    cred: "8VLX288E4PJ7",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    org: "Coursera",
    issued: "Issued Aug 2020",
    cred: "833QMYB8MX4Y",
  },
  {
    title: "Python Basics",
    org: "Coursera",
    issued: "Mar 2020",
    cred: "55LP7XH7GW6Y",
  },
  {
    title: "Python Data Structures",
    org: "Coursera",
    issued: "Aug 2020",
    cred: "SE5XHJ3Y3BXP",
  },
  {
    title: "Learning Python",
    org: "Linkedin",
    issued: "Aug 2020",
    cred: "",
  },
  {
    title: "Learning Java",
    org: "Linkedin",
    issued: "Aug 2020",
    cred: "",
  },
];

const Certificates = () => {
  return (
    <section id="certificate_section">
      <Container>
        <h1>Licenses & Certifications</h1>
        {certificates.map(({ title, org, issued, cred }) => (
          <CertComp
            key={title}
            title={title}
            org={org}
            issued={issued}
            cred={cred}
          />
        ))}
      </Container>
    </section>
  );
};

export default Certificates;
