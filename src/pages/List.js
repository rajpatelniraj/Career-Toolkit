import React, { useContext, useEffect, useReducer, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListItem from "../components/ListItem";
import "./list.css";
import axios from "../axios";
import { jobs } from "../data";
import { categories } from "../data";
import { Store } from "../Store";
import { jobReducer } from "../JobReducer";
import { CategoryReducer } from "../CategoryReducer";
import { toast } from "react-toastify";

export default function List() {
  const [job, setJob] = useState([]);
  const [userjob, setUserJob] = useState([]);
  const { state } = useContext(Store);
  const { user } = state;
  const [{ loading, error, jobs }, dispatch] = useReducer(jobReducer, {
    loading: true,
    jobs: [],
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/myjobs/jobs`);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        setJob(data);
        setUserJob(data);
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: err,
        });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const { data } = await axios.get(`/category/categories`);
        setCategory(data);
      } catch (err) {
        toast.success(err.message);
      }
    };
    fetchCat();
  }, []);
  const [nature, setNature] = useState("");
  const [cat, setCat] = useState(0);
  const [category, setCategory] = useState([]);
  const jobCount = job.length;
  const [filter, setFilter] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (filter === false) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const handleSearch = () => {
    const newJobs = userjob
      .filter((x) => x.category === (cat === "" ? x.category : String(cat)))
      .filter((y) => y.nature === (nature === "" ? y.nature : String(nature)));
    setJob(newJobs);
  };

  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <div className="d-md-flex align-items-md-center">
        <div className="h3 py-3 px-4">Job Listing</div>
        <div className="ml-auto d-flex align-items-center views">
          <span className="btn">
            {" "}
            <span className="fas fa-list-ul px-3"></span>
            <span className="px-md-2 ">List view</span>{" "}
          </span>{" "}
          <span className="green-label px-md-2 px-1">{jobCount}</span>{" "}
          <span className="text-muted">Jobs</span>{" "}
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-item">
          <div className="filters px-4">
            {" "}
            <button
              className="btn btn-success"
              type="button"
              onClick={handleClick}
            >
              Filters<span className="px-1 fas fa-filter"></span>
            </button>{" "}
          </div>
          {filter === true ? (
            <div>
              <div className="pt-3 px-4">
                <div className="col-md-4">
                  <select
                    className="form-select border-1"
                    value={cat}
                    onChange={(e) => setCat(e.target.value)}
                  >
                    <option value="">--Select Category</option>
                    {category.map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="py-3 px-4">
                <div className="col-md-4">
                  <select
                    className="form-select border-1"
                    value={nature}
                    onChange={(e) => setNature(e.target.value)}
                  >
                    <option value="">--Select Nature</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                  </select>
                </div>
              </div>
              <div className="py-1 px-4">
                <button
                  className="btn btn-primary px-3 text-center mt-3"
                  onClick={() => handleSearch()}
                >
                  Search
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="list-job">
          <div className="container py-3 bg-white">
            {job && job.length > 0
              ? job.map((value) => (
                  <ListItem
                    id={value._id}
                    title={value.title}
                    location={value.location}
                    salary={value.salary}
                    nature={value.nature}
                    dataline={value.dateline}
                  />
                ))
              : "No Job Found!"}
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
      <Footer />
    </div>
  );
}
