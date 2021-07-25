import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="page-links">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3 col-sm-6">
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Why Galaxy?</li>
              </ul>
            </div>
            <div className=" col-6 col-lg-3 col-sm-6">
              <ul>
                <li>Courses & Colleges</li>
                <li>Eligibility</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 col-sm-6">
              <ul>
                <li>Awards & Accreditations</li>
                <li>Contact us</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 col-sm-6">
              <ul>
                <li>Registration form</li>
                <li>Payment Terms & Conditions</li>
                <li>Enquiry Form</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="container">
          <ul>
            <li>
              <img
                src="https://www.galaxyeduworld.com/Frontend/images/logo/galaxy-facebook.svg"
                width="40"
              ></img>
            </li>
            <li>
              <img
                src="https://www.galaxyeduworld.com/Frontend/images/logo/galaxy-twitter.svg"
                width="40"
              ></img>
            </li>
            <li>
              <img
                src="https://www.galaxyeduworld.com/Frontend/images/logo/galaxy-instagram.svg"
                width="40"
              ></img>
            </li>
            <li>
              <img
                src="https://www.galaxyeduworld.com/Frontend/images/logo/galaxy-linkedin.svg"
                width="40"
              ></img>
            </li>
            <li>
              <img
                src="https://www.galaxyeduworld.com/Frontend/images/logo/galaxy-youtube.svg"
                width="40"
              ></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>Copyright Galaxy Education 2021. All Right Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
