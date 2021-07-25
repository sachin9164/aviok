import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 4 },
  568: { items: 4 },
  1024: { items: 4 }
};

const items = [
  <div className="item" data-value="1">
    <div class="card m-2 shadow-sm">
      <img
        src="https://www.galaxyeduworld.com/storage/blogs/1620810514_609b9b12b52fc_750_351.jpg"
        class="card-img-top"
        alt=""
      ></img>
      <div class="card-body p-0">
        <h6 class="card-title border-bottom p-1">COMED K Entrance Exam</h6>
        <p class="text-center ">
          <a href="#" style={{ fontSize: "12px" }}>
            {" "}
            READ MORE
          </a>
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="2">
    <div class="card m-2 shadow-sm">
      <img
        src="https://www.galaxyeduworld.com/storage/blogs/1621686218_60a8f7cadc44e_750_351.jpg"
        class="card-img-top"
        alt=""
      ></img>
      <div class="card-body p-0">
        <h6 class="card-title border-bottom p-1">COMED K Entrance Exam</h6>
        <p class="text-center ">
          <a href="#" style={{ fontSize: "12px" }}>
            {" "}
            READ MORE
          </a>
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div class="card m-2 shadow-sm">
      <img
        src="https://www.galaxyeduworld.com/storage/blogs/1620218476_6092926ccdbd4_750_351.jpg"
        class="card-img-top"
        alt=""
      ></img>
      <div class="card-body p-0">
        <h6 class="card-title border-bottom p-1">COMED K Entrance Exam</h6>
        <p class="text-center ">
          <a href="#" style={{ fontSize: "12px" }}>
            {" "}
            READ MORE
          </a>
        </p>
      </div>
    </div>
  </div>
];

const Blog = () => (
  <AliceCarousel
    autoPlay
    touchTracking={false}
    items={items}
    disableDotsControls
    disableButtonsControls
    responsive={responsive}
    animationDuration={1000}
    infinite
  />
);

export default Blog;
