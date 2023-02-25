import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { ToastContainer, toast } from "react-toastify";
import axios from "../axios";
export default function LoginUser() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(Store);
 const handleClick = async () => {
  if (!email || !password) {
    toast.success("All form fields are required!");
    return;
  }
   try {
     const { data } = await axios.post("/users/signin", {
       email,
       password,
     });
     
     dispatch({ type: "SIGNIN_USER", payload: data });
     localStorage.setItem("user", JSON.stringify(data));
     navigate("/");
   } catch (error) {
    console.log(error.message)
     toast.success("Invalid Email or Password");
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
                      Login To Your Account
                    </h2>

                    <form>
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
                      <div className="d-flex justify-content-center mb-3">
                        <p className="text-bold">
                          <a href="#!" className="text-body">
                            <u>Forgot Password</u>
                          </a>
                        </p>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          onClick={handleClick}
                          className="btn btn-primary py-3 px-5 text-center"
                        >
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Do not have an account?{" "}
                        <a href="/registeruser" className="fw-bold text-body">
                          <u>Register here</u>
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
