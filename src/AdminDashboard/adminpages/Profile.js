import React, { useContext, useState } from "react";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Store } from "../../Store";
import profile from "../../img/login.png";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const { state } = useContext(Store);
  const { user } = state;
const navigate = useNavigate()
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState("");

  const handleSubmit = async () =>{
    if(!name || !password || !email){
        toast.success('All form fields are required')
        return;
    }
   try {
    await axios.put(
      "/users/profile",
      {
        name,
        email,
        password,
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    toast.success('User updated successfully');
    navigate('/login')
   } catch (error) {
    console.log(error.message)
    toast.success(error.message)
    
   }
    
  }
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>profile</title>
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

        <div className="pagetitle">
          <h1>Profile</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Users</li>
              <li className="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>

        <section className="section profile">
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img src={profile} alt="Profile" className="rounded-circle" />
                  <h2>{user ? user.name : ""}</h2>
                  <h3>{user ? user.email : ""}</h3>
                  <div className="social-links mt-2">
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Overview
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Edit Profile
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-settings"
                      >
                        Settings
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 className="card-title">About</h5>

                      <h5 className="card-title">Profile Details</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">
                          Full Name
                        </div>
                        <div className="col-lg-9 col-md-8">{user.name}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Company</div>
                        <div className="col-lg-9 col-md-8">Career Toolkit</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Email</div>
                        <div className="col-lg-9 col-md-8">{user.email}</div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade profile-edit pt-3"
                      id="profile-edit"
                    >
                      <form>
                        <div className="row mb-3">
                          <label className="col-md-4 col-lg-3 col-form-label">
                            Full Name
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="fullName"
                              type="text"
                              className="form-control"
                              placeholder={user ? user.name : "username"}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-md-4 col-lg-3 col-form-label">
                            Email
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="email"
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder={user ? user.email : "email"}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="newPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              className="form-control"
                              id="newPassword"
                              placeholder="new password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                          >
                            Update Account
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="tab-pane fade pt-3" id="profile-settings">
                      <form>
                        <div className="row mb-3">
                          <label
                            for="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email Notifications
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="changesMade"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="changesMade"
                              >
                                Changes made to your account
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="newProducts"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="newProducts"
                              >
                                Information on new products and services
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="proOffers"
                              />
                              <label
                                className="form-check-label"
                                for="proOffers"
                              >
                                Marketing and promo offers
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="securityNotify"
                                checked
                                disabled
                              />
                              <label
                                className="form-check-label"
                                for="securityNotify"
                              >
                                Security alerts
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
