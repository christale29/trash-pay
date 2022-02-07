import React from "react";
import "./homelayout.css";
import Header from "../components/header";




const Home = ({ children }) => {
    return (
        <div className="home-container">
          
            <div style={{minHeight: "100vh"}}>
            <Header />
            
            {children}
            </div>
        </div>
    )
}
export default Home;
