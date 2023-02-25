import React from "react";

import { Link } from "react-router-dom";
import com_logo_3 from "../img/com-logo-3.jpg";
export default function RecentJobItem({ id, title, location, salary, nature, dataline }) {
  return (
    <div className="job-item p-4 mb-4" key={id}>
      <Link to={`/details/${id}`}>
        <div className="row g-4">
          <div className="col-sm-12 col-md-8 d-flex align-items-center">
            <img
              className="flex-shrink-0 img-fluid border rounded"
              src={com_logo_3}
              alt=""
              style={{ width: "80px", height: "80px" }}
            />
            <div className="text-start ps-4">
              <h5 className="mb-3">{title}</h5>
              <span className="text-truncate me-3">
                <i className="fa fa-map-marker-alt text-primary me-2"></i>
                {location}
              </span>
              <span className="text-truncate me-3">
                <i className="far fa-clock text-primary me-2"></i>
                {nature}
              </span>
              <span className="text-truncate me-0">
                <i className="far fa-money-bill-alt text-primary me-2"></i>
                {salary}
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
            <div className="d-flex mb-3">
              <a className="btn btn-light btn-square me-3" href="">
                <i className="far fa-heart text-primary"></i>
              </a>
              <a className="btn btn-primary" href="">
                Apply Now
              </a>
            </div>
            <small className="text-truncate">
              <i className="far fa-calendar-alt text-primary me-2"></i>Date
              Line: {dataline}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}
