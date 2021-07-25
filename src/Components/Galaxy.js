import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Galaxy = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
        <div>
          <img src="https://www.galaxyeduworld.com/Frontend/images/christ-uni-slide2.jpg" />
        </div>
        <div>
          <img src="https://www.galaxyeduworld.com/Frontend/images/study-mbbs-abroad-slide4.jpg" />
        </div>
        <div>
          <img src="https://www.galaxyeduworld.com/Frontend/images/aimsrc-bangalore.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Galaxy;
