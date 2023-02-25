import React, { useContext, useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import Main from "../Component/Main";
import { Store } from "../../Store";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const { state, dispatch } = useContext(Store);
  const { user } = state;
  const navigate = useNavigate();
  useEffect(()=>{
    if(user && user.isEmployer != false || user.isAdmin != false ){
      navigate('/admin')
    }else{
      navigate("/register");
    }

  },[])
  return (
    <div>
      <Nav />
      <Sidebar />

      <Main />
      <Footer />
    </div>
  );
}
