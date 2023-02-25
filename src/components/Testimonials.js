import React from "react";
import testimonial_2 from "../img/testimonial-1.jpg";
import testimonial_1 from "../img/testimonial-2.jpg";
import testimonial_3 from "../img/testimonial-3.jpg";
import testimonial_4 from "../img/testimonial-4.jpg";
export default function Testimonials() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div
          className="carousel-item active text-center"
          data-bs-interval="10000"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt="avatar"
                  style={{ width: "150px" }}
                />
                <h5 className="mb-3">Jonny baby</h5>
                <p>Web Developer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  "Thank you for the opportunity to find a great job! My local
                  job market is very limited, and I found a great job I enjoy
                  doing."
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item text-center" data-bs-interval="2000">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                  alt="avatar"
                  style={{ width: "150px" }}
                />
                <h5 className="mb-3">John mayer</h5>
                <p>Accountant</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  "This is the second time I used TheEmployer, and found the
                  perfect job. Thank you!!!!"
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-none d-lg-block">
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                  alt="avatar"
                  style={{ width: "150px" }}
                />
                <h5 className="mb-3">Alex Rey</h5>
                <p>Web Developer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  "I loved using TheEmployer! I found a great remote job and am
                  so grateful!"
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt fa-sm"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
