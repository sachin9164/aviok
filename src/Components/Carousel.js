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
    <img
      width="90%"
      alt=""
      src="https://i.ytimg.com/vi/Fllqbuxn-Co/hqdefault.jpg"
    ></img>
  </div>,
  <div className="item" data-value="2">
    <img
      width="90%"
      alt=""
      src="https://i.ytimg.com/vi/ZjjY-yz3CRE/hqdefault.jpg"
    ></img>
  </div>,
  <div className="item" data-value="3">
    <img
      width="90%"
      alt=""
      src="https://i.ytimg.com/vi/Fllqbuxn-Co/hqdefault.jpg"
    ></img>
  </div>,
  <div className="item" data-value="4">
    <img
      width="90%"
      alt=""
      src="https://i.ytimg.com/vi/HOU0yAD8boE/hqdefault.jpg"
    ></img>
  </div>,
  <div className="item" data-value="5">
    <img
      width="90%"
      alt=""
      src="https://i.ytimg.com/vi/HOU0yAD8boE/hqdefault.jpg"
    ></img>
  </div>,
  <div className="item" data-value="6">
    <img
      width="90%"
      alt=""
      src="https://i.ytimg.com/vi/HOU0yAD8boE/hqdefault.jpg"
    ></img>
  </div>
];

const Carousel = () => (
  <AliceCarousel
    autoPlay
    touchTracking={false}
    items={items}
    disableDotsControls
    disableButtonsControls
    responsive={responsive}
    animationDuration={2000}
    infinite
  />
);

export default Carousel;
