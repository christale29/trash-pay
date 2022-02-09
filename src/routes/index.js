import React from "react";
import PaymentInformation from "../views/PayINF"
import QRCode from "../components/qrCode";
import { Routes, Route, useLocation } from "react-router-dom"

const Index=()=>{
    return (
      
            <Routes>
            <Route exact path="/PaymentInformation" element={<PaymentInformation/>}></Route>
            <Route exact path="/QRcode" element={<QRCode/>}></Route>
            </Routes>

       
    )
}


export default Index;