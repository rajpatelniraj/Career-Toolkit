import React, { useState } from "react";
import courosel_1 from "../img/carousel-1.jpg";
import courosel_2 from "../img/carousel-2.jpg";
import { categories } from "../data";
import { jobs } from "../data";
import sec from "../img/sec.jpg";
import { useNavigate } from "react-router-dom";
export default function HeaderCarousel() {
  const [locate, setLocation] = useState("");
  const [word, setWord] = useState("");
    const [cat, setCat] = useState("");
  const navigate = useNavigate();
 
  const handleClick = () => {
    if (!word || !locate || !cat){
      return;
    }
      navigate(`/list`);
  };

  return (
    <>
      <div className="container-fluid p-0 hero">
        <div className="position-relative">
          <img className="img-fluid" src={courosel_2} alt="carousel" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(43, 57, 64, .5)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h3 className="display-5 text-white animated slideInDown mb-4">
                    Find The Best Startup Job That Fit You
                  </h3>

                  <a
                    href="/list"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Search A Job
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: "35px" }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Keyword"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select border-0"
                    onChange={(e) => setLocation(e.target.value)}
                    value={locate}
                  >
                    <option value=''>..Select Location</option>
                    {jobs.map((item, key) => (
                      <option value={item.location}>{item.location}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select border-0"
                    onChange={(e) =>setCat(e.target.value)}
                    value={cat}
                  >
                    <option value=''>..Select Category</option>
                    {categories.map((item, key) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-dark border-0 w-100"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
