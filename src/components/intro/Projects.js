import React from "react";

import "./Projects.css";

import Container from "../UI/Container";
import Card from "../UI/Card";

const Projects = () => {
  return (
    <section id="projects_section">
      <center>
        <h1>Projects</h1>
      </center>
      <Container>
        <div className="card_wrapper">
          <Card
            image={[
              "https://ph-files.imgix.net/c10ee7d6-2ab9-4008-aef5-797687b07372.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              ,
              "https://ph-files.imgix.net/a31c9c18-5748-4a89-891d-04afce0a313c.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              ,
              "https://i.ytimg.com/vi/LtZRAMoZpHw/maxresdefault.jpg",
            ]}
            title={"Instagram Clone"}
            language={"React Js"}
          />
          <Card
            image={[
              "https://ph-files.imgix.net/c10ee7d6-2ab9-4008-aef5-797687b07372.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              ,
              "https://ph-files.imgix.net/a31c9c18-5748-4a89-891d-04afce0a313c.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              ,
              "https://i.ytimg.com/vi/LtZRAMoZpHw/maxresdefault.jpg",
            ]}
            title={"WhatsApp Clone"}
            language={"React Js"}
          />
        </div>
        <div className="card_wrapper">
          <Card
            image={[
              "https://ph-files.imgix.net/c10ee7d6-2ab9-4008-aef5-797687b07372.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              ,
              "https://ph-files.imgix.net/a31c9c18-5748-4a89-891d-04afce0a313c.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              ,
              "https://i.ytimg.com/vi/LtZRAMoZpHw/maxresdefault.jpg",
            ]}
            title={"Quiz Application"}
            language={"Django"}
          />
          <Card
            image={[
              "https://ph-files.imgix.net/c10ee7d6-2ab9-4008-aef5-797687b07372.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              ,
              "https://ph-files.imgix.net/a31c9c18-5748-4a89-891d-04afce0a313c.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              ,
              "https://i.ytimg.com/vi/LtZRAMoZpHw/maxresdefault.jpg",
            ]}
            title={"Polls Application"}
            language={"Django"}
          />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
