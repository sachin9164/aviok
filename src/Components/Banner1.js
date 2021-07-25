import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 }
};
const items = [
  <div className="item" data-value="1">
    <div class="card m-2 shadow-sm">
      <img
        src="https://www.galaxyeduworld.com/storage/slider/5e8d66f1588c9_1.jpg"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="2">
    <div class="card m-2 shadow-sm">
      <img
        src="https://www.galaxyeduworld.com/storage/slider/5e8d66f1588c9_1.jpg"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div class="card m-2 shadow-sm">
      <img
        src="https://www.galaxyeduworld.com/storage/slider/5f0d94bc19c91_1.jpg"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="4">
    <div class="card m-2 shadow-sm">
      <img
        src="https://www.galaxyeduworld.com/storage/slider/5f0d9e85ce04b_1.jpg"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="5">
    <div class="card m-2 shadow-sm">
      <img
        src="https://www.galaxyeduworld.com/storage/slider/1624942414_60daa74eeaeb5_1.jpg"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>
];

const Banner1 = () => (
  <AliceCarousel
    autoPlay
    animationDuration={1000}
    animationType="fadeout"
    touchTracking={false}
    disableButtonsControls
    items={items}
    responsive
    mouseTracking
  />
);

export default Banner1;
