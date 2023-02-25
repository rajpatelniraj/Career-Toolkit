import React, { useContext, useEffect, useReducer, useState } from "react";
import { jobReducer } from "../../JobReducer";
import axios from "../../axios";
import { toast, ToastContainer } from "react-toastify";
import "./main.css";
import { Store } from "../../Store";
export default function Main() {
  const [category, setCategory] = useState([]);
  const [users, setUsers] = useState([]);
  const { state } = useContext(Store);
  const { user } = state;
  const [{ loading, jobs, error }, dispatch] = useReducer(jobReducer, {
    jobs: [],
    loading: true,
    error: "",
  });
  const jobCount = jobs.length;
  const categoryCount = category.length;
  const usersCount = users.length;
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
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`/users`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setUsers(data);
      } catch (err) {
        toast.success("users not found!");
      }
    };
    fetchUsers();
  }, []);

   const deleteHandler = async (item) => {
     if (window.confirm("Are you sure to delete?")) {
       try {
         await axios.delete(`/users/${item._id}`, {
           headers: { authorization: `Bearer ${user.token}` },
         });
         toast.success("User deleted successfully");
         
       } catch (error) {
         toast.success("Fail to delete");
         
       }
     }
   };
  return (
    <main id="main" className="main">
      <ToastContainer />
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
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Jobs <span>| Today</span>
                    </h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{jobCount}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Categories <span>| This Month</span>
                    </h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{categoryCount}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Users <span>| This Year</span>
                    </h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{usersCount}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card recent-sales overflow-auto">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Recent Users <span>| Today</span>
                    </h5>

                    <table className="table table-borderless datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((item, key) => (
                          <tr key={item._id}>
                            <th scope="row">
                              <a href="#">#2457</a>
                            </th>
                            <td>{item.name}</td>
                            <td>
                              <a href="#" className="text-primary">
                                {item.email}
                              </a>
                            </td>
                            <td>
                              <button
                                type="button"
                                variant="danger"
                                className="btn btn-danger"
                                disabled={user.isAdmin === false}
                                onClick={() => deleteHandler(item)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-body pb-0">
                <h5 className="card-title">
                  News &amp; Updates <span>| Today</span>
                </h5>

                <div className="news">
                  <div className="post-item clearfix">
                    <img src="assets/img/news-5.jpg" alt="" />
                    <h4>
                      <a href="#">tittle</a>
                    </h4>
                    <p>
                      Comming soon.....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
