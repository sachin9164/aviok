import React from "react";
import "./About.css";
import Blog from "./Blog";
function About() {
  return (
    <div className="about">
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          {" "}
          <h2>ABOUT GALAXY EDUCATION</h2>
          <p className="college-text">
            We have also collated details about the popular degree colleges in
            Bangalore. If you want to find out about the courses offered in a
            particular college or the amenities and facilities available there,
            we will bring all the information for you. We will also bring to you
            the updated details of the application submission date, admission
            procedure, number of seats available for a particular course, and
            more information about the course.
          </p>
          <p className="college-text">
            We have also collated details about the popular degree colleges in
            Bangalore. If you want to find out about the courses offered in a
            particular college or the amenities and facilities available there,
            we will bring all the information for you. We will also bring to you
            the updated details of the application submission date, admission
            procedure, number of seats available for a particular course, and
            more information about the course.
          </p>
          <p className="college-text">
            We have also collated details about the popular degree colleges in
            Bangalore. If you want to find out about the courses offered in a
            particular college or the amenities and facilities available there,
            we will bring all the information for you. We will also bring to you
            the updated details of the application submission date, admission
            procedure, number of seats available for a particular course, and
            more information about the course.
          </p>
          <p className="college-text">
            We have also collated details about the popular degree colleges in
            Bangalore. If you want to find out about the courses offered in a
            particular college or the amenities and facilities available there,
            we will bring all the information for you. We will also bring to you
            the updated details of the application submission date, admission
            procedure, number of seats available for a particular course, and
            more information about the course.
          </p>
          <p className="college-text">
            We have also collated details about the popular degree colleges in
            Bangalore. If you want to find out about the courses offered in a
            particular college or the amenities and facilities available there,
            we will bring all the information for you. We will also bring to you
            the updated details of the application submission date, admission
            procedure, number of seats available for a particular course, and
            more information about the course.
          </p>
          <div className="blogs border">
            <h2>
              <b>Blogs</b>
              <br></br>
            </h2>
            <Blog />
            <br></br>

            <button type="button" class="btn btn-primary rounded-pill">
              VIEW ALL BLOGS
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <h6 className="trending">TRENDING COURSES IN BANGLORE</h6>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
