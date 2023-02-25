import React from 'react'
import Header from '../components/Header'
import About from '../components/About';
import Footer from '../components/Footer';
export default function AboutPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <About />
      <Footer />
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
