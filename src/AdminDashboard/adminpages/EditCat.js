import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../axios";

import Footer from "../Component/Footer";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";

export const EditCat = () => {

  const params = useParams();
  const { cat, id } = params;
  const value = String(id);
  const [name, setCat] = useState("");
  const updateCat = async (e) => {
    e.preventDefault();
    if (!name) {
      toast.success("Category name is required!");
      return;
    }
    try {
      await axios.put(`/category/cat/${value}`, {
        name,
      });
      toast.success("Category updated successfully");
    } catch (error) {
      console.log(error.message);
      toast.success("Error updating Category Try again!");
    }
  };
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Edit Categories</title>
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
            <h1>Edit Category</h1>
            <form
              name="form"
              className="addCatForm"
              encType="multipart/form-data"
              method="POST"
              onSubmit={updateCat}
            >
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="cat"
                  onChange={(e) => setCat(e.target.value)}
                  placeholder={String(cat)}
                  value={name}
                  className="form-control"
                />
              </div>

              <button className="btn btn-primary my-2" type="submit">
                Edit Category
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
