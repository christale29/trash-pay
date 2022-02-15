import React from "react";
import PaymentInformation from "../views/PayINF"

import QRCode from "../components/qrCode";

import RegHouse from "../components/RegHouse";
import JustifyPay from "../components/justifyPay";

import DashboardLayout from "../components/DashboardLayout";
import AllUsers from "../components/tableGetAllUsers"
import { Routes, Route, useLocation } from "react-router-dom"

const Index=()=>{
    return (
      
            <Routes>
            <Route exact path="/PaymentInformation" element={<PaymentInformation/>}></Route>

            <Route exact path="/QRcode" element={<QRCode/>}></Route>

            <Route exact path="/RegHouse" element={<RegHouse/>}></Route>

            <Route exact path="/JustifyPay" element={<JustifyPay/>}></Route>

            <Route exact path="/Dashboard" element={<DashboardLayout/>}></Route>
            <Route exact path="/allUsers" element={<AllUsers/>}></Route>

            </Routes>

       
    )
}


export default Index;