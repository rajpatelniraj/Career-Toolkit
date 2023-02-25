import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
export default function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmployer, setisEmployer] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleClick = async() => {
    if (!name || !email || !password) {
      toast.success("All form fields are required!");
      return;
    }
    try {
      const { data } = await axios.post("/users/signup", {
        name,
        email,
        password,
        isEmployer,
      });
      console.log(data);
       navigate("/loginuser");
    } catch (error) {
      toast.success(error.message)
      
    }
  };
  return (
    <div className="container-xxl bg-white p-0 login">
      <ToastContainer/>
      <Header />
      <section className="mt-5">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2
                      className="text-center mb-5"
                      style={{ fontSize: "18px" }}
                    >
                      Create Your TheEmployer Account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Your Name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          placeholder="Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="Your Password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary py-3 px-5 text-center"
                          onClick={handleClick}
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Already have an account?{" "}
                        <a href="/loginuser" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
