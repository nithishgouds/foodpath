// import Navbar from "./model2d/navbar";
import Content from "./model2d/content";
import React from "react";
import Header from "./homepagenew/components/Header";
import Footer from './homepagenew/components/Footer';
import './App.css'

function Model2dpage() {
  return (
    <>
      <div style={{paddingTop:'95px'}}></div>
      <Header />
      <div className="contentbackground" style={{backgroundColor:'#1C2E3B',width:'94%',marginTop:'20px',marginBottom:'20px',borderRadius:'20px',padding:'20px',position:'relative',zIndex:'10',diplay:'flex',marginLeft:'53px',marginBottom:'20px'}}>
      <Content />
      </div>
      <Footer/>
    </>
  );
}
export default Model2dpage;
