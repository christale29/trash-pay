import React from "react"
import logo from './logo.svg';
import './App.css';
import PaymentInformation from './views/PayINF';
import{BrowserRouter as Router} from "react-router-dom"
import Routes from "./routes";



  function App() {
    return <Router>
  
  <Routes/>
    
    </Router>
      
  }

export default App;
