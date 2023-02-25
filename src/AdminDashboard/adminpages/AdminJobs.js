import React, { useContext, useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import { Store } from "../../Store";
import Footer from "../Component/Footer";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import { jobReducer } from "../../JobReducer";
import axios from "../../axios";
import Spiner from "../../components/Spiner";
import { useNavigate } from "react-router-dom";
import com_logo_2 from "../../img/com-logo-2.jpg";
export const AdminJobs = () => {
  const { state } = useContext(Store);
  const { user } = state;
  const navigate = useNavigate();
  const [{ loading, jobs, error }, dispatch] = useReducer(jobReducer, {
    jobs: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get("/myjobs/mine", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error });
      }
    };
    fetchJobs();
  }, []);
  const handleDelete = async (value) => {
    if (window.confirm("Are you sure to delete?")) {
      try {
        await axios.delete(`/myjobs/job/admin/delete/${value._id}`, {
          headers: { authorization: `Bearer ${user.token}` },
        });
        toast.success("Job deleted successfully");
      } catch (error) {
        toast.success("Fail to delete");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Jobs</title>
      </Helmet>
      <Nav />
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Career Toolkit</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="list-job">
            <div className="container py-3 bg-white">
              {loading ? (
                <Spiner />
              ) : error ? (
                toast.success(error)
              ) : (
                <>
                  {jobs && jobs.length > 0
                    ? jobs.map((value, key) => (
                        <>
                          <div className="job-item p-4 mb-4" key={value._id}>
                            <div className="row g-4">
                              <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                <img
                                  className="flex-shrink-0 img-fluid border rounded"
                                  src={com_logo_2}
                                  alt=""
                                  style={{ width: "80px", height: "80px" }}
                                />
                                <div className="text-start ps-4">
                                  <h5 className="mb-3">{value.tittle}</h5>
                                  <span className="text-truncate me-3">
                                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                                    {value.country}
                                  </span>
                                  <span className="text-truncate me-3">
                                    <i className="far fa-clock text-primary me-2"></i>
                                    {value.nature}
                                  </span>
                                  <span className="text-truncate me-0">
                                    <i className="far fa-money-bill-alt text-primary me-2"></i>
                                    {value.salary}$
                                  </span>
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div className="d-flex mb-3">
                                  <a
                                    className="btn btn-light btn-square me-3"
                                    href=""
                                  >
                                    <i className="far fa-heart text-primary"></i>
                                  </a>
                                 
                                  <button
                                    className="btn btn-danger mx-2"
                                    type="button"
                                    onClick={() =>
                                      navigate(`/editadminjobs/id/${value._id}`)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                                <small className="text-truncate">
                                  <i className="far fa-calendar-alt text-primary me-2"></i>
                                  Date Publish: {value.publish}
                                </small>
                                <small className="text-truncate">
                                  <i className="far fa-calendar-alt text-primary me-2"></i>
                                  Date Line: {value.dateline}
                                </small>
                              </div>
                            </div>
                          </div>
                        </>
                      ))
                    : " No Jobs Found! Add Job"}
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
