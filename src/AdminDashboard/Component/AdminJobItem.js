import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import com_logo_2 from "../../img/com-logo-2.jpg";
export const AdminJobItem = ({ id, tittle, location, salary, nature, dataline, publish }) => {
    const handleDelete = (e) =>{
        console.log("hiii")
    }
     const navigate = useNavigate();
  return (
    <>
      <div className="job-item p-4 mb-4" key={id}>
        <div className="row g-4">
          <div className="col-sm-12 col-md-8 d-flex align-items-center">
            <img
              className="flex-shrink-0 img-fluid border rounded"
              src={com_logo_2}
              alt=""
              style={{ width: "80px", height: "80px" }}
            />
            <div className="text-start ps-4">
              <h5 className="mb-3">{tittle}</h5>
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
                {salary}$
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
            <div className="d-flex mb-3">
              <a className="btn btn-light btn-square me-3" href="">
                <i className="far fa-heart text-primary"></i>
              </a>
              <button
                className="btn btn-primary"
                type="button"
                onClick={navigate(`/editadminjobs/${id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger mx-2"
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
            <small className="text-truncate">
              <i className="far fa-calendar-alt text-primary me-2"></i>Date
              Publish: {publish}
            </small>
            <small className="text-truncate">
              <i className="far fa-calendar-alt text-primary me-2"></i>Date
              Line: {dataline}
            </small>
          </div>
        </div>
      </div>
    </>
  );
};
