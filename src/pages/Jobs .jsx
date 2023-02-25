import React, { useState, useEffect } from "react";
import PartTimeItem from "../components/PartTimeItem";
import FullTimeItem from "../components/FullTimeItem";
import RecentJobItem from "../components/RecentJobItem";
import { jobs } from "../data";
import { useParams } from "react-router-dom";
import "./list.css"

export default function Jobs() {
  const [job, setJobs] = useState(jobs);
  const params = useParams();
    const { catId, locate } = params;
    
    console.log(catId)
     console.log(locate);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          Job Listing
        </h1>
        <div
          className="tab-className text-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <h6 className="mt-n1 mb-0">Recent Jobs</h6>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 ms-0 pb-3"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <h6 className="mt-n1 mb-0">Full Time</h6>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <h6 className="mt-n1 mb-0">Part Time</h6>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              {job
                .filter((item) => item.nature === "Part-Time")
                .map((value, key) => (
                  <RecentJobItem
                    id={value.id}
                    title={value.title}
                    location={value.location}
                    salary={value.salary}
                    nature={value.nature}
                    dataline={value.dateline}
                  />
                ))}

              <a className="btn btn-primary py-3 px-5" href="/list">
                Browse More Jobs
              </a>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              {job
                .filter((item) => item.nature === "Full-Time")
                .map((value, key) => (
                  <FullTimeItem
                    id={value.id}
                    title={value.title}
                    location={value.location}
                    salary={value.salary}
                    nature={value.nature}
                    dataline={value.dateline}
                  />
                ))}

              <a className="btn btn-primary py-3 px-5" href="/list">
                Browse More Jobs
              </a>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              {job
                .filter((item) => item.nature === "Part-Time")
                .map((value, key) => (
                  <PartTimeItem
                    id={value.id}
                    title={value.title}
                    location={value.location}
                    salary={value.salary}
                    nature={value.nature}
                    dataline={value.dateline}
                  />
                ))}

              <a className="btn btn-primary py-3 px-5" href="/list">
                Browse More Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
