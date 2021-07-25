import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div class="main-nav">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light"
          style={{ flexDirection: "column" }}
        >
          <div class="container" style={{ position: "relative", zIndex: 1 }}>
            <a class="navbar-brand" href="#">
              <img
                id="nav-img"
                src="https://www.galaxyeduworld.com/Frontend/images/logo_fff.png"
                alt="..."
                width="40px"
              ></img>
            </a>
            <div className="row">
              <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      CALL US : 999999999 / 88888888
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Eductaion News
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Faqs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Admission
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Exams
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Blogs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Vlogs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Scholarships
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    About US
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Why Galaxy?
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Courses & Colleges
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Eligibility
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Awards
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Rankings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Contact us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div class="collapse navbar-collapse" id="navbarScroll">
              <form class="d-flex">
                <input
                  id="search"
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button id="sbtn" class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <br></br>
          <h5>BANGALORE EDUCATIONAL ADVISORY COUNCIL (BEAC)</h5>
        </nav>
      </div>
      <div class="iso ">
        <b>ISO 9001:2015 Certified</b>.{" "}
        <b>Recognized by Government of Karnataka</b> and{" "}
        <b>Approved by the Government of India</b>
      </div>
    </>
  );
}

export default Navbar;
