import Carousel from "./Carousel";
import React from "react";
import "./Vlog.css";

function Vlog() {
  return (
    <div className="vlog">
      <Carousel />
      <br></br>

      <button type="button" class="btn btn-light">
        VIEW ALL LOGS
      </button>
    </div>
  );
}

export default Vlog;
