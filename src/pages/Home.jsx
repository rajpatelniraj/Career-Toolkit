import React, { useContext, useEffect } from "react";
import Spiner from "../components/Spiner";
import Header from "../components/Header";
import HeaderCarousel from "../components/HeaderCarousel";
import Catagories from "../components/Catagories";
import About from "../components/About";
import Footer from "../components/Footer";
import HomeJobs from "./HomeJobs";
import Testimonials from "../components/Testimonials";
import { Store } from "../Store";

export default function Home() {
  const { state } = useContext(Store);
  const { user } = state;
  console.log(user);
  return (
    <div className="container-xxl bg-white p-0">
      {/*<Spiner/>*/}
      <Header />
      <HeaderCarousel />
      <Catagories />
      <div className="text-center">
        <a className="btn btn-primary py-3 px-5 text-center" href="/categories">
          Browse All Categories
        </a>
      </div>

      <About />
      <HomeJobs />
      <Testimonials />
      <Footer />
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
