import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 2 },
  568: { items: 2 },
  1024: { items: 5 }
};
const items = [
  <div className="item" data-value="1">
    <div class="card m-2 shadow-sm">
      <img
        src="https://i.ytimg.com/vi/yiPpoWaR8zU/hqdefault.jpg"
        class="card-img-top"
        alt=""
      ></img>
      <div class="card-body p-0 bg-dark">
        <h6 class="card-title p-0 text-white">Appreciation from HKBK</h6>
      </div>
    </div>
  </div>
];

const Appreciation2 = () => (
  <AliceCarousel
    autoPlay
    animationDuration={1000}
    animationType="fadeout"
    touchTracking={false}
    disableButtonsControls
    items={items}
    mouseTracking
    responsive
  />
);

export default Appreciation2;
