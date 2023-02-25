import React, { useContext, useEffect, useReducer, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import axios from '../axios';
import ListItem from '../components/ListItem';
import Spiner from '../components/Spiner';
import { Store } from '../Store';
import {toast, ToastContainer} from 'react-toastify'
import { jobReducer } from '../JobReducer';
export default function FilteListCat() {
      const params = useParams();
      const {name} = params;
      const { state } = useContext(Store);
      const { user } = state;
      const [{ loading, error, jobs }, dispatch] = useReducer(jobReducer, {
        loading: true,
        jobs: [],
        error: "",
      });

      useEffect(() => {
        const fetchJobs = async () => {
          try {
            dispatch({ type: "FETCH_REQUEST" });
            const { data } = await axios.get(`/myjobs/jobs/category/${name}`);
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
      }, [name]);
      
  return (
    <div className="container-xxl bg-white p-0">
      <ToastContainer />
      <Header />

      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Job List
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
                Job List
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <h1 className="display-3 text-center mb-3 animated slideInDown">
        {String(name)}
      </h1>
      {loading ? (
        <Spiner />
      ) : error ? (
        toast.success("An error occured while fetching data")
      ) : jobs && jobs.length > 0 ? (
        jobs.map((value, key) => (
          <ListItem
            id={value._id}
            title={value.title}
            location={value.country}
            salary={value.salary}
            nature={value.nature}
            dataline={value.dateline}
          />
        ))
      ) : (
        <h4
          className="display-3  text-center mb-3 animated slideInDown"
          style={{ fontSize: "17px" }}
        >
          Oops! No job Found for this category
        </h4>
      )}

      {}

      <Footer />
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
