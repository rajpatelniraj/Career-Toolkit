import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../axios";
import { Store } from "../../Store";
import Footer from "./Footer";
import Nav from "./Nav";
import Select from "react-select";
import Sidebar from "./Sidebar";
import countryList from "react-select-country-list";
export const Newjob = () => {
  const { state } = useContext(Store);
  const { user } = state;
  useEffect(() => {
    const categoryFetchNames = async () => {
      try {
        const result = await axios.get("/category/categories");
        setCat(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    categoryFetchNames();
  }, []);
  const date = new Date();
  const currendate = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const [tittle, setTittle] = useState("");
  const [value, setValues] = useState("");
  const [location, setLocation] = useState("");
  const [nature, setNature] = useState("");
  const [dateline, setDateLine] = useState(currendate);
  const [qualification, setQualification] = useState("");
  const [salary, setSalary] = useState("1000-2000");
  const [description, setDescription] = useState("");
  const [companyInfo, setCompanyInfo] = useState("");
  const [publish, setPublish] = useState(currendate);
  const [vacant, setVacant] = useState(0);
  const [country, setCountry] = useState("");
  const [categories, setCat] = useState([]);
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState("");
  const option = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();

  //store jop
  const addJob = async (e) => {
    e.preventDefault();
    if (
      !tittle ||
      !location ||
      !email ||
      !qualification ||
      !dateline ||
      !country ||
      !categories ||
      !companyInfo ||
      !salary ||
      !description ||
      !vacant ||
      !nature
    ) {
      toast.success("All Informations are required!");
      return;
    }
    try {
      await axios.post(
        "/myjobs/jobs/add",
        {
          tittle,
          nature,
          dateline,
          location,
          qualification,
          description,
          salary,
          companyInfo,
          publish,
          vacant,
          country,
          category,
          email,
         
        },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      toast.success("Job created successfully");
    } catch (error) {
      console.log(error.message);
      toast.success("Error Saving Job Try again!");
    }
  };

  const handleChange = (value) => {
    setValues(value);
    setCountry(value.label);
  };
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>New jobs</title>
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
          <div>
            <h1>New Job</h1>
            <form
              name="form"
              className="addCatForm"
              encType="multipart/form-data"
              method="POST"
              onSubmit={addJob}
            >
              <div className="form-group">
                <label className="form-label">Tittle</label>
                <input
                  type="text"
                  name="cat"
                  onChange={(e) => setTittle(e.target.value)}
                  placeholder="Software Engineering"
                  value={tittle}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Newyork - USA"
                  value={location}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Salary Range</label>
                <input
                  type="text"
                  name="salary"
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="salary"
                  value={salary}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Dateline</label>
                <input
                  type="date"
                  name="dateline"
                  onChange={(e) => setDateLine(e.target.value)}
                  placeholder={currendate}
                  value={dateline}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Vacant Positions</label>
                <input
                  type="number"
                  name="vacant"
                  onChange={(e) => setVacant(e.target.value)}
                  placeholder="salary"
                  value={vacant}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  value={email}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2">
                <label className="form-label">Option</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="inputGroupSelect01"
                  onChange={(e) => setNature(e.target.value)}
                  value={nature}
                >
                  <option selected>Select...</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-time">Part-Time</option>
                </select>
              </div>

              <div className="form-group my-2">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="inputGroupSelect01"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option selected>Select...</option>
                  {categories.map((item) => (
                    <option value={item.name}>{item.name}</option>
                  ))}
                </select>
              </div>
              <label className="form-label">Country</label>
              <Select options={option} value={value} onChange={handleChange} />
              <div className="mb-3">
                <label className="form-label">Company Info</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={companyInfo}
                  onChange={(e) => setCompanyInfo(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Job Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Qualification</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                ></textarea>
              </div>

              <button className="btn btn-primary my-2" type="submit">
                Create Job
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
