import React from 'react'
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a
        href="/"
        className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
      >
        <h1 className="m-0 text-primary">Career Toolkit</h1>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/" className="nav-item nav-link active">
            Home
          </a>
          <a href="/about" className="nav-item nav-link">
            About
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Jobs
            </a>
            <div className="dropdown-menu rounded-0 m-0">
              <a href="/list" className="dropdown-item">
                Job List
              </a>
              <a href="/categories" className="dropdown-item">
               Categories
              </a>
            </div>
          </div>
          <a href="/contact" className="nav-item nav-link">
            Contact
          </a>
          <a
            href="/login"
            className="btn btn-primary rounded-0 py-4 px-lg-5  d-lg-block"
          >
            Post A Job<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
