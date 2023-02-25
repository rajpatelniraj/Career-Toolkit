import React from 'react'

export default function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="btn btn-link text-white-50" href="/about">
              About Us
            </a>
            <a className="btn btn-link text-white-50" href="/contact">
              Contact Us
            </a>
            <a className="btn btn-link text-white-50" href="">
              Privacy Policy
            </a>
            <a className="btn btn-link text-white-50" href="">
              Terms & Condition
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Contact</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>Gandhi Nagar, Bhopal, Madhya Pradesh, india
  
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+91 7322902296
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>careertoolkit@gethired.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=100090027222064&mibextid=ZbWKwL" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/channel/UCBXvxsRqZvddl8lqc41d0hQ" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/career-toolkit/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>You deserve a job that loves you back</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span style={{ color: "white" }}>
                &copy;{" "}
                <a
                  className="border-bottom text-red"
                  href="/"
                  style={{ color: "yellow" }}
                >
                  Career Toolkit
                </a>
                , All Right Reserved. Designed By{" "}
                <a
                  className="border-bottom"
                  href="/"
                  style={{ color: "yellow" }}
                >
                  Niraj Kumar
                </a>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                <a href="">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
