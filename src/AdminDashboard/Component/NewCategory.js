import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../axios";
import { Store } from "../../Store";
import Footer from "./Footer";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export const NewCategory = () => {
  const { state } = useContext(Store);
  const { user } = state;
  const [name, setCat] = useState("");
  const navigate = useNavigate();
  const addCat = async (e) => {
    e.preventDefault();
    if(!name){
        toast.success('Category name is required!')
        return;
    }
    try {
        await axios.post("/category/cats/add", {
      name,
    });
     toast.success("Category save successfully");
        
    } catch (error) {
        console.log(error.message)
        toast.success('Error Saving Category Try again!')
    }
    
  };
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Categories</title>
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
            <h1>New Category</h1>
            <form
              name="form"
              className="addCatForm"
              encType="multipart/form-data"
              method="POST"
              onSubmit={addCat}
            >
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="cat"
                  onChange={(e) => setCat(e.target.value)}
                  placeholder="Software Engineering"
                  value={name}
                  className="form-control"
                 
                />
              </div>

              <button className="btn btn-primary my-2" type="submit">
                Create Category
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
