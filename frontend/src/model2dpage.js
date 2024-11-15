// import Navbar from "./model2d/navbar";
import Content from "./model2d/content";
import React from "react";
import Header from "./homepagenew/components/Header";

function Model2dpage() {
  return (
    <>
      {/* <div className="main-background bg-gray-500 flex flex-col min-h-screen items-center  px-4"> */}
      <Header />
      <div className="2dmodelpage pt-24">
      <Content />
       </div> 
    </>
  );
}
export default Model2dpage;
