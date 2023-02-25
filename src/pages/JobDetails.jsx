import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import com_logo_4 from "../img/com-logo-4.jpg";
import axios from "../axios";
import { Store } from "../Store";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { jobReducer } from "../JobReducer";
export default function JobDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/loginuser");
    } else {
      if (!name || !email || !subject || !message || !phone) {
        toast.success("All fields are required!");
        return;
      }
      //perform application operation
      emailjs
        .sendForm(
          "service_idakadq",
          "template_po4rf7s",
          form.current,
          "hZoE2yfKb9ClHy73Y"
        )
        .then(
          (result) => {
            toast.success("Job Application send successfully");
          },
          (error) => {
            toast.success(error.text);
          }
        );
    }
  };
  const { state } = useContext(Store);
  const { user } = state;
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [{ loading, error, jobs }, dispatch] = useReducer(jobReducer, {
    loading: true,
    jobs: [],
    error: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/myjobs/id/${id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: err,
        });
      }
    };
    fetchJobs();
    console.log(jobs);
  }, [id]);
  return (
    <div className="container-xxl bg-white p-0">
      <ToastContainer />
      <Header />
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Job Detail
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Job Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-5">
                <img
                  className="flex-shrink-0 img-fluid border rounded"
                  src={com_logo_4}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="text-start ps-4">
                  <h3 className="mb-3">{jobs.tittle}</h3>
                  <span className="text-truncate me-3">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {jobs.location}
                  </span>
                  <span className="text-truncate me-3">
                    <i className="far fa-clock text-primary me-2"></i>
                    {jobs.nature}
                  </span>
                  <span className="text-truncate me-0">
                    <i className="far fa-money-bill-alt text-primary me-2"></i>
                    {jobs.salary}
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <h4 className="mb-3">Job description</h4>
                <p>{jobs.description}</p>

                <h4 className="mb-3">Qualifications</h4>
                <p>{jobs.qualification}</p>
              </div>

              <div className="">
                <h4 className="mb-4">Apply For The Job</h4>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="user_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={jobs.email}
                        name="employer_email"
                        value={jobs.email}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        name="user_phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Coverletter"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100"
                        type="submit"
                        value="Send"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="bg-light rounded p-5 mb-4 wow slideInUp"
                data-wow-delay="0.1s"
              >
                <h4 className="mb-4">Job Summary</h4>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Published On: {jobs.createdAt}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Vacancy: {jobs.vacant} Position
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>Job
                  Nature: {jobs.nature}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Salary: {jobs.salary}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Location: {jobs.location}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Country: {jobs.country}
                </p>
                <p className="m-0">
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Date Line: {jobs.dateline}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Company Email: {jobs.email}
                </p>
              </div>

              <div
                className="bg-light rounded p-5 wow slideInUp"
                data-wow-delay="0.1s"
              >
                <h4 className="mb-4">Company Detail</h4>
                <p className="m-0">{jobs.companyInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
