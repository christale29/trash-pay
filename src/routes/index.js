import React from "react";
import Home from "../views/home";
import { Routes, Route, useLocation } from "react-router-dom"





const Index = () => {
    const currentUrl = useLocation().pathname
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>





        </>
    )
}


export default Index;