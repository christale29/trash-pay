import React from "react";
import PaymentInformation from "../views/PayINF"

import RegHouse from "../components/RegHouse"
import QRCode from "../components/qrCode";
import NewHouse from "../views/dashboard/Newhouse"
import ALLHOUSE from "../views/dashboard/AllHouse"
import Login from "../views/dashboard/Login"
import JustifyPay from "../components/justifyPay";
import DashboardLayout from "../components/DashboardLayout";

import Login from '../views/dashboard/Login';
import QRCode from "../components/qrCode";
import NewHouse from '../views/dashboard/Newhouse';
import RegHouse from "../components/RegHouse";
import JustifyPay from "../components/justifyPay";
import ALLHOUSE from "../views/dashboard/AllHouse";
import DashboardLayout from '../components/DashboardLayout';

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
           
            <Route exact path="/user/board" element={<UserDashboard/>}></Route>

            
            <Route exact path="/allUsers" element={<AllUsers/>}></Route>


            
            </Routes>
            {isUserLoggedIn && currentUrl.includes('dash')?(
                 <DashboardLayout>
                 <Routes>
                 <Route  exact path ='/dash/house' element ={<ALLHOUSE></ALLHOUSE>}> </Route> 
                 <Route  exact path ='/dash/register' element ={<NewHouse></NewHouse>}> </Route>
                 <Route  exact path ='/dash/login' element ={<Login></Login>}> </Route>
                 
                 </Routes>
                 </DashboardLayout>

           

           

           

       
            
           
          
           
  


            <Route exact path="/dash" element={<DashboardLayout/>}></Route>
            <Route exact path="/user/board" element={<UserDashboard/>}></Route>
            </Routes>
   {isUserLoggedIn && currentUrl.includes('dash')?(
 <DashboardLayout>
<Routes>
<Route  exact path ='/dash/house' element ={<ALLHOUSE></ALLHOUSE>}> </Route> 
<Route  exact path ='/dash/register' element ={<NewHouse></NewHouse>}> </Route>
<Route  exact path ='/dash/login' element ={<Login></Login>}> </Route>

</Routes>
</DashboardLayout>


 ):(
 <> </>            
    )
 }
 </>
    )
}


export default Index;