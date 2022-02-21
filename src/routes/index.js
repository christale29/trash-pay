import React from "react";
import PaymentInformation from "../views/PayINF"

import QRCode from "../components/qrCode";
import NewHouse from '../views/dashboard/Newhouse';
import RegHouse from "../components/RegHouse";
import JustifyPay from "../components/justifyPay";
import ALLHOUSE from "../views/dashboard/AllHouse";
import DashLayout from '../components/dashboardLayout';
import AllUsers from "../components/tableGetAllUsers"
import { Routes, Route, useLocation } from "react-router-dom";
import UserDashboard from "../views/userDashboard";

const isUserLoggedIn=localStorage.getItem('userLogedIn')
const Index=()=>{
    const currentUrl=useLocation.pathname;
    return (
               <>
            <Routes>
            <Route exact path="/" element={<PaymentInformation/>}></Route>

            <Route exact path="/QRcode" element={<QRCode/>}></Route>

            <Route exact path="/RegHouse" element={<RegHouse/>}></Route>

            <Route exact path="/JustifyPay" element={<JustifyPay/>}></Route>

            
            <Route exact path="/allUsers" element={<AllUsers/>}></Route>
            <Route exact path="/dash" element={<DashLayout/>}></Route>
            <Route exact path="/user/board" element={<UserDashboard/>}></Route>
            <Route  exact path ='/dash/house' element ={<ALLHOUSE></ALLHOUSE>}> </Route>
            <Route  exact path ='/dash/register' element ={<NewHouse></NewHouse>}> </Route> 
            </Routes>
   {isUserLoggedIn && currentUrl.includes('dash')?(
 <DashLayout>
<Routes>




</Routes>
</DashLayout>  

 ):(
 <> </>            
    )
 }
 </>
    )
}


export default Index;