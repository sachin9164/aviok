import React from "react";
import "./Speciality.css";

import Rotate from "react-reveal/Roll";
import Galaxy from "./Galaxy";
function Speciality() {
  return (
    <div>
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-lg-8 col-sm-6 bg-light p-3">
          <h2>OUR SPECIALITIES</h2>
          <div className="row">
            <Rotate bottom right>
              <div className="col-lg-4 col-sm-6 col-6">
                <div className="circle rounded-circle bg-white ">
                  <img
                    src="https://www.galaxyeduworld.com/storage/svg/5da019eb9c2eb_1.svg"
                    class="rounded-circle"
                    alt="..."
                    width="100px"
                  ></img>
                </div>
              </div>
            </Rotate>
            <Rotate bottom right>
              <div className="col-lg-4 col-sm-6 col-6">
                {" "}
                <div className="circle rounded-circle bg-white ">
                  <img
                    src="https://www.galaxyeduworld.com/storage/svg/5da019eb9c2eb_1.svg"
                    class="rounded-circle"
                    alt="..."
                    width="100px"
                  ></img>
                </div>
              </div>
            </Rotate>
            <Rotate bottom right>
              <div className="col-lg-4 col-sm-6 col-6">
                {" "}
                <div className="circle rounded-circle bg-white ">
                  <img
                    src="https://www.galaxyeduworld.com/storage/svg/5da019eb9c2eb_1.svg"
                    class="rounded-circle"
                    alt="..."
                    width="100px"
                  ></img>
                </div>
              </div>
            </Rotate>
            <Rotate bottom right>
              <div className="col-lg-4 col-sm-6 col-6">
                {" "}
                <div className="circle rounded-circle bg-white ">
                  <img
                    src="https://www.galaxyeduworld.com/storage/svg/5da019eb9c2eb_1.svg"
                    class="rounded-circle"
                    alt="..."
                    width="100px"
                  ></img>
                </div>
              </div>
            </Rotate>
            <Rotate bottom right>
              <div className="col-lg-4 col-sm-6 col-6">
                {" "}
                <div className="circle rounded-circle bg-white ">
                  <img
                    src="https://www.galaxyeduworld.com/storage/svg/5da019eb9c2eb_1.svg"
                    class="rounded-circle"
                    alt="..."
                    width="100px"
                  ></img>
                </div>
              </div>
            </Rotate>
            <Rotate bottom right>
              <div className="col-lg-4 col-sm-6 col-6">
                {" "}
                <div className="circle rounded-circle bg-white ">
                  <img
                    src="https://www.galaxyeduworld.com/storage/svg/5da019eb9c2eb_1.svg"
                    class="rounded-circle"
                    alt="..."
                    width="100px"
                  ></img>
                </div>
              </div>
            </Rotate>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <Galaxy />
        </div>
      </div>
    </div>
  );
}

export default Speciality;
