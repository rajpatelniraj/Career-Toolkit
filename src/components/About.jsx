import React from 'react'
import labo from "../img/labo.jpg";
import about_2 from "../img/about-2.jpg";
import j from "../img/j.jpg";
import sec from "../img/sec.jpg";
export default function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 about-bg rounded overflow-hidden">
              <div className="col-6 text-start">
                <img className="img-fluid w-100" src={labo} />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid"
                  src={about_2}
                  style={{ width: "85%", marginTop: "15%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid"
                  src={j}
                  style={{ width: "85%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid w-100" src={sec} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">Career Toolkit helps people get jobs</h1>
            <p className="mb-4">
              Career Toolkit is the #1 job site in the world. With over 30 thousand
              unique visitors every month. TheEmployer strives to put job
              seekers first, giving them free access to search for jobs, post
              resumes, and research companies. Every day, we connect millions of
              people to new opportunities.
            </p>
            <p>
              <i className="fa fa-check text-primary me-3"></i>Our mission is
              for people to get jobs
            </p>
            <p>
              <i className="fa fa-check text-primary me-3"></i>Part-Time Jobs
            </p>
            <p>
              <i className="fa fa-check text-primary me-3"></i>Full- Time Jobs
            </p>
            <a className="btn btn-primary py-3 px-5 mt-3" href="/about">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
