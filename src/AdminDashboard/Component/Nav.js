import React, { useContext } from "react";
import "./nav.css";
import profile from '../../img/login.png'
import { Store } from "../../Store";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const {state, dispatch} = useContext(Store);
  const {user} = state;
  const navigate = useNavigate();
  const handleLogOut = (event) => {
    event.preventDefault();
    dispatch({ type: "USER_SIGNOUT" });
    //remove user info from user storage
    localStorage.removeItem("user");
    navigate('/')
    
  };
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="/dashbord" className="logo d-flex align-items-center">
            <span className="d-none d-lg-block">TheEmployer</span>
          </a>
        </div>

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-list toggle-sidebar-btn"></i>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="nav-item">
                  <a className="nav-link " href="/admin">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="nav-heading px-4">Pages</li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="nav-item">
                  <a className="nav-link collapsed" href="/newjob">
                    <i className="bi bi-question-circle px-2"></i>
                    <span>New Jobs</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="nav-item">
                  <a className="nav-link collapsed" href="/adminjobs">
                    <i className="bi bi-envelope px-2"></i>
                    <span>Job List</span>
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                {user && user.isAdmin === true ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link collapsed" href="/adminnewcat">
                        <i className="bi bi-file-earmark px-2"></i>
                        <span>New Category</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </>
                ) : (
                  ""
                )}
                {user && user.isAdmin === true ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link collapsed" href="/alljob">
                        <i className="bi bi-file-earmark px-2"></i>
                        <span>All Jobs</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </>
                ) : (
                  ""
                )}

                <li className="nav-item">
                  <a className="nav-link collapsed" href="/admincat">
                    <i className="bi bi-file-earmark px-2"></i>
                    <span>Categories</span>
                  </a>
                </li>
                
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li onClick={handleLogOut}>
                  <a
                    className="dropdown-item d-flex align-items-center px-4"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Log Out</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0 flex-column px-"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img src={profile} alt="Profile" className="rounded-circle" />
                <span className="d-md-block dropdown-toggle ps-2">
                  {user ? user.email : ""}
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{user ? user.name : ""}</h6>
                  <span>{user ? user.email : ""}</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/profile"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/profile"
                  >
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li onClick={handleLogOut}>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
