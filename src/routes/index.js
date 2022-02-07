import React from "react";
import PaymentInformation from "../views/PayINF"
import { Routes, Route, useLocation } from "react-router-dom"

const Index=()=>{
    return (
      
            <Routes>
            <Route exact path="/PaymentInformation" element={<PaymentInformation/>}></Route>
            </Routes>

       
    )
}


export default Index;