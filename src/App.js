import React from "react";
// import './App.css';
import './index.css';
import SideBar from "./component/Pages/NavBar/SideBar";
import Middle from "./component/Pages/SearchBar/Middle";
import { Outlet } from "react-router-dom";

function App() {
  return ( <>
    {/* <div className="container">
       <SideBar/>
       <Outlet/>  
    </div> */}
    <div className="middle">
    
    <Middle/>
    </div>
    
  </>
  );
}
export default App;