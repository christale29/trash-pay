import React from "react";
import Homelayout from "../components/homelayout"
import Header from "../components/header"
import "../components/homelayout.css";
import Nav from "../components/nav"

const PaymentInformation=()=>{
    return(
        <div className="home-page">
             <Homelayout>

             <div className="home-card">
             <h3>“House cleaning and organizing is a practice, not a project.”</h3>
           
             </div>
             <button className="button"><a href="#">Pay Now</a></button>
            
             </Homelayout>

        </div>
       
    
       
       
    )
}
export default PaymentInformation;