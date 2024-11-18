
import Content from "./model3d/content3d";
import React from "react";
import Header from "./homepagenew/components/Header";
import Footer from "./homepagenew/components/Footer";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
function Model2dpage() {
  const token = localStorage.getItem("jwtToken");
  const [isSignIn, setSignIn] = useState(false);
  const navigate = useNavigate();
  const chkSignIn = () => {
    if (token) {
      setSignIn(true);
    }
  };
  const handleClick = () => {
    navigate('/login');
  }

  useEffect(() => {
    chkSignIn();
  }, []);
  return (
    <>
      <div style={{paddingTop:'95px'}}></div>
      <Header />
      {!isSignIn && (
        <div
          className="nosigninbackground"
          style={{
            backgroundColor: "#1C2E3B",
            width: "94%",
            marginTop: "20px",
            marginBottom: "20px",
            borderRadius: "20px",
            padding: "20px",
            paddingBottom:'100px',
            position: "relative",
            zIndex: "10",
            diplay: "flex",
            marginLeft: "53px",
            marginBottom: "20px",
          }}
        >
          <div
            className="notsignedin"
            style={{
              height: "calc(100vh - 250px)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <div style={{ height: "100px" }}></div>
            <label
              className="inputinfoheading"
              style={{
                color:'#1C2E3B',
                textAlign: "center",
                fontSize: "50px",
                margin: "0px",
              }}
            >
              Please Sign In to use model
            </label>
            <div style={{ minHeight: "20%" }}></div>
            <button
              className="inputbuttons"
              style={{ marginLeft: "0px", fontSize: "20px",paddingTop:'1%',paddingBottom:'1%',alignItems:'center',height:'auto' }}
              onClick={handleClick}
            >
              Log in
            </button>
          </div>
        </div>
      )}
      {isSignIn && (
        <div class='contentbackground'style={{backgroundColor:'#1C2E3B',width:'94%',marginTop:'20px',borderRadius:'20px',padding:'20px',position:'relative',zIndex:'10',diplay:'flex',marginLeft:'53px',marginBottom:'7px'}}>
        <Content />
        </div>
      )}
      <Footer/>
    </>
  );
}
export default Model2dpage;
