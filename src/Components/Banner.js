import React from "react";
import Banner1 from "./Banner1";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="banner" style={{ margin: "30px" }}>
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <Banner1 />
          </div>
          <div className="col-lg-4 col-sm-12 border p-4 shadow-sm">
            <>
              <h6>REQUEST CALLBACK</h6>
              <form class="row g-4">
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Student Name"
                  ></input>{" "}
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Date of Birth"
                  ></input>{" "}
                </div>
                <div class="col-md-6">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Mobile"
                  ></input>{" "}
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Student Email"
                  ></input>{" "}
                </div>
                <div class="col-md-6">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Parent Name"
                  ></input>{" "}
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Parent Mobile No."
                  ></input>{" "}
                </div>
                <div class="col-md-6">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Select Course"
                  ></input>{" "}
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Last Studied Course"
                  ></input>{" "}
                </div>
                <div class="col-md-6">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Select Country"
                  ></input>{" "}
                </div>

                <div class="col-md-6">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Select State"
                  ></input>{" "}
                </div>
                <div class="col-md-6">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Place"
                  ></input>{" "}
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    SUBMIT
                  </button>
                </div>
              </form>
            </>
          </div>
        </div>
      </div>
      <div className="university-center">
        <div className=" d-flex justify-content-center">
          <img
            src="https://www.galaxyeduworld.com/Frontend/images/ranking/nirf-ranking.jpg"
            alt="NIRF Ranking"
            title="NIRF Ranking"
            class=" rounded"
            style={{ width: "200px" }}
          ></img>
          <img
            src="https://www.galaxyeduworld.com/Frontend/images/ranking/qs-ranking.jpg"
            alt="QS World Ranking"
            title="QS World Ranking"
            class="rounded"
            style={{ width: "200px" }}
          ></img>{" "}
          <img
            src="https://www.galaxyeduworld.com/Frontend/images/ranking/ariia-ranking.jpg"
            alt="ARIIA Ranking"
            title="ARIIA Ranking"
            class="rounded"
            style={{ width: "200px" }}
          ></img>
        </div>
        <p> FIND YOUR COLLEGE / UNIVERSITY RANKING</p>
        <p>
          View your College / University Ranking based on NIRF Ranking, QS World
          Ranking and ARIIA Rankings
        </p>
      </div>
      <div className="rankings"> VIEW RANKIGS >> </div>
    </>
  );
}

export default Banner;
