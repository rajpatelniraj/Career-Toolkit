import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import "./sidebar.css";
export default function Sidebar() {
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
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="#">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="/profile">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="/newjob">
            <i className="bi bi-question-circle"></i>
            <span>New Jobs</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="/adminjobs">
            <i className="bi bi-envelope"></i>
            <span>Job List</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/admincat">
            <i className="bi bi-file-earmark"></i>
            <span>Categories</span>
          </a>
        </li>
        {user && user.isAdmin === true ? (
          <>
            <li className="nav-item">
              <a className="nav-link collapsed" href="/adminnewcat">
                <i className="bi bi-file-earmark"></i>
                <span>New Category</span>
              </a>
            </li>
          </>
        ) : (
          ""
        )}
        {user && user.isAdmin === true ? (
          <>
            <li className="nav-item">
              <a className="nav-link collapsed" href="/alljob">
                <i className="bi bi-file-earmark"></i>
                <span>All Jobs</span>
              </a>
            </li>
          </>
        ) : (
          ""
        )}
       

        <li className="nav-item" onClick={handleLogOut}>
          <a className="nav-link collapsed" href="#">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
