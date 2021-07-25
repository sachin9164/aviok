import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import d1 from "../Assets/d1.jpg";
import d2 from "../Assets/d2.jpg";
import d3 from "../Assets/d3.jpg";
const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 5 }
};
const items = [
  <div className="item" data-value="1">
    <div class="card m-2 shadow-sm">
      <img src={d1} class="card-img-top" alt=""></img>
    </div>
  </div>,
  <div className="item" data-value="2">
    <div class="card m-2 shadow-sm">
      <img src={d2} class="card-img-top" alt=""></img>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div class="card m-2 shadow-sm">
      <img src={d3} class="card-img-top" alt=""></img>
    </div>
  </div>,
  <div className="item" data-value="5">
    <div class="card m-2 shadow-sm">
      <img src={d1} class="card-img-top" alt=""></img>
    </div>
  </div>
];

const Appreciation1 = () => (
  <AliceCarousel
    autoPlay
    animationDuration={1000}
    animationType="fadeout"
    touchTracking={false}
    disableButtonsControls
    items={items}
    responsive
    infinite
    mouseTracking
  />
);

export default Appreciation1;
