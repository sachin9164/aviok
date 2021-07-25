import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 3 },
  568: { items: 6 },
  1024: { items: 10 }
};

const items = [
  <div className="item" data-value="1">
    <div class="card m-2 border-0 ">
      <img
        src="https://www.galaxyeduworld.com/storage/logo/5da4190635d3a_1.png"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="2">
    <div class="card m-2 border-0 ">
      <img
        src="https://www.galaxyeduworld.com/storage/logo/5da6b83e64968_1.png"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div class="card m-2 border-0 ">
      <img
        src="https://www.galaxyeduworld.com/storage/logo/5daff41a40ca1_1.png"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div class="card m-2 border-0 ">
      <img
        src="https://www.galaxyeduworld.com/storage/logo/5daff527ad444_1.png"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div class="card m-2 border-0 ">
      <img
        src="https://www.galaxyeduworld.com/storage/logo/5daff5db8dad1_1.png"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div class="card m-2 border-0 ">
      <img
        src="https://www.galaxyeduworld.com/storage/logo/5daff61774dc4_1.png"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div class="card m-2 border-0 ">
      <img
        src="https://www.galaxyeduworld.com/storage/logo/5daff661e77e2_1.png"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div class="card m-2 border-0 ">
      <img
        src="https://www.galaxyeduworld.com/storage/logo/5daff88d25503_1.png"
        class="card-img-top"
        alt=""
      ></img>
    </div>
  </div>
];

const Colleges = () => (
  <>
    <h2>COLLEGES IN BANGLORE</h2>
    <div className="colleges bg-light p-3">
      <div className="college bg-white">
        <AliceCarousel
          autoPlay
          touchTracking={false}
          items={items}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          animationDuration={500}
          infinite
          animationType="slide"
        />
      </div>
    </div>
  </>
);

export default Colleges;
