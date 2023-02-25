import React, { useContext, useReducer } from "react";
import CategoryItem from "./CategoryItem";
import {Store} from '../Store'
import axios from "../axios";
import {CategoryReducer} from '../CategoryReducer'
import { useEffect } from "react";
export default function AllCatagories() {
  const {state} = useContext(Store)
  const {user} = state;
  const [{ loading, error, category}, dispatch] =
    useReducer(CategoryReducer, {
      loading: true,
      category: [],
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
      fetchData();
    
  }, []);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          Explore By Category
        </h1>
        <div className="row g-4">
          {category.map((item, key) => (
            <CategoryItem
              name={item.name}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
