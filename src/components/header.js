import React from "react";
import "./header.css"
import logo from "../asset/img/ikirangantego.png"
import logo2 from "../asset/img/trash.png"



const Header=()=>{
    return(
    
    <div className="header">
        <div className="navbar">
            <div className="nav-logo-left">
                 <img src={logo}/>

            </div>
            <div className="nav-logo-right">
                <img src={logo2}/>

            </div>
            <div id="google_translate_element"></div>
               
                </div>
                
             
    </div>
    
    )

}
export default Header;