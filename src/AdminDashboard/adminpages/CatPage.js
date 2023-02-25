import React, { useContext, useEffect, useReducer } from "react";
import Footer from "../Component/Footer";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import { CategoryReducer } from "../../CategoryReducer";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import Spiner from "../../components/Spiner";
import axios from "../../axios";
import { Helmet } from "react-helmet-async";
export const CatPage = () => {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { user } = state;
  const [{ loading, error, category, loadingDelete, successDelete }, dispatch] =
    useReducer(CategoryReducer, {
      loading: true,
      error: "",
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/category/categories`);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: err,
        });
      }
    };
    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [user, successDelete]);
   const deleteHandler = async (cat) => {
     if (window.confirm("Are you sure to delete?")) {
       try {
         dispatch({ type: "DELETE_REQUEST" });
         await axios.delete(`/category/cat/${cat._id}`, {
           headers: { authorization: `Bearer ${user.token}` },
         });
         toast.success("Category deleted successfully");
         dispatch({ type: "DELETE_SUCCESS" });
       } catch (error) {
         toast.success('Fail to delete');
         dispatch({
           type: "DELETE_FAIL",
         });
       }
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
          {loading ? (
            <Spiner />
          ) : error ? (
            toast.success(error)
          ) : (
            <>
              {user && user.isAdmin === true ? (
                <div className="container">
                  <Link to="/adminnewcat">
                    <button className="btn btn-primary">Add New</button>
                  </Link>
                </div>
              ) : (
                ""
              )}

              <div className="data-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>ACTIONS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((cat) => (
                      <tr key={cat._id}>
                        <td>No.c</td>
                        <td>{cat.name}</td>
                        <td>
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            className="btn btn-secondary"
                            disabled={user.isAdmin === false}
                            onClick={() => navigate(`/editcat/${cat.name}/${cat._id}`)}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            variant="danger"
                            className="btn btn-danger"
                            disabled={user.isAdmin === false}
                            onClick={() => deleteHandler(cat)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};
