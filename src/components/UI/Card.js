import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Card.css";

const Card = ({ image, title, language, link }) => {
  return (
    <div className="card">
      <div className="card__content">
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          interval={3010}
          className="carousel"
        >
          <div>
            <img src="https://ph-files.imgix.net/c10ee7d6-2ab9-4008-aef5-797687b07372.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip" />
          </div>
          <div>
            <img src="https://ph-files.imgix.net/a31c9c18-5748-4a89-891d-04afce0a313c.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip" />
          </div>
          <div>
            <img src="https://i.ytimg.com/vi/LtZRAMoZpHw/maxresdefault.jpg" />
          </div>
        </Carousel>
        <h1>{title}</h1>
        <h2>Developed Using {language}</h2>
      </div>
      {/* <a href="#">Go to Project</a> */}
    </div>
  );
};

export default Card;
