import React from "react";
import "./homelayout.css";
import Footer from"./footer";
import Header from "../components/header";
import Nav from "../components/nav"




const Homelayout = ({ children }) => {
    return (
        <div className="home-container">
          
            <div style={{minHeight: "100vh"}}>

            <Header />
            <Nav/>
            
            {children}
            </div>
            <Footer/>
        </div>
    )
}
export default Homelayout;
