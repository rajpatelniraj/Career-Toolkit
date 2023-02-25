import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AllCatagories from "../components/AllCatagories";

export default function CategoryPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Category
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Categories
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <AllCatagories />
      <Footer />
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
