import React from "react";

import CourseraImg from "../../assets/coursera.png";
import LinkedinImg from "../../assets/linkedin.png";

const CertComp = ({ title, org, issued, cred }) => {
  return (
    <div className="certificate">
      <div className="c__left">
        <img
          className={org === "Coursera" ? "coursera" : "linkedin"}
          src={org === "Coursera" ? CourseraImg : LinkedinImg}
          alt="organization pic"
        />
      </div>
      <div className="c__right">
        <h3>
          <a
            href={"https://www.coursera.org/verify/" + cred}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
        </h3>
        <p>{org}</p>
        <p>{issued}</p>
        {cred !== "" && <p>Credential ID {cred}</p>}
      </div>
    </div>
  );
};

export default CertComp;
