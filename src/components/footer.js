import React from "react";
import './Footer.css';
import{InstagramOutlined,TwitterOutlined,FacebookOutlined,PhoneOutlined } from "@ant-design/icons";

const Footer=()=>{
    return(
<div class='Footer-container'>
   
<div class ="Footer_words">
<h1>TRASHPAY</h1>
<div class="hr"> 
<div class ="ops" > 
<h2 >Product&Service</h2>
   <h3>Trash Collection</h3>
   <h3>Recycling From Home</h3>
   <h3>eWaste</h3>
   </div>
<div class="hr1">
<h2>Customer Support</h2>
   <h3>Pay My Bill</h3>
   <h3>Manage My Account</h3>
   <h3>Login To My Account</h3>
</div>
<div class="hr2"> 
<h2>Connect with Us</h2>
<div class="icon">
   <InstagramOutlined />
   <TwitterOutlined />
   <FacebookOutlined />
   <PhoneOutlined />
   </div>
</div>
</div>
</div>  

</div>
    )
}
export default Footer;